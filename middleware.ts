// Vercel Edge Middleware — HTTP Basic Auth gate for the back-office.
// Runs on the platform level (independent of Astro), so it protects both
// the pages themselves and their data endpoints:
//   - /admin + /api/admin/*            → ADMIN_USER / ADMIN_PASSWORD
//   - /prospection + /api/prospection  → PROSPECTION_USER / PROSPECTION_PASSWORD
//                                        (admin credentials are also accepted)

export const config = {
  matcher: [
    '/admin/:path*',
    '/api/admin/:path*',
    '/prospection',
    '/prospection/:path*',
    '/api/prospection',
    '/api/prospection/:path*',
  ],
};

function readBasicAuth(request: Request): [string, string] | null {
  const authHeader = request.headers.get('authorization');
  if (!authHeader) return null;
  const [scheme, encoded] = authHeader.split(' ');
  if (scheme !== 'Basic' || !encoded) return null;
  try {
    const decoded = atob(encoded);
    const sep = decoded.indexOf(':');
    if (sep < 0) return null;
    return [decoded.slice(0, sep), decoded.slice(sep + 1)];
  } catch {
    return null;
  }
}

export default function middleware(request: Request) {
  const { pathname } = new URL(request.url);
  const isProspection = pathname.startsWith('/prospection') || pathname.startsWith('/api/prospection');

  const accounts: [string, string][] = [];
  if (process.env.ADMIN_USER && process.env.ADMIN_PASSWORD) {
    accounts.push([process.env.ADMIN_USER, process.env.ADMIN_PASSWORD]);
  }
  if (isProspection && process.env.PROSPECTION_USER && process.env.PROSPECTION_PASSWORD) {
    accounts.push([process.env.PROSPECTION_USER, process.env.PROSPECTION_PASSWORD]);
  }

  if (accounts.length === 0) {
    return new Response('Admin auth not configured', { status: 500 });
  }

  const provided = readBasicAuth(request);
  if (provided && accounts.some(([u, p]) => u === provided[0] && p === provided[1])) {
    return; // let the request through
  }

  const realm = isProspection ? 'Consign prospection' : 'Consign back-office';
  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': `Basic realm="${realm}"` },
  });
}
