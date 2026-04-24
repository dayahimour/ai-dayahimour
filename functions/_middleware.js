// Cloudflare Pages Functions — Intelligent language redirect
// Priority: Cookie > Accept-Language > Geo-IP
// Bots receive the static index.html to avoid cloaking.

const ARABIC_COUNTRIES = [
  'SA', 'AE', 'EG', 'IQ', 'MA', 'DZ', 'TN', 'LY', 'SD', 'SY',
  'JO', 'LB', 'KW', 'QA', 'BH', 'OM', 'YE', 'PS', 'MR', 'SO',
  'DJ', 'KM'
];

const BOT_USER_AGENTS = [
  'googlebot', 'adsbot-google', 'mediapartners-google',
  'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot',
  'facebookexternalhit', 'twitterbot', 'linkedinbot', 'whatsapp', 'slackbot',
  'google-inspectiontool', 'chrome-lighthouse', 'gtmetrix', 'pingdom',
];

function isBot(userAgent) {
  if (!userAgent) return false;
  const lower = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => lower.includes(bot));
}

function parseAcceptLanguage(header) {
  if (!header) return null;
  const primary = header.split(',')[0].split(';')[0].trim().toLowerCase();
  if (primary.startsWith('ar')) return 'ar';
  if (primary.startsWith('en')) return 'en';
  return null;
}

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const userAgent = request.headers.get('User-Agent') || '';
  const isBotRequest = isBot(userAgent);

  // Only redirect on root path "/"
  if (path !== '/') {
    return context.next();
  }

  function makeRedirect(path, status = 302, extraHeaders = {}) {
    return new Response(null, {
      status,
      headers: {
        'Location': new URL(path, url).toString(),
        'Cache-Control': 'private, no-store',
        ...extraHeaders,
      },
    });
  }

  // 1. Cookie (user explicit preference — highest priority)
  const cookies = request.headers.get('Cookie') || '';
  const langCookie = cookies.match(/lang=(ar|en)/);
  if (langCookie) {
    return makeRedirect(`/${langCookie[1]}/`, 302, {
      'Vary': 'Cookie, Accept-Language',
    });
  }

  // 2. Accept-Language (browser preference)
  const acceptLang = request.headers.get('Accept-Language');
  const browserLang = parseAcceptLanguage(acceptLang);
  if (browserLang) {
    return makeRedirect(`/${browserLang}/`, 302, {
      'Vary': 'Accept-Language, Cookie',
    });
  }

  // 3. Geo-IP (fallback)
  const country = request.headers.get('CF-IPCountry') || '';
  const isArabic = ARABIC_COUNTRIES.includes(country.toUpperCase());
  const targetLang = isArabic ? 'ar' : 'en';

  // Bots: serve the static index.html so they can read hreflang & canonical
  if (isBotRequest) {
    return context.next();
  }

  // Humans: redirect
  return makeRedirect(`/${targetLang}/`, 302, {
    'Vary': 'Accept-Language, Cookie',
  });
}
