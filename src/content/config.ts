import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.enum(['أخبار', 'تحليل', 'نماذج', 'أدوات', 'شركات', 'مستقبل', 'صور', 'فيديو']),
        tags: z.array(z.string()),
        image: z.string().optional(),
        featured: z.boolean().default(false),
        author: z.string().default('فريق AI DayaHimour'),
        draft: z.boolean().default(false),
    }),
});

const blogEn = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
        category: z.enum(['news', 'analysis', 'models', 'tools', 'companies', 'future', 'images', 'video']),
        tags: z.array(z.string()),
        image: z.string().optional(),
        featured: z.boolean().default(false),
        author: z.string().default('AI DayaHimour Team'),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog, 'blog-en': blogEn };
