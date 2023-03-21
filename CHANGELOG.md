# Changelog

All notable changes to this project are documented in this file.
This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and uses Semantic Versioning.

## [Unreleased]

### Added
- Project scaffolding (Next.js 16, Tailwind v4, shadcn/ui).
- Foundational docs: ARCHITECTURE, DEVELOPMENT, STATE, STYLING, API.
- `.env.example`, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT.
- Utility modules under `lib/`:
  - `format`, `date`, `validators`, `errors`, `constants`,
    `analytics`, `hooks`, `api`, `social`, `dom`, `hashing`,
    `strings`, `animation`, `notifications`.
  - Standalone helpers: `cn`, `cx`, `safe-json`, `array`, `sort`,
    `range`, `promise`, `string`, `seo`, `uuid`, `result`, `option`,
    `env`, `url`, `keys`, `logger`, `storage`, `initials`,
    `json-stable-stringify`, `platforms`.
- Notification `kind` + deep link; `selectUnreadCount` selector.
- `httpWithRetry` only retries transient (5xx / fetch) failures.
- `useAppStore.markAllNotificationsRead()`.
- `useAuthStore.loginAt` + `selectUserOrThrow`.

### Changed
- `loginUser` / `signupUser` / `forgotPassword` now throw typed
  `AuthError` / `ValidationError` with structured field issues.
- `generateWarmUpPlan` takes a `WarmUpIntensity` (was `string`).
- Dashboard sidebar + navbar consume the centralised `ROUTES` table.
- Initials rendering pulled into `lib/initials.ts` and reused.
- `formatNumber` / `formatCompactNumber` / `formatPercent` /
  `formatRelativeTime` short-circuit on non-finite inputs.
