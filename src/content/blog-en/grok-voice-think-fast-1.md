---
title: "Grok Voice Think Fast 1.0: xAI Speech Agent Tops τ-voice Bench by 20 Points"
description: "On April 23, 2026, xAI launched grok-voice-think-fast-1.0, scoring 67.3% on τ-voice Bench, a 20+ point lead over Gemini 3.1 Flash Live (43.8%) and GPT Realtime 1.5 (35.3%) in real-world voice scenarios."
date: "2026-04-23"
slug: "grok-voice-think-fast-1"
category: "Models"
tags: ["Grok Voice Think Fast 1.0", "xAI", "voice agent", "τ-voice Bench", "2026"]
image: "/images/grok-voice-think-fast-1.webp"
author: "فريق AI DayaHimour"
featured: false
draft: false
tier: "flagship"
---

On April 23, 2026, xAI released `grok-voice-think-fast-1.0`, a voice agent that not only launched but immediately dominated the τ-voice Bench with a 67.3% overall score. Gemini 3.1 Flash Live trailed at 43.8% and GPT Realtime 1.5 at 35.3% — a gap of more than 23 percentage points. Those numbers were produced under the worst possible real-world conditions: background noise, heavy accents, rapid interruptions, and natural turn-taking.

The previous model, `grok-voice-fast-1.0`, reached only 38.3%. The leap to 67.3% is architectural, not incremental, thanks to a “silent thinking” layer that leaves response time untouched.

## Four Hard Problems Solved at Once

xAI structured the agent around four bottlenecks that have historically kept voice agents out of production:

**Accurate collection in chaos** — Grok Voice Think Fast 1.0 reliably extracts email addresses, phone numbers, and account numbers even when the speaker is fast, heavily accented, or corrects themselves mid-statement. It handles these corrections the way a human listener naturally does.

**Orchestrating 28 tools** — A single agent can call up to 28 tools spanning hundreds of workflows: service credits, device replacements, plan changes, billing disputes. The caller never senses the backend complexity.

**Hidden real-time reasoning** — The model performs edge-case inference in the background before speaking, virtually eliminating hallucinated confidence. When asked “Which months contain the letter X?” it correctly answered “None,” while other models confidently guessed February.

**Noise resilience** — Tested over compressed phone codecs, street noise, and sharp dialects, the model supports more than 25 authentic languages, making it ready for global contact centers.

## τ-voice Bench Performance

The table below illustrates the gulf between Grok Voice Think Fast 1.0 and its competitors:

| Sector | Grok Voice Think Fast 1.0 | Gemini 3.1 Flash Live | GPT Realtime 1.5 |
|---|---|---|---|
| Telecom (plans, billing, troubleshooting) | 73.7% | 40.4% | 21.1% |
| Airline (bookings, delays, complex itineraries) | 66% | 64% | 36% |
| Retail (orders, returns, noise) | 62.3% | 45.6% | 38.6% |

In telecom, a 33-point gap is a rarity in AI benchmarks. Even in airline — where Gemini comes close at 64% — Grok stayed ahead under the pressure of itinerary changes.

<!-- Benchmark bars HTML (same structure, English labels) -->
<div dir="ltr" style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); border-radius: 16px; padding: 28px 24px; margin: 32px 0; border: 1px solid rgba(99,179,237,0.15);">
  <p style="color: #94a3b8; font-size: 13px; text-align: center; margin: 0 0 24px 0; letter-spacing: 0.05em;">τ-voice Bench — April 2026</p>

  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">τ-voice Overall</span>
      <span style="color: #60a5fa; font-weight: 700; font-size: 14px;">67.3%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 67.3%; height: 100%; background: linear-gradient(90deg, #3b82f6, #60a5fa); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">Retail</span>
      <span style="color: #fb923c; font-weight: 700; font-size: 14px;">62.3%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 62.3%; height: 100%; background: linear-gradient(90deg, #ea580c, #fb923c); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 16px;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">Airline</span>
      <span style="color: #a78bfa; font-weight: 700; font-size: 14px;">66%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 66%; height: 100%; background: linear-gradient(90deg, #7c3aed, #a78bfa); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="margin-bottom: 0;">
    <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
      <span style="color: #cbd5e1; font-size: 14px;">Telecom</span>
      <span style="color: #34d399; font-weight: 700; font-size: 14px;">73.7%</span>
    </div>
    <div style="background: rgba(255,255,255,0.07); border-radius: 6px; height: 10px; overflow: hidden;">
      <div style="width: 73.7%; height: 100%; background: linear-gradient(90deg, #059669, #34d399); border-radius: 6px;"></div>
    </div>
  </div>

  <div style="display: flex; gap: 20px; margin-top: 20px; padding-top: 16px; border-top: 1px solid rgba(255,255,255,0.07); flex-wrap: wrap;">
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #60a5fa;"></div><span style="color: #94a3b8; font-size: 12px;">Overall</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #fb923c;"></div><span style="color: #94a3b8; font-size: 12px;">Retail</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #a78bfa;"></div><span style="color: #94a3b8; font-size: 12px;">Airline</span></div>
    <div style="display: flex; align-items: center; gap: 8px;"><div style="width: 12px; height: 12px; border-radius: 3px; background: #34d399;"></div><span style="color: #94a3b8; font-size: 12px;">Telecom</span></div>
  </div>
</div>

## Field-Tested with Starlink

xAI didn't wait for market validation — it deployed the model into Starlink’s live operations. The phone line `+1 (888) GO STARLINK` now uses Grok for sales and customer support, delivering:

- **20% sales conversion** during the call itself.
- **70% self-resolution rate** for support inquiries.

These metrics move voice agents from pilot-stage promise to full-scale operation. At a time when call centers worldwide are under increasing strain, a model handling hundreds of workflows with a single orchestration layer is a strategic necessity, not a luxury.

## Pricing: $0.05/min with OpenAI Realtime API Compatibility

The model costs $0.05 per minute ($3.00 per hour) through `wss://api.x.ai/v1/realtime`, roughly half the price of the OpenAI Realtime API. It is compatible with the OpenAI Realtime API standard, allowing developers to switch with minimal changes. Teams get up to 100 concurrent sessions and a 30-minute session limit. The previous `grok-voice-fast-1.0` is now deprecated, and migration to the new model is recommended.

## A New Baseline for Voice Agents

Eighteen months after entering voice, xAI didn’t just catch up — it built a tangible lead. The telecom results, in particular, foreshadow a future where traditional call centers become the exception. Whether competitors erase the 20-point gap will define the next chapter, but the combination of hidden reasoning, aggressive pricing, and live Starlink validation makes grok-voice-think-fast-1.0 feel less like a benchmark champion and more like an operational turning point.