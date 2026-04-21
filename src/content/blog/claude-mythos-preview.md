---
title: "Claude Mythos Preview: النموذج الحدودي الأقوى من Anthropic الذي يُحجب عن العامة"
description: "دليل شامل: أعلنت Anthropic في 7 أبريل 2026 عن Claude Mythos Preview ضمن Project Glasswing. يتفوق النموذج بشكل حاسم على Opus 4.6 في SWE-bench Verified بنسبة 93.9% وGPQA Diamond بنسبة 94.6% وغيرها من معايير البرمجة الوكيلة، لكنه محظور للجمهور بسبب قدرته على اكتشاف آلاف الثغرات الصفرية autonomously. - اكتشف أهم التفاصيل والمقارنات التي تحتاجها."
date: "2026-04-11"
category: "نماذج"
tags: ["Claude Mythos Preview", "Anthropic", "SWE-bench", "Project Glasswing", "ذكاء اصطناعي", "2026"]
image: "/images/claude-mythos-preview.webp"
author: "فريق AI DayaHimour"
featured: false
draft: false
---

أعلنت شركة Anthropic في 7 أبريل 2026 عن Claude Mythos Preview ضمن مبادرة Project Glasswing. يُصنف النموذج كنموذج حدودي عام الغرض غير متاح للجمهور، ويهدف المشروع إلى استخدام قدراته في تأمين البرمجيات الحرجة عالمياً.

### المواصفات التقنية الرئيسية

Claude Mythos Preview هو نموذج غير مصدر للاستخدام العام، ويتميز بقدرات وكيلية متقدمة في اكتشاف واستغلال الثغرات الأمنية autonomously. أظهر النموذج خلال الأسابيع السابقة للإعلان اكتشاف آلاف الثغرات عالية الخطورة في كل أنظمة التشغيل الرئيسية وكل المتصفحات الرئيسية، بالإضافة إلى برمجيات أخرى مهمة. بعض هذه الثغرات كانت موجودة منذ عقود ولم تكتشفها الاختبارات البشرية أو الآلية السابقة.

### أداء المعايير Benchmarks

أجرت Anthropic تقييمات رسمية على Claude Mythos Preview في أبريل 2026، وتظهر النتائج تفوقاً واضحاً مقارنة بـ Opus 4.6 في المعايير المتعلقة بالبرمجة الوكيلة والاستنتاج العلمي.

<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">المعايير المرجعية الرئيسية — أبريل 2026</p>

  <!-- GPQA Diamond — بنفسجي: علوم -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GPQA Diamond</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">94.6%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 94.6%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- SWE-Bench Verified — أخضر: برمجة -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-Bench Verified</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">93.9%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 93.9%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- المفتاح التوضيحي -->
  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">علوم</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">برمجة</span></div>
  </div>
</div>

تظهر التقييمات الرسمية تفوقاً إضافياً في معايير أخرى متخصصة. حقق النموذج 77.8% على SWE-bench Pro مقابل 53.4% لـ Opus 4.6، و82.0% على Terminal-Bench 2.0 مقابل 65.4%، و59.0% على SWE-bench Multimodal (تنفيذ داخلي) مقابل 27.1%، و87.3% على SWE-bench Multilingual مقابل 77.8%. كما سجل 83.1% على CyberGym مقابل 66.6%، و79.6% على OSWorld-Verified مقابل 72.7%.

### مقارنة سريعة بالمنافسين

يتفوق Claude Mythos Preview على Opus 4.6 في جميع المعايير المذكورة، مع فارق يصل إلى 24.4 نقطة مئوية في SWE-bench Pro. يبرز التفوق بشكل خاص في المهام الوكيلة التي تتطلب اكتشاف ثغرات واستغلالها دون توجيه بشري. لا تتوفر بيانات مقارنة مباشرة مع نماذج أخرى مثل GPT-5.4 أو Gemini 3.1 في هذه المرحلة الرسمية، إلا أن النتائج الداخلية لـ Anthropic تؤكد الريادة في القدرات البرمجية والسيبرانية.

### حالات الاستخدام المثلى

يُخصص Claude Mythos Preview حالياً لأكثر من 40 شريكاً في Project Glasswing، من بينهم Amazon Web Services وApple وGoogle وMicrosoft وNVIDIA وCrowdStrike وLinux Foundation. يستخدم الشركاء النموذج في فحص البرمجيات الأساسية واكتشاف الثغرات الصفرية وإصلاحها قبل استغلالها. لا يُسمح بالاستخدام العام، ويُقتصر الوصول على أغراض دفاعية فقط بعد مرحلة الـ preview.

### السياق الأوسع للقدرات الوكيلية

تعكس قدرات Mythos Preview اتجاهاً أوسع في تطوير النماذج الحدودية التي تتجاوز المهام التقليدية إلى الاستقلالية الكاملة في البيئات المعقدة. اكتشف النموذج ثغرة عمرها 27 عاماً في OpenBSD، وثغرة عمرها 16 عاماً في FFmpeg، وسلسلة ثغرات في نواة Linux تسمح بالسيطرة الكاملة على النظام. هذه القدرات تثير تساؤلات حول توازن المخاطر والفوائد في نشر نماذج تتفوق على الاختبارات البشرية التقليدية.

يبقى السؤال مفتوحاً حول المدة التي ستستغرقها الشركات في تطوير الضمانات الأمنية اللازمة قبل إتاحة نماذج بهذا المستوى من القدرة للاستخدام العام، وكيف سيؤثر ذلك على سرعة تطوير الذكاء الاصطناعي في مجالات الأمن السيبراني والبرمجة.

---

###  استكشف المزيد
هل تريد معرفة المزيد عن أحدث النماذج المذكورة هنا؟ تفضل بزيارة [قائمة أقوى نماذج الذكاء الاصطناعي](/ar/models/) للحصول على مقارنة شاملة، أو تصفح [أحدث أدوات الذكاء الاصطناعي](/ar/tools/) لتحسين إنتاجيتك.
