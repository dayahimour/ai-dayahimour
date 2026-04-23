---
title: "MiMo V2.5 Pro: نموذج شاومي الجديد يُسيطر على المهام الوكيلة الطويلة ويكسر حاجز الألف أداة"
description: "أطلقت شاومي في 22 أبريل 2026 نموذج MiMo-V2.5-Pro، أقوى نماذجها حتى الآن، يُنجز مهام هندسية تستغرق أسابيع في ساعات، ويتفوق على Claude Opus 4.6 في كفاءة الرموز بنسبة 40–60%."
date: "2026-04-22"
category: "نماذج"
tags: ["MiMo V2.5 Pro", "شاومي", "نماذج الذكاء الاصطناعي", "الوكلاء الذاتيين", "2026"]
image: "/images/mimo-v2-5-pro.webp"
author: "فريق AI DayaHimour"
featured: true
draft: false
---

في الثاني والعشرين من أبريل 2026، وبينما كان المجتمع التقني منشغلاً بإعلانات Google Cloud Next في لاس فيغاس، أطلقت شاومي بهدوء نموذجها الأكثر طموحاً: **MiMo-V2.5-Pro**، المرحلة الأحدث من سلسلة نماذج MiMo التي صعدت خلال أشهر قليلة إلى الصفوف الأمامية في تصنيفات الذكاء الاصطناعي العالمية.

الإعلان لم يأتِ مصحوباً بضجة تسويقية معهودة. صفحة رسمية مقتضبة، وجملة واحدة تلخص الرهان: "قفزة في التماسك الوكيلي والمهام المفتوحة الأفق". غير أن التفاصيل التقنية التي كُشف عنها تحكي قصة مختلفة تماماً.

## من مليون رمز إلى ألف أداة

الميزة التي يعتد بها فريق MiMo في هذا الإصدار ليست حجم النموذج ولا النتائج على المعايير التقليدية — بل قدرته على الاستدامة. فبينما تتعثر معظم النماذج في تسلسلات العمل الطويلة، يُثبت MiMo-V2.5-Pro قدرته على تجاوز حاجز الألف استدعاء أداة في مهمة واحدة متواصلة، مع الحفاظ على تماسك السياق وتتبع الأهداف الفرعية دون انجراف.

النموذج يرث نافذة سياق بمليون رمز من سلفه MiMo-V2-Pro، لكنه يُضيف إليها ما يصفه الفريق بـ"الوعي بالإطار المحيط": قدرة غير عادية على إدارة الذاكرة داخل تسلسل العمل، وتشكيل السياق الخاص به بما يخدم الهدف النهائي بدلاً من الاكتفاء بالاستجابة الآنية.

## مهام حقيقية بدلاً من اختبارات مصطنعة

اختار فريق شاومي طريقة غير مألوفة لإثبات قدرات النموذج: بدلاً من الاقتصار على معايير المقارنة المعتادة، نشر ثلاثة أمثلة من مهام العالم الحقيقي تجاوز فيها MiMo-V2.5-Pro حدوداً يعدّها الباحثون مؤشراً حقيقياً على مستوى الذكاء.

المثال الأول كان مُترجِعاً كاملاً للغة SysY مكتوباً في Rust من الصفر، مستوحىً من مشروع مادة مبادئ المُترجِعات في جامعة بيكينغ — وهي مهمة تستغرق طالب دكتوراه متمرساً أسابيع. استغرق MiMo-V2.5-Pro 4.3 ساعة عبر 672 استدعاء أداة، وأنجز المشروع بنتيجة مثالية: 233 من 233 اختباراً مخفياً. ما يلفت الانتباه ليس السرعة فحسب، بل أسلوب العمل: إذ بنى المُترجِع طبقة طبقة بدءاً من معالج Koopa IR إلى خلفية RISC-V، وحين أحدث إعادة هيكلة في التسلسل 512 تراجعاً في بعض الاختبارات، شخّص الخطأ وأصلحه دون تدخل خارجي.

المثال الثاني كان محرر فيديو مكتبي كامل المزايا: تتبع متعدد المسارات، قص المقاطع، مزج الصوت، وخط تصدير. بلغت قاعدة الكود 8,192 سطراً، أُنتجت في 11.5 ساعة عبر 1,868 استدعاء أداة. المثال الثالث تجاوز البرمجة نحو تصميم دوائر كهربية: تصميم وتحسين دائرة FVF-LDO في تقنية TSMC 180nm، وهي مهمة تتطلب مهندس إلكترونيات متمرساً لعدة أيام. النموذج أنجزها في ساعة واحدة داخل حلقة محاكاة ngspice، محققاً جميع معايير الأداء الستة المستهدفة.

## أرقام المقارنة: تفوق محدد وفجوات واضحة

<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">المعايير المرجعية الرئيسية — أبريل 2026 (MiMo-V2.5-Pro)</p>

  <!-- SWE-bench Pro — أخضر: برمجة -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-bench Pro</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">57.2%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 57.2%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- Terminal-Bench 2.0 — برتقالي: كفاءة -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">Terminal-Bench 2.0</span>
      <span style="color: #fb923c; font-weight: 700; font-size: 14px;">68.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 68.4%; height: 100%; background: linear-gradient(90deg, #ea580c, #fb923c); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- ClawEval pass^3 — أزرق: وكيل عام -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">ClawEval (pass^3)</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">63.8%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 63.8%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- τ3-bench — بنفسجي: وكيل متعدد الخطوات -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">τ3-bench</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">72.9%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 72.9%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- GDPVal-AA — وردي: مهام واقعية -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GDPVal-AA (Elo)</span>
      <span style="color: #f472b6; font-weight: 700; font-size: 14px;">1581</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 79.5%; height: 100%; background: linear-gradient(90deg, #db2777, #f472b6); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- Humanity's Last Exam — أخضر داكن: استدلال -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">Humanity's Last Exam (بدون أدوات)</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">48.0%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 48.0%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">برمجة</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #fb923c;"></div><span style="color: #94a3b8; font-size: 12px;">سطر أوامر</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">وكيل عام</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">وكيل متعدد الخطوات</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #f472b6;"></div><span style="color: #94a3b8; font-size: 12px;">مهام واقعية</span></div>
  </div>
</div>

صورة المقارنة الرسمية التي نشرها الفريق تضع MiMo-V2.5-Pro في موقع دقيق بين المنافسين. على معيار SWE-bench Pro يسجل 57.2 نقطة، متقدماً على نسخته السابقة MiMo-V2-Pro بنسبة ملحوظة، ومتجاوزاً Gemini 3.1 Pro، لكنه يبقى على مسافة ضيقة من GPT-5.4 الذي يسجل 57.7 ومن Claude Opus 4.6 عند 57.3. في Terminal-Bench 2.0 المتعلق بأداء سطر الأوامر، يرتفع التقدم: 68.4 نقطة مقابل 65.4 لـ Claude Opus 4.6 و65.8 للإصدار غير Pro من V2.5.

على معيار GDPVal-AA المخصص لتقييم المهام الواقعية الوكيلية، يتراجع النموذج إلى 1581 Elo مقابل 1606 لـ MiMo-V2-Pro و1674 لـ GPT-5.4 — تراجع يبدو مفاجئاً مع نموذج أحدث، ويشير إلى أن التحسينات تتركز في قدرات الاستدلال طويل الأفق والبرمجة بدلاً من الأداء العام. معيار Humanity's Last Exam كاشف بدوره: 48.0 نقطة بدون أدوات مقابل 53.0 لـ Claude Opus 4.6 و58.7 لـ GPT-5.4، فجوة في الاستدلال العلمي البحت تبقى قائمة رغم التحسينات البرمجية.

## الميزة الحقيقية: كفاءة الرموز

ربما لا تكون الأرقام المطلقة هي القصة الحقيقية لـ MiMo-V2.5-Pro. الفريق يُركز على ما يسميه "كفاءة الذكاء": تحقيق أداء طليعي مع إنفاق رموز أقل بكثير. على معيار ClawEval، يُسجل النموذج 63.8% pass^3 مستهلكاً نحو 70 ألف رمز لكل مسار — أي ما بين 40% و60% أقل مما تستهلكه نماذج Claude Opus 4.6 وGemini 3.1 Pro وGPT-5.4 عند مستويات أداء مقارنة. في بيئات الإنتاج التي تُعالج آلاف المهام يومياً، هذا الفارق يتحول إلى وفورات مالية جوهرية.

التسعير يعزز هذه الحجة: دولار واحد لكل مليون رمز مدخل وثلاثة دولارات للمخرج، دون أي تغيير عن الإصدار السابق رغم التحسينات المعلنة. للمقارنة، Claude Opus 4.6 يُكلف 5 دولارات للمدخل و25 للمخرج.

## مسار الحياد والمصدر المفتوح

ما قبل MiMo-V2.5-Pro ببضعة أسابيع، أطلق فريق شاومي MiMo-V2-Flash كنموذج مفتوح المصدر بمعمارية MoE تضم 309 مليار معامل إجمالي و15 ملياراً نشطة فحسب. المسار ذاته مُتوقَّع لـ V2.5: أعلن الفريق أن سلسلة MiMo-V2.5 ستُفتح مصادرها قريباً، مما سيُتيح للباحثين والمطورين تكييفها وتشغيلها محلياً.

النموذج متاح حالياً في النسخة التجريبية العامة عبر Xiaomi AI Studio ومنصة API، كما وصل إلى OpenRouter الذي يُدرجه بتسعير موحد: دولار للمدخل وثلاثة للمخرج مع نافذة سياق 1,048,576 رمز وحد أقصى للمخرج يبلغ 131,072 رمز. المستخدمون الذين اشتروا خطة الرموز قبل 14:00 UTC في 21 أبريل حصلوا على إعادة تعيين لرصيد الاستهلاك.

## شاومي والسباق الأوسع

صعود شاومي في خريطة الذكاء الاصطناعي يحمل رمزية تتخطى حدود البنشمارك. الشركة المعروفة تاريخياً بصناعة الهاتف المحمول دخلت عالم النماذج الكبيرة بمنهجية مختلفة: إطلاق نموذج مجهول الهوية تحت اسم "Hunter Alpha" على OpenRouter جمع أكثر من تريليون ونصف استدعاء في سبعة أيام قبل الكشف عن هويته، ثم الانطلاق نحو نماذج تنافس في الصفوف الأمامية عالمياً.

MiMo-V2.5-Pro ليس النموذج الأعلى كفاءة في العالم على كل معيار، لكنه يُمثل اختياراً مُحسوباً: تركيز حاد على مهام البرمجة والأتمتة الطويلة الأفق، مع سعر يجعل النشر واسع النطاق خياراً عملياً لفرق الهندسة التي تُشغّل أنظمة وكيلية في الإنتاج. صعود شاومي في خريطة الذكاء الاصطناعي يحمل رمزية تتخطى حدود البنشمارك — الشركة المعروفة تاريخياً بصناعة الهاتف المحمول دخلت عالم النماذج الكبيرة بمنهجية مختلفة، ويبدو أنها مصممة على مواصلة المسار.
