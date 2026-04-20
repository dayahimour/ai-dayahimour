---
title: "Claude Opus 4.7 Review: Anthropic's New Agentic Coding Model (April 16, 2026)"
description: "Comprehensive Guide: Anthropic launched Claude Opus 4.7 on April 16, 2026: 11-point jump on SWE-Bench Pro, 3.75MP vision, the xhigh effort level, pricing, and how it compares to GPT-5.4 and Gemini 3.1. - Discover the essential details and comparisons you need."
date: "2026-04-16"
category: "models"
tags: ["Claude Opus 4.7", "Anthropic", "Claude 4.7", "Agentic Coding", "SWE-Bench", "Claude Code", "AI Models 2026", "Claude Mythos"]
image: "/images/claude-opus-4-7.webp"
author: "AI DayaHimour Team"
featured: false
draft: false
---

Anthropic made **Claude Opus 4.7** generally available on **April 16, 2026**, replacing the February release of Opus 4.6 and cementing the company's roughly two-month cadence between flagship updates. The launch, however, did not land in a vacuum. Hours before the announcement, Anthropic publicly revealed the existence of a stronger internal model under the codename **Claude Mythos Preview**, conceding that Opus 4.7 is "less broadly capable" than it. That rare admission frames the release in an unusual way: not as the peak of what Anthropic has built, but as the safest model actually available for commercial use — a live proving ground for the safety guardrails the company plans to apply to any wider rollout of Mythos-class capabilities.

Opus 4.7 beats both OpenAI's GPT-5.4 Pro and Google's Gemini 3.1 Pro on SWE-Bench Pro and redraws the landscape for long-running agentic coding, high-resolution vision, and computer use. What follows is a detailed walkthrough of what shipped, and what it means for developers and enterprises already building on Claude.

## Agentic Coding: The Core of the Release

Opus 4.7's primary bet is on software engineering tasks that run for hours, not minutes. Anthropic frames it as capable of taking on projects that previously required close human supervision, with a noticeable tendency to verify its outputs before handing them back, rather than executing prompts literally. In practice, the model pauses to check its own assumptions, and explicitly reports missing data instead of fabricating plausible values — behavior early-access partners at Vercel, Hex, and Box highlighted as a meaningful shift from the prior generation.

On **SWE-Bench Pro**, performance jumped from 53.4% in Opus 4.6 to 64.3% in the new release, surpassing GPT-5.4 at 57.7% and Gemini 3.1 Pro at 54.2%. An 11-point lift between consecutive versions of the same family is a rare gain in a phase widely described as benchmark saturation. On **CursorBench**, the score rose from 58% to 70% — a signal that carries extra weight because Cursor is one of the most widely used coding environments running Claude. On **Rakuten-SWE-Bench**, which simulates real production tickets rather than curated problems, the model resolved three times as many issues as its predecessor, with double-digit gains in code quality and test coverage. On Anthropic's internal 93-task coding benchmark, Opus 4.7 solved four tasks that neither Opus 4.6 nor Sonnet 4.6 could crack, and lifted the overall resolution rate by 13%.

## Benchmark Results — April 2026

<div dir="ltr" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">Benchmark Results — April 2026</p>

  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-Bench Verified</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">87.6%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 87.6%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-Bench Pro (Agentic Coding)</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">64.3%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 64.3%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GPQA Diamond (Scientific Reasoning)</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">94.2%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 94.2%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">BrowseComp (Agentic Search)</span>
      <span style="color: #f472b6; font-weight: 700; font-size: 14px;">79.3%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 79.3%; height: 100%; background: linear-gradient(90deg, #db2777, #f472b6); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">Terminal-Bench 2.0 (Terminal Efficiency)</span>
      <span style="color: #fb923c; font-weight: 700; font-size: 14px;">69.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 69.4%; height: 100%; background: linear-gradient(90deg, #ea580c, #fb923c); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">Agentic Coding</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">Scientific Reasoning</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #f472b6;"></div><span style="color: #94a3b8; font-size: 12px;">Agentic Search</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #fb923c;"></div><span style="color: #94a3b8; font-size: 12px;">Terminal Efficiency</span></div>
  </div>
</div>

On **GPQA Diamond**, the top-tier models have converged strikingly: Opus 4.7 at 94.2%, GPT-5.4 Pro at 94.4%, Gemini 3.1 Pro at 94.3%. The benchmark has effectively saturated, which means competitive differentiation has migrated away from raw scientific-knowledge scores and toward applied performance on multi-step, long-horizon tasks. Not every signal points upward, though. On **BrowseComp**, which measures agent-driven research, Opus 4.7 drops to 79.3% from 83.7% on its predecessor, trailing GPT-5.4 at 89.3%. Terminal-Bench 2.0 tells a similar story at 69.4% versus GPT-5.4's 75.1%. The regression likely reflects the flip side of the model's cautious posture: preferring to declare missing information over guessing tends to cost points on benchmarks that reward task completion at all costs.

## High-Resolution Vision: Three Times the Prior Capacity

The most dramatic spec improvement is on the vision side. Opus 4.7 now processes images up to **2,576 pixels on the long edge — roughly 3.75 megapixels** — compared with the 1,568-pixel (about 1.15 MP) ceiling of prior Claude models. The increase is more than threefold, and its practical payoff in **computer use** scenarios is decisive: the model's coordinate outputs now map 1-to-1 with actual screen pixels, eliminating the scale-factor math developers previously had to compute by hand. The result shows up in **XBOW** visual navigation, where the score climbs from 54.5% in Opus 4.6 to 98.5% in the new release — a leap that reshuffles the competitive order for dense document analysis, screenshot interpretation, and complex UI automation.

## Developer Tooling: xhigh and Task Budgets

The release introduces a new effort level named `xhigh`, positioned between `high` and `max`, offering finer control over the reasoning-versus-latency tradeoff. Anthropic recommends starting agentic and coding workloads at `high` or `xhigh`, and **Claude Code** now defaults to `xhigh` across every plan. A **task budgets** system also enters beta, letting developers allocate thinking budgets precisely for long-running jobs and preventing the kind of unbounded reasoning loops that inflate cost without producing output.

Inside Claude Code specifically, the release adds a `/ultrareview` command that runs a dedicated review session modeled on a senior human reviewer — not just surface-level lint issues, but design flaws and logic gaps. **Auto Mode**, which lets Claude take autonomous decisions without continuous confirmation prompts, has been extended to Max plan users after an earlier limited rollout.

File-system-backed memory received a substantive upgrade too. The model preserves the key notes across long, multi-session projects and retrieves them when needed, which makes it materially more effective on work that stretches across days or weeks. The release also supports parallel workflow orchestration across agent teams, with an explicit ability to continue execution after tool failures — a scenario that often halted Opus 4.6 entirely.

## Pricing, Availability, and the Hidden Token Cost

Opus 4.7 is available immediately across every Claude product and the API, and through **Amazon Bedrock**, **Google Cloud Vertex AI**, and **Microsoft Foundry**. Anthropic held pricing steady at **$5 per million input tokens** and **$25 per million output tokens**, with up to 90% savings available via prompt caching. GitHub also announced availability in Copilot for paid-plan users.

There is, however, a subtle cost worth flagging. Opus 4.7 uses an updated **tokenizer** that maps the same input text to between 1.0× and 1.35× the token count, depending on content type. Put differently, even though the per-token price is unchanged, actual per-request cost may rise noticeably. On the API side, a breaking change: setting `temperature`, `top_p`, or `top_k` now returns a 400 error, as Anthropic has removed those parameters in favor of the adaptive thinking system. The official path for controlling output behavior is now the new effort levels and the task budgets system.

## Mythos and Project Glasswing: The Other Side of the Story

Opus 4.7 cannot be read in isolation from the larger frame Anthropic built around it in the days before launch. The disclosure of **Claude Mythos Preview** and the launch of **Project Glasswing** was a watershed moment in AI safety. Anthropic documented that, during internal testing, Mythos autonomously identified thousands of zero-day vulnerabilities across every major operating system and every major web browser. Among the publicly described cases: a 17-year-old remote code execution bug in **FreeBSD** (CVE-2026-4747) that the model identified and exploited without human intervention after the initial prompt, and a 27-year-old vulnerability in **OpenBSD**. Mythos also chained multiple small flaws into sophisticated multi-stage exploits.

That capability is precisely why Anthropic declined to release Mythos publicly, substituting Project Glasswing instead: a partnership with 12 core organizations — among them Amazon, Apple, Microsoft, Google, Cisco, CrowdStrike, Nvidia, JPMorgan Chase, and the Linux Foundation — with defensive-use access extended to roughly 40 organizations in total. The program is backed by $100 million in usage credits and $4 million in direct donations to open-source security organizations.

Within that frame, Opus 4.7 takes on a specific role. It is **the first Claude model** shipping with automated detection and blocking for high-risk cybersecurity prompts. Anthropic is explicit that whatever the company learns from running those guardrails on a "less dangerous" model will inform decisions about any broader rollout of Mythos-class capabilities. Security professionals who use Opus 4.7 for legitimate work — vulnerability research, penetration testing — are directed to the new **Cyber Verification Program** as the formal path to relaxed restrictions.

The gap between the two models is not marginal: Mythos scores 93.9% on SWE-Bench Verified versus 87.6% for Opus 4.7, and 77.8% versus 64.3% on SWE-Bench Pro. The restricted model is genuinely stronger — and that gap is exactly the tension Anthropic is internally managing: a model it has built, but is deliberately holding back.

Commercially, the company is negotiating that tension from a position of striking strength. Annualized revenue has crossed $30 billion, and according to reporting from major venture funds Anthropic has begun fielding investment offers at an **$800 billion valuation** — more than double the $380 billion of its February 2026 Series G. Claude Code alone is credited with contributing roughly $2.5 billion in annualized revenue.

## Analytical Close

Opus 4.7 locks in Anthropic's lead in agentic coding, but it leaves a set of questions deliberately open. How much will automated cybersecurity guardrails friction legitimate developer work over time? How long can the company keep its strongest model locked behind a curated partnership while OpenAI and Google keep pushing? And at what point does the race reach a threshold where safety guardrails become a competitive burden no single player can carry alone? The answers will crystallize over the coming months, as it becomes clear whether Mythos stays caged — or whether its cage quietly expands to cover the entire industry.


---

### 🚀 Explore More
Want to learn more about the latest models mentioned here? Visit our [Top AI Models List](/en/models/) for a comprehensive comparison, or browse the [Latest AI Tools](/en/tools/) to boost your productivity.
