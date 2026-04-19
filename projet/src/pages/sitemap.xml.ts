import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const siteUrl = 'https://dayahimour.org';

export const GET: APIRoute = async () => {
  const arPosts = (await getCollection('blog')).filter(p => !p.data.draft);
  const enPosts = (await getCollection('blog-en')).filter(p => !p.data.draft);

  const staticPages = ['', '/blog', '/models', '/tools', '/future', '/about', '/privacy'];

  let urls = '';

  // Static pages — both languages with hreflang
  for (const page of staticPages) {
    const arUrl = page === '' ? `${siteUrl}/ar/` : `${siteUrl}/ar${page}/`;
    const enUrl = page === '' ? `${siteUrl}/en/` : `${siteUrl}/en${page}/`;
    urls += `  <url>
    <loc>${arUrl}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>\n`;
    urls += `  <url>
    <loc>${enUrl}</loc>
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>\n`;
  }

  // Arabic blog posts
  for (const post of arPosts) {
    const arUrl = `${siteUrl}/ar/blog/${post.slug}/`;
    const enMatch = enPosts.find(ep => ep.slug === post.slug);
    const enUrl = enMatch ? `${siteUrl}/en/blog/${post.slug}/` : '';
    urls += `  <url>
    <loc>${arUrl}</loc>
    <lastmod>${new Date(post.data.date).toISOString().split('T')[0]}</lastmod>${enUrl ? `
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  }

  // English blog posts
  for (const post of enPosts) {
    const enUrl = `${siteUrl}/en/blog/${post.slug}/`;
    const arMatch = arPosts.find(ap => ap.slug === post.slug);
    const arUrl = arMatch ? `${siteUrl}/ar/blog/${post.slug}/` : '';
    urls += `  <url>
    <loc>${enUrl}</loc>
    <lastmod>${new Date(post.data.date).toISOString().split('T')[0]}</lastmod>${arUrl ? `
    <xhtml:link rel="alternate" hreflang="ar" href="${arUrl}" />
    <xhtml:link rel="alternate" hreflang="en" href="${enUrl}" />` : ''}
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>\n`;
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
