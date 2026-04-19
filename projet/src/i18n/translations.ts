export type Lang = 'ar' | 'en';

export const languages: Record<Lang, string> = {
    ar: 'العربية',
    en: 'English',
};

export const defaultLang: Lang = 'ar';

export const ui: Record<Lang, Record<string, string>> = {
    ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.blog': 'المقالات',
        'nav.models': 'النماذج',
        'nav.tools': 'الأدوات',
        'nav.companies': 'الشركات',
        'nav.future': 'المستقبل',
        'nav.about': 'من نحن',

        // Hero
        'hero.badge': 'أحدث أخبار الذكاء الاصطناعي',
        'hero.title1': 'استكشف مستقبل',
        'hero.title2': 'الذكاء الاصطناعي',
        'hero.subtitle': 'أخبار يومية، تحليلات عميقة، مقارنات النماذج، ورؤى حصرية عن مستقبل التقنية. مصدرك العربي الأول في عالم AI.',
        'hero.cta.blog': 'تصفح المقالات',
        'hero.cta.models': 'اكتشف النماذج',
        'hero.stat.articles': 'مقالة ومراجعة',
        'hero.stat.models': 'نموذج AI محلل',
        'hero.stat.tools': 'أداة AI مراجعة',
        'hero.stat.daily': 'محتوى جديد',
        'hero.stat.dailyLabel': 'يومي',

        // Sections
        'section.featured': 'مقالات مميزة',
        'section.latest': 'آخر المقالات',
        'section.analysis': 'تحليلات عميقة',
        'section.future': 'تنبؤات المستقبل',
        'section.related': 'مقالات ذات صلة',
        'section.viewAll': 'عرض الكل',
        'section.readMore': 'اقرأ المزيد',

        // Article
        'article.readingTime': 'دقائق قراءة',
        'article.views': 'عدد القراءات',
        'article.reader': 'قارئ',
        'article.share': 'شارك المقال:',
        'article.toc': 'فهرس المحتوى',

        // News
        'nav.news': 'الأخبار',
        'news.title': 'آخر',
        'news.titleHighlight': 'الأخبار',
        'news.subtitle': 'تابع آخر التطورات والأخبار العاجلة في عالم الذكاء الاصطناعي لحظة بلحظة',
        'news.all': 'الكل',
        'news.breaking': 'عاجل',
        'news.important': 'مهم',
        'news.normal': 'عادي',
        'news.noResults': 'لا توجد أخبار',
        'news.source': 'المصدر',
        'news.viewAll': 'جميع الأخبار',
        'news.latest': 'آخر الأخبار',
        'news.filterByImportance': 'فلترة حسب الأهمية',
        'news.filterByCompany': 'فلترة حسب الشركة',
        'news.pageTitle': 'أحدث أخبار الذكاء الاصطناعي اليوم | AI DayaHimour',
        'news.pageKeywords': 'أخبار الذكاء الاصطناعي, تطورات الذكاء الصناعي, أخبار شات جي بي تي, روبوتات, أحدث أخبار التقنية, OpenAI, أخبار جوجل',

        // CTA
        'cta.title': 'ابق على اطلاع دائم',
        'cta.subtitle': 'تابع أحدث التطورات في عالم الذكاء الاصطناعي. محتوى جديد كل يوم!',
        'cta.button': 'تصفح جميع المقالات',

        // Blog page
        'blog.title': 'جميع',
        'blog.titleHighlight': 'المقالات',
        'blog.subtitle': 'اكتشف آخر الأخبار والتحليلات في عالم الذكاء الاصطناعي',
        'blog.search': 'ابحث في المقالات...',
        'blog.noResults': 'لم يتم العثور على مقالات',
        'blog.all': 'الكل',

        // Footer
        'footer.description': 'مصدرك الأول لأخبار وتحليلات الذكاء الاصطناعي بالعربية. نقدم لك آخر التطورات في عالم AI، تحليلات عميقة للنماذج، مراجعات الأدوات، وتنبؤات المستقبل.',
        'footer.newsletter': 'النشرة البريدية',
        'footer.newsletterDesc': 'اشترك لتصلك أحدث المقالات، تحليلات النماذج الجديدة، وأهم الأخبار التقنية أولاً بأول.',
        'footer.emailPlaceholder': 'بريدك الإلكتروني',
        'footer.subscribe': 'اشتراك',
        'footer.subscribed': '✓ تم!',
        'footer.quickLinks': 'روابط سريعة',
        'footer.categories': 'التصنيفات',
        'footer.rights': 'جميع الحقوق محفوظة.',
        'footer.privacy': 'سياسة الخصوصية',
        'footer.followX': 'تابعنا على X',

        // Categories
        'cat.news': 'أخبار',
        'cat.analysis': 'تحليل',
        'cat.models': 'نماذج',
        'cat.tools': 'أدوات',
        'cat.future': 'مستقبل',
        'cat.images': 'صور',
        'cat.video': 'فيديو',
        'cat.newsAI': 'أخبار AI',
        'cat.analysisLong': 'تحليلات',
        'cat.modelsAI': 'نماذج AI',
        'cat.toolsAI': 'أدوات AI',

        // About
        'about.title': 'من',
        'about.titleHighlight': 'نحن',
        'about.subtitle': 'مرحباً بك في AI DayaHimour — وجهتك العربية لاستكشاف عالم الذكاء الاصطناعي',
        'about.vision': 'رؤيتنا',
        'about.visionText': 'نؤمن بأن المعرفة التقنية يجب أن تكون متاحة للجميع بلغتهم الأم. هدفنا هو جعل عالم الذكاء الاصطناعي مفهوماً ومتاحاً لكل عربي، سواء كان مبتدئاً فضولياً أو محترفاً يبحث عن آخر التطورات.',
        'about.whatWeOffer': 'ما نقدمه',
        'about.dailyNews': 'أخبار يومية',
        'about.dailyNewsDesc': 'آخر التطورات في عالم AI من كبرى الشركات',
        'about.deepAnalysis': 'تحليلات عميقة',
        'about.deepAnalysisDesc': 'مراجعات مفصلة للنماذج والتقنيات الجديدة',
        'about.toolReviews': 'مراجعات الأدوات',
        'about.toolReviewsDesc': 'دليلك لأفضل أدوات AI المجانية والمدفوعة',
        'about.futurePredictions': 'تنبؤات المستقبل',
        'about.futurePredictionsDesc': 'رؤى مبنية على البيانات عن مستقبل التقنية',
        'about.contact': 'تواصل معنا',
        'about.contactText': 'نحب أن نسمع منك! سواء كنت تريد اقتراح موضوع، الإبلاغ عن خطأ، أو مجرد إلقاء التحية.',

        // 404
        '404.title': 'الصفحة غير موجودة',
        '404.text': 'عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.',
        '404.home': 'العودة للرئيسية',

        // Meta
        'meta.siteTitle': 'AI DayaHimour — أخبار الذكاء الاصطناعي',
        'meta.description': 'موقعك الأول لأخبار وتحليلات الذكاء الاصطناعي بالعربية — نماذج، أدوات، تنبؤات المستقبل',
        'meta.keywords': 'الذكاء الاصطناعي, أخبار الذكاء الاصطناعي, نماذج لغوية, شات جي بي تي, ChatGPT, تقنية, تكنولوجيا المستقبل',
    },

    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.blog': 'Articles',
        'nav.models': 'Models',
        'nav.tools': 'Tools',
        'nav.companies': 'Companies',
        'nav.future': 'Future',
        'nav.about': 'About',

        // Hero
        'hero.badge': 'Latest AI News & Analysis',
        'hero.title1': 'Explore the Future of',
        'hero.title2': 'Artificial Intelligence',
        'hero.subtitle': 'Daily news, deep analysis, model comparisons, and exclusive insights about the future of technology. Your go-to source for everything AI.',
        'hero.cta.blog': 'Browse Articles',
        'hero.cta.models': 'Discover Models',
        'hero.stat.articles': 'Articles & Reviews',
        'hero.stat.models': 'AI Models Analyzed',
        'hero.stat.tools': 'AI Tools Reviewed',
        'hero.stat.daily': 'Fresh Content',
        'hero.stat.dailyLabel': 'Daily',

        // Sections
        'section.featured': 'Featured Articles',
        'section.latest': 'Latest Articles',
        'section.analysis': 'Deep Analysis',
        'section.future': 'Future Predictions',
        'section.related': 'Related Articles',
        'section.viewAll': 'View All',
        'section.readMore': 'Read More',

        // Article
        'article.readingTime': 'min read',
        'article.views': 'Total Views',
        'article.reader': 'readers',
        'article.share': 'Share this article:',
        'article.toc': 'Table of Contents',

        // News
        'nav.news': 'News',
        'news.title': 'Latest',
        'news.titleHighlight': 'News',
        'news.subtitle': 'Follow the latest breaking news and developments in the world of artificial intelligence in real-time',
        'news.all': 'All',
        'news.breaking': 'Breaking',
        'news.important': 'Important',
        'news.normal': 'Normal',
        'news.noResults': 'No news found',
        'news.source': 'Source',
        'news.viewAll': 'All News',
        'news.latest': 'Latest News',
        'news.filterByImportance': 'Filter by importance',
        'news.filterByCompany': 'Filter by company',
        'news.pageTitle': 'Latest AI News & Updates | AI DayaHimour',
        'news.pageKeywords': 'AI news, artificial intelligence updates, ChatGPT news, tech news, OpenAI updates, machine learning news',

        // CTA
        'cta.title': 'Stay Updated',
        'cta.subtitle': 'Follow the latest developments in AI. Fresh content every day!',
        'cta.button': 'Browse All Articles',

        // Blog page
        'blog.title': 'All',
        'blog.titleHighlight': 'Articles',
        'blog.subtitle': 'Discover the latest news and analysis in the world of artificial intelligence',
        'blog.search': 'Search articles...',
        'blog.noResults': 'No articles found',
        'blog.all': 'All',

        // Footer
        'footer.description': 'Your go-to source for AI news, deep analysis, model reviews, tool comparisons, and future predictions. Covering the latest developments in artificial intelligence.',
        'footer.newsletter': 'Newsletter',
        'footer.newsletterDesc': 'Subscribe to get the latest articles, model analyses, and top tech news delivered to your inbox.',
        'footer.emailPlaceholder': 'Your email address',
        'footer.subscribe': 'Subscribe',
        'footer.subscribed': '✓ Done!',
        'footer.quickLinks': 'Quick Links',
        'footer.categories': 'Categories',
        'footer.rights': 'All rights reserved.',
        'footer.privacy': 'Privacy Policy',
        'footer.followX': 'Follow us on X',

        // Categories
        'cat.news': 'news',
        'cat.analysis': 'analysis',
        'cat.models': 'models',
        'cat.tools': 'tools',
        'cat.future': 'future',
        'cat.images': 'images',
        'cat.video': 'video',
        'cat.newsAI': 'AI News',
        'cat.analysisLong': 'Analysis',
        'cat.modelsAI': 'AI Models',
        'cat.toolsAI': 'AI Tools',

        // About
        'about.title': 'About',
        'about.titleHighlight': 'Us',
        'about.subtitle': 'Welcome to AI DayaHimour — your destination for exploring the world of artificial intelligence',
        'about.vision': 'Our Vision',
        'about.visionText': 'We believe that technical knowledge should be accessible to everyone. Our goal is to make the world of AI understandable and accessible, whether you\'re a curious beginner or a professional looking for the latest developments.',
        'about.whatWeOffer': 'What We Offer',
        'about.dailyNews': 'Daily News',
        'about.dailyNewsDesc': 'The latest AI developments from leading companies',
        'about.deepAnalysis': 'Deep Analysis',
        'about.deepAnalysisDesc': 'Detailed reviews of new models and technologies',
        'about.toolReviews': 'Tool Reviews',
        'about.toolReviewsDesc': 'Your guide to the best free and paid AI tools',
        'about.futurePredictions': 'Future Predictions',
        'about.futurePredictionsDesc': 'Data-driven insights about the future of technology',
        'about.contact': 'Contact Us',
        'about.contactText': 'We\'d love to hear from you! Whether you want to suggest a topic, report an error, or just say hello.',

        // 404
        '404.title': 'Page Not Found',
        '404.text': 'Sorry, the page you\'re looking for doesn\'t exist or has been moved.',
        '404.home': 'Back to Home',

        // Meta
        'meta.siteTitle': 'AI DayaHimour — AI News & Analysis',
        'meta.description': 'Your go-to source for AI news, model analysis, tool reviews, and future predictions — covering ChatGPT, Claude, Gemini, and more.',
        'meta.keywords': 'artificial intelligence, AI news, language models, ChatGPT, Claude, Gemini, AI tools, machine learning, deep learning, future technology',
    },
};

export function t(lang: Lang, key: string): string {
    return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
}

export function getLocalizedPath(lang: Lang, path: string): string {
    return `/${lang}${path}`;
}

export function getAlternateLang(lang: Lang): Lang {
    return lang === 'ar' ? 'en' : 'ar';
}

// Arabic-speaking countries for geo-redirect
export const arabicCountries = [
    'SA', 'EG', 'AE', 'DZ', 'MA', 'IQ', 'JO', 'LB', 'TN',
    'LY', 'SY', 'YE', 'OM', 'QA', 'BH', 'KW', 'SD', 'PS', 'MR',
];

// Category mapping between AR and EN
export const categoryMap: Record<string, Record<Lang, string>> = {
    news: { ar: 'أخبار', en: 'news' },
    analysis: { ar: 'تحليل', en: 'analysis' },
    models: { ar: 'نماذج', en: 'models' },
    companies: { ar: 'شركات', en: 'companies' },
    tools: { ar: 'أدوات', en: 'tools' },
    future: { ar: 'مستقبل', en: 'future' },
    images: { ar: 'صور', en: 'images' },
    video: { ar: 'فيديو', en: 'video' },
};

export function getCategoryKey(localizedCategory: string): string {
    for (const [key, val] of Object.entries(categoryMap)) {
        if (val.ar === localizedCategory || val.en === localizedCategory) return key;
    }
    return 'news';
}

export function getLocalizedCategory(key: string, lang: Lang): string {
    return categoryMap[key]?.[lang] ?? key;
}
