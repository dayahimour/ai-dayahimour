/**
 * Cloudflare Worker — Intelligent language redirect (production-grade)
 * Priority: Cookie > Accept-Language > Geo-IP
 * Bots receive the static index.html (no geo-redirect) to avoid cloaking.
 */

const ARABIC_COUNTRIES = new Set([
  'SA', 'AE', 'EG', 'IQ', 'MA', 'DZ', 'TN', 'LY', 'SD', 'SY',
  'JO', 'LB', 'KW', 'QA', 'BH', 'OM', 'YE', 'PS', 'MR', 'SO',
  'DJ', 'KM',
]);

const BOT_USER_AGENTS = [
  'googlebot', 'adsbot-google', 'mediapartners-google',
  'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot',
  'facebookexternalhit', 'twitterbot', 'linkedinbot', 'whatsapp', 'slackbot',
  'google-inspectiontool', 'chrome-lighthouse', 'gtmetrix', 'pingdom',
];

function isBot(ua) {
  if (!ua) return false;
  const lower = ua.toLowerCase();
  return BOT_USER_AGENTS.some(bot => lower.includes(bot));
}

function parseAcceptLanguage(header) {
  if (!header) return null;
  const primary = header.split(',')[0].split(';')[0].trim().toLowerCase();
  if (primary.startsWith('ar')) return 'ar';
  if (primary.startsWith('en')) return 'en';
  return null;
}

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
    const ua = request.headers.get('User-Agent') || '';
    const isBotRequest = isBot(ua);

    // Only intercept root path "/"
    if (path === '/') {
      // 1. Cookie (user explicit preference — highest priority)
      const cookies = request.headers.get('Cookie') || '';
      const langCookie = cookies.match(/lang=(ar|en)/);
      if (langCookie) {
        return makeRedirect(`/${langCookie[1]}/`, url, 302, {
          'Vary': 'Cookie, Accept-Language',
        });
      }

      // 2. Accept-Language (browser preference)
      const acceptLang = request.headers.get('Accept-Language');
      const browserLang = parseAcceptLanguage(acceptLang);
      if (browserLang) {
        return makeRedirect(`/${browserLang}/`, url, 302, {
          'Vary': 'Accept-Language, Cookie',
        });
      }

      // 3. Geo-IP (fallback)
      const country = (request.cf?.country ?? request.headers.get('CF-IPCountry') ?? '').toUpperCase();
      let targetLang = 'ar'; // default
      if (country && country !== 'XX' && !ARABIC_COUNTRIES.has(country)) {
        targetLang = 'en';
      }

      // Bots: serve the static index.html so they can read hreflang & canonical
      if (isBotRequest) {
        return env.ASSETS.fetch(request);
      }

      // Humans: redirect
      return makeRedirect(`/${targetLang}/`, url, 302, {
        'Vary': 'Accept-Language, Cookie',
      });
    }

    // All other paths: passthrough + security headers
    return addSecurityHeaders(await env.ASSETS.fetch(request));
  },
};
