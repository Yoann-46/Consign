// Vercel Serverless Function — GET /api/admin/stats?days=30
// Protected by middleware.ts (Basic Auth). Computes daily occupancy rate
// and rental count from locker_snapshots.

import { getSql, ensureSchema } from '../../lib/db.ts';

interface VercelRequest {
  query: Record<string, string | string[] | undefined>;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');

  const daysParam = req.query.days;
  const days = Math.min(Math.max(Number(Array.isArray(daysParam) ? daysParam[0] : daysParam) || 30, 1), 90);

  try {
    await ensureSchema();
    const sql = getSql();

    const occupancy = await sql`
      SELECT
        date_trunc('day', captured_at) AS day,
        COUNT(*) FILTER (WHERE status IN ('reserved', 'overtime')) AS occupied,
        COUNT(*) AS total
      FROM locker_snapshots
      WHERE captured_at >= now() - (${days} || ' days')::interval
      GROUP BY 1
      ORDER BY 1
    `;

    const rentals = await sql`
      SELECT date_trunc('day', first_seen) AS day, COUNT(*) AS rentals
      FROM (
        SELECT reservation_id, MIN(captured_at) AS first_seen
        FROM locker_snapshots
        WHERE reservation_id IS NOT NULL
        GROUP BY reservation_id
      ) t
      WHERE first_seen >= now() - (${days} || ' days')::interval
      GROUP BY 1
      ORDER BY 1
    `;

    const totals = await sql`
      SELECT
        COUNT(*) FILTER (WHERE status IN ('reserved', 'overtime')) AS occupied,
        COUNT(*) AS total,
        (SELECT COUNT(DISTINCT reservation_id) FROM locker_snapshots
         WHERE reservation_id IS NOT NULL AND captured_at >= now() - (${days} || ' days')::interval) AS rentals
      FROM locker_snapshots
      WHERE captured_at >= now() - (${days} || ' days')::interval
    `;

    const daily = occupancy.map((row: any) => {
      const rentalRow = rentals.find(
        (r: any) => new Date(r.day).toDateString() === new Date(row.day).toDateString()
      );
      return {
        date: row.day,
        occupancyRate: row.total > 0 ? Math.round((row.occupied / row.total) * 1000) / 10 : 0,
        rentals: rentalRow ? Number(rentalRow.rentals) : 0,
      };
    });

    const t = totals[0];
    res.status(200).json({
      periodDays: days,
      occupancyRate: t.total > 0 ? Math.round((t.occupied / t.total) * 1000) / 10 : 0,
      totalRentals: Number(t.rentals),
      daily,
    });
  } catch (err) {
    console.error('admin stats error', err);
    res.status(500).json({ error: 'Internal error computing stats' });
  }
}
