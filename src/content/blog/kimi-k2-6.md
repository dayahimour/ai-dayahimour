---
title: "Kimi K2.6: نموذج مفتوح المصدر يتحدى كبار الأسماء في البرمجة الوكيلية"
description: "أطلقت Moonshot AI نموذج Kimi K2.6 مفتوح المصدر بمعمارية تريليون معامل، يتفوق على GPT-5.4 وClaude Opus 4.6 في معايير البرمجة والبحث الوكيلي العميق."
date: "2026-04-20"
category: "نماذج"
tags: ["Kimi K2.6", "Moonshot AI", "نماذج مفتوحة المصدر", "برمجة وكيلية", "2026"]
image: "/images/kimi-k2-6.webp"
author: "فريق AI DayaHimour"
featured: true
draft: false
---

في الوقت الذي تواصل فيه المختبرات الكبرى تقديم نماذجها خلف بوابات مدفوعة، أصدرت شركة Moonshot AI الصينية يوم 20 أبريل 2026 نموذج Kimi K2.6 بشكل مفتوح المصدر بالكامل منذ اليوم الأول. ليس مجرد ترقية عادية لسلسلة K2 — بل يُعلن النموذج عن نفسه بأرقام تقييم تتصدر جداول البرمجة الوكيلية وتنافس مباشرة GPT-5.4 وClaude Opus 4.6 وGemini 3.1 Pro، وكلها نماذج مدفوعة من أبرز شركات الذكاء الاصطناعي في العالم.

## بنية ترليون معامل مع نافذة سياق تبلغ 262 ألف رمز

يقوم K2.6 على معمارية Mixture-of-Experts بتريليون معامل إجمالي، مع تفعيل 32 مليار معامل فقط في كل استدعاء — وهو ما يمنحه كفاءة حسابية عالية دون التنازل عن القدرة الاستدلالية. نافذة السياق ثابتة عند 262,144 رمزاً عبر جميع إصدارات النموذج، وهو ما يعني إمكانية تحميل قاعدة بيانات برمجية متوسطة الحجم بالكامل — مع وثائقها واختباراتها — في جلسة استدلال واحدة.

التحسين الجوهري الذي يميز K2.6 عن سابقه K2.5 لا يكمن في حجم نافذة السياق ذاتها، بل في الاستقرار داخلها. المشكلة التقليدية للنماذج الكبيرة لم تكن قدر ما تحمله، بل ما تحتفظ به من تماسك حين تمتلئ النافذة. وهذا تحديداً ما يستهدفه K2.6 في مهام البرمجة طويلة الأفق.

يدعم النموذج المدخلات النصية والصورية والمرئية بشكل أصلي دون الحاجة إلى فروع نموذج منفصلة، إضافة إلى أربعة أوضاع تشغيل: وضع التفكير المعمّق، والوضع الفوري، ووضع الحفاظ على التفكير، والتفكير المتداخل — مما يمنح المطورين مرونة واسعة في الموازنة بين السرعة والعمق الاستدلالي.

## أرقام التقييم: تفوق واضح في البرمجة والبحث الوكيلي

الأرقام الواردة في التقرير الرسمي لـ Moonshot AI تُقدّم صورة لافتة عند مقارنة K2.6 بأبرز النماذج المنافسة في مستويات تفكير مرتفعة موثقة:

<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">المعايير المرجعية الرئيسية — أبريل 2026</p>

  <!-- HLE-Full w/ tools — أزرق: وكيلي عام -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">HLE-Full w/ tools (وكيلي عام)</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">54.0%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 54.0%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- DeepSearchQA — بنفسجي: بحث عميق -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">DeepSearchQA (f1-score)</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">92.5%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 92.5%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- SWE-Bench Pro — أخضر: برمجة -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-Bench Pro (برمجة)</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">58.6%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 58.6%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- SWE-Bench Verified — أخضر فاتح: برمجة -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-Bench Verified</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">80.2%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 80.2%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- GPQA-Diamond — بنفسجي: علوم -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GPQA-Diamond (علوم)</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">90.5%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 90.5%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- AIME 2026 — أزرق: رياضيات -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">AIME 2026 (رياضيات)</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">96.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 96.4%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- MathVision w/ python — وردي: رؤية حسابية -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">MathVision w/ Python</span>
      <span style="color: #f472b6; font-weight: 700; font-size: 14px;">93.2%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 93.2%; height: 100%; background: linear-gradient(90deg, #db2777, #f472b6); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- LiveCodeBench — أخضر: برمجة مباشرة -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">LiveCodeBench v6</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">89.6%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 89.6%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- المفتاح التوضيحي -->
  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">وكيلي / رياضيات</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">بحث / علوم</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">برمجة</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #f472b6;"></div><span style="color: #94a3b8; font-size: 12px;">رؤية حسابية</span></div>
  </div>
</div>

التفوق في DeepSearchQA لافت بشكل خاص؛ إذ حقق K2.6 درجة f1 بلغت 92.5% مقابل 78.6% لـ GPT-5.4 و81.9% لـ Gemini 3.1 Pro — فارق يصعب تجاهله في سياق مهام البحث الاستدلالي العميق. أما في SWE-Bench Pro، وهو المعيار الأصعب لتقييم قدرة النماذج على حل مشكلات هندسية برمجية حقيقية، فقد سجّل K2.6 درجة 58.6% متقدماً على GPT-5.4 بـ57.7%، وعلى Claude Opus 4.6 بـ53.4%.

في المقابل، تبقى المنافسة محتدمة: يتقدم Gemini 3.1 Pro على K2.6 في OSWorld-Verified وBabyVision وعدة مقاييس رياضية، ويظل GPT-5.4 في المقدمة في معايير AIME 2026 وIMO-AnswerBench. ما يؤكده التقرير الرسمي لـ Moonshot AI بصراحة هو أن المقارنة جرت بين نماذج بمستويات تفكير مختلفة، وهو ما ينبغي أخذه بعين الاعتبار عند قراءة الأرقام.

## البرمجة طويلة الأفق: الاختبار الحقيقي

الأداء الذي يميّز K2.6 عن سابقيه لا يظهر في التقييمات القصيرة، بل في المهام التي تمتد لساعات. قام النموذج بمهمة تحسين محرك استدلال Qwen3.5-0.8B على نظام Mac من خلال تطبيق حلول برمجية بلغة Zig — وهي لغة نادرة خارج عينات التدريب الاعتيادية — مُنفّذاً أكثر من 4,000 استدعاء أداة عبر 12 ساعة متواصلة و14 تكراراً، مما رفع سرعة الاستدلال من نحو 15 رمزاً/ثانية إلى 193 رمزاً/ثانية، متجاوزاً سرعة LM Studio بنسبة 20%.

اختبار آخر أشد تعقيداً: عكف K2.6 على إعادة هيكلة محرك تطابق مالي مفتوح المصدر (exchange-core) يبلغ من العمر 8 سنوات. على مدار 13 ساعة من التنفيذ المستقل، نفّذ النموذج أكثر من 1,000 استدعاء أداة، ومس أكثر من 4,000 سطر برمجي، وأعاد تصميم طوبولوجيا الخيوط المحورية للمحرك. النتيجة: قفزة في إنتاجية المعالجة المتوسطة بلغت 185% ومكاسب إضافية في ذروة الأداء تجاوزت 133%.

ما يلفت الانتباه في هذين المثالين ليس فقط النتيجة النهائية، بل طريقة الوصول إليها: K2.6 لم يكتفِ بتطبيق حلول مكررة من التدريب، بل استخدم تحليل ملفات flame graph لتحديد الاختناقات غير الواضحة، ثم اتخذ قرارات معمارية جريئة بناءً على ما لاحظه.

## سرب الوكلاء: 300 وكيل في وقت واحد

أحد الجوانب الأكثر طموحاً في K2.6 هو تطوير بنية Agent Swarm. يستطيع النموذج توزيع مهمة معقدة أفقياً على ما يصل إلى 300 وكيل فرعي يعملون في 4,000 خطوة منسقة آنياً — مقارنة بـ100 وكيل و1,500 خطوة في K2.5. هذا التوسع الأفقي يقلل الوقت الكلي للمهمة بشكل جوهري، خاصة في مهام البحث متعدد الأوجه أو توليد المحتوى المتوازي.

يضاف إلى ذلك ميزة "المهارات" المستخرجة من الملفات: يستطيع K2.6 تحليل ملف PDF أو جدول بيانات أو عرض تقديمي أو وثيقة Word، واستخلاص "بصمته الأسلوبية والهيكلية"، ثم استخدام هذه البصمة كمهارة قابلة لإعادة التطبيق على مهام مستقبلية. في أحد الأمثلة التي وثّقها التقرير الرسمي، أنجز K2.6 بـ100 وكيل مطابقة 100 وظيفة لمرشح واحد في ولاية كاليفورنيا، مع توليد 100 سيرة ذاتية مخصصة لكل وظيفة.

## ما قالته الشركات عن النموذج

شهادات شركات استخدمت K2.6 في بيئات إنتاجية تضيف سياقاً مهماً للأرقام: أفادت CodeBuddy بأن دقة توليد الكود ارتفعت بنسبة 12% وتحسّن استقرار السياق الطويل بنسبة 18%، فيما بلغت نسبة نجاح استدعاءات الأدوات 96.60%. ذكرت Factory.ai تحسناً يبلغ 15% على معاييرها الداخلية مقارنة بـ K2.5. أعلنت Vercel عن تحسن يتجاوز 50% على معيار Next.js الخاص بها، مؤكدةً أن النموذج يُعدّ من الخيارات المُثلى للبرمجة الوكيلية وتوليد الواجهات الأمامية.

## الإتاحة والتسعير

K2.6 متاح منذ إطلاقه عبر Kimi.com وتطبيق Kimi والـ API ومنصة Kimi Code. الأوزان مفتوحة على Hugging Face. من حيث التسعير عبر API: 0.95 دولار لكل مليون رمز إدخال، و4.00 دولار لكل مليون رمز إخراج، مع قراءة مخزن مؤقت مجانية — وهو ما يجعل تكلفة تحليل قاعدة برمجية بـ10,000 سطر لا تتعدى نحو 0.078 دولار.

رخصة النموذج هي Modified MIT، تشترط عرض علامة Kimi التجارية فقط على الشركات التي تتجاوز 100 مليون مستخدم شهري أو 20 مليون دولار إيراداً شهرياً — مما يتيح استخداماً حراً عملياً لمعظم المطورين والمشاريع.

## مقارنة موجزة بالمنافسين الرئيسيين

في سياق النماذج المفتوحة المصدر تحديداً، يواجه K2.6 منافسة من DeepSeek-V3.2 بمعماريته الضخمة البالغة 685 مليار معامل، غير أن الأخير موجّه أساساً نحو توليد النصوص والحوار. الفارق الذي يؤكده تقرير K2.6 هو الدمج الأصلي لمعالجة الصور والفيديو داخل نموذج برمجي متخصص — وهو ما لا يقدمه معظم النماذج البرمجية المفتوحة الرائدة حتى الآن.

مقارنةً بـ Claude Sonnet 4.6 (الذي يدعم Cline وRoo Code)، يقدم K2.6 أداءً مقارباً في SWE-Bench Verified مع فارق سعري واضح لصالح K2.6، خاصة في مهام البرمجة طويلة الأفق التي تستهلك نوافذ سياق ضخمة.

## خاتمة

يطرح Kimi K2.6 سؤالاً جوهرياً يتجاوز مقارنة الأرقام: هل بدأت النماذج المفتوحة المصدر تُغلق الهوة مع الأقطاب المغلقة في مهام الهندسة البرمجية الأكثر تعقيداً؟ الوتيرة التي أعلنتها Moonshot AI — من K2.5 إلى K2.6 في أقل من شهرين — تشير إلى أن هذه الهوة تضيق بسرعة. والمطور الذي يبني اليوم سير عمل وكيلية مستقلة سيجد في K2.6 مرشحاً جدياً لم يكن موجوداً قبل أسابيع قليلة. السؤال هو ما الذي سيحمله K3 الذي تشير التسريبات إلى أنه قيد التطوير بمعمارية تتجاوز 3 تريليونات معامل.

---

###  استكشف المزيد
هل تريد معرفة المزيد عن أحدث النماذج المذكورة هنا؟ تفضل بزيارة [قائمة أقوى نماذج الذكاء الاصطناعي](/ar/models/) للحصول على مقارنة شاملة، أو تصفح [أحدث أدوات الذكاء الاصطناعي](/ar/tools/) لتحسين إنتاجيتك.