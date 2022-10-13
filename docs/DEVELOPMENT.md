# Development guide

## Prerequisites

- Node.js >= 20
- npm >= 10 (or any modern package manager)

## Running locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Common tasks

- **Add a shadcn component:** `npx shadcn@latest add <component>`. The
  configuration lives in `components.json` and resolves to
  `components/ui/`.
- **Add a route:** create a folder under the appropriate route group
  in `app/`. Route groups are wrapped in `()` and don't affect the URL.
- **Add a Zustand store:** put it under `store/` and follow the
  `useXxxStore` naming convention.
