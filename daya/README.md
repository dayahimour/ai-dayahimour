# مدونة أخبار الذكاء الاصطناعي

موقع إخباري ومعلوماتي عن الذكاء الاصطناعي تم بناؤه باستخدام Next.js 15 ويتم نشره على Cloudflare Pages.

## المشاكل التي تم إصلاحها

1. **مشكلة فشل نشر Cloudflare Pages**: كان ملف `wrangler.toml` يحتوي على إعدادات غير مدعومة لـ Cloudflare Pages (أقسام `[pages]` و `[build]`) مما تسبب في الخطأ:
   ```
   Configuration file for Pages projects does not support "build"
   ```

2. **الحل**: تم إزالة الأقسام غير المدعومة من `wrangler.toml`، والاحتفاظ بالإعدادات الأساسية فقط:
   ```toml
   name = "ai-dayahimour"
   compatibility_date = "2025-03-31"
   pages_build_output_dir = "out"
   compatibility_flags = [ "nodejs_compat" ]
   ```

3. **أمر النشر الخاطئ**: كان يستخدم `npx wrangler deploy` بدلاً من `npx wrangler pages deploy` للمشاريع الثابتة.

## الإصلاحات المطبقة

- ✅ تحديث ملف `wrangler.toml` لإزالة الأقسام غير المدعومة
- ✅ إضافة أمر نشر صحيح في `package.json` (`npm run deploy`)
- ✅ بناء المشروع بنجاح (`npm run build`)
- ✅ رفع التعديلات إلى GitHub

## كيفية النشر

### الطريقة 1: باستخدام أمر npm
```bash
npm run deploy
```
هذا الأمر سيقوم بـ:
1. بناء المشروع (إن لم يكن مبني)
2. رفع مجلد `out/` إلى Cloudflare Pages

### الطريقة 2: يدوياً
```bash
# بناء المشروع
npm run build

# النشر إلى Cloudflare Pages
npx wrangler pages deploy out --project-name=ai-dayahimour --branch=main
```

## متطلبات النشر

1. **تسجيل الدخول إلى Cloudflare**: تأكد من تسجيل الدخول إلى حساب Cloudflare:
   ```bash
   npx wrangler whoami
   ```

2. **المشروع على Cloudflare**: تأكد من وجود مشروع باسم `ai-dayahimour` في Cloudflare Pages. إذا لم يكن موجوداً:
   - سينشئ wrangler مشروعاً جديداً تلقائياً
   - أو يمكنك إنشاؤه يدوياً من [Cloudflare Dashboard](https://dash.cloudflare.com/)

3. **فرع الإنتاج**: استخدم `main` كفرع إنتاج (سيطلب wrangler ذلك عند النشر لأول مرة)

## بنية المشروع

```
├── app/                    # Next.js App Router
│   ├── globals.css        # الأنماط العامة
│   ├── layout.tsx         # تخطيط الموقع
│   └── page.tsx           # الصفحة الرئيسية
├── out/                   # الملفات المبنية للنشر
├── next.config.js         # إعدادات Next.js
├── package.json           # التبعيات وأوامر npm
├── wrangler.toml          # إعدادات Cloudflare Pages
└── tsconfig.json          # إعدادات TypeScript
```

## التطوير محلياً

```bash
# تثبيت التبعيات
npm install

# تشغيل خادم التطوير
npm run dev

# فتح المتصفح
open http://localhost:3000
```

## استكشاف الأخطاء وإصلاحها

### الخطأ: "The project you specified does not exist"
- تأكد من وجود مشروع `ai-dayahimour` في Cloudflare Pages
- تأكد من تسجيل الدخول إلى الحساب الصحيح (`npx wrangler whoami`)

### الخطأ: "Missing entry-point to Worker script"
- تأكد من استخدام `wrangler pages deploy` وليس `wrangler deploy`
- تأكد من وجود مجلد `out/` بعد البناء

### الخطأ: "Configuration file for Pages projects does not support 'build'"
- تم إصلاحه بإزالة قسم `[build]` من `wrangler.toml`

## المساعدة

إذا استمرت المشاكل:
1. تحقق من سجلات wrangler: `~/.config/.wrangler/logs/`
2. تأكد من تثبيت wrangler: `npx wrangler --version`
3. راجع وثائق Cloudflare Pages: https://developers.cloudflare.com/pages/

## الرخصة

© 2025 مدونة الذكاء الاصطناعي. جميع الحقوق محفوظة.