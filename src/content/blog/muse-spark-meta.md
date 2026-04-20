---
title: "Muse Spark: عندما تخون Meta المصدر المفتوح وتعاود السباق من الخلف"
description: "دليل شامل: بعد فضيحة Llama 4 وتكفّل Alexandr Wang بإعادة البناء من الصفر، تُطلق Meta نموذجها الأول المغلق Muse Spark، في رهان وجودي على مستقبل الذكاء الاصطناعي. - اكتشف أهم التفاصيل والمقارنات التي تحتاجها."
date: "2026-04-11"
category: "نماذج"
tags: ["Muse Spark", "Meta", "Meta Superintelligence Labs", "Alexandr Wang", "2026"]
image: "/images/muse-spark-meta.webp"
---

**ما بين إعلان الثامن من أبريل 2026 وبين فضيحة أبريل 2025، لم تمر على Meta سوى اثنا عشر شهراً. لكنها كانت كافية لتغيير كل شيء: البنية، والاستراتيجية، والطموح، والهوية نفسها.**

في هذا اليوم، أزاحت Meta الستار عن Muse Spark — أول نموذج تنتجه Meta Superintelligence Labs (MSL)، الذراع البحثية التي أُسست في منتصف 2025 بعد واحدة من أكثر اللحظات حرجاً في تاريخ الشركة التقني. النموذج متاح مجاناً عبر meta.ai وتطبيق Meta AI منذ لحظة الإعلان، وهو في طريقه للانتشار عبر WhatsApp وInstagram وFacebook وMessenger ونظارات Ray-Ban الذكية في الأسابيع المقبلة.

غير أن ما يجعل هذا الإطلاق حدثاً يتجاوز مجرد الإعلان عن نموذج جديد ليس قدراته التقنية وحدها — بل القرار الذي تضمنه الإعلان: Muse Spark **مغلق المصدر بالكامل**. لا أوزان، لا استضافة ذاتية، لا معاينة عامة للوزن المفتوح. وهذا الإعلان، ببساطة، يعني نهاية حقبة كاملة لـMeta.

## من Avocado إلى Muse Spark: تسعة أشهر من الصفر

لفهم ما يمثله هذا الإطلاق، لا بد من العودة إلى أبريل 2025. أطلقت Meta آنذاك Llama 4 إلى ردود فعل لم تكن تتوقعها. بسرعة، اكتشف باحثون مستقلون أن النسخة التي قدّمتها الشركة إلى منصة LM Arena لم تكن النسخة نفسها المتاحة للعموم — بل نسخة محسّنة خصيصاً لتحسين نتائج المعايير المرجعية. لاحقاً، أظهرت تحقيقات إضافية أن Meta كانت قد اختبرت 27 متغيراً مختلفاً من Llama 4 بشكل خاص، واختارت أفضلها أداءً لتقديمه إلى المنصة.

الفضيحة كانت مكلفة لسبب أعمق من مجرد تضليل: Meta كانت قد بنت سمعتها في الذكاء الاصطناعي على خطاب الشفافية والمصدر المفتوح. Llama 3 كان نجم المجتمع المفتوح. Llama 4 حوّل ذلك إلى كابوس علاقات عامة. وبحسب ما كشفت تحقيقات لاحقة، لجأ فريق Llama 4 في مراحل التدريب النهائية إلى خلط بيانات اختبارية ضمن بيانات التدريب، ما أدى إلى ظاهرة "overfitting" حادة.

## صفقة الـ14.3 مليار دولار

في يونيو 2025، اتخذ مارك زوكربيرغ قراراً جذرياً: أنفق 14.3 مليار دولار مقابل حصة لا تصويتية بنسبة 49% في Scale AI، مع استقدام مؤسسها Alexandr Wang ليتولى — لأول مرة في تاريخ الشركة — منصب كبير مسؤولي الذكاء الاصطناعي. بموجب الصفقة، ارتفعت قيمة Scale AI إلى ما يزيد عن 29 مليار دولار. وبحسب تقارير، حافظ Wang على عضويته في مجلس إدارة Scale AI مع انتقاله إلى Meta.

في أغسطس 2025، أعلن Wang عبر مذكرة داخلية أن MSL ستُقسم إلى أربعة أقسام: AI Research، Superintelligence Research، Product Development، والبنية التحتية. كما أُعلن عن حل فريق AGI Foundations وإعادة توزيع أعضائه، مما عزز تمركز السلطة حول Wang. وفي نوفمبر 2025، غادر Yann LeCun — أحد "عرابي" الذكاء الاصطناعي — Meta بعد 12 عاماً، ليؤسس مختبراً مستقلاً يركز على "العالميات النموذجية" (world models).

## ما هو Muse Spark فعلياً؟

Muse Spark هو نموذج متعدد الوسائط بطبيعته — ليس مجرد نموذج نصوص صُقل لاحقاً لمعالجة الصور، بل صُمم من البداية لدمج النصوص والصور والصوت كمدخلات في إطار واحد موحد. يدعم النموذج استخدام الأدوات (tool-use) بشكل أصيل، والتفكير المرئي المتسلسل (visual chain of thought)، وتنسيق وكلاء متعددة (multi-agent orchestration). نافذة السياق تبلغ 262 ألف توكن.

ما يميز Muse Spark حقاً ليس هذه الميزات بحد ذاتها — فمعظمها بات "الحد الأدنى" لأي نموذج رائد في 2026 — بل فلسفة التصميم الأساسية. وفقاً لـWang، أعاد الفريق بناء كل شيء من الصفر: البنية المعمارية، منظومة بيانات التدريب، البنية التحتية الحسابية — بما فيها مركز البيانات الضخم Hyperion.

## المعايير المرجعية: صورة معقدة

<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 8px 0; letter-spacing: 0.05em;">المعايير الرسمية — Muse Spark مقابل المنافسين — أبريل 2026</p>
  <p style="color: #475569; font-size: 11px; text-align: center; margin: 0 0 24px 0;">المصدر: Meta AI Blog الرسمي</p>

  <!-- ===== MULTIMODAL ===== -->
  <p style="color: #60a5fa; font-size: 12px; font-weight: 700; margin: 0 0 14px 0; letter-spacing: 0.08em; text-transform: uppercase;">📷 متعدد الوسائط — Multimodal</p>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">CharXiv Reasoning (فهم المخططات) 🏆</span>
      <span style="color: #34d399; font-weight: 700; font-size: 13px;">86.4</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 86.4%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">GPT-5.4: 82.8 / Gemini 3.1 Pro: 80.2 / Opus 4.6: 65.3</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">MMMU Pro (فهم متعدد التخصصات)</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 13px;">80.4</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 80.4%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Gemini 3.1 Pro: 83.9 / GPT-5.4: 81.2 / Opus 4.6: 77.4</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">SimpleVQA (دقة بصرية)</span>
      <span style="color: #34d399; font-weight: 700; font-size: 13px;">71.3</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 71.3%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Gemini 3.1 Pro: 72.4 / Opus 4.6: 62.2 / GPT-5.4: 61.1</p>
  </div>

  <div style="margin-bottom: 20px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">ZeroBench (استدلال بصري متعدد الخطوات) 🏆</span>
      <span style="color: #34d399; font-weight: 700; font-size: 13px;">33.0</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 33%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">GPT-5.4: 41.0 / Gemini 3.1 Pro: 29.0 — Opus 4.6: —</p>
  </div>

  <!-- ===== TEXT/REASONING ===== -->
  <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 18px; margin-bottom: 14px;">
    <p style="color: #a78bfa; font-size: 12px; font-weight: 700; margin: 0 0 14px 0; letter-spacing: 0.08em; text-transform: uppercase;">🧠 النص والاستدلال — Text / Reasoning</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">Humanity's Last Exam — بدون أدوات</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 13px;">42.8%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 42.8%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Gemini 3.1 Pro: 45.4 / GPT-5.4: 43.9 / Opus 4.6: 40.0</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">Humanity's Last Exam — مع أدوات (Contemplating)</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 13px;">50.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 50.4%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Opus 4.6: 53.1 / GPT-5.4: 52.1 / Gemini 3.1 Pro: 51.4</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">GPQA Diamond (استدلال PhD)</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 13px;">89.5%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 89.5%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Gemini 3.1 Pro: 94.3 / GPT-5.4: 92.8 / Opus 4.6: 92.7</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">LiveCodeBench Pro (برمجة تنافسية)</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 13px;">80.0%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 80%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">GPT-5.4: 87.5 / Gemini 3.1 Pro: 82.9 / Opus 4.6: 70.7</p>
  </div>

  <div style="margin-bottom: 20px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">ARC-AGI-2 (استدلال مجرد) ⚠️</span>
      <span style="color: #f87171; font-weight: 700; font-size: 13px;">42.5%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 42.5%; height: 100%; background: linear-gradient(90deg, #dc2626, #f87171); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Gemini 3.1 Pro: 76.5 / GPT-5.4: 76.1 / Opus 4.6: 63.3 — الفجوة الأكبر</p>
  </div>

  <!-- ===== HEALTH ===== -->
  <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 18px; margin-bottom: 14px;">
    <p style="color: #34d399; font-size: 12px; font-weight: 700; margin: 0 0 14px 0; letter-spacing: 0.08em; text-transform: uppercase;">🏥 الصحة — Health</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">HealthBench Hard 🏆🏆</span>
      <span style="color: #34d399; font-weight: 700; font-size: 13px;">42.8%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 42.8%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">GPT-5.4: 40.1 / Gemini 3.1 Pro: 20.6 / Grok 4.2: 20.3 / Opus 4.6: 14.8</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">MedXpertQA متعدد الوسائط</span>
      <span style="color: #34d399; font-weight: 700; font-size: 13px;">78.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 78.4%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Gemini 3.1 Pro: 81.3 / GPT-5.4: 77.1 / Opus 4.6: 64.8</p>
  </div>

  <!-- ===== AGENTIC ===== -->
  <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 18px; margin-bottom: 14px;">
    <p style="color: #f59e0b; font-size: 12px; font-weight: 700; margin: 0 0 14px 0; letter-spacing: 0.08em; text-transform: uppercase;">🤖 المهام الوكيلية — Agentic</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">DeepSearchQA (بحث وكيلي) 🏆</span>
      <span style="color: #f59e0b; font-weight: 700; font-size: 13px;">74.8%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 74.8%; height: 100%; background: linear-gradient(90deg, #d97706, #f59e0b); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Opus 4.6: 73.7 / GPT-5.4: 73.6 / Gemini 3.1 Pro: 69.7</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">SWE-Bench Verified (برمجة وكيلية)</span>
      <span style="color: #f59e0b; font-weight: 700; font-size: 13px;">77.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 77.4%; height: 100%; background: linear-gradient(90deg, #d97706, #f59e0b); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Opus 4.6: 80.8 / Gemini 3.1 Pro: 80.6 / Grok 4.2: 76.7</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">Terminal-Bench 2.0 ⚠️</span>
      <span style="color: #f87171; font-weight: 700; font-size: 13px;">59.0%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 59%; height: 100%; background: linear-gradient(90deg, #dc2626, #f87171); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">GPT-5.4: 75.1 / Gemini 3.1 Pro: 68.5 / Opus 4.6: 65.4</p>
  </div>

  <div style="margin-bottom: 14px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">τ²-Bench Telecom (استخدام أدوات)</span>
      <span style="color: #f59e0b; font-weight: 700; font-size: 13px;">91.5</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 91.5%; height: 100%; background: linear-gradient(90deg, #d97706, #f59e0b); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">Grok 4.2: 96.5 / Gemini 3.1 Pro: 95.6 / Opus 4.6: 92.1</p>
  </div>

  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
      <span style="color: #cbd5e1; font-size: 13px;">GDPval-AA Elo (مهام مكتبية) ⚠️</span>
      <span style="color: #f87171; font-weight: 700; font-size: 13px;">1444</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 9px; overflow: hidden;">
      <div style="width: 72%; height: 100%; background: linear-gradient(90deg, #dc2626, #f87171); border-radius: 6px;"></div>
    </div>
    <p style="color: #475569; font-size: 11px; margin: 3px 0 0 0;">GPT-5.4: 1672 / Opus 4.6: 1606 / Gemini 3.1 Pro: 1320</p>
  </div>

  <div style="display: flex; flex-wrap: wrap; gap: 16px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07);">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">تفوق واضح</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">نص واستدلال</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #f59e0b;"></div><span style="color: #94a3b8; font-size: 12px;">مهام وكيلية</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #f87171;"></div><span style="color: #94a3b8; font-size: 12px;">فجوات موثقة</span></div>
  </div>
</div>

ما تكشفه هذه الأرقام صورة متباينة بوضوح. النموذج يتصدر عالمياً في **الصحة** (HealthBench Hard: 42.8% متقدماً على GPT-5.4 البالغ 40.1%)، وفي **الفهم البصري** (CharXiv Reasoning: 86.4%)، وفي **المهام الوكيلية** (DeepSearchQA: 74.8%). لكنه يتخلف بفارق حاد في **البرمجة التنافسية** (LiveCodeBench Pro: 80.0% مقابل 87.5% لـGPT-5.4)، وفي **الاستدلال المجرد** على وجه الخصوص.

على ARC-AGI-2 تحديداً — المقياس الذي يختبر التعرف على أنماط جديدة تماماً لا يمكن حفظها — يسجل Muse Spark 42.5% بينما يبلغ Gemini 3.1 Pro وGPT-5.4 ما يقارب 76%. الفارق هنا ليس مجرد تراجع؛ إنه فجوة هيكلية تشير إلى أن النموذج لا يزال يعاني في المهام التي تتطلب استدلالاً رمزياً مجرداً بعيداً عن النصوص والصور التي درب عليها.

Meta نفسها أقرت في منشورها التقني بوجود "فجوات أداء" في أنظمة الوكلاء طويلة الأمد وسير عمل البرمجة. لكن الشركة تشير إلى أن Muse Spark هو "أول وأصغر نموذج في السلسلة"، وتلمح إلى أن النماذج الأكبر القادمة قد تسد هذه الفجوات.

## القطيعة مع المصدر المفتوح

القرار الأكثر ثقلاً لم يكن تقنياً. Muse Spark مغلق المصدر تماماً — الأوزان غير متاحة للتحميل، ولا توجد استضافة ذاتية، والوصول عبر API مقيد حالياً بمعاينة خاصة لشركاء مختارين، دون أي رسوم معلنة أو جدول زمني للفتح العام.

هذا التحول يتناقض بشكل صارخ مع خطاب زوكربيرغ السابق، الذي قال فيه إن "المصدر المفتوح يمثل أفضل فرصة للعالم لتسخير هذه التكنولوجيا لخلق أعظم فرصة اقتصادية وأمان للجميع". أحد المحللين وصف Muse Spark بأنه "مغلق مثل المدرسة الخاصة التي درس فيها زوكربيرغ". وبعض المعلقين يرون أن الإغلاق لم يكن تغييراً في الفلسفة بقدر ما كان اعترافاً ضمنياً بأن "المصدر المفتوح توقف عن كونه ميزة تنافسية وتحول إلى عبء تنافسي".

المجتمع التقني — الذي بنى آلاف المشاريع والدراسات على Llama — استقبل هذا التحفظ بتشكك واسع. منصة Reddit، وتحديداً مجتمع r/LocalLLaMA الذي يضم آلاف المطورين الذين يعتمدون على نماذج Meta مفتوحة المصدر، شهدت ردود فعل غاضبة.

## ثلاثة مليارات مستخدم كميدان انتشار

ما يمتلكه Muse Spark ولا تمتلكه أي من نماذج المنافسين هو ميدان الانتشار الفوري: أكثر من ثلاثة مليارات شخص يستخدمون تطبيقات Meta يومياً. النموذج سيصل إلى WhatsApp وInstagram وFacebook وMessenger في غضون أسابيع — ليس كخيار يبحث عنه المستخدم، بل كمساعد مدمج في المنتجات التي يستخدمها أصلاً.

هذا الحجم من الانتشار يمنح Meta ميزة استثنائية في جمع بيانات الاستخدام الحقيقية، وبالتالي تحسين النموذج بشكل مستمر. وضع التسوق (Shopping Mode) الذي تختبره Meta يُضيف طبقة بيانات سلوكية مستمدة من تفاعلات المستخدمين عبر منصاتها — من مشتريات إلى تفاعلات مع الإعلانات والمحتوى.

## التكلفة: بين 115 و135 مليار دولار

خلال الإعلان عن نتائج الربع الرابع من 2025، كشفت Meta عن خطتها للإنفاق الرأسمالي في 2026: بين 115 ملياراً و135 مليار دولار — ما يقارب ضعف الـ72.22 ملياراً التي أنفقتها في 2025. هذا الرقم يتجاوز بكثير توقعات المحللين البالغة 110 مليارات دولار. جزء كبير من هذه الأموال موجه إلى تمويل MSL، وتوسيع مراكز البيانات، وتعزيز القدرات السحابية من أطراف ثالثة.

هذا الحجم من الإنفاق يفسر منطق الإغلاق: حين تُنفق بهذا الحجم، يصعب منح الأوزان مجاناً. لكن السؤال الأعمق هو: هل كانت هناك طريقة أخرى؟ هل كان بإمكان Meta البقاء في معسكر المصدر المفتوح مع الحفاظ على قدرتها التنافسية؟

## الخريطة المستقبلية: نماذج أكبر قادمة

Wang أشار على منصة X إلى أن Muse Spark هو مجرد البداية: "هذه الخطوة الأولى. نماذج أكبر قيد التطوير، وهناك خطط لفتح المصدر في إصدارات مستقبلية." لكن المجتمع التقني استقبل هذا الوعد بتشكك واضح — فالإعلان عن Muse Spark بدون وزن مفتوح يجعله، حتى الآن، حكراً على بيئة Meta وحدها.

مصادر داخلية تشير إلى أن الاسم الرمزي "Avocado" كان يشير تحديداً إلى Muse Spark، وأن النموذج التالي في سلسلة Muse قيد التطوير بالفعل. ولم تذكر Meta أي جدول زمني محدد للإصدارات المستقبلية.

## فجوات الأداء والتحقق المستقل

بعيداً عن الأرقام الرسمية، هناك قصة أخرى. التقييمات المستقلة — مثل تلك التي أجرتها Artificial Analysis بعد حصولها على حق الوصول المبكر من Meta — ترسم صورة أكثر تحفظاً. ففي اختبار Humanity's Last Exam، سجلت Artificial Analysis نسبة 39.9% لـMuse Spark، متأخراً عن Gemini 3.1 Pro Preview (44.7%) وGPT-5.4 (41.6%). لكن من المهم ملاحظة أن هذه التقييمات لم تكن "مستقلة تماماً"، إذ أن الوصول نفسه جاء عبر Meta.

التقييمات المستقلة تشير إلى أن Muse Spark هو "داخل إلى المجموعة الرائدة" دون أن يكون "رائداً في كل المجالات". وفي مجالات مثل البرمجة والاستدلال المجرد، لا يزال النموذج متأخراً. هذا يتوافق مع ما أظهرته المعايير الرسمية، لكنه يضيف طبقة من الحذر: الأرقام الرسمية تُظهر التفوق في بعض المجالات والتخلف في أخرى، لكن حجم بعض هذه الفجوات قد يكون أكبر مما تظهره الأرقام الأولية.

## موسم الإصدارات: سباق لا يتوقف

الإعلان عن Muse Spark جاء في الأسبوع ذاته الذي أعلنت فيه Cursor عن نسختها الثالثة، وتوسّع Claude Code نحو Auto Mode. المنافسون لم يتوقفوا. OpenAI تواصل تطوير GPT-5.4، Google تعزز Gemini، Anthropic تدفع Claude إلى الأمام. في هذا السياق، فإن عودة Meta إلى السباق لا تعني الفوز به — بل تعني فقط أن الشركة لم تعد خارج السباق.

والأسبوع نفسه شهد أيضاً إعلان Meta عن تعاونات جديدة مع مطوري التطبيقات لدمج Muse Spark في منتجاتهم عبر API — خطوة تشير إلى أن الشركة لا تنوي الاكتفاء بتطبيقاتها الخاصة، بل تسعى لبناء نظام بيئي مغلق حول نموذجها الجديد.

---

**ما يظل مفتوحاً ليس السؤال عن جودة Muse Spark — التي تبدو مقنعة في حدودها المُعلنة للصحة والعلوم — بل عن مصداقية المنهجية.** بعد تجربة Llama 4، سيتوقف الحكم الفعلي على ما يكشفه التقييم المستقل خارج المختبرات الداخلية لـMeta. وهذه ربما هي نقطة الضعف الحقيقية التي يواجهها Alexandr Wang الآن: ليس بناء نموذج قوي، بل شيء أصعب — استعادة ثقة المجتمع الذي شعر مرة بالخيانة.

على منصة X، كتب أحد المطورين في مجال الذكاء الاصطناعي: "Llama 4 كانت فضيحة. Muse Spark مغلق. متى نصدق Meta مجدداً؟" الإجابة على هذا السؤال قد تستغرق وقتاً أطول من التسعة أشهر التي استغرقها بناء النموذج. وربما لن تأتي الإجابة من مقارنة الأرقام في المعايير المرجعية، بل من الاختبار اليومي، في تطبيقات الملايين، على مدى الأشهر المقبلة.

---

### 🚀 استكشف المزيد
هل تريد معرفة المزيد عن أحدث النماذج المذكورة هنا؟ تفضل بزيارة [قائمة أقوى نماذج الذكاء الاصطناعي](/ar/models/) للحصول على مقارنة شاملة، أو تصفح [أحدث أدوات الذكاء الاصطناعي](/ar/tools/) لتحسين إنتاجيتك.
