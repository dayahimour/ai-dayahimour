---
title: "Xiaomi: From Budget Phone Maker to AI Giant"
description: "Comprehensive Guide: A comprehensive analysis of Xiaomi's journey from affordable smartphones to MiMo models, the SU7 EV, and the miclaw AI agent — building a fully integrated tech empire. - Discover the essential details and comparisons you need."
date: "2026-04-19"
category: "companies"
tags: ["Xiaomi", "MiMo", "AI Companies", "artificial intelligence", "2026"]
image: "/images/xiaomi-mimo.webp"
author: "AI DayaHimour Team"
featured: false
draft: false
---

In April 2010, **Lei Jun** launched his new company from a modest office in Beijing with a single idea: high-spec smartphones at competitive prices. Sixteen years later, Xiaomi still sells phones — but it also manufactures its own electric vehicles, operates an AIoT ecosystem spanning more than 10.7 billion connected devices, and releases AI models that compete with Claude and GPT for the top spots on global leaderboards.

## Founding: A Simple Idea That Disrupted the Market

Lei Jun founded Xiaomi in April 2010 alongside several engineers, most notably **Lin Bin**, a former engineer at Google and Microsoft. Lei already had a strong track record in China's technology sector, having founded Kingsoft and taken it public before devoting himself fully to his new venture.

The original idea was not revolutionary in its essence: sell phones directly online without traditional retail stores, cutting costs and enabling lower prices than competitors. But this direct-to-consumer distribution was paired with a model that kept hardware margins at or near zero, recouping that through internet services and an integrated ecosystem. It was a bold bet in a market already defined by thin margins.

Xiaomi ranked third globally in smartphone shipments with a 14.7% share in Q2 2025, while leading the mainland China market with an 18.8% share in Q1 of the same year — a return to the top after a decade away.

## Product Ecosystem: Far Beyond a Phone

Many understand Xiaomi as a phone manufacturer, but the full picture is different. Smartphones do account for more than 60% of revenue, yet other segments are growing at a significantly faster rate.

AIoT and lifestyle products recorded 58.7% growth in Q1 2025, reaching 32.3 billion yuan with record gross margins of 25% — figures that signal a real structural shift in the company's composition. The Xiaomi home ecosystem covers air conditioners, refrigerators, washing machines, robotic vacuums, smart TVs, and other devices interconnected through the Mi Home app.

On the electric vehicle side, Xiaomi launched its SU7 sedan in 2024 and surprised the market with the scale of demand. In Q2 2025, the company delivered 81,302 vehicles — a year-over-year increase exceeding 197%. When the YU7 SUV launched in June 2025, confirmed reservations surpassed 240,000 orders in just 18 hours, placing Xiaomi alongside established competitors like NIO, XPeng, and BYD in China's electric vehicle market.

## MiMo: The AI Wager

When Xiaomi entered the AI space, it did not take the easy path of integrating a third-party model into its products. It chose to build its own, beginning with **MiMo-7B** in April 2025 — a small open-source language reasoning model. It was less a commercial launch than a declaration of intent.

December 2025 brought **MiMo-V2-Flash** (309 billion total parameters, 15 billion active) with an innovative MoE architecture and a 5:1 hybrid attention ratio, distributed under the MIT license. The model delivered strong performance on coding benchmarks and placed Xiaomi on the map as a serious model developer, not merely a user.

### MiMo-V2-Pro: The Silent Ambush

On March 18, 2026, the most significant announcement arrived. But a week before the official reveal, an anonymous model under the codename "Hunter Alpha" appeared on OpenRouter — the world's largest API aggregation platform. The unknown model climbed to the top of the daily usage charts for an entire week, surpassing one trillion tokens in cumulative calls, before Xiaomi disclosed that Hunter Alpha was an early internal test build of **MiMo-V2-Pro**.

The final model carries more than one trillion total parameters with 42 billion active, a context window reaching one million tokens, and an elevated hybrid attention ratio of 7:1 (up from 5:1 in the previous generation) — enabling long-context processing without performance degradation. A lightweight Multi-Token Prediction (MTP) layer accelerates response generation in the extended reasoning scenarios that agent workflows demand.

Results on independent evaluation benchmarks are well-documented. On the independent Artificial Analysis Intelligence Index, MiMo-V2-Pro placed tenth globally with a score of 49, surpassing Kimi K2.5 (47) and Grok 4.20 Beta (48), while trailing GPT-5.2 Codex (also 49) and GLM-5 (50) by a narrow margin. In real-world agentic task evaluations (GDPval-AA), the model recorded an Elo of 1426, leading all Chinese models in that category and outpacing GLM-5 (1406) and Kimi K2.5 (1283).

Beyond raw performance, the hallucination rate dropped to 30% — a substantial improvement from MiMo-V2-Flash's 48%. Generation efficiency is another differentiator: the model required only 77 million output tokens to complete the full Intelligence Index evaluation, compared to 109 million for GLM-5 and 89 million for Kimi K2.5.

### Pricing as a Strategic Weapon

MiMo-V2-Pro starts at $1.00 per million input tokens and $3.00 per million output tokens (for windows up to 256K tokens). By comparison, Claude Opus 4.6 is priced at approximately $5.00 per million input tokens and $25.00 per million output tokens, while Claude Sonnet 4.6 runs at $3.00 input and $15.00 output. That pricing gap is not accidental — the MiMo team, led by **Luo Fuli**, an engineer who came from the DeepSeek R1 project, is building a business model based on volume rather than high margin.

### Beyond MiMo-V2-Pro

Xiaomi launched two companion models alongside Pro: **MiMo-V2-Omni** for multimodal understanding (text, image, audio, video) with a 262K-token context window, and **MiMo-V2-TTS** for speech synthesis supporting multiple dialects and fine-grained emotion control within a single sentence. MiMo-V2-Omni scored 94.0 on BigBench Audio — topping all competitors — and 69.4 on MMAU-Pro.

## miclaw: When the Phone Becomes an Agent

On March 6, 2026, Xiaomi launched a closed beta for **miclaw**, an AI agent embedded at the system level that runs directly on the device. The idea is not a voice assistant that answers questions — it is a system that understands intent and executes tasks autonomously across apps and the broader ecosystem.

miclaw invokes more than 50 system-level capabilities and can control over one billion IoT devices connected to the Mijia ecosystem via a complete protocol. It learns from user patterns through a local memory system without sending that data to train the underlying model — a clear commitment that addresses privacy concerns head-on. Sensitive operations such as sending messages or creating calendar entries require explicit manual confirmation, with an automatic 60-second rejection timeout if the user does not respond.

On March 30, 2026, Xiaomi pushed a major update to testers (build 3.0.305.4) that included integration with third-party MCP services — among them Zhihu and the Tongcheng travel platform — alongside significant improvements to response speed and context management in extended conversations. The rollout is moving quickly: miclaw now supports the Xiaomi 17 series for international markets and the Xiaomi 14 series and above in China.

## XRing O1 and HyperOS: The Hardware Foundation

Xiaomi's AI capabilities rest not only on models but on proprietary infrastructure. **XRing O1** is an in-house SoC designed on a 3 nanometer process, placing it among the most advanced smartphone chips on the market. Company president **Lu Weibing** announced at MWC 2026 in Barcelona that Xiaomi intends to release a new chip every year — matching the cadence of Apple and Samsung.

**HyperOS**, built on Android, serves as the software layer that binds devices together. By the end of 2025, Xiaomi will for the first time combine the XRing O1, HyperOS, and a MiMo AI assistant in a single integrated device — what Lei Jun has described as the "Grand Convergence."

## The Numbers Behind the Ambition

Xiaomi posted five consecutive quarters of record revenue. Q2 2025 closed with 116 billion yuan in revenue (up 30.5% year-over-year) and an adjusted net profit of 10.8 billion yuan (up 75%). The 2025 R&D budget exceeded 33 billion yuan — a 37.8% increase — and is expected to rise to 40 billion yuan in 2026.

Lei Jun committed to investing 60 billion yuan (approximately $8.7 billion) in AI over three years, with 16 billion yuan earmarked for 2026 alone. He announced on April 2, 2026, that MiMo had surpassed one trillion tokens in cumulative API calls since launch.

Monthly active users reached 754 million globally, while the AIoT ecosystem encompasses more than 10.79 billion connected devices — the world's largest consumer AIoT network by the company's own account.

## The Competitive Landscape

Xiaomi faces competition on multiple fronts simultaneously. In foundation models, it contends with OpenAI, Anthropic, Google, and DeepSeek, alongside Chinese peers Alibaba (Qwen), Tencent (Hunyuan), and Baidu. In smartphones, it competes with Apple, Samsung, and Huawei. In electric vehicles, it enters a field that includes Tesla, BYD, and NIO.

The advantage Xiaomi claims — not without basis — is full vertical integration: an internally designed chip, a proprietary operating system, self-developed language models, and a device ecosystem spanning phones, cars, and homes. Most competitors hold some of these pieces, not all. Goldman Sachs noted in a December 2025 report that this integration represents a rare competitive advantage that is difficult for rivals to replicate.

## The Road Ahead

By 2027, Xiaomi plans to bring its electric vehicles to the European market, accompanied by an AI assistant designed for international audiences. Lu Weibing indicated the possibility of partnering with Google Gemini to provide language capabilities outside China. The international rollout of miclaw remains in beta, but Xiaomi is pushing updates at a rapid pace.

On the open-source front, Luo Fuli pledged to release weights for the most stable model variants when they mature sufficiently — a commitment that echoes the DeepSeek approach, which demonstrated an exceptional capacity for expanding adoption.

## Closing Analysis

The gap remains: MiMo-V2-Pro sits at tenth globally while Claude Opus 4.6 and Gemini 3.1 Pro lead by a meaningful margin on several benchmarks. But Xiaomi is not racing to be the smartest model — it is racing to be the most deeply woven into daily life. The question the coming months will answer is whether full vertical integration and accelerating deployment momentum can transform Xiaomi from a regional AI contender into a genuine global force in that arena.

---

###  Explore More
Want to learn more about the latest models mentioned here? Visit our [Top AI Models List](/en/models/) for a comprehensive comparison, or browse the [Latest AI Tools](/en/tools/) to boost your productivity.
