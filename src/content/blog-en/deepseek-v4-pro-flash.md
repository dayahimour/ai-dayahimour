---
title: "DeepSeek-V4 Pro and Flash: The Open-Source Models Challenging GPT-5.4 and Claude"
description: "DeepSeek-V4 Pro with 1.6 trillion parameters and Flash with 284 billion — a detailed look at the hybrid attention architecture and benchmark performance against GPT-5.4 and Claude Opus 4.6"
date: "2026-04-24"
slug: "deepseek-v4-pro-flash"
category: "models"
tags: ["DeepSeek-V4-Pro", "DeepSeek-V4-Flash", "open-source LLMs", "million-token context", "2026", "DeepSeek-V4", "DeepSeek"]
image: "/images/deepseek-v4-pro-flash.webp"
author: "AI DayaHimour Team"
featured: false
draft: false
---

On April 24, 2026, DeepSeek launched its long-awaited V4 series, and the company didn't settle for a single model. Two complementary releases arrived simultaneously: the colossal DeepSeek-V4-Pro, designed to compete head-to-head with the strongest closed-source models, and DeepSeek-V4-Flash, a model that proves efficiency and speed need not come at the expense of high performance. Both are available as open-source previews on Hugging Face, and both support a context window of one million tokens.

What shifted the ground this time wasn't sheer scale — though Pro houses 1.6 trillion parameters — but a fundamentally re-engineered architecture that reimagines how a language model handles long-form text. The immediate result: computational consumption per token at one-million-token context dropped to just 27% of what the previous V3.2 required, while the KV cache shrank to one-tenth its former size.

## An Attention Mechanism That Rewrites the Rules

To grasp what DeepSeek accomplished, one must first understand the core problem plaguing all large language models: as the text being processed grows longer, the computational effort required multiplies unsustainably. Imagine trying to follow a conversation in a crowded room — after a few minutes, tracking every word spoken becomes impossible without a smart focusing strategy.

This is where the V4 series' dual innovation comes in. The first is distributing the model's layers between two alternating attention patterns: a "compressed sparse" mode that condenses small groups of consecutive words into single focus points and then selects only the most relevant ones for actual processing, and a "heavily compressed" mode that handles far larger text blocks while maintaining dense attention on them after compression. Both modes retain a local sliding window to capture the subtle relationships between adjacent words — the grammatical and stylistic nuances that compression mechanisms alone cannot grasp.

The second innovation is no less significant: replacing the traditional residual connections between model layers with what DeepSeek calls "manifold-constrained hyper-connections." Behind this technical name lies a relatively simple idea — ensuring signals neither inflate nor fade as they pass through the model's deep layers, enabling deeper and more stable training. The picture is completed by the Muon optimizer, which replaces traditional AdamW for most model parameters, delivering more mathematically coherent updates that accelerate convergence during training across 32 to 33 trillion tokens.

## Technical Specifications Reflecting a Different Philosophy

DeepSeek-V4-Pro employs a Mixture of Experts architecture with 384 routed experts and one shared expert in each of its 61 layers, activating only six experts per token — a clever strategy that combines the richness of a massive model with the efficiency of a smaller one. The hidden dimension reaches 7168, and FP4 precision with quantization-aware training is used for expert weights and specific attention pathways.

DeepSeek-V4-Flash reduces the layer count to 43, the hidden dimension to 4096, and the routed experts to 256, while preserving the same compression rates and the same 128-token sliding window. Both versions share the multi-token prediction feature at depth one, inherited from DeepSeek-V3.

The post-training pipeline deserves particular attention: a two-stage process that first trains independent specialists for each domain — mathematics, coding, agents, and instruction following — through fine-tuning and GRPO reinforcement, then merges these specializations into a unified model through on-policy distillation using more than ten teacher models.

## Benchmark Performance

The DeepSeek-V4-Pro-Max thinking mode reveals an unprecedented competitive position for an open-source model:

<div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">Key Benchmarks — DeepSeek-V4-Pro-Max — April 2026</p>

  <!-- GPQA Diamond — Purple: Science -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GPQA Diamond</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">90.1%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 90.1%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- MMLU-Pro — Blue: General Knowledge -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">MMLU-Pro</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">87.5%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 87.5%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- HLE — Blue: Advanced Reasoning -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">HLE (Humanity's Last Exam)</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">37.7%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 37.7%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- LiveCodeBench — Green: Competitive Coding -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">LiveCodeBench</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">93.5%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 93.5%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- SWE-Bench Verified — Green: Software Engineering -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-Bench Verified</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">80.6%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 80.6%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- Legend -->
  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">Math / General Knowledge / Reasoning</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">Science</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">Coding</span></div>
  </div>
</div>

On GPQA Diamond — a benchmark designed to test doctoral-level scientific reasoning — the model scored 90.1%, surpassing Claude Opus 4.6 Max by a narrow but real margin, though it remained behind Gemini-3.1-Pro. The most striking result emerged from the internal Codeforces evaluation, where it achieved an Elo rating of 3206 points, placing it at rank 23 among human competitors. This marks the first time in the history of open-source models that one has exceeded the performance of GPT-5.4 xHigh, which scored 3168 points.

On LiveCodeBench for competitive programming, DeepSeek-V4-Pro-Max led the field at 93.5%, outperforming both Gemini-3.1-Pro and K2.6-Thinking. On SWE-Bench Verified — which measures the ability to solve real-world software engineering problems — it achieved 80.6%, essentially matching Claude Opus 4.6.

## Three Thinking Levels: Why Performance Varies So Dramatically

The V4 series offers three inference modes that control the depth of reasoning granted to the model before generating a response. Non-think mode produces rapid replies for routine tasks. Think High activates extended reasoning chains. Think Max — which is what the published performance data reflects — gives the model special system instructions that compel it to decompose problems systematically, with a context window of up to 384,000 tokens dedicated solely to the thinking phase.

The gap between these modes reveals something striking about the model's nature. On HLE — one of the most demanding exams crafted by experts across multiple scientific disciplines — performance leaps from 7.7% in standard mode to 34.5% in high mode and then 37.7% in max mode. On the Apex Shortlist benchmark for advanced reasoning, the jump is even more dramatic: from 9.2% to 85.5% to 90.2%. These numbers mean, quite simply, that the model stores deep reasoning capabilities that only surface when given sufficient time and working memory.

## Flash: Not Just a Smaller Version

DeepSeek-V4-Flash is not a watered-down Pro. It's a model designed from the ground up to answer an entirely different question: what's the best performance achievable with only 13 billion activated parameters? The answer DeepSeek delivered surprised many.

In base training evaluations, Flash-Base exceeded the results of the previous V3.2-Base across most benchmarks, even though the latter used 37 billion activated parameters. And on advanced reasoning tasks with Max mode, Flash's results converge strikingly close to its larger sibling: 85.7% versus 90.2% on Apex Shortlist, and 3052 versus 3206 on Codeforces Rating — performance that aligns with GPT-5.2 and Gemini-3.0-Pro levels.

The gap remains pronounced in tasks relying on broad world knowledge, where Flash scores only 34.1% on SimpleQA-Verified compared to Pro's 57.9% — a logically expected outcome since larger models store more factual information in their parameters during pre-training.

## The Million-Token Context: From Marketing Promise to Practical Reality

Supporting a one-million-token context window has long been more of a marketing claim than a practical capability, because the computational cost made regular usage economically prohibitive. The V4 series flips this equation.

At one-million-token context, DeepSeek-V4-Pro consumes only 27% of the computational operations per token compared to V3.2, while Flash reaches just 10%. The KV cache shrinks to 10% and 7% respectively. These aren't marginal improvements — they fundamentally redefine what it means for a model to ingest an entire codebase or a massive knowledge repository in a single session without prohibitive costs.

On the MRCR benchmark for information retrieval at one million tokens, Pro-Max scored 83.5%, surpassing Gemini-3.1-Pro. More significant than the number itself is the stability: retrieval performance remains nearly flat up to 128,000 tokens before beginning a gradual, gentle decline toward the end of the window — a far less steep degradation curve than competing models exhibit.

## The Competitive Landscape: Where Does DeepSeek-V4 Stand Now?

In competitive programming, DeepSeek-V4-Pro is the strongest open-source model to date, without qualification. In agentic tasks — where the model is asked to use external tools and complete multi-step workflows — it scored 73.6% on MCPAtlas, outperforming both GPT-5.4 xHigh and Gemini-3.1-Pro-High. And in the company's internal evaluation on real-world production engineering tasks, it achieved a 67% success rate compared to 70% for Claude Opus 4.5 and 47% for Claude Sonnet 4.5.

These numbers paint a clearer picture than headlines alone might suggest: the gap between open and closed models hasn't disappeared, but it has shrunk dramatically in some domains and nearly vanished in programming. The open question now isn't about what DeepSeek achieved with this release — it's about what the next iterations might deliver if the company continues on this trajectory of architectural innovation rather than merely scaling up. Are we witnessing the beginning of an era where open-source models become the first choice for developers and researchers, not just the economical alternative?