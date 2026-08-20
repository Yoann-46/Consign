// Shared Bobnet BNCD client — used by api/lockers.ts (public availability)
// and api/cron/snapshot-lockers.ts (hourly history capture).

export interface BobnetTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export interface BobnetReservation {
  id: number;
  since: string;
  upTo: string;
  isOverdue: boolean;
}

export interface BobnetLocker {
  id: number;
  position: string;
  alias?: string;
  enabled: boolean;
  activeReservation: BobnetReservation | null;
  dimensions: { width: number; depth: number; height: number };
  category?: string;
}

export type Status = 'available' | 'reserved' | 'overtime' | 'blocked';

export interface Locker {
  id: string;
  size: 'M' | 'L';
  status: Status;
  endsAt?: number;
}

const PLATFORM_TOKEN_URL = 'https://platform.bobnet.tech/oauth/token';
const BNCD_API_BASE = 'https://bncd.bobnet.tech';
const SCOPE = 'bncd:storage:read';

export const STORAGE_ID = process.env.BOBNET_STORAGE_ID ?? '370';

// Warm-container cache: avoids requesting a new token on every invocation.
// Not guaranteed to persist (cold starts reset it) — pure optimization.
let cachedToken: { value: string; expiresAt: number } | null = null;

export async function getAccessToken(): Promise<string> {
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

export async function fetchRawLockers(): Promise<BobnetLocker[]> {
  const token = await getAccessToken();
  const res = await fetch(`${BNCD_API_BASE}/storages/${STORAGE_ID}/lockers/`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) {
    throw new Error(`Bobnet lockers request failed: ${res.status}`);
  }
  return (await res.json()) as BobnetLocker[];
}

export function mapLocker(raw: BobnetLocker): Locker {
  const size: Locker['size'] = raw.category === 'Big' ? 'L' : 'M';
  const id = raw.alias ?? String(raw.id);

  if (!raw.enabled) return { id, size, status: 'blocked' };
  if (!raw.activeReservation) return { id, size, status: 'available' };
  if (raw.activeReservation.isOverdue) return { id, size, status: 'overtime' };

  return {
    id,
    size,
    status: 'reserved',
    endsAt: new Date(raw.activeReservation.upTo).getTime(),
  };
}
