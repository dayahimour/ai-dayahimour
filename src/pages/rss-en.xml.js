import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = (await getCollection('blog-en'))
        .filter(post => !post.data.draft)
        .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

    return rss({
        title: 'AI DayaHimour — AI News & Analysis',
        description: 'Your go-to source for AI news, model analysis, tool reviews, and future predictions',
        site: context.site,
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: new Date(post.data.date),
            description: post.data.description,
            link: `/en/blog/${post.slug}/`,
            categories: [post.data.category, ...post.data.tags],
        })),
        customData: `<language>en</language>`,
    });
}
