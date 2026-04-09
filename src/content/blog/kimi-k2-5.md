---
title: "Kimi K2.5: النموذج الصيني الذي يعيد تعريف حدود الأداء مفتوح المصدر"
description: "تحليل شامل لـ Kimi K2.5 من Moonshot AI: بنية تريليون معامل، سرب وكلاء متوازٍ، أداء يتحدى GPT-5.4 بجزء بسيط من التكلفة."
date: "2026-04-09"
category: "نماذج"
tags: ["Kimi K2.5", "Moonshot AI", "سرب الوكلاء", "LMSYS", "Artificial Analysis", "LiveBench", "مقارنة نماذج", "2026"]
image: "/images/kimi-k2-5-complete.webp"
---

## صدمة يناير: حين تتجاوز الحدود الأمامية

في 27 يناير 2026، أطلقت شركة Moonshot AI الصينية الناشئة نموذجها Kimi K2.5، وما ميّزه ليس فقط أرقام المعايير المرجعية، بل مفهوم معماري جديد كلياً: "Agent Swarm" أو سرب الوكلاء. النموذج قادر على تنسيق ما يصل إلى 100 وكيل فرعي لتنفيذ 1500 خطوة أداة بشكل متوازٍ، مما يقلص زمن تنفيذ المهام المعقدة بمقدار 4.5 أضعاف مقارنة بالوكلاء التقليديين أحاديي المسار. الأهم أنه الأول من نوعه بين النماذج مفتوحة المصدر الذي يصل فعلياً إلى "الحدود الأمامية" للأداء.

## بنية الخبراء: تريليون معامل بكفاءة جراحية

يعتمد K2.5 على بنية خليط الخبراء (MoE) بإجمالي تريليون معامل، لكنه لا يُفعّل منها خلال الاستدلال سوى 32 ملياراً لكل رمز مميز. هذا التصميم يمنح النموذج ذاكرة معرفية هائلة مع كفاءة حسابية تجعل تشغيله ممكناً بتكاليف منافسة.

المواصفات الجوهرية: 61 طبقة تشمل طبقة كثيفة واحدة، 384 خبيراً مع تفعيل 8 منهم لكل رمز، نافذة سياق تبلغ 256,000 رمز، مفردات من 160,000 رمز، ومشفّر بصري MoonViT بحجم 400 مليون معلمة. التدريب المسبق جرى على 15 تريليون رمز مختلط من النصوص والصور، مما جعله نموذجاً متعدد الوسائط بالفطرة لا بالإضافة.

## الأداء في الاختبارات المرجعية

النتائج التالية موثقة من منصات مستقلة كـ LiveBench وArtificial Analysis:

<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">المعايير المرجعية الرئيسية — أبريل 2026</p>

  <!-- AIME 2025 -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">AIME 2025</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">96.1%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 96.1%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- HMMT 2025 -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">HMMT 2025</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">95.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 95.4%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- GPQA Diamond -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GPQA Diamond</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">87.9%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 87.9%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- MathVista -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">MathVista</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">90.1%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 90.1%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- SWE-Bench Verified -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-Bench Verified</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">76.8%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 76.8%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- LiveCodeBench -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">LiveCodeBench</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">85.0%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 85%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- HLE مع أدوات -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">HLE (مع الأدوات)</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">50.2%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 50.2%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07);">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">رياضيات وعلوم</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">برمجة</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">وكلاء</span></div>
  </div>
</div>
في اختبار SWE-bench Verified تحديداً، تُعدّ نتيجة 76.8% أعلى نتيجة مسجلة لنموذج مفتوح المصدر حتى الآن، متجاوزاً DeepSeek V3.2 بفارق ملحوظ.

## مقارنة الوكلاء: حين يتفوق السرب

<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 28px 0; letter-spacing: 0.05em;">مقارنة أداء الوكلاء — Kimi K2.5 Agent Swarm مقابل المنافسين</p>

  <!-- BrowseComp -->
  <div style="margin-bottom: 24px;">
    <p style="color: #e2e8f0; font-size: 13px; font-weight: 600; margin: 0 0 12px 0;">BrowseComp</p>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #93c5fd; font-size: 12px;">Kimi K2.5 Agent Swarm</span>
          <span style="color: #93c5fd; font-size: 12px; font-weight: 700;">75.4</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 75.4%; height: 100%; background: #3b82f6; border-radius: 4px;"></div>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #7dd3fc; font-size: 12px;">Kimi K2.5</span>
          <span style="color: #7dd3fc; font-size: 12px; font-weight: 700;">66.6</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 66.6%; height: 100%; background: #60a5fa; border-radius: 4px;"></div>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #94a3b8; font-size: 12px;">Claude Opus 4.5</span>
          <span style="color: #94a3b8; font-size: 12px; font-weight: 700;">32.8</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 32.8%; height: 100%; background: #64748b; border-radius: 4px;"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- Wide Search -->
  <div style="margin-bottom: 24px;">
    <p style="color: #e2e8f0; font-size: 13px; font-weight: 600; margin: 0 0 12px 0;">Wide Search</p>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #93c5fd; font-size: 12px;">Kimi K2.5 Agent Swarm</span>
          <span style="color: #93c5fd; font-size: 12px; font-weight: 700;">79.0</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 79%; height: 100%; background: #3b82f6; border-radius: 4px;"></div>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #7dd3fc; font-size: 12px;">Kimi K2.5</span>
          <span style="color: #7dd3fc; font-size: 12px; font-weight: 700;">73.7</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 73.7%; height: 100%; background: #60a5fa; border-radius: 4px;"></div>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #94a3b8; font-size: 12px;">Claude Opus 4.5</span>
          <span style="color: #94a3b8; font-size: 12px; font-weight: 700;">76.2</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 76.2%; height: 100%; background: #64748b; border-radius: 4px;"></div>
        </div>
      </div>
    </div>
  </div>

  <!-- In-house Bench -->
  <div style="margin-bottom: 0;">
    <p style="color: #e2e8f0; font-size: 13px; font-weight: 600; margin: 0 0 12px 0;">In-house Bench</p>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #93c5fd; font-size: 12px;">Kimi K2.5 Agent Swarm</span>
          <span style="color: #93c5fd; font-size: 12px; font-weight: 700;">68.3</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 68.3%; height: 100%; background: #3b82f6; border-radius: 4px;"></div>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #7dd3fc; font-size: 12px;">Kimi K2.5</span>
          <span style="color: #7dd3fc; font-size: 12px; font-weight: 700;">41.6</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 41.6%; height: 100%; background: #60a5fa; border-radius: 4px;"></div>
        </div>
      </div>
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #94a3b8; font-size: 12px;">Claude Opus 4.5</span>
          <span style="color: #94a3b8; font-size: 12px; font-weight: 700;">49.8</span>
        </div>
        <div style="background: rgba(255,255,255,0.07); border-radius: 4px; height: 8px;">
          <div style="width: 49.8%; height: 100%; background: #64748b; border-radius: 4px;"></div>
        </div>
      </div>
    </div>
  </div>
</div>

ما تكشفه هذه الأرقام أن وضع Kimi K2.5 في نمط "Agent Swarm" يحوّله إلى أداة بحث واسعة النطاق مختلفة كلياً، متجاوزاً Claude Opus 4.5 بفارق كبير في BrowseComp (75.4 مقابل 32.8). أما في Wide Search فالمنافسة أشد توازناً.

## التصنيف العالمي: منصة LMSYS

منصة LMSYS Chatbot Arena تعتمد على تصويت بشري أعمى بين مخرجات نموذجين في آنٍ واحد، وهي من أكثر المعايير موضوعية لتقييم جودة المحادثة. في تحديث مارس 2026، احتل Kimi K2.5 المرتبة التاسعة عالمياً في Code Arena بـ 1809 نقطة Elo، ليكون أول نموذج صيني إلى جانب GLM-5 يدخل قائمة العشرة الكبار. النماذج المتصدرة حصلت على 1941–2002 نقطة، مما يعني فارقاً يتراوح بين 130 و190 نقطة — بُعد قابل للتضييق، لكنه حقيقي.

## تحليل Artificial Analysis: الذكاء مقابل التكلفة

منصة Artificial Analysis تقيس أداء الوكلاء في مهام واقعية معقدة، وتجمع بين الأداء والتكلفة الفعلية. أبرز نتائجها على K2.5:

**مؤشر الذكاء**: 47 نقطة مقابل متوسط نماذج مماثلة يبلغ 26 نقطة. في مقياس GDPval-AA (للمهام المعرفية الوكيلة كالتحليلات والعروض)، حصل على 1309 نقطة Elo، متجاوزاً GLM-4.7 وDeepSeek V3.2 وGemini 3 Pro.

**التكلفة الإجمالية**: 371 دولاراً لتشغيل مجموعة اختبارات الذكاء الكاملة، أقل بأكثر من 4 أضعاف من Claude Opus 4.5 أو GPT-5.2.

**الهلوسة**: معدل 64% فقط مقارنة بـ 74% للإصدار السابق Kimi K2 Thinking. النموذج يفضّل الامتناع عن الإجابة على اختلاق معلومات غير مثبتة، وهي سمة إيجابية في سياقات الموثوقية.

**السرعة**: 40.8 رمزاً في الثانية مقابل متوسط 51، مع ميل واضح للإسهاب (89 مليون رمز في مجموعة الاختبارات مقابل متوسط 15 مليوناً). هذا قد يكون قيمة في التحليل العميق، لكنه يرفع التكلفة في التطبيقات التفاعلية.

## التسعير: حرب الأسعار التي غيّرت المعادلة

السعر الرسمي عبر Alibaba Cloud: 0.60 دولار لكل مليون رمز إدخال، و3.00 دولارات للإخراج. عبر OpenRouter: 0.38 دولاراً للإدخال و1.72 دولاراً للإخراج. مع خصم المدخلات المخزنة مؤقتاً، يصل السعر الفعلي للإدخال إلى أقل من 0.25 دولار في حالات الاستخدام المتكررة.

المقارنة الأكثر إثارة: K2.5 أرخص بحوالي 9 أضعاف من Claude Opus 4.5، وأرخص بنحو 37 مرة من Claude Opus 4.6. في سياق أنه يتفوق على هذين النموذجين في عدة اختبارات وكلاء، تصبح المعادلة أداءً متقدماً بكسر التكلفة.

## عائلة Kimi الكاملة

| النموذج | المعاملات | المعاملات النشطة | الاستخدام | السعر |
| :--- | :--- | :--- | :--- | :--- |
| Kimi K2 Lite | ‎~30B | 30B | المهام البسيطة | مجاني |
| Kimi K2 | ‎~100B | 100B | الاستخدام العام | $0.30/$0.10 |
| **Kimi K2.5** | **1T** | **32B** | **المهام المعقدة** | **$1.20/$0.40** |
| Kimi K2 Pro | ‎~2T | 64B | البحث المتخصص | $6.00/$2.00 |

## المحددات الحقيقية

نافذة السياق البالغة 256,000 رمز تُعدّ القيد الأبرز، إذ تقل عن ملايين الرموز في Gemini وClaude وحتى Llama 4 Maverick. هذا يحدّ من استخدامه في مهام تتطلب معالجة وثائق ضخمة أو مستودعات برمجية كاملة في سياق واحد.

في اختبار ARC-AGI-2 الخاص بالاستدلال المجرد، سجّل 12% فقط بتكلفة تقييم 0.28 دولار، وهو رقم يشير إلى فجوة في القدرة على استنتاج أنماط مجردة جديدة بالكامل — وهو تحدٍّ مشترك لمعظم نماذج الجيل الحالي، غير أن النماذج المتطورة المغلقة تسجّل أعلى منه بفارق.

تشير تقارير مستقلة أيضاً إلى أن سير العمل المعتمدة بكثافة على استدعاء الأدوات قد تحتاج إلى إشراف بشري أكبر مقارنة بنماذج OpenAI أو Anthropic، خاصة في بيئات الإنتاج الحساسة.

## متاح بالكامل: MIT بلا قيود

أُطلق النموذج بموجب ترخيص MIT مفتوح المصدر، متاح للاستخدام والتعديل والتوزيع التجاري. يمكن الوصول إليه عبر kimi.com والتطبيق المحمول، أو عبر API من Fireworks AI وTogether AI وNebius وCloudflare Workers AI، أو تحميل الأوزان من Hugging Face لتشغيل نسخة كاملة بحجم حوالي 595 جيجابايت أو نسخة ديناميكية مضغوطة بحوالي 240 جيجابايت.

## تساؤلات تبحث عن أجوبة

ما يطرحه Kimi K2.5 على الساحة أعمق من مجرد معايير مرجعية: إذا كان نموذج مفتوح المصدر بهذا الأداء في البرمجة والرياضيات والبحث الوكيل متاحاً بهذه التكلفة، فأين تقع القيمة الفعلية للنماذج المغلقة؟ الإجابة الجزئية موجودة في نقطتين: جودة التفسيرات والاستدلال الموجه للإنسان (حيث تتفوق نماذج Claude)، والتعامل مع السياقات الضخمة جداً (حيث يتفوق Gemini). لكن السؤال الأعمق يتعلق بما إذا كانت فجوات الأداء هذه ستستمر في الاتساع أم ستتضيق، حين يمتلك الفريق الذي أنتج K2.5 موارد ونموذجاً مجانياً للتحسين المستمر بمعدل لا يخضع لضغوط الربحية الفورية.