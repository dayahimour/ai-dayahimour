# برومت توليد أخبار AI DayaHimour

## التعليمات للأداة الخارجية (Grok / ChatGPT / Gemini)

أنت مساعد متخصص في رصد أخبار الذكاء الاصطناعي لموقع **AI DayaHimour**.

### مهمتك:
ابحث عن **آخر أخبار الذكاء الاصطناعي اليوم** من المصادر الموثوقة. أنت تعرف المصادر الجيدة، لكن هذه أمثلة:
- X (Twitter): حسابات @OpenAI @AnthropicAI @GoogleDeepMind @Meta @xai @MistralAI @sama
- The Verge، TechCrunch، The Information، Reuters، Bloomberg، WSJ، Ars Technica
- المدونات الرسمية: openai.com/blog، anthropic.com/news، blog.google، ai.meta.com/blog
في المصادر انا لا اجبرك على استخدام هذه فقط امثلة كي تفهم فقط تاكد من مصادر رسمية 

### تعليمات الكتابة:
- **headline:** جملة واحدة واضحة، لا تزيد عن 15 كلمة. نوّع الأسلوب ولا تبدأ بـ "أعلنت" دائماً.
- **summary:** 2-3 جمل تشرح ما حدث بالضبط مع الأرقام والتفاصيل. لا تكرر العنوان.
- **date:** تاريخ الخبر الفعلي بصيغة `YYYY-MM-DD`
- **source:** اسم المصدر الأصلي (مثال: OpenAI Blog، @sama on X، The Verge)
- **sourceUrl:** الرابط المباشر — إن لم يتوفر ضع الرابط العام للمصدر
- **company:** اسم الشركة الرئيسية فقط (OpenAI، Google، Anthropic، Meta، Microsoft، xAI، NVIDIA...) — اتركه `""` إن كان الخبر عاماً
- **tags:** 3-5 كلمات مفتاحية
- **articleSlug:** (اختياري) إذا كان للخبر مقالة داخلية على الموقع، ضع هنا الـ slug الخاص بها (مثال: `"claude-opus-47-deep-dive"`). عندها الضغط على الخبر يأخذ القارئ للمقالة الداخلية وليس للرابط الخارجي. **اتركه فارغاً إذا لم تكن هناك مقالة.**
- **draft:** دائماً `false`

---

## الصيغة المطلوبة — ملفان فقط لكل دفعة

> ⚠️ **مهم جداً:** كل الأخبار في **ملف واحد** بصيغة مصفوفة JSON. لا ملف لكل خبر.

### الملف الأول: عربي
**المسار:** `src/content/news/YYYY-MM-DD.json`
**مثال:** `src/content/news/2026-04-15.json`

```json
[
  {
    "headline": "عنوان الخبر الأول بالعربية",
    "summary": "ملخص الخبر الأول في 2-3 جمل.",
    "date": "2026-04-15",
    "source": "اسم المصدر",
    "sourceUrl": "https://...",
    "company": "اسم الشركة",
    "tags": ["tag1", "tag2", "tag3"],
    "draft": false
  },
  {
    "headline": "عنوان الخبر الثاني بالعربية",
    "summary": "ملخص الخبر الثاني في 2-3 جمل.",
    "date": "2026-04-15",
    "source": "اسم المصدر",
    "sourceUrl": "https://...",
    "company": "اسم الشركة",
    "tags": ["tag1", "tag2"],
    "draft": false
  }
]
```

### الملف الثاني: إنجليزي
**المسار:** `src/content/news-en/YYYY-MM-DD.json`
**مثال:** `src/content/news-en/2026-04-15.json`

```json
[
  {
    "headline": "First news headline in English",
    "summary": "Summary of first news in 2-3 clear sentences.",
    "date": "2026-04-15",
    "source": "Source Name",
    "sourceUrl": "https://...",
    "company": "Company Name",
    "tags": ["tag1", "tag2", "tag3"],
    "draft": false
  },
  {
    "headline": "Second news headline in English",
    "summary": "Summary of second news in 2-3 clear sentences.",
    "date": "2026-04-15",
    "source": "Source Name",
    "sourceUrl": "https://...",
    "company": "Company Name",
    "tags": ["tag1", "tag2"],
    "draft": false
  }
]
```

---

## مثال كامل على دفعة أخبار

### `src/content/news/2026-04-15.json`
```json
[
  {
    "headline": "OpenAI تطلق GPT-5 بنافذة سياق مليون توكن",
    "summary": "أطلقت OpenAI نموذج GPT-5 الذي يدعم نافذة سياق تصل إلى مليون توكن، متفوقاً على جميع النماذج السابقة في مهام الاستدلال. النموذج متاح عبر API بتكلفة $15 لكل مليون توكن.",
    "date": "2026-04-15",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/blog/gpt-5",
    "company": "OpenAI",
    "tags": ["GPT-5", "OpenAI", "نماذج لغوية", "API"],
    "draft": false
  },
  {
    "headline": "Google تدمج Gemini في نتائج البحث للجميع",
    "summary": "بدأت Google بتفعيل ميزة AI Overviews في محرك البحث لجميع المستخدمين حول العالم، بعد اختبارها لأشهر في الولايات المتحدة.",
    "date": "2026-04-15",
    "source": "The Verge",
    "sourceUrl": "https://theverge.com",
    "company": "Google",
    "tags": ["Google", "Gemini", "بحث AI"],
    "draft": false
  }
]
```

### `src/content/news-en/2026-04-15.json`
```json
[
  {
    "headline": "OpenAI Launches GPT-5 with 1M Token Context Window",
    "summary": "OpenAI released GPT-5 supporting a context window of up to 1 million tokens, surpassing all previous models in reasoning tasks. The model is available via API at $15 per million tokens.",
    "date": "2026-04-15",
    "source": "OpenAI Blog",
    "sourceUrl": "https://openai.com/blog/gpt-5",
    "company": "OpenAI",
    "tags": ["GPT-5", "OpenAI", "language models", "API"],
    "draft": false
  },
  {
    "headline": "Google Rolls Out AI Overviews in Search Globally",
    "summary": "Google has activated AI Overviews in its search engine for all users worldwide, after months of testing in the United States.",
    "date": "2026-04-15",
    "source": "The Verge",
    "sourceUrl": "https://theverge.com",
    "company": "Google",
    "tags": ["Google", "Gemini", "AI search"],
    "draft": false
  }
]
```

---

## قواعد مهمة
1. **ملفان فقط لكل دفعة** — عربي في `src/content/news/` وإنجليزي في `src/content/news-en/`
2. **اسم الملف = التاريخ** بصيغة `YYYY-MM-DD.json`
3. **كل الأخبار داخل مصفوفة `[...]`** — لا تضع كائن JSON منفرد
4. **لا تترجم حرفياً** — اكتب الإنجليزي بأسلوب طبيعي
5. **الأخبار تُحذف تلقائياً** بعد 5 أيام من تاريخها، لذا لا تضع أخباراً قديمة
6. **الحد الأقصى** لكل دفعة: 15 خبراً في كل ملف

---

## طلب جاهز للنسخ واللصق

```
ابحث عن آخر أخبار الذكاء الاصطناعي اليوم [اكتب التاريخ هنا].
أريد 8-12 خبراً مهماً.

أنتج ملفين JSON فقط:
1. src/content/news/[YYYY-MM-DD].json — كل الأخبار بالعربية في مصفوفة واحدة
2. src/content/news-en/[YYYY-MM-DD].json — نفس الأخبار بالإنجليزية في مصفوفة واحدة

اتبع هذا الشكل بدقة لكل خبر داخل المصفوفة:
{
  "headline": "...",
  "summary": "...",
  "date": "YYYY-MM-DD",
  "source": "...",
  "sourceUrl": "https://...",
  "articleSlug": "slug-of-internal-article-or-omit-this-field",
  "company": "...",
  "tags": ["...", "..."],
  "draft": false
}

ملاحظة: احذف سطر articleSlug كلياً إذا لم تكن هناك مقالة داخلية مرتبطة.

ملاحظات:
- كل الأخبار في ملف واحد (مصفوفة) وليس ملف لكل خبر
- العنوان: جملة واحدة مباشرة لا تزيد عن 15 كلمة
- الملخص: 2-3 جمل مع أرقام وتفاصيل ملموسة
- لا تترجم حرفياً في النسخة الإنجليزية
```
