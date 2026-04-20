---
title: "Kimi K2.5: The Chinese Model Redefining the Boundaries of Open‑Source Performance"
description: "Comprehensive Guide: A comprehensive analysis of Moonshot AI's Kimi K2.5: trillion‑parameter architecture, parallel agent swarm, performance that challenges GPT‑5.4 at a fraction of the cost. - Discover the essential details and comparisons you need."
date: "2026-04-09"
category: "models"
tags: ["Kimi K2.5", "Moonshot AI", "agent swarm", "LMSYS", "Artificial Analysis", "LiveBench", "model comparison", "2026"]
image: "/images/kimi-k2-5-complete.webp"
---

## The January Shock: When the Frontier Is Pushed

On 27 January 2026, Chinese startup Moonshot AI released its Kimi K2.5 model. What set it apart was not merely benchmark numbers, but an entirely new architectural concept: **“Agent Swarm”**. The model can coordinate up to 100 sub‑agents to execute 1,500 tool steps in parallel, cutting the runtime of complex tasks by 4.5× compared to traditional single‑path agents. Crucially, it is the first open‑source model that genuinely reaches the performance **“frontier”**.

## Expert Architecture: A Trillion Parameters with Surgical Efficiency

K2.5 is built on a mixture‑of‑experts (MoE) architecture with a total of one trillion parameters, but activates only 32 billion of them per token during inference. This design gives the model enormous knowledge memory while keeping computational efficiency high enough to make deployment affordable.

Core specifications: 61 layers including one dense layer, 384 experts with 8 activated per token, a 256,000‑token context window, a 160,000‑token vocabulary, and a MoonViT visual encoder of 400 million parameters. Pretraining was performed on 15 trillion tokens of mixed text and image data, making it a genuinely multimodal model from the ground up.

## Performance on Benchmarks

The following results are documented from independent platforms such as LiveBench and Artificial Analysis:

<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">Main Benchmarks — April 2026</p>

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
      <div style="width: 96.1%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- GPQA Diamond -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GPQA Diamond</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">87.6%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 87.6%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- MathVista -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">MathVista</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">90.1%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 96.1%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
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
      <div style="width: 76.8%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- HLE with tools -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">HLE (with tools)</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">50.2%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 87.9%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07);">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">Mathematics & Science</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">Programming</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">Agents</span></div>
  </div>
</div>
On the SWE‑bench Verified test in particular, the 76.8% score is the highest ever recorded for an open‑source model, surpassing DeepSeek V3.2 by a noticeable margin.

## Agent Comparison: When the Swarm Outperforms

<div dir="rtl" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 28px 0; letter-spacing: 0.05em;">Agent Performance Comparison — Kimi K2.5 Agent Swarm vs. Competitors</p>

  <!-- BrowseComp -->
  <div style="margin-bottom: 24px;">
    <p style="color: #e2e8f0; font-size: 13px; font-weight: 600; margin: 0 0 12px 0;">BrowseComp</p>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div>
        <div style="display: flex; justify-content: space-between; margin-bottom: 4px;">
          <span style="color: #93c5fd; font-size: 12px;">Kimi K2.5 Agent Swarm</span>
          <span style="color: #93c5fd; font-size: 12px; font-weight: 700;">76.8%</span>
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

These numbers reveal that putting Kimi K2.5 into “Agent Swarm” mode transforms it into a completely different large‑scale search tool, surpassing Claude Opus 4.5 by a wide margin in BrowseComp (75.4 vs. 32.8). Competition in Wide Search is more balanced.

## Global Ranking: LMSYS Arena

The LMSYS Chatbot Arena relies on blind human voting between the outputs of two models simultaneously and is one of the most objective benchmarks for conversational quality. In the March 2026 update, Kimi K2.5 ranked ninth globally in the Code Arena with an Elo score of 1809, becoming the first Chinese model (alongside GLM‑5) to enter the top‑ten list. The leading models scored between 1941 and 2002 points, meaning a gap of 130–190 points — a difference that can be narrowed, but real.

## Artificial Analysis Analysis: Intelligence vs. Cost

The Artificial Analysis platform measures agent performance on complex real‑world tasks and combines performance with actual cost. Key findings for K2.5:

**Intelligence Index**: 47 points vs. an average of 26 points for similar models. On the GDPval‑AA scale (for agent‑cognitive tasks such as analysis and presentations), it scored 1309 Elo points, surpassing GLM‑4.7, DeepSeek V3.2, and Gemini 3 Pro.

**Total Cost**: $371 to run the full intelligence test suite, more than 4× less than Claude Opus 4.5 or GPT‑5.2.

**Hallucination Rate**: Just 64% compared to 74% for the previous Kimi K2 Thinking. The model prefers to abstain from answering rather than fabricating unverified information—a positive trait for reliability contexts.

**Speed**: 40.8 tokens per second vs. an average of 51, with a clear tendency towards verbosity (89 million tokens in the test suite vs. an average of 15 million). This can be valuable for in‑depth analysis but raises costs in interactive applications.

## Pricing: The Price War That Changed the Equation

Official pricing via Alibaba Cloud: $0.60 per million input tokens, $3.00 for output. Via OpenRouter: $0.38 input, $1.72 output. With cached‑input discounts, the effective input price can drop below $0.25 for repetitive use cases.

The most striking comparison: K2.5 is about 9× cheaper than Claude Opus 4.5, and roughly 37× cheaper than Claude Opus 4.6. Given that it outperforms these two models on several agent benchmarks, the equation becomes top‑tier performance at a fraction of the cost.

## The Complete Kimi Family

| Model | Parameters | Active Parameters | Use Case | Price |
| :--- | :--- | :--- | :--- | :--- |
| Kimi K2 Lite | ~30B | 30B | Simple tasks | Free |
| Kimi K2 | ~100B | 100B | General use | $0.30/$0.10 |
| **Kimi K2.5** | **1T** | **32B** | **Complex tasks** | **$1.20/$0.40** |
| Kimi K2 Pro | ~2T | 64B | Specialized research | $6.00/$2.00 |

## Real Limitations

The 256,000‑token context window is the most prominent constraint, falling short of the millions of tokens offered by Gemini, Claude, and even Llama 4 Maverick. This limits its use for tasks requiring processing of huge documents or entire code repositories in a single context.

On the ARC‑AGI‑2 test for abstract reasoning, it scored only 12% at an evaluation cost of $0.28—a figure that indicates a gap in the ability to infer entirely new abstract patterns, a challenge shared by most current‑generation models, though the leading closed models score higher by a margin.

Independent reports also suggest that workflows heavily reliant on tool calling may need more human supervision compared to OpenAI or Anthropic models, especially in sensitive production environments.

## Fully Available: MIT Without Restrictions

The model was released under the MIT open‑source license, available for use, modification, and commercial distribution. Accessible via kimi.com and the mobile app, or via API from Fireworks AI, Together AI, Nebius, and Cloudflare Workers AI, or by downloading the weights from Hugging Face to run a full version of about 595 GB or a dynamically quantized compressed version of about 240 GB.

## Questions Seeking Answers

What Kimi K2.5 brings to the stage is deeper than mere benchmarks: if an open‑source model with this level of performance in programming, mathematics, and agent‑based search is available at this cost, where does the actual value of closed models lie? The partial answer lies in two points: quality of explanations and human‑guided reasoning (where Claude models excel), and handling of extremely large contexts (where Gemini excels). But the deeper question concerns whether these performance gaps will continue to widen or will narrow, given that the team that produced K2.5 now has a freely available model for continuous improvement at a pace not subject to immediate profit pressures.

---

### 🚀 Explore More
Want to learn more about the latest models mentioned here? Visit our [Top AI Models List](/en/models/) for a comprehensive comparison, or browse the [Latest AI Tools](/en/tools/) to boost your productivity.
