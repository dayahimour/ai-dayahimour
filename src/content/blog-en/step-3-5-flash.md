---
title: "Step 3.5 Flash from Stepfun: The Chinese Fast Model Challenging Western Models with Unprecedented Efficiency"
description: "Comprehensive Guide: An open‑source 196B‑parameter model that activates only 11B per token, delivering advanced performance in reasoning and agentic tasks at speeds up to 350 tokens per second, with low API costs that make it a direct competitor to Western flash‑style models. - Discover the essential details and comparisons you need."
date: "2026-04-05"
category: "models"
tags: ["Step 3.5 Flash", "Stepfun", "Chinese Models", "AI 2026"]
image: "/images/step-3-5-flash.webp"
---

On 12 February 2026, the Chinese company Stepfun launched Step 3.5 Flash, an open‑source model that is the most efficient in the large MoE model category. The release was not just an addition to the growing list of Chinese models; it came to prove that advanced artificial intelligence can be delivered at low computational cost and with speed exceeding market expectations. The model, which holds a total of 196 billion parameters but activates only 11 billion per token, targets agentic tasks and deep reasoning with performance that rivals proprietary Western models, plus the advantage of speed and cost.

Stepfun is not an ordinary startup. Founded on 6 April 2023 in Shanghai by three former Microsoft engineers: Jiang Daxin (CEO and former Vice President at Microsoft Research Asia), Zhou Yepu, and Jiao Pengxing. Later, Yin Qi, co‑founder of Megvii, joined as Chairman of the Board in January 2026, accompanied by a Series B+ funding round exceeding $700 million. Stepfun is one of China’s six “AI tigers,” and its strategy focuses on integrating multimodal AI with real‑world applications, including models customized for physical devices such as cars and robots. Before Step 3.5 Flash, the company released models like Step‑2 (trillion‑parameter), Step‑Video‑T2V, and Step‑Audio, making it a key player in the multimodal‑model race.

### Technical Architecture Designed for Extreme Efficiency

Step 3.5 Flash is built on an advanced Sparse Mixture‑of‑Experts (MoE) architecture. The model contains 196.81 billion total parameters (196 billion in the backbone, 0.81 billion in the head), but it activates only 11 billion parameters per token. This “intelligence density” allows it to compete with larger models without consuming massive resources during inference. The system further enhances this with 3‑way Multi‑Token Prediction (MTP‑3) technology that predicts three tokens simultaneously, raising speed to 100‑300 tokens per second in normal use and up to 350 tokens per second in single‑stream programming tasks.

To handle long context, Stepfun used a 3:1 ratio of Sliding Window Attention (SWA) to Full Attention: three SWA layers versus one full layer. This reduces the computational cost of large contexts without significant quality loss. The official context window is 256 thousand tokens, making it suitable for agent applications that deal with long documents or extended conversations. The model also supports advanced tool calling and internal Python code execution, with a scalable RL framework based on verifiable signals and preference feedback.

The model is open‑source under the Apache 2.0 license, and available in multiple formats (BF16, FP8, INT4) on Hugging Face, enabling local deployment on high‑performance hardware like NVIDIA DGX Spark or even Mac Studio M4 Max using llama.cpp.

### Performance in Benchmarks: Strength in Reasoning and Agentic Tasks

Step 3.5 Flash stands out in benchmarks that test deep reasoning and agentic tasks. According to Stepfun’s official data (February 2026):

- AIME 2025: 97.3% (reaching 99.8% with Python code execution).
- IMOAnswerBench: 85.4%.
- HMMT 2025: 96.2%.
- SWE‑bench Verified: 74.4%.
- LiveCodeBench‑V6: 86.4%.
- τ²‑Bench (agentic): 88.2%.
- BrowseComp: 69.0%.

Its average performance across eight key benchmarks reaches 81.0, surpassing or competing with larger models such as GLM‑4.7 (355B), DeepSeek V3.2 (671B), and Kimi K2.5 (1T). In agentic tasks, it outperforms many proprietary models in speed and stability across long reasoning chains.

### Comparison with Western Flash Models: Gemini Flash, GPT‑4o Mini, and Claude Haiku

<div dir="ltr" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">Key Benchmark Metrics — April 2026</p>

  <!-- AIME 2025 -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">AIME 2025</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">74.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 74.4%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>  
  </div>  <!-- SWE-Bench Verified -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE‑Bench Verified</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">74.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 74.4%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>  <!-- HumanEval -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">HumanEval</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">80.0%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 48.0%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07);">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">Mathematics & Knowledge</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">Sciences</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">Programming</span></div>
  </div>
</div>

Step 3.5 Flash is designed to be “Flash” in the sense of fast and efficient, exactly like Gemini Flash, GPT‑4o Mini, or Claude Haiku. But it differs radically in size and efficiency. Western small models (typically ranging from 8‑100B effective parameters) focus on balancing speed and cost, whereas Step 3.5 Flash uses MoE to achieve “frontier intelligence” at low operational cost.

In speed, Step 3.5 Flash clearly excels: 100‑350 tokens/second compared to about 50‑150 tokens/second for similar Western models in the category. In API cost, its price reaches $0.10 per million input tokens and $0.30 per million output tokens (via StepFun or OpenRouter), much cheaper than GPT‑4o Mini or Claude Haiku for heavy usage. In mathematical and programming reasoning, it outperforms most Western “small” models, especially on SWE‑bench and AIME, while Gemini Flash remains stronger in very long contexts (1M+) and multimodal tasks.

The main weakness of Step 3.5 Flash is its current focus on text and agentic tasks; it does not natively support multimodal input (images or video), unlike Gemini Flash or GPT‑4o Mini. Also, its performance in some general tasks like SimpleQA or MMLU‑Pro may be lower than more comprehensive Western models, despite its superiority in specialized tasks.

### Arabic Language Support and Available Access

Being of Chinese origin, the model’s core training focuses on English and Chinese, but it supports multiple languages fairly well thanks to a mid‑training stage on diverse data. There are no detailed official data on its performance in Arabic as of April 2026, but users in technical forums indicate acceptable performance on Arabic textual and programming tasks, with some improvements needed for dialects or complex cultural contexts. This makes it a practical choice for Arabic applications that need speed and low cost, especially for agents and automation.

Access methods are multiple and flexible:

- **Official API**: via platform.stepfun.ai (international) or platform.stepfun.com (China), with model ID step‑3.5‑flash.
- **OpenRouter**: supports free and paid tiers.
- **Local deployment**: Hugging Face, vLLM, SGLang, llama.cpp.
- **Other platforms**: NVIDIA NIM, DeepInfra, and integration with OpenClaw for a full agentic experience.
- **Applications**: Web and iOS/Android apps from Stepfun.

### Real Strengths and Weaknesses

**Strengths:**
- Exceptional efficiency: highest “intelligence per watt” in the open‑source large‑model category.
- Real agentic performance: excels in long‑horizon tasks like search, execution, and verification.
- Low cost that enables production scaling.
- Full local deployment support that preserves privacy.

**Weaknesses:**
- Media limitations (text‑only for now).
- Lower performance in some general tasks compared to Western models specialized in breadth.
- Dependence on powerful hardware for full local deployment (though quantization is supported).

### Impact on the Market and Future

Step 3.5 Flash represents a shift in market dynamics: an open‑source Chinese model setting new standards for efficiency and speed. At a time when OpenAI, Google, and Anthropic compete on expensive proprietary models, Stepfun opens the door for developers and small companies to deploy advanced agents at reasonable cost. This “Chinese” approach — focusing on efficiency and open‑source — may accelerate global adoption of agentic AI, especially in emerging markets and industrial applications.

Nevertheless, the road ahead is long. Competition from Qwen, DeepSeek, and MiniMax will push Stepfun to improve multimodal and language support. In the West, the reaction will be a mix of admiration for efficiency and concern over unequal competition in data and computing access.

Ultimately, Step 3.5 Flash is not just another model; it is proof that AI innovation is no longer confined to California. It redefines what “Flash” means: not just speed, but intelligence that actually works within daily workflows at a cost that allows real proliferation. For developers building agents or high‑volume production applications, this model is an option that cannot be ignored in 2026.

---

### 🚀 Explore More
Want to learn more about the latest models mentioned here? Visit our [Top AI Models List](/en/models/) for a comprehensive comparison, or browse the [Latest AI Tools](/en/tools/) to boost your productivity.
