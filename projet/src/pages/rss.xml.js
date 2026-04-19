import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    const posts = (await getCollection('blog'))
        .filter(post => !post.data.draft)
        .sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

    return rss({
        title: 'AI DayaHimour — أخبار الذكاء الاصطناعي',
        description: 'مصدرك الأول لأخبار وتحليلات الذكاء الاصطناعي بالعربية',
        site: context.site,
        items: posts.map(post => ({
            title: post.data.title,
            pubDate: new Date(post.data.date),
            description: post.data.description,
            link: `/ar/blog/${post.slug}/`,
            categories: [post.data.category, ...post.data.tags],
        })),
        customData: `<language>ar</language>`,
    });
}
