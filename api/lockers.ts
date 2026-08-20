// Vercel Serverless Function — GET /api/lockers
// Proxies the Bobnet BNCD API server-side so the OAuth client secret never
// reaches the browser. Maps Bobnet's locker shape to the `Locker` type
// already consumed by src/components/LockersGrid.astro.

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

interface BobnetReservation {
  id: number;
  since: string;
  upTo: string;
  isOverdue: boolean;
}

interface BobnetLocker {
  id: number;
  position: string;
  alias?: string;
  enabled: boolean;
  activeReservation: BobnetReservation | null;
  dimensions: { width: number; depth: number; height: number };
  category?: string;
}

type Status = 'available' | 'reserved' | 'overtime' | 'blocked';

interface Locker {
  id: string;
  size: 'M' | 'L';
  status: Status;
  endsAt?: number;
}

const PLATFORM_TOKEN_URL = 'https://platform.bobnet.tech/oauth/token';
const BNCD_API_BASE = 'https://bncd.bobnet.tech';
const STORAGE_ID = process.env.BOBNET_STORAGE_ID ?? '370';
const SCOPE = 'bncd:storage:read';

// Warm-container cache: avoids requesting a new token on every invocation.
// Not guaranteed to persist (cold starts reset it) — that's fine, it's a
// pure optimization, not a correctness requirement.
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
  // Renew a bit before actual expiry to avoid edge-of-window failures.
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1000,
  };
  return cachedToken.value;
}

function mapLocker(raw: BobnetLocker): Locker {
  const size: Locker['size'] = raw.category === 'Big' ? 'L' : 'M';

  if (!raw.enabled) {
    return { id: raw.alias ?? String(raw.id), size, status: 'blocked' };
  }

  if (!raw.activeReservation) {
    return { id: raw.alias ?? String(raw.id), size, status: 'available' };
  }

  if (raw.activeReservation.isOverdue) {
    return { id: raw.alias ?? String(raw.id), size, status: 'overtime' };
  }

  return {
    id: raw.alias ?? String(raw.id),
    size,
    status: 'reserved',
    endsAt: new Date(raw.activeReservation.upTo).getTime(),
  };
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
    const lockers = raw.map(mapLocker);

    res.status(200).json({ lockers, updatedAt: new Date().toISOString() });
  } catch (err) {
    console.error('lockers API error', err);
    res.status(500).json({ error: 'Internal error fetching locker availability' });
  }
}
