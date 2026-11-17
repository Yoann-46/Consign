// Vercel Serverless Function — /api/prospection
// Protected by middleware.ts (Basic Auth). CRUD for the sales prospecting map
// (hidden page /prospection): locations negotiated with shops + installed lockers.
//
//   GET    /api/prospection            → list all locations
//   POST   /api/prospection            → create (JSON body)
//   PUT    /api/prospection?id=<id>    → update (JSON body, partial allowed)
//   DELETE /api/prospection?id=<id>    → delete
//
// Self-contained on purpose — see api/cron/snapshot-lockers.ts for why.

import { neon, type NeonQueryFunction } from '@neondatabase/serverless';

interface VercelRequest {
  method?: string;
  query: Record<string, string | string[] | undefined>;
  body?: unknown;
}

interface VercelResponse {
  status(code: number): VercelResponse;
  setHeader(name: string, value: string): void;
  json(body: unknown): void;
}

const STATUTS = ['en_cours', 'valide', 'installe'] as const;
type Statut = (typeof STATUTS)[number];

interface Prospect {
  nom: string;
  adresse: string;
  lat: number;
  lng: number;
  statut: Statut;
  contact_nom: string;
  contact_tel: string;
  note: string;
}

let sqlClient: NeonQueryFunction<false, false> | null = null;
let tableReady = false;

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

async function ensureTable(sql: NeonQueryFunction<false, false>) {
  if (tableReady) return;
  const existing = (await sql`SELECT to_regclass('public.prospects') AS t`) as { t: string | null }[];
  const isNew = !existing[0]?.t;
  await sql`
    CREATE TABLE IF NOT EXISTS prospects (
      id SERIAL PRIMARY KEY,
      nom TEXT NOT NULL,
      adresse TEXT NOT NULL,
      lat DOUBLE PRECISION NOT NULL,
      lng DOUBLE PRECISION NOT NULL,
      statut TEXT NOT NULL DEFAULT 'en_cours',
      contact_nom TEXT NOT NULL DEFAULT '',
      contact_tel TEXT NOT NULL DEFAULT '',
      note TEXT NOT NULL DEFAULT '',
      created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
  if (isNew) {
    // Seed with the first installed locker, only when the table is first created.
    await sql`
      INSERT INTO prospects (nom, adresse, lat, lng, statut)
      VALUES ('Consign — Rue de Cléry', '67 Rue de Cléry 75002 Paris', 48.869062, 2.349638, 'installe')
    `;
  }
  tableReady = true;
}

function str(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : '';
}

function parseBody(raw: unknown): Record<string, unknown> {
  if (raw && typeof raw === 'object') return raw as Record<string, unknown>;
  if (typeof raw === 'string' && raw) {
    try {
      const parsed = JSON.parse(raw);
      if (parsed && typeof parsed === 'object') return parsed;
    } catch {
      /* fall through */
    }
  }
  return {};
}

// Returns a validated full record, or an error message.
function validate(input: Record<string, unknown>): Prospect | string {
  const nom = str(input.nom, 200);
  const adresse = str(input.adresse, 300);
  const lat = Number(input.lat);
  const lng = Number(input.lng);
  const statut = str(input.statut, 20) as Statut;
  if (!nom) return 'Le nom du commerce est obligatoire.';
  if (!adresse) return "L'adresse est obligatoire.";
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) {
    return "Position introuvable : choisis l'adresse dans la liste proposée.";
  }
  if (!STATUTS.includes(statut)) return 'Statut invalide.';
  return {
    nom,
    adresse,
    lat,
    lng,
    statut,
    contact_nom: str(input.contact_nom, 200),
    contact_tel: str(input.contact_tel, 50),
    note: str(input.note, 2000),
  };
}

function getId(req: VercelRequest): number | null {
  const raw = Array.isArray(req.query.id) ? req.query.id[0] : req.query.id;
  const id = Number(raw);
  return Number.isInteger(id) && id > 0 ? id : null;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Cache-Control', 'no-store');
  const method = (req.method ?? 'GET').toUpperCase();

  try {
    const sql = getSql();
    await ensureTable(sql);

    if (method === 'GET') {
      const rows = await sql`
        SELECT id, nom, adresse, lat, lng, statut, contact_nom, contact_tel, note, created_at, updated_at
        FROM prospects
        ORDER BY updated_at DESC
      `;
      res.status(200).json({ items: rows });
      return;
    }

    if (method === 'POST') {
      const p = validate(parseBody(req.body));
      if (typeof p === 'string') {
        res.status(400).json({ error: p });
        return;
      }
      const rows = await sql`
        INSERT INTO prospects (nom, adresse, lat, lng, statut, contact_nom, contact_tel, note)
        VALUES (${p.nom}, ${p.adresse}, ${p.lat}, ${p.lng}, ${p.statut}, ${p.contact_nom}, ${p.contact_tel}, ${p.note})
        RETURNING *
      `;
      res.status(201).json({ item: rows[0] });
      return;
    }

    if (method === 'PUT' || method === 'PATCH') {
      const id = getId(req);
      if (!id) {
        res.status(400).json({ error: 'id manquant' });
        return;
      }
      const current = (await sql`SELECT * FROM prospects WHERE id = ${id}`) as Record<string, unknown>[];
      if (!current[0]) {
        res.status(404).json({ error: 'Emplacement introuvable' });
        return;
      }
      // Partial update: merge the body over the current record, then validate.
      const p = validate({ ...current[0], ...parseBody(req.body) });
      if (typeof p === 'string') {
        res.status(400).json({ error: p });
        return;
      }
      const rows = await sql`
        UPDATE prospects SET
          nom = ${p.nom}, adresse = ${p.adresse}, lat = ${p.lat}, lng = ${p.lng},
          statut = ${p.statut}, contact_nom = ${p.contact_nom}, contact_tel = ${p.contact_tel},
          note = ${p.note}, updated_at = now()
        WHERE id = ${id}
        RETURNING *
      `;
      res.status(200).json({ item: rows[0] });
      return;
    }

    if (method === 'DELETE') {
      const id = getId(req);
      if (!id) {
        res.status(400).json({ error: 'id manquant' });
        return;
      }
      await sql`DELETE FROM prospects WHERE id = ${id}`;
      res.status(200).json({ ok: true });
      return;
    }

    res.setHeader('Allow', 'GET, POST, PUT, PATCH, DELETE');
    res.status(405).json({ error: 'Méthode non autorisée' });
  } catch (err) {
    console.error('[api/prospection]', err);
    res.status(500).json({ error: 'Erreur serveur' });
  }
}
