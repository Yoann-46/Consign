// Vercel Edge Middleware — HTTP Basic Auth gate for the back-office.
// Runs on the platform level (independent of Astro), so it protects both
// the /admin page itself and the /api/admin/* data endpoint.

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};

export default function middleware(request: Request) {
  const user = process.env.ADMIN_USER;
  const pass = process.env.ADMIN_PASSWORD;

  if (!user || !pass) {
    return new Response('Admin auth not configured', { status: 500 });
  }

  const authHeader = request.headers.get('authorization');
  if (authHeader) {
    const [scheme, encoded] = authHeader.split(' ');
    if (scheme === 'Basic' && encoded) {
      const [providedUser, providedPass] = atob(encoded).split(':');
      if (providedUser === user && providedPass === pass) {
        return; // let the request through
      }
    }
  }

  return new Response('Authentication required', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Consign back-office"' },
  });
}
