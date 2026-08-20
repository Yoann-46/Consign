// Vercel Cron — runs once daily at 19:00 UTC / ~20-21h Paris (see vercel.json;
// the Hobby plan caps cron jobs at 1 run/day), writes one row per locker
// into locker_snapshots so /api/admin/stats can compute occupancy over time.
//
// Self-contained on purpose — importing shared logic from a top-level lib/
// directory caused FUNCTION_INVOCATION_FAILED crashes on Vercel for
// /api/lockers, so each function duplicates the small amount of Bobnet/DB
// glue it needs instead.

import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

interface VercelRequest {
  headers: Record<string, string | string[] | undefined>;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  json(body: unknown): void;
}

interface BobnetTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface BobnetLocker {
  id: number;
  alias?: string;
  enabled: boolean;
  activeReservation: { id: number; isOverdue: boolean } | null;
  category?: string;
}

const PLATFORM_TOKEN_URL = 'https://platform.bobnet.tech/oauth/token';
const BNCD_API_BASE = 'https://bncd.bobnet.tech';
const STORAGE_ID = process.env.BOBNET_STORAGE_ID ?? '370';
const SCOPE = 'bncd:storage:read';

let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string> {
  if (cachedToken && cachedToken.expiresAt > Date.now()) {
    return cachedToken.value;
  }

  const clientId = process.env.BOBNET_CLIENT_ID;
  const clientSecret = process.env.BOBNET_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error('Missing BOBNET_CLIENT_ID / BOBNET_CLIENT_SECRET env vars');
  }

  const res = await fetch(PLATFORM_TOKEN_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      scope: SCOPE,
    }),
  });

  if (!res.ok) {
    throw new Error(`Bobnet token request failed: ${res.status}`);
  }

  const data = (await res.json()) as BobnetTokenResponse;
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return cachedToken.value;
}

function statusOf(locker: BobnetLocker): string {
  if (!locker.enabled) return 'blocked';
  if (!locker.activeReservation) return 'available';
  if (locker.activeReservation.isOverdue) return 'overtime';
  return 'reserved';
}

let sqlClient: NeonQueryFunction<false, false> | null = null;

function getSql(): NeonQueryFunction<false, false> {
  if (!sqlClient) {
    const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
    if (!url) {
      throw new Error('Missing DATABASE_URL / POSTGRES_URL env var');
    }
    sqlClient = neon(url);
  }
  return sqlClient;
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
    const sql = getSql();
    await sql`
      CREATE TABLE IF NOT EXISTS locker_snapshots (
        id SERIAL PRIMARY KEY,
        locker_id TEXT NOT NULL,
        category TEXT,
        status TEXT NOT NULL,
        reservation_id INTEGER,
        captured_at TIMESTAMPTZ NOT NULL DEFAULT now()
      )
    `;
    await sql`
      CREATE INDEX IF NOT EXISTS idx_locker_snapshots_captured_at
        ON locker_snapshots (captured_at)
    `;

    const token = await getAccessToken();
    const lockersRes = await fetch(`${BNCD_API_BASE}/storages/${STORAGE_ID}/lockers/`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (!lockersRes.ok) {
      res.status(lockersRes.status).json({ error: 'Failed to fetch lockers from Bobnet' });
      return;
    }
    const raw = (await lockersRes.json()) as BobnetLocker[];
    const capturedAt = new Date();

    for (const locker of raw) {
      await sql`
        INSERT INTO locker_snapshots (locker_id, category, status, reservation_id, captured_at)
        VALUES (
          ${locker.alias ?? String(locker.id)},
          ${locker.category ?? null},
          ${statusOf(locker)},
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
