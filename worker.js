/**
 * Cloudflare Worker — Geo-based language redirect
 * Uses request.cf.country (Cloudflare native, reliable)
 * Falls back to browser language for unknown IPs
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

    // Only apply geo-redirect on the root path "/"
    if (path === '/' || path === '') {
      // 1. Check for language cookie (user manual override)
      const cookies = request.headers.get('Cookie') || '';
      const langCookie = cookies.match(/lang=(ar|en)/);
      if (langCookie) {
        const preferred = langCookie[1];
        return Response.redirect(new URL(`/${preferred}/`, url), 302);
      }

      // 2. Use Cloudflare's native geo data (most accurate)
      const country = (request.cf && request.cf.country) ? request.cf.country.toUpperCase() : '';
      if (country) {
        const targetLang = ARABIC_COUNTRIES.has(country) ? 'ar' : 'en';
        return Response.redirect(new URL(`/${targetLang}/`, url), 302);
      }

      // 3. Fallback: serve the index.html (has JS browser-lang detection)
      return env.ASSETS.fetch(request);
    }

    // All other paths: serve static assets normally
    return env.ASSETS.fetch(request);
  },
};
