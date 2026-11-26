// Sitemap généré au build à partir des pages présentes dans src/pages.
// Chaque page EN (/x) est associée à sa version FR (/fr/x) via hreflang.
// Pages exclues : admin, prospection (non publiques). Pages de routes dynamiques ([slug]) : à ajouter à la main.
import type { APIRoute } from 'astro';

const SITE = 'https://www.consignlocker.com';
const EXCLUDE = [/^admin/, /^prospection/, /\[/];

const files = Object.keys(import.meta.glob('./**/*.astro'));

function toPath(file: string): string {
  const p = file.replace(/^\.\//, '').replace(/\.astro$/, '').replace(/(^|\/)index$/, '');
  return p;
}

const enPaths = new Set<string>();
const frPaths = new Set<string>();
for (const f of files) {
  const p = toPath(f);
  if (p === 'fr' || p.startsWith('fr/')) {
    const rest = p === 'fr' ? '' : p.slice(3);
    if (!EXCLUDE.some((r) => r.test(rest))) frPaths.add(rest);
  } else if (!EXCLUDE.some((r) => r.test(p))) {
    enPaths.add(p);
  }
}

const url = (lang: 'en' | 'fr', p: string) =>
  lang === 'en' ? `${SITE}/${p}` : `${SITE}/fr${p ? '/' + p : ''}`;

function entry(loc: string, p: string): string {
  const alts: string[] = [];
  if (enPaths.has(p)) alts.push(`<xhtml:link rel="alternate" hreflang="en" href="${url('en', p)}"/>`);
  if (frPaths.has(p)) alts.push(`<xhtml:link rel="alternate" hreflang="fr" href="${url('fr', p)}"/>`);
  if (enPaths.has(p)) alts.push(`<xhtml:link rel="alternate" hreflang="x-default" href="${url('en', p)}"/>`);
  return `  <url>\n    <loc>${loc}</loc>\n    ${alts.join('\n    ')}\n  </url>`;
}

export const GET: APIRoute = () => {
  const all = new Set([...enPaths, ...frPaths]);
  const urls: string[] = [];
  for (const p of [...all].sort()) {
    if (enPaths.has(p)) urls.push(entry(url('en', p), p));
    if (frPaths.has(p)) urls.push(entry(url('fr', p), p));
  }
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
