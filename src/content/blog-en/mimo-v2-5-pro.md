---
title: "MiMo V2.5 Pro: Xiaomi's New Model Dominates Long-Horizon Agentic Tasks and Breaks the 1,000-Tools Barrier"
description: "Xiaomi launched MiMo-V2.5-Pro, its strongest model yet, completing engineering tasks that normally take weeks in hours, and outperforming Claude Opus 4.6 in token efficiency by 40–60%."
date: "2026-04-22"
category: "models"
tags: ["MiMo V2.5 Pro", "Xiaomi", "AI Models", "Autonomous Agents", "2026"]
image: "/images/mimo-v2-5-pro.webp"
author: "AI DayaHimour Team"
featured: true
draft: false
---

On 22 April 2026, while the tech community was busy with announcements from Google Cloud Next in Las Vegas, Xiaomi quietly launched its most ambitious model: **MiMo-V2.5-Pro**, the latest iteration in the MiMo series that has, within a few short months, climbed to the top tier of global AI rankings.

The announcement came without the usual marketing fanfare. A terse official page, and a single sentence summarising the bet: “A leap in agentic coherence and open-ended long-horizon tasks.” Yet the technical details revealed tell a completely different story.

## From One Million Tokens to One Thousand Tools

The feature MiMo’s team prides itself on in this release is neither the model size nor its scores on traditional benchmarks — but its **sustainability**. While most models falter in long workflow sequences, MiMo-V2.5-Pro demonstrates the ability to exceed one thousand tool calls in a single continuous task, maintaining context coherence and tracking sub-goals without drift.

The model inherits a one-million-token context window from its predecessor MiMo-V2-Pro, but adds what the team describes as “surrounding-frame awareness”: an unusual ability to manage memory within a work sequence, and shape its own context in service of the final objective rather than merely responding to immediate prompts.

## Real Tasks Instead of Synthetic Benchmarks

Xiaomi’s team chose an unconventional way to prove the model’s capabilities: instead of relying solely on standard comparison benchmarks, they published three examples of real-world tasks in which MiMo-V2.5-Pro surpassed limits researchers consider genuine indicators of intelligence.

The first example was a complete SysY compiler written in Rust from scratch, inspired by a compilers course project at Peking University — a task that would take a seasoned PhD student weeks. MiMo-V2.5-Pro completed it in 4.3 hours across 672 tool calls, achieving a perfect score: 233 out of 233 hidden tests. What stands out is not just the speed but the working style: the model built the compiler layer by layer, starting from the Koopa IR processor to the RISC-V backend, and when a restructuring in sequence 512 caused regressions in some tests, it diagnosed and fixed the error without external intervention.

The second example was a full-featured desktop video editor: multi-track editing, clip trimming, audio mixing, and an export pipeline. The codebase reached 8,192 lines, produced in 11.5 hours across 1,868 tool calls. The third example went beyond programming into electrical circuit design: designing and optimising an FVF-LDO circuit in TSMC 180nm technology, a task that would take an experienced electronics engineer several days. The model completed it in one hour inside an ngspice simulation loop, meeting all six target performance metrics.

## Comparison Numbers: Specific Superiority and Clear Gaps

<div dir="ltr" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">Key Benchmarks — April 2026 (MiMo-V2.5-Pro)</p>

  <!-- SWE-bench Pro — green: coding -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">SWE-bench Pro</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">57.2%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 57.2%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- Terminal-Bench 2.0 — orange: efficiency -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">Terminal-Bench 2.0</span>
      <span style="color: #fb923c; font-weight: 700; font-size: 14px;">68.4%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 68.4%; height: 100%; background: linear-gradient(90deg, #ea580c, #fb923c); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- ClawEval pass^3 — blue: general agent -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">ClawEval (pass^3)</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">63.8%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 63.8%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- τ3-bench — purple: multi-step agent -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">τ3-bench</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">72.9%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 72.9%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- GDPVal-AA — pink: real-world tasks -->
  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">GDPVal-AA (Elo)</span>
      <span style="color: #f472b6; font-weight: 700; font-size: 14px;">1581</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 79.5%; height: 100%; background: linear-gradient(90deg, #db2777, #f472b6); border-radius: 6px;"></div>
    </div>
  </div>

  <!-- Humanity's Last Exam — dark green: reasoning -->
  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">Humanity's Last Exam (no tools)</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">48.0%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 48.0%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">Coding</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #fb923c;"></div><span style="color: #94a3b8; font-size: 12px;">Command Line</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">General Agent</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">Multi-step Agent</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #f472b6;"></div><span style="color: #94a3b8; font-size: 12px;">Real-world Tasks</span></div>
  </div>
</div>

The official comparison image published by the team places MiMo-V2.5-Pro in a precise position among competitors. On the SWE-bench Pro benchmark it scores 57.2 points, notably ahead of its predecessor MiMo-V2-Pro, and surpassing Gemini 3.1 Pro, but remaining within a narrow margin of GPT-5.4 at 57.7 and Claude Opus 4.6 at 57.3. In Terminal-Bench 2.0, which relates to command-line performance, the advance is more pronounced: 68.4 points versus 65.4 for Claude Opus 4.6 and 65.8 for the non-Pro V2.5 release.

On the GDPVal-AA benchmark dedicated to evaluating real-world agentic tasks, the model drops to 1581 Elo versus 1606 for MiMo-V2-Pro and 1674 for GPT-5.4 — a surprising retreat for a newer model, indicating that improvements are concentrated in long-horizon reasoning and coding capabilities rather than general performance. The Humanity's Last Exam benchmark is equally revealing: 48.0 points without tools versus 53.0 for Claude Opus 4.6 and 58.7 for GPT-5.4, a gap in pure scientific reasoning that remains despite the programming improvements.

## The Real Advantage: Token Efficiency

Perhaps the absolute numbers are not the true story of MiMo-V2.5-Pro. The team focuses on what it calls “intelligence efficiency”: achieving frontier performance while spending far fewer tokens. On the ClawEval benchmark, the model records 63.8% pass^3 consuming roughly 70,000 tokens per trajectory — between 40% and 60% less than what Claude Opus 4.6, Gemini 3.1 Pro, and GPT-5.4 consume at comparable performance levels. In production environments processing thousands of tasks daily, this difference translates into substantial financial savings.

Pricing reinforces this argument: one dollar per million input tokens and three dollars per million output tokens, unchanged from the previous release despite the announced improvements. For comparison, Claude Opus 4.6 costs five dollars for input and twenty-five for output.

## The Path to Open Source

A few weeks before MiMo-V2.5-Pro, Xiaomi’s team released MiMo-V2-Flash as an open-source model with a MoE architecture of 309 billion total parameters and only 15 billion active. The same trajectory is expected for V2.5: the team announced that the MiMo-V2.5 series will be open-sourced soon, enabling researchers and developers to adapt and run it locally.

The model is currently available in public beta through Xiaomi AI Studio and the API platform, and has also reached OpenRouter, which lists it at uniform pricing: one dollar for input and three for output, with a context window of 1,048,576 tokens and a maximum output limit of 131,072 tokens. Users who purchased token plans before 14:00 UTC on 21 April received a usage-balance reset.

## Xiaomi and the Broader Race

Xiaomi’s rise on the AI map carries symbolism beyond benchmark scores. A company historically known for mobile phone manufacturing entered the world of large models with a different methodology: launching an anonymous model under the name “Hunter Alpha” on OpenRouter, which gathered more than one and a half trillion calls in seven days before revealing its identity, then advancing toward models that compete in the front ranks globally.


MiMo-V2.5-Pro is not the most efficient model in the world on every benchmark, but it represents a calculated choice: a sharp focus on programming and long-horizon automation tasks, with a price that makes large-scale deployment a practical option for engineering teams running agentic systems in production. Xiaomi's rise on the AI map carries symbolism beyond benchmark scores — a company historically known for mobile phone manufacturing entered the world of large models with a different methodology, and appears determined to continue that path.
