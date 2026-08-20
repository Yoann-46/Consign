// Vercel Serverless Function — GET /api/lockers
// Public, read-only locker availability for the /lockers page.
//
// Intentionally returns aggregate counts only — no locker id, size, or
// reservation end time. Per-locker detail would let anyone watching the
// page infer which specific locker holds a bag and when it frees up.
//
// Self-contained on purpose (no import from lib/bobnet) to rule out a
// bundling issue with shared modules — see git history for context.

interface VercelRequest {
  method?: string;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
}

interface BobnetTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface BobnetLocker {
  id: number;
  enabled: boolean;
  activeReservation: { isOverdue: boolean } | null;
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');

  try {
    const token = await getAccessToken();
    const lockersRes = await fetch(`${BNCD_API_BASE}/storages/${STORAGE_ID}/lockers/`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    if (!lockersRes.ok) {
      res.status(lockersRes.status).json({ error: 'Failed to fetch lockers from Bobnet' });
      return;
    }

    const raw = (await lockersRes.json()) as BobnetLocker[];
    const available = raw.filter((l) => l.enabled && !l.activeReservation).length;

    res.status(200).json({
      total: raw.length,
      available,
      updatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('lockers API error', err);
    res.status(500).json({ error: 'Internal error fetching locker availability' });
  }
}
