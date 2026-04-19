// Cloudflare Pages Functions middleware for geo-redirect
// Runs on Cloudflare edge before serving any static page

const ARABIC_COUNTRIES = [
  'SA', 'AE', 'EG', 'IQ', 'MA', 'DZ', 'TN', 'LY', 'SD', 'SY',
  'JO', 'LB', 'KW', 'QA', 'BH', 'OM', 'YE', 'PS', 'MR', 'SO',
  'DJ', 'KM'
];

export async function onRequest(context) {
  const { request } = context;
  const url = new URL(request.url);
  const path = url.pathname;

  // Only redirect on root path "/"
  if (path !== '/') {
    return context.next();
  }

  // Get country from Cloudflare header
  const country = request.headers.get('CF-IPCountry') || '';
  const isArabic = ARABIC_COUNTRIES.includes(country.toUpperCase());

  // Check for language preference cookie (user override)
  const cookies = request.headers.get('Cookie') || '';
  const langCookie = cookies.match(/lang=(ar|en)/);
  if (langCookie) {
    const preferredLang = langCookie[1];
    return Response.redirect(new URL(`/${preferredLang}/`, url), 302);
  }

  // Redirect based on geo (use 302 to prevent browser caching issues)
  const targetLang = isArabic ? 'ar' : 'en';
  return Response.redirect(new URL(`/${targetLang}/`, url), 302);
}
