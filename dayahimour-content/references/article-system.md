# نظام كتابة المقالات — AI DayaHimour

## Frontmatter القياسي (مُحسّن للـ SEO)

```yaml
---
title: "[الكلمة المفتاحية في البداية — عنوان جذاب مختصر يحفز النقر]"
description: "[150-160 حرفاً، تحتوي الكلمة الرئيسية في البداية، وتلخص الفائدة للقارئ]"
date: "YYYY-MM-DD"
updatedDate: "YYYY-MM-DD"   # اختياري — يُضاف فقط عند تحديث فعلي للمقالة
slug: "seo-friendly-keyword-url"
category: "[التصنيف]"
tags: ["كلمة مفتاحية رئيسية", "كلمة مرادفة 1", "كلمة مرادفة 2", "2026"]
image: "/images/[slug].webp"
author: "فريق AI DayaHimour"
featured: false
draft: false
---
```

**حقل `tier` — اختياري في frontmatter عند `category: "نماذج"`:**
```yaml
tier: "flagship"   # أو "standard" أو "budget"
```
> المصدر الرئيسي للتصنيف هو `src/data/models-ar.ts` (أو `models-en.ts`). يُستحسن إضافة `tier` في frontmatter للمقالات الجديدة، لكنه ليس إلزامياً إذا كان النموذج مسجلاً في ملفات البيانات.

### قواعد الحقول الجديدة
- **`updatedDate`**: تاريخ آخر تحديث للمقالة. **يُضاف فقط عند تحديث فعلي** — إضافة معلومات جديدة، تعديل أرقام benchmark، أو تحديث أسعار. لا تُضفه في النشر الأول.
- **`slug`**: رابط نظيف بالإنجليزية، كلمات مفتاحية مفصولة بشرطة، لا تتجاوز 4-5 كلمات، بدون سنة، بدون أرقام عشوائية. يُفضّل أن يكون اسم ملف الصورة متناسقاً معه لكن التطابق ليس إلزامياً تقنياً.

## التصنيفات المتاحة
`نماذج` | `أدوات` | `شركات` | `تحليل` | `أخبار` | `فيديو` | `صور` | `مستقبل` | `مقارنات`

---

## بنية المقالة حسب التصنيف

### 1. نماذج (AI Models)
مقالات عن نماذج لغوية أو صور أو فيديو محددة. استخدم **أشرطة التقييم الملونة** (انظر القسم أدناه). بنية المقالة:
- مقدمة عن الإصدار والتاريخ (تتضمن الكلمة المفتاحية بشكل طبيعي)
- المواصفات التقنية الرئيسية (في فقرات طبيعية، لا قوائم)
- أداء المعايير Benchmarks (مع أشرطة HTML)
- مقارنة سريعة بالمنافسين
- حالات الاستخدام المثلى (مع أمثلة واقعية)
- خاتمة تحليلية حاسمة

**تصنيف النماذج (Tier):**
- **flagship**: النماذج الرائدة الأقوى والأغلى — المنافسة المباشرة مع أقوى نماذج السوق (مثال: Claude Opus 4.6, GPT-5.4, Gemini 3.1 Pro, MiMo-V2.5-Pro)
- **standard**: النماذج المتوسطة — الأداء الجيد مع تكلفة معقولة (مثال: Claude Sonnet 4.6, GPT-4o, Gemini 2.0 Flash)
- **budget**: النماذج الاقتصادية الخفيفة — سرعة عالية وتكلفة منخفضة (مثال: Gemini Nano, GPT-4o-mini, Claude Haiku)

> يجب أن يتطابق التصنيف مع ما في ملف `src/data/models-ar.ts`.

### 2. شركات (Companies)
- **التأسيس والمؤسسون**: القصة، التاريخ، المؤسسون الرئيسيون
- **المنتجات الأساسية**: ما تقدمه الشركة
- **الأرقام والتمويل**: الإيرادات، التقييم، الجولات الاستثمارية
- **المنافسة والتحديات**: موقعها في السوق
- **الرؤية المستقبلية**: خطط الشركة إن توفرت
- **خاتمة تحليلية حاسمة**

### 3. أدوات (Tools)
- ما يفعله المنتج بالضبط
- الجمهور المستهدف
- التكاملات مع الأدوات الأخرى
- السعر والخطط
- نقاط أخرى حسب الأداة

### 4. تحليل (Analysis)
- 1500-2500 كلمة
- عناوين فرعية متعددة المستويات (H2, H3, H4) بشكل هيكلي منطقي
- أمثلة واقعية وإحصائيات موثقة
- مقتطفات برمجية إذا لزم الأمر
- خاتمة تحليلية حاسمة

### 5. فيديو (Video)
- نماذج توليد الفيديو والأدوات المرتبطة به
- المواصفات التقنية والجودة
- سرعة التوليد والتكلفة
- مقارنة بالمنافسين

### 6. صور (Images)
- نماذج توليد الصور والأدوات
- الدقة والأنماط المدعومة
- الاستخدامات التجارية والقيود

### 7. مستقبل (Future)
- توقعات وتقارير مستقبلية
- رؤى خبراء معتمدين (مع اقتباسات صريحة Blockquotes لزيادة الموثوقية)
- اتجاهات تقنية ناشئة

### 8. مقارنات (Comparisons)
- جداول مقارنة واضحة (محركات البحث تستخرج الجداول لـ Featured Snippets)
- معايير محددة للمقارنة
- توصية حسب حالة الاستخدام

### 9. أخبار (News — مقال مطوّل)
- 800-1200 كلمة
- مباشرة: "ماذا حدث" و"متى"
- سياق مباشر فقط وتأثير الخبر على السوق

---

## قواعد SEO المتقدمة (E-E-A-T + Linking)

### الكلمات المفتاحية (Keywords)
- ضع الكلمة المفتاحية الرئيسية في العنوان (H1)، وفي أول 100 كلمة من المقال، وفي عنوان فرعي واحد (H2) على الأقل.
- **يُمنع الحشو (Keyword Stuffing)**: استخدم الكلمات الدلالية (LSI) والتقنية المرتبطة بالموضوع بشكل طبيعي.
- مثال: إذا كانت الكلمة الرئيسية "Gemini 2.5 Pro"، استخدم مرادفات مثل "النموذج اللغوي من Google" أو "الجيل الجديد من Gemini".

### الروابط الداخلية (Internal Links)
- يجب إضافة **2 إلى 4 روابط داخلية** في كل مقال تشير إلى مقالات سابقة في AI DayaHimour ذات صلة بالسياق.
- استخدم **Anchor Text** معبّر وليس "اضغط هنا". (مثال: "كما رأينا في تحليلنا لـ [أداء نماذج اللغة مفتوحة المصدر]...")
- لا تُضف روابط داخلية اصطناعية — يجب أن تكون ذات صلة حقيقية بالنص.

### الروابط الخارجية (External Links)
- **لا تُضف روابط خارجية قابلة للنقر** في المحتوى. الروابط الخارجية في الموقع معطّلة.
- لإثبات الموثوقية، اكتفِ بـ **ذكر اسم المصدر نصياً** في النص (مثال: "وفقاً لتقرير Artificial Analysis..." أو "سجّلت بيانات LM Arena...").
- اذكر المصدر في النص مرة أو مرتين كحد أقصى، لا في كل رقم.

### تحسين الصور (Image Alt Text)
- كل صورة يجب أن تحتوي على وصف دقيق: `alt="وصف دقيق يحتوي على كلمة مفتاحية مرادفة"`.
- مثال: `alt="أداء Gemini 2.5 Pro في معايير الذكاء الاصطناعي"`.

### قابلية القراءة الفائقة (Scannability)
- لا تجعل الفقرات تتجاوز **3-4 أسطر متصلة**. عين القارئ تحب المساحات البيضاء.
- استخدم عناوين فرعية (H2, H3) بشكل متكرر لتقسيم المحتوى.
- الجداول مسموحة للمقارنات والبيانات التقنية — قد تُستخرج لمحركات البحث.

### E-E-A-T (الخبرة، التجربة، الموثوقية، الجدارة بالثقة)
- **اقتباسات الخبراء**: في مقالات التحليل والشركات، استخدم اقتباسات صريحة (Blockquotes) لزيادة الموثوقية.
- **مصادر موثوقة**: اذكر الأوراق البحثية الرسمية أو تقارير الشركات نصياً.
- **تحديث مستمر**: استخدم `updatedDate` عند إضافة معلومات جديدة.

---

## أشرطة التقييم الملونة (للمقالات عن النماذج فقط)

> ⚠️ استخدم هذا فقط لمقالات النماذج، وفقط بأرقام موثقة من مصادر رسمية.
> إذا لم تجد قيمة معيار معين في مصدر موثوق → لا تضعه نهائياً.
> إذا توفرت معايير إضافية رسمية (لنماذج صور أو فيديو أو صوت) → أضفها بدقة.

### المعايير الأساسية (للنماذج اللغوية):
- **AIME 2025** — رياضيات متقدمة
- **GPQA Diamond** — علوم واستنتاج علمي
- **MMLU** — معرفة عامة
- **SWE-Bench Verified** — برمجة وهندسة برمجيات
- **HumanEval** — برمجة أساسية
- **MMMU** — مهام متعددة الوسائط
- **ARC-AGI-2** — استنتاج تجريدي
- **LiveCodeBench** — برمجة تنافسية

> للنماذج المتخصصة (صور، فيديو، صوت) استخدم المعايير الأكثر صلة بمجالها — مثلاً: PSNR/SSIM/FID لنماذج الصور، VBench/FID للفيديو. لا تفرض معايير نصية على نماذج غير نصية.

### مصادر البيانات الموثوقة (بدقة 100%):
- Artificial Analysis Intelligence Index
- Chatbot Arena (LM Arena) leaderboards
- System Cards الرسمية من الشركات (OpenAI, Anthropic, Google)
- Papers With Code / EvalPlus
- تقارير التقييم الرسمية من الشركات المطورة

### قالب HTML/CSS كامل (8 أشرطة):

```html
<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">المعايير المرجعية — [الشهر/السنة]</p>

  <!-- AIME 2025 — أزرق: رياضيات -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">AIME 2025</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">XX.X%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: XX.X%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- GPQA Diamond — بنفسجي: علوم -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GPQA Diamond</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">XX.X%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: XX.X%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- MMLU — أزرق: معرفة عامة -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">MMLU</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">XX.X%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: XX.X%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- SWE-Bench Verified — أخضر: برمجة -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-Bench Verified</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">XX.X%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: XX.X%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- HumanEval — أخضر: برمجة أساسية -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">HumanEval</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">XX.X%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: XX.X%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- MMMU — وردي: متعدد الوسائط -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">MMMU</span>
      <span style="color: #f472b6; font-weight: 700; font-size: 14px;">XX.X%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: XX.X%; height: 100%; background: linear-gradient(90deg, #db2777, #f472b6); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- ARC-AGI-2 — أزرق: استنتاج منطقي -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">ARC-AGI-2</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">XX.X%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: XX.X%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- LiveCodeBench — أخضر: برمجة تنافسية -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">LiveCodeBench</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">XX.X%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: XX.X%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- المفتاح التوضيحي -->
  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">رياضيات / معرفة عامة / استنتاج</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">علوم</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">برمجة</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #f472b6;"></div><span style="color: #94a3b8; font-size: 12px;">متعدد الوسائط</span></div>
  </div>
</div>
```

### ألوان حسب الفئة
| اللون | الكود | الفئة |
|-------|-------|-------|
| أزرق | `#3b82f6 → #60a5fa` | رياضيات، معرفة عامة، استنتاج منطقي (AIME, MMLU, ARC-AGI-2) |
| بنفسجي | `#7c3aed → #a78bfa` | علوم، فيزياء، كيمياء، بيولوجيا (GPQA) |
| أخضر | `#059669 → #34d399` | برمجة، كود، SWE-Bench، HumanEval، LiveCodeBench |
| وردي | `#db2777 → #f472b6` | متعدد الوسائط، صور، فيديو، وكلاء (MMMU) |
| برتقالي | `#ea580c → #fb923c` | سرعة، استجابة، كفاءة |

### قواعد البيانات
- **لا تخترع أرقاماً** — استخدم فقط بيانات من المصادر الموثوقة
- **اذكر التاريخ** في عنوان المعايير (مثال: "المعايير المرجعية — أبريل 2026")
- **أضف نسبة مئوية دقيقة** (مثال: 94.3% وليس "حوالي 94%")
- **طول الشريط** يجب أن يطابق النسبة المئوية المكتوبة بالضبط (`width: XX.X%`). هذا خطأ HTML تقني يُفسد مصداقية البيانات — يجب التحقق منه قبل الحفظ.
- **قارن مع المنافسين** في النص المحيط بالجدول (وليس داخل الـ HTML)
- إذا لم تجد قيمة معيار معين → احذف الشريط كاملاً من القالب، لا تتركه فارغاً

---

## قواعد الأسلوب الصحفي (ضد "المظهر AI")

### ❌ نمط AI مكشوف
```
## القدرات الرئيسية
- نافذة السياق: 1 مليون رمز
- الإخراج الأقصى: 128 ألف رمز
- يتميز بمجموعة من الميزات المتقدمة
```

### ✅ أسلوب صحفي طبيعي
```
يأتي النموذج بنافذة سياق تصل إلى مليون رمز، مما يسمح باستيعاب مشروع
برمجي كامل في جلسة واحدة. الإخراج يبلغ 128 ألف رمز، ويدعم مستويات
متعددة للتفكير الممتد حسب تعقيد المهمة.
```

### التحويلات الإلزامية
| بدلاً من | استخدم |
|---------|--------|
| قوائم نقطية للميزات | فقرات متصلة تدمج المعلومات |
| "كما يدعم النموذج..." | "يدعم أيضاً..." / "إضافة إلى ذلك..." |
| "يتميز بـ" | "يقدم..." / "يأتي مع..." |
| "في عصر التكنولوجيا..." | ابدأ مباشرة بالموضوع |
| "الحكم النهائي:" | خاتمة تحليلية حاسمة |
| مخاطبة بـ "أنت" | ضمير الغائب، صف لا توجّه |
| "وفقاً لـ" مكرر | استخدم "تشير بيانات..." أو "سجّلت..." |
| "هذا يجعله مناسباً لـ" | "يتيح استخدامه في..." |
| "بما في ذلك" | "منها..." أو "مثل..." |

### قواعد صارمة لمنع "المظهر AI"

1. **لا قوائم مرقمة في كل مكان** — "1. القدرات متعددة الوسائط" ثم "2. التفكير والاستدلال" — هذا نمط AI ميت
2. **لا جمل تبدأ بـ "كما يدعم النموذج..." أو "يتميز بمجموعة من..."**
3. **لا قوائم نقطية (-) في كل فقرة** — استخدم فقرات نصية طبيعية
4. **لا عناوين منسقة بشكل متكرر** (## ثم ### ثم فقرات بنفس النمط)
5. **لا استخدام "وفقاً لـ" أكثر من مرة أو مرتين**
6. **لا تكرار عبارات مثل "هذا يجعله مناسباً لـ" أو "بما في ذلك"**

### أمثلة على الفرق:

**❌ AI واضح:**
"- **نافذة السياق**: 1 مليون رمز
- **الإخراج الأقصى**: 128 ألف رمز
- **التفكير الهجين**: يدعم أوضاع متعددة"

**✅ صحفي طبيعي:**
"يأتي النموذج بنافذة سياق تصل إلى مليون رمز، مما يسمح باستيعاب مشروع برمجي كامل في جلسة واحدة. الإخراج يصل لـ 128 ألف رمز، ويدعم مستويات متعددة للتفكير الممتد حسب تعقيد المهمة."

---

## قواعد صياغة إضافية

### الجداول
- **الجداول مسموحة** عند الحاجة: مقارنات، أسعار، بيانات تقنية — لكن باعتدال وبدون إفراط
- لا تُسرف في الجداول البسيطة التي يمكن كتابتها نصاً

### المصطلحات الزمنية
- **ممنوع استخدام مصطلحات زمنية مؤقتة**: لا "اليوم"، ولا "تم إطلاقه اليوم"، ولا "أعلنت اليوم"، ولا "الآن"، ولا "حالياً"
- استخدم التاريخ المحدد دائماً (مثال: "في 21 أبريل 2026" بدلاً من "اليوم")

### الأسماء الرسمية
- **الاسم الرسمي الدقيق**: استخدم الاسم الرسمي للنموذج/المنتج كما أعلنته الشركة بالضبط
- لا تختصر، لا تغير، ولا تضيف كلمات غير موجودة في الاسم الرسمي
- مثال: إذا كان الاسم الرسمي "GPT Image 2.0"، لا تكتب "ChatGPT Images 2.0" أو "GPT-Image-2"
- مثال: إذا كان "MiMo-V2.5-Pro"، لا تكتب "MiMo V2.5" فقط

### الخاتمة
- **خاتمة تحليلية حاسمة** — لا تطرح أسئلة مفتوحة أو استفهامية
- ممنوع: "السؤال الذي يبقى مفتوحاً..." أو "هل...؟"
- اختم بتحليل موجز يُلمح إلى التداعيات المستقبلية أو الموقف التنافسي

### الطول
- بين 1000 و 1800 كلمة، ويمكن أن يتجاوز 2000 كلمة حسب توفر المعلومات
- استخدم عناوين فرعية (##) لتقسيم المحتوى
- صف ما يحدث، لا تقدم نصائح مباشرة للقارئ
- إذا ذكرت أرقاماً، اذكر سياقها دون حاجة لروابط خارجية

### التقييمات
- **لا تقييمات بنجوم** ⭐⭐⭐⭐⭐ أو أرقام من 10 أبداً
- **لا إيموجي مطلقاً** — ممنوعة بالكامل في العناوين، النص، الجداول، والمقارنات
- لا فقرات "الحكم النهائي" أو "الخلاصة" المباشرة
