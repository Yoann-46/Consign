// Neon Postgres client (Vercel's native Postgres storage today runs on Neon).
// Reads the connection string Vercel injects when the database is connected
// to the project — DATABASE_URL (Neon default) or POSTGRES_URL (legacy name
// some Vercel integrations still use).

import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

let client: NeonQueryFunction<false, false> | null = null;

// Lazy singleton: throwing here happens inside the handler's try/catch
// (module-load-time throws would otherwise surface as an opaque crash
// instead of our JSON error response).
export function getSql(): NeonQueryFunction<false, false> {
  if (!client) {
    const url = process.env.DATABASE_URL ?? process.env.POSTGRES_URL;
    if (!url) {
      throw new Error('Missing DATABASE_URL / POSTGRES_URL env var');
    }
    client = neon(url);
  }
  return client;
}

export async function ensureSchema() {
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
}
