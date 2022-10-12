# Architecture

Virlo is a single Next.js App-Router application split into three
route groups:

- `(marketing)` — public site (landing, pricing, about). No auth required.
- `(auth)` — login / signup / forgot-password / onboarding flows.
- `(dashboard)` — the authenticated product surface.

## Data flow

Today the app runs entirely on mock data:

```
UI components --> store (Zustand) --> lib/api.ts --> lib/mock-data.ts
```

`lib/api.ts` exposes the same shape the real backend will eventually
serve. Swapping the implementation should be a contained change — UI
code only ever imports from `lib/api`, never from `lib/mock-data` directly.

## State boundaries

- **Server state** (lists of videos, hooks, invoices) flows through
  `lib/api` and lives in component-local state for now. We'll likely
  introduce `@tanstack/react-query` once the real API is wired up.
- **Client/UI state** (sidebar open/closed, notifications drawer)
  lives in `store/use-app-store.ts`.
- **Auth state** lives in `store/use-auth-store.ts`.
