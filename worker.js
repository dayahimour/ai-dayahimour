/**
 * Cloudflare Worker — Google AdSense Compliant Router
 * Priority: Cookie -> redirect.
 * No cookie -> serve root index (Language Selector).
 * NO BOT DETECTION (No cloaking!)
 */

function makeRedirect(path, baseUrl, status = 302, extraHeaders = {}) {
  return new Response(null, {
    status,
    headers: {
      'Location': new URL(path, baseUrl).toString(),
      'Cache-Control': 'private, no-store',
      'X-Frame-Options': 'DENY',
      'X-Content-Type-Options': 'nosniff',
      'Referrer-Policy': 'strict-origin-when-cross-origin',
      'Permissions-Policy': 'geolocation=(), microphone=(), camera=(), payment=()',
      ...extraHeaders,
    },
  });
}

function addSecurityHeaders(response) {
  const h = new Headers(response.headers);
  h.set('X-Frame-Options', 'DENY');
  h.set('X-Content-Type-Options', 'nosniff');
  h.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  h.set('Permissions-Policy', 'geolocation=(), microphone=(), camera=(), payment=()');
  return new Response(response.body, { status: response.status, statusText: response.statusText, headers: h });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    // Only intercept root path "/"
    if (path === '/') {
      // 1. Cookie (user explicit preference — highest priority)
      const cookies = request.headers.get('Cookie') || '';
      const langCookie = cookies.match(/lang=(ar|en)/);

      // If user has a cookie, respect their choice and redirect
      if (langCookie) {
        return makeRedirect(`/${langCookie[1]}/`, url, 302, {
          'Vary': 'Cookie',
        });
      }

      // If NO cookie -> serve the index.html page (Language Selector)
      // This ensures Googlebot and users see the exact same thing (No Cloaking)
      // and fixes Google AdSense "Low Value / Doorway" policy violations.
      return addSecurityHeaders(await env.ASSETS.fetch(request));
    }

    // All other paths: passthrough + security headers
    return addSecurityHeaders(await env.ASSETS.fetch(request));
  },
};
