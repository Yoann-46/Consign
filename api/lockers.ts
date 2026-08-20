// Vercel Serverless Function — GET /api/lockers
// Public, read-only locker availability for the /lockers page.

import { fetchRawLockers, mapLocker } from '../lib/bobnet.ts';

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
    const lockers = raw.map(mapLocker);
    res.status(200).json({ lockers, updatedAt: new Date().toISOString() });
  } catch (err) {
    console.error('lockers API error', err);
    res.status(500).json({ error: 'Internal error fetching locker availability' });
  }
}
