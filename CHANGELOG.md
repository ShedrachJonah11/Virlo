# Changelog

All notable changes to this project are documented in this file.
This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and uses Semantic Versioning.

## [Unreleased]

### Added
- Project scaffolding (Next.js 16, Tailwind v4, shadcn/ui).
- Foundational docs: ARCHITECTURE, DEVELOPMENT, STATE, STYLING, API, COMPONENTS, hooks.
- `.env.example`, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT.
- Utility modules under `lib/`:
  `format`, `date`, `validators`, `errors`, `constants`, `analytics`,
  `hooks`, `api`, `social`, `dom`, `hashing`, `strings`, `animation`,
  `notifications`, `feedback`.
- Standalone helpers: `cn`, `cx`, `safe-json`, `array`, `sort`,
  `range`, `promise`, `string`, `seo`, `uuid`, `result`, `option`,
  `env`, `url`, `keys`, `keyboard`, `logger`, `storage`, `initials`,
  `json-stable-stringify`, `clipboard`, `random`, `colour`, `platforms`.
- UI primitives: `StatCard`, `EmptyState`, `PageHeader`, `Skeleton`,
  `InlineCode`, `Kbd`.
- Hooks: `useDisclosure`, `useControllableState`, `useSearch`,
  `usePagination`, `useSelection`, plus the original 19 from phase 2.
- Notification `kind` + deep link; `selectUnreadCount` selector;
  `notificationToneClass`; `sortByNewest`; `notificationAge`.
- `httpWithRetry` only retries transient (5xx / fetch) failures;
  `X-Request-Id` header on every http() call.
- `formatList`, `formatOrdinal`, `scoreLabel`, `scoreToneClass`.
- `announce()` aria-live screen-reader helper.

### Changed
- `loginUser` / `signupUser` / `forgotPassword` throw typed
  `AuthError` / `ValidationError` with structured field issues.
- `generateWarmUpPlan` takes a `WarmUpIntensity` (was `string`).
- Dashboard sidebar + navbar consume the centralised `ROUTES` table.
- `formatBytes` now defaults to SI (decimal) scale; opt-in binary
  via the `{ unit: "binary" }` option.
- Logger redacts `password` / `token` keys from logged context.
- Notifications render newest-first, coloured by kind, with relative
  timestamps.
