// Vercel Serverless Function — GET /api/reviews
// Google rating, review count and up to 5 reviews (Places API New).
// The CDN caches the answer for a day so Google is called ~once a day.
// The API key stays server-side (GOOGLE_PLACES_API_KEY, Vercel env).

interface VercelRequest {
  method?: string;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
}

interface GReview {
  rating?: number;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  text?: { text?: string; languageCode?: string };
  originalText?: { text?: string; languageCode?: string };
  authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  googleMapsUri?: string;
}

interface GPlace {
  id?: string;
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GReview[];
}

const BASE = 'https://places.googleapis.com/v1';
const QUERY = 'Consign luggage storage, 67 rue de Cléry, 75002 Paris';
let placeId: string | null = process.env.GOOGLE_PLACE_ID ?? null;

async function gfetch(url: string, key: string, fieldMask: string, body?: unknown) {
  const res = await fetch(url, {
    method: body ? 'POST' : 'GET',
    headers: {
      'X-Goog-Api-Key': key,
      'X-Goog-FieldMask': fieldMask,
      ...(body ? { 'Content-Type': 'application/json' } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = (await res.json().catch(() => ({}))) as any;
  if (!res.ok) {
    const msg = data?.error?.message ?? `HTTP ${res.status}`;
    throw Object.assign(new Error(msg), { status: res.status, reason: data?.error?.status });
  }
  return data;
}

async function findPlaceId(key: string): Promise<string> {
  const data = await gfetch(`${BASE}/places:searchText`, key, 'places.id,places.displayName', {
    textQuery: QUERY,
    languageCode: 'fr',
  });
  const places = (data.places ?? []) as GPlace[];
  const hit = places.find((p) => /consign/i.test(p.displayName?.text ?? '')) ?? places[0];
  if (!hit?.id) throw Object.assign(new Error('Place not found'), { status: 404 });
  return hit.id;
}

export default async function handler(_req: VercelRequest, res: VercelResponse) {
  const key = process.env.GOOGLE_PLACES_API_KEY;
  if (!key) {
    res.setHeader('Cache-Control', 'no-store');
    res.status(503).json({ error: 'GOOGLE_PLACES_API_KEY is not set' });
    return;
  }

  try {
    if (!placeId) placeId = await findPlaceId(key);
    const p = (await gfetch(
      `${BASE}/places/${placeId}`,
      key,
      'id,displayName,rating,userRatingCount,googleMapsUri,reviews',
    )) as GPlace;

    const reviews = (p.reviews ?? [])
      .map((r) => ({
        rating: r.rating ?? null,
        text: r.originalText?.text ?? r.text?.text ?? '',
        lang: r.originalText?.languageCode ?? r.text?.languageCode ?? null,
        author: r.authorAttribution?.displayName ?? '',
        authorUri: r.authorAttribution?.uri ?? null,
        authorPhoto: r.authorAttribution?.photoUri ?? null,
        publishTime: r.publishTime ?? null,
        uri: r.googleMapsUri ?? null,
      }))
      .filter((r) => r.text.trim().length > 0)
      .sort((a, b) => (b.publishTime ?? '').localeCompare(a.publishTime ?? ''));

    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=86400');
    res.status(200).json({
      placeId: p.id,
      name: p.displayName?.text ?? null,
      rating: p.rating ?? null,
      count: p.userRatingCount ?? null,
      mapsUri: p.googleMapsUri ?? null,
      reviews,
      updatedAt: new Date().toISOString(),
    });
  } catch (err: any) {
    console.error('reviews API error', err?.status, err?.reason, err?.message);
    res.setHeader('Cache-Control', 'no-store');
    res.status(502).json({ error: err?.message ?? 'Google request failed', reason: err?.reason ?? null });
  }
}
