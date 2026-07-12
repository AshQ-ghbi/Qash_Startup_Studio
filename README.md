# VentureForge AI

**From Idea to Startup — Powered by AI.**

Built for the **LabLab AI Hackathon — Unicorn Track**. VentureForge AI turns a one-line business idea into a complete, investor-ready startup blueprint: market validation, business model canvas, technical architecture, tech stack, launch roadmap, and investor pitch — structured into cards, not walls of text.

## Why this fits the Unicorn Track

- **Fireworks AI** is the sole AI engine, called through a server-side proxy so the API key is never exposed to the client.
- Fireworks serves open-source models on **AMD GPU infrastructure**, so every generation is AMD-powered under the hood.
- No fixed benchmark to hit — judged on creativity, completeness, and product/market potential, which is why the output is structured as a full startup operating document rather than a single chat response.

## Stack

React + Vite + TypeScript + TailwindCSS + React Router + Framer Motion + Lucide Icons. No database, no auth — session-only, by design, to keep the demo fast and the attack surface small.

## Architecture

```
Browser (React)
   │  POST /api/generate { prompt }
   ▼
Vercel Serverless Function (api/generate.ts)
   │  Authorization: Bearer FIREWORKS_API_KEY (server-side env var)
   ▼
Fireworks AI (chat completions, JSON mode)
```

Generation is split into **3 parallel grouped calls** (Strategy, Technical, Growth) instead of one 22-field mega-prompt — this renders results progressively and is more resilient to truncation than a single huge JSON response.

## Local development

```bash
npm install
npm run dev          # frontend on Vite dev server
```

To exercise `/api/generate` locally, install the Vercel CLI and run `vercel dev` instead of `vite dev` — this serves the serverless function alongside the frontend.

## Environment variables

Copy `.env.example` and set `FIREWORKS_API_KEY` in your Vercel project settings (Project → Settings → Environment Variables). **Never** prefix it with `VITE_` — that would bundle it into client-side JS.

## Deployment

Deployed on **Vercel**, not GitHub Pages. GitHub Pages is static-only hosting with no serverless functions, which means the Fireworks API key would have to live in client-side JS — a direct violation of "never expose API keys." Vercel's serverless functions let the key stay server-side while everything else remains a lightweight static frontend.

```bash
npm run build
vercel --prod
```

## Project structure

```
src/
  assets/        static images
  components/    layout, landing, generator, ui — all reusable
  pages/         route-level views
  services/      fireworks.ts — the only place that calls /api/generate
  hooks/         useGenerate.ts — orchestrates the 3 grouped calls
  utils/         markdown export, clipboard
  types/         venture.ts — full output schema contract
  constants/     prompts.ts — all Fireworks prompts, never inline in components
api/
  generate.ts    Vercel serverless proxy to Fireworks AI
```

## Team

Built by an AI-first product team for the LabLab AI Hackathon Unicorn Track.
