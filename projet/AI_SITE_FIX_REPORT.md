# AI_SITE_FIX_REPORT.md
# تقرير إصلاح وتحسين موقع AI DayaHimour
# مُعَدّ للتنفيذ بواسطة Cline

---

## نظرة عامة

المشروع: موقع Astro.js ثابت (static) مبني بـ Tailwind CSS + MDX
الاستضافة: Cloudflare Workers — النشر يدوي عبر `wrangler deploy`
طريقة العمل: تعديل الملفات محلياً → إضافة مقالات → build → رفع

---

## سير العمل اليومي (بعد تطبيق هذا التقرير)

```
1. أضف مقالاً جديداً في:  src/content/blog/اسم-المقال.md
2. شغّل:                   npm run build
3. انشر:                   npx wrangler deploy
```

هذا كل شيء — لا GitHub Actions، لا أدوات إضافية.

---

## قائمة المهام بالترتيب

---

### [TASK-01] إضافة Sitemap إلى astro.config.mjs ❌ حرجة

**المشكلة:** الحزمة `@astrojs/sitemap` موجودة في package.json لكنها **غير مُفعَّلة** في astro.config.mjs — بدونها لن يُنشأ sitemap.xml أبداً، وGoogle لن تعرف بصفحات الموقع.

**الملف:** `astro.config.mjs`

**الكود الكامل بعد التعديل:**

```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://ai-dayahimour.dayahimour.workers.dev',
    output: 'static',
    integrations: [
        tailwind(),
        mdx(),
        sitemap(),
    ],
    markdown: {
        shikiConfig: {
            theme: 'github-dark',
        },
    },
});
```

---

### [TASK-02] إنشاء ملف robots.txt ❌ حرجة للـ SEO

**المشكلة:** لا يوجد ملف robots.txt — Google لا تعرف ما تزحف إليه.

**أنشئ ملفاً جديداً:** `public/robots.txt`

**المحتوى الكامل:**

```
User-agent: *
Allow: /

Sitemap: https://ai-dayahimour.dayahimour.workers.dev/sitemap-index.xml
```

---

### [TASK-03] إضافة RSS وSitemap في `<head>` ❌ حرجة للـ SEO

**المشكلة:** الموقع لديه RSS feed وسيتماب لكن لا يوجد `<link>` يشير إليهم في الـ head — المتصفحات ومحركات البحث لا تجدهم تلقائياً.

**الملف:** `src/layouts/BaseLayout.astro`

**أضف هذين السطرين مباشرة قبل `</head>`:**

```html
    <link rel="alternate" type="application/rss+xml" title="AI DayaHimour — RSS" href="/rss.xml" />
    <link rel="sitemap" type="application/xml" href="/sitemap-index.xml" />
  </head>
```

---

### [TASK-04] إضافة slot في BaseLayout لدعم بيانات إضافية في الـ head ❌ مطلوب للـ TASK-05

**المشكلة:** لا يوجد `<slot name="head">` في BaseLayout، مما يمنع صفحات المقالات من إضافة JSON-LD خاص بها.

**الملف:** `src/layouts/BaseLayout.astro`

**أضف هذا السطر مباشرة قبل `</head>`** (بعد السطرين اللذين أضفتهما في TASK-03):

```html
    <slot name="head" />
  </head>
```

---

### [TASK-05] إضافة Article Structured Data (JSON-LD) في صفحات المقالات ❌ حرجة للـ SEO

**المشكلة:** صفحات المقالات لا تحتوي على Schema.org من نوع `BlogPosting` — هذا يمنع ظهورها كـ Rich Results في Google (تاريخ، كاتب، صورة بجانب النتيجة).

**الملف:** `src/layouts/ArticleLayout.astro`

**الخطوة 1:** أضف هذا الكود في نهاية الـ frontmatter (قبل السطر `---` الثاني):

```js
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": title,
  "description": description,
  "image": image || '/images/og-default.svg',
  "datePublished": new Date(date).toISOString(),
  "dateModified": new Date(date).toISOString(),
  "author": {
    "@type": "Person",
    "name": author
  },
  "publisher": {
    "@type": "Organization",
    "name": "AI DayaHimour",
    "url": "https://ai-dayahimour.dayahimour.workers.dev"
  },
  "inLanguage": "ar",
  "keywords": tags.join(", ")
};
```

**الخطوة 2:** في قسم الـ HTML، مباشرة بعد فتح `<BaseLayout ...>` أضف:

```html
<BaseLayout title={title} description={description} image={image} type="article">
  <Fragment slot="head">
    <script type="application/ld+json" set:html={JSON.stringify(articleSchema)} />
  </Fragment>

  <article class="max-w-5xl mx-auto px-4 py-12">
```

---

### [TASK-06] إنشاء صورة OG افتراضية ❌ حرجة للمشاركة

**المشكلة:** `BaseLayout.astro` يشير إلى `/images/og-default.png` لكن هذا الملف غير موجود — مشاركة الموقع على واتساب/تويتر لن تُظهر أي صورة.

**الخطوة 1:** أنشئ المجلد `public/images/`

**الخطوة 2:** أنشئ ملف `public/images/og-default.svg` بهذا المحتوى:

```svg
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0a0f"/>
      <stop offset="100%" style="stop-color:#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="0" y="0" width="6" height="630" fill="#3b82f6"/>
  <text x="80" y="280" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="#3b82f6">AI DayaHimour</text>
  <text x="80" y="370" font-family="Arial, sans-serif" font-size="36" fill="#9ca3af">أخبار وتحليلات الذكاء الاصطناعي</text>
  <text x="80" y="430" font-family="Arial, sans-serif" font-size="24" fill="#4b5563">ai-dayahimour.dayahimour.workers.dev</text>
</svg>
```

**الخطوة 3:** عدّل في `src/layouts/BaseLayout.astro` السطر:

```js
// قبل:
image = '/images/og-default.png',
// بعد:
image = '/images/og-default.svg',
```

---

### [TASK-07] إضافة meta robots في `<head>` ⚠️ تحسين SEO

**الملف:** `src/layouts/BaseLayout.astro`

**أضف بعد `<meta name="description" ...>` مباشرة:**

```html
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large" />
```

---

### [TASK-08] تحديث compatibility_date في wrangler.toml ⚠️ تحسين

**الملف:** `wrangler.toml`

**الكود الكامل بعد التعديل:**

```toml
name = "ai-dayahimour"
compatibility_date = "2025-01-01"

[assets]
directory = "./dist"
```

---

### [TASK-09] إصلاح روابط Social الفارغة في Footer ⚠️ تحسين

**المشكلة:** روابط Twitter وGitHub هي `href="#"` — تُضعف المصداقية.

**الملف:** `src/components/Footer.astro`

**في الـ Bottom section، استبدل كتلة الـ social icons بهذا (يُبقي RSS فقط):**

```html
<div class="flex items-center gap-4">
  <a href="/rss.xml" class="text-gray-500 hover:text-neon-blue transition-colors" aria-label="RSS Feed">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/>
    </svg>
  </a>
</div>
```

---

## قالب المقال الجديد

**كل مقال جديد يُضاف في:** `src/content/blog/اسم-بالانجليزي.md`

```markdown
---
title: "عنوان المقال هنا"
description: "وصف مختصر للمقال — جملة أو جملتان"
date: "2026-04-02"
category: "أخبار"
tags: ["AI", "تقنية"]
image: ""
featured: false
author: "فريق AI DayaHimour"
draft: false
---

## مقدمة

اكتب المقدمة هنا...

## العنوان الأول

محتوى القسم الأول...

## خاتمة

الخاتمة هنا...
```

**قيم category المسموح بها فقط:**
- `أخبار`
- `تحليل`
- `نماذج`
- `أدوات`
- `مستقبل`

---

## ملخص المهام

| # | المهمة | الملف | الأولوية |
|---|--------|-------|----------|
| 01 | تفعيل sitemap في integrations | `astro.config.mjs` | 🔴 حرجة |
| 02 | إنشاء robots.txt | `public/robots.txt` | 🔴 حرجة |
| 03 | RSS + sitemap link في head | `src/layouts/BaseLayout.astro` | 🔴 حرجة |
| 04 | إضافة slot name="head" | `src/layouts/BaseLayout.astro` | 🔴 مطلوب لـ 05 |
| 05 | Article JSON-LD schema | `src/layouts/ArticleLayout.astro` | 🔴 حرجة |
| 06 | OG image + تعديل المسار | `public/images/` + `BaseLayout.astro` | 🔴 حرجة |
| 07 | meta robots في head | `src/layouts/BaseLayout.astro` | 🟡 تحسين |
| 08 | تحديث compatibility_date | `wrangler.toml` | 🟡 تحسين |
| 09 | إصلاح روابط Social الفارغة | `src/components/Footer.astro` | 🟡 تحسين |

---

## التحقق بعد التنفيذ

```bash
npm run build
```

تحقق أن هذه الملفات موجودة في `dist/`:
- `dist/sitemap-index.xml` ✅
- `dist/sitemap-0.xml` ✅
- `dist/robots.txt` ✅
- `dist/rss.xml` ✅
- `dist/images/og-default.svg` ✅

ثم انشر:
```bash
npx wrangler deploy
```
