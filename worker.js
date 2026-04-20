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

// Common bot user agents that should NOT be redirected (need to see content for AdSense/SEO)
const BOT_USER_AGENTS = [
  'googlebot',
  'adsbot-google',
  'mediapartners-google', // AdSense
  'bingbot',
  'slurp',
  'duckduckbot',
  'baiduspider',
  'yandexbot',
  'facebookexternalhit',
  'twitterbot',
  'linkedinbot',
  'whatsapp',
  'slackbot',
];

function isBot(userAgent) {
  if (!userAgent) return false;
  const lower = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => lower.includes(bot));
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;
    const userAgent = request.headers.get('User-Agent') || '';

    console.log(`[Worker] path="${path}" cf.country="${request.cf?.country}" bot="${isBot(userAgent)}"`);

    // Debug endpoint to verify Worker is running
    if (path === '/debug-geo') {
      return new Response(JSON.stringify({
        worker: true,
        country: request.cf?.country ?? null,
        cfIpCountry: request.headers.get('CF-IPCountry'),
        path,
        isBot: isBot(userAgent),
      }), {
        headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' },
      });
    }

    // Only apply geo-redirect on the root path "/"
    if (path === '/') {
      // 1. Check for language preference cookie (user manual override)
      const cookies = request.headers.get('Cookie') || '';
      const langCookie = cookies.match(/lang=(ar|en)/);
      if (langCookie) {
        const preferred = langCookie[1];
        return makeRedirect(`/${preferred}/`, url, 301);
      }

      // 2. Use Cloudflare's native geo data (most accurate)
      const country = (request.cf?.country ?? request.headers.get('CF-IPCountry') ?? '').toUpperCase();
      let targetLang = 'ar'; // Default language
      if (country && country !== 'XX' && !ARABIC_COUNTRIES.has(country)) {
        targetLang = 'en';
      }

      // Redirect human users with 301 (permanent redirect - good for SEO)
      return makeRedirect(`/${targetLang}/`, url, 301);
    }

    // All other paths: serve static assets normally
    return env.ASSETS.fetch(request);
  },
};

function makeRedirect(path, baseUrl, status = 301) {
  return new Response(null, {
    status: status,
    headers: {
      'Location': new URL(path, baseUrl).toString(),
      'Cache-Control': 'no-store',
    },
  });
}
