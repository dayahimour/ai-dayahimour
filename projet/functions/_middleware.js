// Cloudflare Pages Functions middleware for geo-redirect
// Runs on Cloudflare edge before serving any static page

const ARABIC_COUNTRIES = [
  'SA', 'AE', 'EG', 'IQ', 'MA', 'DZ', 'TN', 'LY', 'SD', 'SY',
  'JO', 'LB', 'KW', 'QA', 'BH', 'OM', 'YE', 'PS', 'MR', 'SO',
  'DJ', 'KM'
];

// Bot detection for AdSense/Googlebot - they need to see actual content
const BOT_USER_AGENTS = [
  'googlebot', 'adsbot-google', 'mediapartners-google',
  'bingbot', 'slurp', 'duckduckbot', 'baiduspider', 'yandexbot',
  'facebookexternalhit', 'twitterbot', 'linkedinbot', 'whatsapp', 'slackbot',
];

function isBot(userAgent) {
  if (!userAgent) return false;
  const lower = userAgent.toLowerCase();
  return BOT_USER_AGENTS.some(bot => lower.includes(bot));
}

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;
  const userAgent = request.headers.get('User-Agent') || '';

  // Only redirect on root path "/"
  if (path !== '/') {
    return context.next();
  }

  // IMPORTANT: Serve content to bots (AdSense/Googlebot need to crawl)
  if (isBot(userAgent)) {
    return context.next(); // Serve the actual index.html with meta tags
  }

  // Get country from Cloudflare header
  const country = request.headers.get('CF-IPCountry') || '';
  const isArabic = ARABIC_COUNTRIES.includes(country.toUpperCase());

  // Check for language preference cookie (user override)
  const cookies = request.headers.get('Cookie') || '';
  const langCookie = cookies.match(/lang=(ar|en)/);
  if (langCookie) {
    const preferredLang = langCookie[1];
    return Response.redirect(new URL(`/${preferredLang}/`, url), 301);
  }

  // Redirect based on geo (use 301 for SEO)
  const targetLang = isArabic ? 'ar' : 'en';
  return Response.redirect(new URL(`/${targetLang}/`, url), 301);
}
