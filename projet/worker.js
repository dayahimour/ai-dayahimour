/**
 * Cloudflare Worker — Geo-based language redirect
 * Uses request.cf.country (Cloudflare native, reliable)
 * Falls back to CF-IPCountry header, then browser-side JS
 */

const ARABIC_COUNTRIES = new Set([
  'SA', 'AE', 'EG', 'IQ', 'MA', 'DZ', 'TN', 'LY', 'SD', 'SY',
  'JO', 'LB', 'KW', 'QA', 'BH', 'OM', 'YE', 'PS', 'MR', 'SO',
  'DJ', 'KM',
]);

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    console.log(`[Worker] path="${path}" cf.country="${request.cf?.country}" CF-IPCountry="${request.headers.get('CF-IPCountry')}"`);

    // Debug endpoint to verify Worker is running
    if (path === '/debug-geo') {
      return new Response(JSON.stringify({
        worker: true,
        country: request.cf?.country ?? null,
        cfIpCountry: request.headers.get('CF-IPCountry'),
        path,
      }), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      });
    }

    // Only apply geo-redirect on the root path "/"
    if (path === '/') {
      // 1. Check for language cookie (user manual override)
      const cookies = request.headers.get('Cookie') || '';
      const langCookie = cookies.match(/lang=(ar|en)/);
      if (langCookie) {
        const preferred = langCookie[1];
        return makeRedirect(`/${preferred}/`, url);
      }

      // 2. Use Cloudflare's native geo data (most accurate)
      // Default to 'ar' if country unknown - always redirect, never serve fallback HTML
      const country = (request.cf?.country ?? request.headers.get('CF-IPCountry') ?? '').toUpperCase();
      let targetLang = 'ar'; // Default language
      if (country && country !== 'XX' && !ARABIC_COUNTRIES.has(country)) {
        targetLang = 'en';
      }
      
      // Always redirect to avoid serving an empty index.html fallback to bots (like AdSense)
      // Use 302 (not 301) to prevent browser caching of the redirect
      return makeRedirect(`/${targetLang}/`, url);
    }

    // All other paths: serve static assets normally
    return env.ASSETS.fetch(request);
  },
};

function makeRedirect(path, baseUrl) {
  return new Response(null, {
    status: 302,
    headers: {
      'Location': new URL(path, baseUrl).toString(),
      'Cache-Control': 'no-store',
    },
  });
}
