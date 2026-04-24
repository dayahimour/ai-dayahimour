# نظام الأخبار — AI DayaHimour

## هيكل ملفات الأخبار

```
src/content/news/YYYY-MM-DD.json        ← عربي
src/content/news-en/YYYY-MM-DD.json     ← إنجليزي
```

---

## نموذج كائن الخبر

```json
{
  "headline": "عنوان الخبر — جملة واحدة، أقل من 15 كلمة",
  "summary": "2-3 جمل تشرح ما حدث بالضبط مع الأرقام والتفاصيل. لا تكرر العنوان.",
  "date": "YYYY-MM-DD",
  "source": "اسم المصدر الأصلي",
  "sourceUrl": "",
  "articleSlug": "",
  "company": "OpenAI",
  "importance": "normal",
  "tags": ["tag1", "tag2", "tag3"],
  "draft": false
}
```

### ملاحظات الحقول
- **sourceUrl**: اتركه `""` — الروابط الخارجية معطلة
- **articleSlug**: اتركه `""` إلا إذا طلب المستخدم ربطه بمقالة داخلية صراحةً
  - **يجب أن يطابق** `slug` المقالة في frontmatter (أو اسم ملف `.md` إذا لم يُحدد `slug`)
  - مثال: إذا كانت المقالة في `src/content/blog/gpt-5-5.md` ولا تحتوي على `slug` مخصص في frontmatter، فـ `articleSlug` يجب أن يكون `"gpt-5-5"`
  - مثال مع `slug` مخصص: إذا كان frontmatter يحتوي على `slug: "my-custom-slug"`، فـ `articleSlug` يجب أن يكون `"my-custom-slug"`
  - **الرابط النهائي**: `/${lang}/blog/${articleSlug}/`
- **company**: اسم الشركة الرئيسية فقط، أو `""` للأخبار العامة
- **importance**: `"prominent"` | `"normal"` — يحدد قسم العرض. الافتراضي `"normal"`.
  - `"prominent"`: إعلان إطلاق نموذج AI جديد فقط (new model announcement)
  - `"normal"`: جميع باقي الأخبار (أدوات، تحديثات، شراكات، استثمارات، تقارير...)
  - ⚠️ **خطأ شائع**: كتابة `"breaking"` — المخطط (schema) يقبل فقط `"prominent"` أو `"normal"`. لا توجد قيمة `"breaking"` أو `"high"` أو `"critical"`.
- **draft**: دائماً `false`

---

## قواعد headline
- جملة واحدة واضحة مباشرة، أقل من 15 كلمة
- الكلمة المفتاحية الأقوى في البداية (SEO)
- **نوّع الأفعال الافتتاحية**: لا تبدأ كل الأخبار بـ"أعلنت" — استخدم: كشفت، أطلقت، وسّعت، أتاحت، أكدت، رصد، وصل إلى، يتجاوز، تُطلق...
- لا إيموجي
- **لا مصطلحات زمنية مؤقتة**: استخدم التاريخ المحدد بدلاً من "اليوم" أو "الآن"
- **الاسم الرسمي الدقيق**: استخدم الاسم الرسمي للنموذج/المنتج كما أعلنته الشركة

## قواعد summary
- **1-2 جمل** فقط. لا تتجاوز 40 كلمة. هذا يضمن البطاقة لا تصبح "طزيلة" (طويلة/ضخمة).
- أرقام وتفاصيل ملموسة (سعر، نسبة، تاريخ، مقارنة)
- لا تكرر نص العنوان
- لا تخترع أرقاماً — استخدم فقط ما ورد في المصادر الموثوقة
- الأخبار ذات `importance: "prominent"` تُعرض في شبكة عمودين فقط — اجعل summary أقصر (جملة واحدة بكلمات دقيقة)

---

## مثال كامل

### `src/content/news/2026-04-21.json`
```json
[
  {
    "headline": "Google تُطلق Gemini 2.5 Pro بأداء متصدر في Chatbot Arena",
    "summary": "سجّل Gemini 2.5 Pro أعلى نقاط في تاريخ Chatbot Arena بتقييم بلغ 1380 نقطة ELO، متقدماً على GPT-4o وClaude 3.7 Sonnet. النموذج متاح عبر Google AI Studio وAPI بتكلفة $1.25 لكل مليون توكن للإدخال.",
    "date": "2026-04-21",
    "source": "Google Blog",
    "sourceUrl": "",
    "articleSlug": "",
    "company": "Google",
    "tags": ["Gemini", "Google", "نماذج لغوية", "Chatbot Arena", "2026"],
    "draft": false
  }
]
```

### `src/content/news-en/2026-04-21.json`
```json
[
  {
    "headline": "Google Launches Gemini 2.5 Pro, Tops Chatbot Arena Leaderboard",
    "summary": "Gemini 2.5 Pro achieved the highest score in Chatbot Arena history with 1380 ELO points, surpassing GPT-4o and Claude 3.7 Sonnet. The model is now available via Google AI Studio and API at $1.25 per million input tokens.",
    "date": "2026-04-21",
    "source": "Google Blog",
    "sourceUrl": "",
    "articleSlug": "",
    "company": "Google",
    "tags": ["Gemini", "Google", "language models", "Chatbot Arena", "2026"],
    "draft": false
  }
]
```

---

## قواعد الإنتاج
1. **ملفان فقط** لكل دفعة: عربي + إنجليزي
2. **اسم الملف = التاريخ** بصيغة `YYYY-MM-DD.json`
3. **كل الأخبار في مصفوفة `[...]`** — لا كائن JSON منفرد
4. **الحد الأقصى**: 15 خبراً في كل ملف
5. **لا ترجمة حرفية** — الإنجليزي بأسلوب طبيعي
6. **لا تضع أخباراً قديمة** — تُحذف تلقائياً بعد 5 أيام
7. **articleSlug** فقط عند الطلب الصريح

## SEO الأخبار
- headline يبدأ بالكلمة المفتاحية الأقوى
- tags: اسم النموذج + الشركة + وصف + السنة
- لا تكرار نفس البنية في كل عناوين الدفعة الواحدة

---

## قائمة التحقق قبل الحفظ (Validation Checklist)

قبل إنهاء أي ملف أخبار — **اقرأ كل خبر مرة أخيرة** وتأكد من:

| # | الحقل | القاعدة |
|---|-------|---------|
| 1 | `importance` | فقط `"prominent"` أو `"normal"` — لا `"breaking"` ولا `"high"` ولا `"critical"` |
| 2 | `date` | صيغة `"YYYY-MM-DD"` — تطابق تاريخ اليوم |
| 3 | `articleSlug` | إذا غير فارغ → يجب أن يطابق `slug` المقالة بالضبط |
| 4 | `source` | اسم المصدر نصياً (لا رابط) |
| 5 | `sourceUrl` | دائماً `""` |
| 6 | `draft` | دائماً `false` |
| 7 | `summary` | 1-2 جمل فقط (أقل من 40 كلمة) |
| 8 | `headline` | جملة واحدة، أقل من 15 كلمة |
| 9 | tags | 3-5 كلمات، تتضمن اسم الشركة/النموذج + السنة |
| 10 | file name | `"YYYY-MM-DD.json"` بالضبط |

> 🛑 **أهم خطأ شائع:** `importance: "breaking"` → **فشل البناء كامل**. الـ schema يقبل فقط `"prominent"` أو `"normal"`.
