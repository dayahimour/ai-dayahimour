---
title: "Z.ai's GLM-5.1: An Open-Source Model That Runs for Eight Hours Straight and Outperforms Opus 4.6 in Programming Benchmarks"
description: "Z.ai launches GLM-5.1, a massive 754-billion-parameter model that operates autonomously for eight hours, achieves advanced programming performance, and is open-source under the MIT license"
date: "2026-04-08"
category: "news"
tags: ["Z.ai", "GLM-5.1", "Open-source model", "Programming", "2026"]
image: "/images/glm-5-1-zai.webp"
---

Z.ai (the global brand of Zhipu AI) announced on March 27, 2026, the launch of its giant language model GLM-5.1, a post‑training update to the GLM‑5 model released just six weeks earlier, with substantial improvements in programming and agentic capabilities. The model, which contains 754 billion parameters (with a Mixture‑of‑Experts architecture that activates only 40–44 billion per token), is licensed under the permissive MIT license, allowing any organization to download, modify, and use it commercially. It is available on Hugging Face with more than 1.51 terabytes of data.

| Model | Programming performance score (internal scale) | Difference |
|-------|-----------------------------------------------|------------|
| GLM-5 (previous version) | 35.4 | – |
| GLM-5.1 | 45.3 | +9.9 points (28% improvement) |
| Claude Opus 4.6 | 47.9 | +2.6 points above GLM‑5.1 |

GLM-5.1 reaches 94.6% of the programming performance of Anthropic’s leading model, with a 28% improvement in a single point release compared to its predecessor.

## Eight Hours of Autonomous Work: The Long‑Horizon Concept

The essence of GLM‑5.1 is not merely an improvement in instantaneous performance, but a redefinition of task‑continuity duration in agentic work. Previous models were built around interactions lasting no more than minutes, exhausting their strategies quickly. Z.ai’s data shows that GLM‑5.1 can operate autonomously and continuously on a single task for over eight hours, planning, executing, and self‑correcting throughout the process, ultimately delivering complete engineering results.

| Time period | Maximum number of autonomous steps |
|-------------|-----------------------------------|
| End of 2025 | ~20 steps |
| GLM‑5.1 (2026) | 1,700 steps |

Z.ai leader Lou stated on platform X that “autonomous operation time may be the most important curve after scaling laws.”

## Ladder‑Style Optimization Strategy

In one of the challenging experimental tasks published by Z.ai, the model was asked to optimize a vector database (VectorDBBench). The model was presented with an empty Rust structure and blank implementation points, then used tool‑calling‑based agents to edit code, compile, test, and analyze.

| Model | Best performance (queries/second) | Number of cycles | Number of tool calls |
|-------|-----------------------------------|------------------|----------------------|
| Claude Opus 4.6 | 3,547 QPS | One standard session | unspecified |
| GLM‑5.1 | 21,500 QPS | 655 cycles | over 6,000 |

GLM‑5.1 achieved roughly six times the best result in a single session. More important than the number is the optimization pattern itself: improvement was not linear but followed a “ladder” pattern, with periods of gradual tuning followed by major structural leaps. For example, in cycle 90 the model switched its strategy from full‑data scanning to clustered probing (IVF) with f16 vector compression, jumping to 6,400 QPS, and in cycle 240 introduced two‑stage processing (u8 then f16) to reach 13,400 QPS. Six such structural leaps occurred, each initiated by the model itself after analyzing evaluation logs.

## Architecture and Training: Huawei Hardware and a 200K‑Token Context Window

GLM‑5.1 shares the core architecture with GLM‑5: a Mixture‑of‑Experts model with 256 experts, only 8 of which are active per token, and an active parameter count between 40 and 44 billion per inference. The context window is 200,000 tokens, with a maximum output of 131,072 tokens. The model was trained on 28.5 trillion tokens using 100,000 Huawei Ascend 910B chips within the MindSpore framework, with no reliance on NVIDIA hardware. This achievement is especially significant because Zhipu AI was added to the U.S. Entity List in January 2025, which prohibits its access to H100 or H200 chips. The company’s ability to produce a model at this level under these constraints points to the growing maturity of China’s domestic computing ecosystem.

## Pricing: Flat Monthly Subscription vs. Other Models

Unlike other models that charge per‑million‑token pricing, GLM‑5.1 is available only through the GLM Coding Plan, a monthly subscription.

| Pricing model | GLM‑5.1 (Coding Plan) | Claude Opus 4.6 |
|---------------|----------------------|-----------------|
| Structure | Flat monthly subscription | Per‑million‑token pricing |
| Minimum tier | $10/month (Lite plan) | $5 (input) + $25 (output) |
| Estimated cost (1M output tokens) | ~undefined within quota | about $15 |
| Limitations | Daily quotas exhausted during peak hours | Pay‑as‑you‑go with no quotas |

New users receive a free credit of $5 every 30 days. However, flat pricing has another side: users consume daily quotas, and reports indicate these quotas run out within an hour or two during peak times, especially when a 3× multiplier is applied for intensive usage.

## Speed and Reliability: A Deliberate Trade‑Off?

The long‑horizon autonomous capabilities come at a time cost. Early BridgeBench measurements recorded significant differences in generation speed between models.

| Model | Generation speed (tokens/second) | Note |
|-------|---------------------------------|------|
| GLM‑5.1 | 44.3 | Slowest in its class |
| GPT‑5.4 | ~88 | Twice as fast as GLM‑5.1 |
| Grok 4.20 | ~265 | 6× faster than GLM‑5.1 |

This slowdown is not a flaw in the infrastructure, but an intentional architectural choice favoring long self‑correction loops. Yet field tests revealed more concerning issues. After exceeding 100,000 tokens, garbled text, infinite loops, and code‑destructive changes were observed. The model sometimes merges files into a single file without instructions, and basic math queries consume 4,500 tokens of output. In front‑end tasks, the model showed little improvement over GLM‑5.0 in visual effects or 3D worlds.

## Open‑Source: Promise vs. Reality

Z.ai’s global lead Li Zixuan confirmed via platform X that the model will be open‑source under the MIT license around April 6–7, 2026, stating: “No need to panic. GLM‑5.1 will be open‑source.” But open‑source comes with practical caveats: unlike GLM‑5, which is available via OpenRouter and Vercel AI Gateway, GLM‑5.1 so far is only available to Coding Plan subscribers. The open‑source release will be available via Hugging Face, as with GLM‑5, but the technical hurdles of running a 1.51‑terabyte model on local hardware remain a significant obstacle.

The lingering question: Can Z.ai maintain its frantic release pace—GLM‑5 on February 11, GLM‑5‑Turbo on March 15, and GLM‑5.1 on March 27—without degrading service or reducing capabilities later due to computing‑cost pressures? The full open‑source release, expected in April, will be the real test of whether these eight‑hour‑capable models can move from Z.ai’s labs into the hands of the global developer community.