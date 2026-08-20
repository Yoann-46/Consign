// Vercel Cron — runs once daily at 19:00 UTC / ~20-21h Paris (see vercel.json;
// the Hobby plan caps cron jobs at 1 run/day), writes one row per locker
// into locker_snapshots so /api/admin/stats can compute occupancy over time.

import { fetchRawLockers, mapLocker } from '../../lib/bobnet.ts';
import { getSql, ensureSchema } from '../../lib/db.ts';

interface VercelRequest {
  headers: Record<string, string | string[] | undefined>;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Vercel Cron sends `Authorization: Bearer $CRON_SECRET` automatically
  // when CRON_SECRET is set as an env var — this rejects any other caller.
  const expected = process.env.CRON_SECRET;
  const auth = req.headers['authorization'];
  if (expected && auth !== `Bearer ${expected}`) {
    res.status(401).json({ error: 'Unauthorized' });
    return;
  }

  try {
    await ensureSchema();
    const sql = getSql();

    const raw = await fetchRawLockers();
    const capturedAt = new Date();

    for (const locker of raw) {
      const mapped = mapLocker(locker);
      await sql`
        INSERT INTO locker_snapshots (locker_id, category, status, reservation_id, captured_at)
        VALUES (
          ${mapped.id},
          ${locker.category ?? null},
          ${mapped.status},
          ${locker.activeReservation?.id ?? null},
          ${capturedAt.toISOString()}
        )
      `;
    }

    res.status(200).json({ ok: true, count: raw.length, capturedAt: capturedAt.toISOString() });
  } catch (err) {
    console.error('snapshot-lockers cron error', err);
    res.status(500).json({ error: 'Internal error capturing locker snapshot' });
  }
}
