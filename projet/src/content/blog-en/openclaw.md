---
title: "OpenClaw: The Tool That Took Over GitHub with 348 K Stars and Redefined the Personal Smart Assistant"
description: "An open‑source AI assistant that runs locally, integrates with your daily messaging apps, and performs real tasks like managing email, calendar, and browsing. How it became the fastest‑growing project in the platform’s history."
date: "2026-04-04"
category: "tools"
tags: ["OpenClaw", "AI", "AI agents", "personal assistant", "GitHub", "open‑source tools", "local AI"]
image: "/images/openclaw.webp"
---

When Peter Steinberger started a small project in November 2025 under the name ClawDBot, nobody expected it to become a phenomenon shaking GitHub’s numbers. Today, the OpenClaw repository holds more than 348 thousand stars, surpassing React after a decade of existence, and Linux which dates back to 2011. In less than four months, it has become the seventh‑most‑starred project globally, and one of the fastest‑growing projects in the platform’s history.

The reason isn’t just temporary hype. OpenClaw is not another chatbot that answers general questions. It is a real personal assistant that runs locally on your device, talks to you through the apps you use every day – and does tangible things. It scans your inbox, sends messages, manages your calendar, checks flight bookings, controls the browser, and asks you for permissions to run shell commands or record the screen. All from a WhatsApp or Telegram message.

### What Actually Makes OpenClaw Different

In today’s AI world, major cloud solutions like ChatGPT or Claude compete to deliver a smooth conversational experience. OpenClaw goes a step further: it makes AI part of your daily workflow without needing to switch apps. The Gateway – the backbone of the system – is a single process running locally on macOS, Windows, or Linux, managing WebSocket connections with dozens of channels.

It supports over 20 messaging platforms: WhatsApp (via Baileys), Telegram, Slack, Discord, Signal, iMessage (via BlueBubbles), Microsoft Teams, Matrix, and more. You don’t need to install a new app; you write to the assistant in your usual conversation, and it replies with real actions. You can add voice (a wake word on macOS/iOS or continuous listening on Android), or use Live Canvas for a visual workspace controlled by AI.

Tools are what set it apart. The agent can control the browser via Chrome DevTools Protocol, execute shell commands (with optional Docker sandbox), access files, manage cron jobs, send webhooks, and even control smart‑home devices or Spotify. Memory is persistent, and the context stays on your own machine – it isn’t sent to external servers unless you choose a cloud model.

Installation is deceptively simple: one npm command (`npm install -g openclaw@latest`) then `openclaw onboard`, which guides you step‑by‑step. In a few minutes, the Gateway is ready as a background service, and you can link your first channel. This simplification partly contributed to the rapid spread, especially among developers looking for truly local solutions.

### The Unbelievable Spread: From a Weekend Project to a Global Phenomenon

The project reached 60 thousand stars in just 72 hours after the initial launch. It then passed 250 thousand stars in March 2026, overtaking React. Today it exceeds 348 thousand, with over 1,500 contributors and 26 thousand commits. The community has built hundreds of skills via ClawHub: from a GitHub assistant that automatically reviews pull requests, to tools for controlling Obsidian or Hue lights.

The main reason for the buzz is the stark contrast with the previous reality. Most AI tools were either confined inside web windows, required complex setups, or relied on cloud services that stored your data. OpenClaw made agentic AI usable in daily life. Users tell how the assistant now automatically manages Claude Code sessions, checks the weather and adjusts room settings based on their biometric data, or builds proxy subscriptions through Discord.

Even Peter Steinberger himself, founder of PSPDFKit, joined OpenAI to lead personal‑agent development, leaving the project under an independent foundation backed by OpenAI – yet it remains fully open‑source. This transition added extra credibility, but also raised questions about the project’s future.

### The Technical Side: Gateway as a Smart Control Hub

At the heart of OpenClaw lies the Gateway: a single Node.js process running on port 18789 locally. It is responsible for:

- Linking channels through dedicated adapters.
- Managing sessions: a main session for direct chats, and isolated sessions for groups.
- Routing tasks to agents (such as the Pi agent) that use tool calling.
- Media handling: images, audio, video, with built‑in transcription.
- Security: DM‑pairing policies (pairing code for new users), allowlists for groups, and Docker‑sandbox option.

The system can be extended with skills: some bundled, some from the community, some created by the AI itself. This design enables “self‑hacking” – where the agent modifies prompts or adds new tools on its own.

Compared with earlier tools like Auto‑GPT or BabyAGI, OpenClaw excels in seamless integration with daily life. You don’t need a separate terminal or a special web interface; the interface is your usual app.

### Real Risks: Power Not Easily Managed

With all these capabilities come serious dangers. OpenClaw gives the AI direct access to your machine: shell commands, files, browser. The official documentation warns plainly: “Treat incoming messages as untrusted inputs.” There are known CVEs, including privilege escalation, and reports of phishing attacks exploiting the project’s popularity by creating fake repositories or counterfeit tokens to steal crypto wallets.

In China, official security concerns spread about access to sensitive data. Security researchers noted that 63% of exposed instances run without strong authentication. The community responded with forks like IronClaw (written in Rust with a focus on WASM sandbox), and tools like NVIDIA NemoClaw for safer operation.

This isn’t a design flaw per se, but a natural outcome of making a truly powerful agent. Users who understand the risks and apply best practices (sandbox, limited permissions, strong models to reduce prompt injection) achieve huge value. Others may face real problems – as in rare cases where the agent led to accidental email deletion or execution of unwanted commands.

### Practical Examples from Users

- Developers using OpenClaw as an “AI teammate” to review PRs on GitHub, run tests automatically, and create release notes.
- Personal users managing their calendar, email, and trips through voice messages.
- Small teams turning it into a shared assistant for the company or family, with isolated sessions.
- Data experts building custom skills for scraping data from websites or analysing local files.

These aren’t future dreams; they are documented cases in the community and the skills marketplace.

### What OpenClaw Means for the Future of AI

OpenClaw is not just a tool; it is proof that local‑first agentic AI can go mainstream. While big companies race to build cloud agents, OpenClaw has shown that the open, local model attracts users who care about privacy and control. The rapid spread signals real demand for an “AI coworker” that works inside your own environment.

At the same time, it reveals market challenges: security isn’t an option, it’s a prerequisite. Future projects will need a better balance between power and protection. Steinberger’s move to OpenAI may accelerate development of personal agents at an industrial level, but OpenClaw will remain an open reference driving innovation.

In the end, OpenClaw proves that the most impactful AI isn’t the one that speaks best, but the one that successfully does things inside your digital life. If you’re building applications or looking for real productivity solutions, this project is worth trying – provided you approach it with full awareness of its capabilities and limits. The lobster way, as they say, isn’t just a slogan; it’s a new way of thinking about AI as a real work partner.