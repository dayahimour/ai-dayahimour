import { getCollection } from 'astro:content';

const siteUrl = 'https://dayahimour.org';

export async function GET() {
    const blogs = await getCollection('blog');

    const pages = [
        '',
        '/about',
        '/blog',
        '/models',
        '/tools',
        '/future',
        '/privacy',
    ];

    const blogPages = blogs.map((post) => `/blog/${post.slug}`);
    const allPages = [...pages, ...blogPages];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
  <url>
    <loc>${siteUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, max-age=3600'
        }
    });
}
