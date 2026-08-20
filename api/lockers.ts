// Vercel Serverless Function — GET /api/lockers
// Public, read-only locker availability for the /lockers page.
//
// Intentionally returns aggregate counts only — no locker id, size, or
// reservation end time. Per-locker detail would let anyone watching the
// page infer which specific locker holds a bag and when it frees up.

import { fetchRawLockers, mapLocker } from '../lib/bobnet';

interface VercelRequest {
  method?: string;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');

  try {
    const raw = await fetchRawLockers();
    const mapped = raw.map(mapLocker);
    const available = mapped.filter((l) => l.status === 'available').length;

    res.status(200).json({
      total: mapped.length,
      available,
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('lockers API error', err);
    res.status(500).json({ error: 'Internal error fetching locker availability' });
  }
}
