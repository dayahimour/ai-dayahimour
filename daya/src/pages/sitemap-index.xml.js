export const prerender = true;

export async function GET() {
  const siteUrl = 'https://dayahimour.org';

  // Get all blog posts
  const posts = await fetch(`${siteUrl}/api/posts`).catch(() => ({ posts: [] }));

  const pages = [
    '/',
    '/about',
    '/blog',
    '/models',
    '/tools',
    '/future',
    '/blog/ai-ethics',
    '/blog/ai-future-2030',
    '/blog/ai-models-comparison',
    '/blog/best-ai-tools-2026',
    '/blog/gpt5-analysis',
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => `  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
