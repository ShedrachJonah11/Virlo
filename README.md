# Virlo

> AI-powered creator growth platform. Warm up accounts, find viral content,
> and train platform algorithms.

Virlo is a Next.js dashboard that helps short-form creators on TikTok,
Instagram and YouTube grow faster. It bundles three core tools:

- **Warm-Up Engine** — generates day-by-day plans to train the platform algorithm.
- **Viral Finder** — surfaces trending videos with a "viral probability" score.
- **Hook Generator** — produces high-converting opening lines for short-form videos.

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000> in your browser.

## Tech stack

- **Framework:** Next.js 16 (App Router, React 19)
- **Styling:** Tailwind CSS v4 + shadcn/ui (`components/ui/*`)
- **State:** Zustand stores in `store/`
- **Forms:** react-hook-form + zod
- **Charts:** recharts
- **Icons:** lucide-react

## Project layout

```
app/
  (marketing)/   Public marketing site (landing, pricing, about)
  (auth)/        Login, signup, forgot password, onboarding
  (dashboard)/   Authenticated app shell
components/
  ui/            shadcn primitives
  dashboard/     Dashboard navbar + sidebar
  marketing/     Marketing navbar + footer
lib/             Cross-cutting utilities (api, mock data, helpers)
store/           Zustand stores
types/           Shared TypeScript types
```
