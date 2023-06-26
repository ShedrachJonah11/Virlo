# Virlo

![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![React](https://img.shields.io/badge/React-19-149eca?logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?logo=typescript)


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

## Scripts

| Command         | What it does                          |
| --------------- | ------------------------------------- |
| `npm run dev`   | Start the dev server on port 3000.    |
| `npm run build` | Production build.                     |
| `npm run start` | Serve the production build.           |
| `npm run lint` | Run ESLint on the project.            |

## Features

- **Warm-Up Engine** — build day-by-day training plans for each platform
  and track per-day task completion.
- **Viral Finder** — search trending videos with filters by platform and a
  computed viral-probability score per result.
- **Hook Generator** — produce candidate opening hooks with style + score.
- **Analytics** — engagement, views and algorithm-score charts with
  period-over-period growth.
- **Settings & Billing** — profile management, plan switching, invoice history.

## Environment variables

Copy `.env.example` to `.env.local` and fill in any values you want
to override:

```bash
cp .env.example .env.local
```

The app reads these via `lib/env.ts`. Required values are validated
at module load via `requireEnv(...)`.

## Documentation

Deeper docs live in [`docs/`](./docs):

- [`ARCHITECTURE`](./docs/ARCHITECTURE.md) — module layout.
- [`DEVELOPMENT`](./docs/DEVELOPMENT.md) — running locally.
- [`STATE`](./docs/STATE.md) — Zustand store conventions.
- [`STYLING`](./docs/STYLING.md) — Tailwind + theming.
- [`COMPONENTS`](./docs/COMPONENTS.md) — primitive layering.
- [`API`](./docs/API.md) — API + error contract.
- [`hooks`](./docs/hooks.md) — custom React hooks.
- [`UTILITIES`](./docs/UTILITIES.md) — quick reference for lib/*.
- [`TESTING`](./docs/TESTING.md) — testing strategy.
- [`ERRORS`](./docs/ERRORS.md) — error subclasses + codes.
