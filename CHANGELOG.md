# Changelog

All notable changes to this project are documented in this file.
This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and uses Semantic Versioning.

## [Unreleased]

### Added
- Project scaffolding (Next.js 16, Tailwind v4, shadcn/ui).
- Docs: ARCHITECTURE, DEVELOPMENT, STATE (with selectors section),
  STYLING, COMPONENTS, API, ERRORS, hooks.
- `.env.example`, CONTRIBUTING, SECURITY, CODE_OF_CONDUCT.
- Utility modules under `lib/`: `format`, `date`, `validators`,
  `errors`, `constants`, `analytics`, `hooks`, `api`, `social`, `dom`,
  `hashing`, `strings`, `animation`, `notifications`, `feedback`,
  `billing`, `onboarding`, `viral`, `warmup`, `email`.
- Standalone helpers: `cn`, `cx`, `safe-json`, `array`, `sort`,
  `range`, `promise`, `string`, `seo`, `uuid`, `result`, `option`,
  `env`, `url`, `keys`, `keyboard`, `logger`, `storage`, `initials`,
  `json-stable-stringify`, `clipboard`, `random`, `colour`, `platforms`.
- UI primitives: `StatCard`, `EmptyState`, `PageHeader`, `Skeleton`,
  `InlineCode`, `Kbd`.
- Hooks: `useDebounce`, `useThrottle`, `useToggle`, `useCounter`,
  `usePrevious`, `useLocalStorage`, `useMediaQuery`, `useWindowSize`,
  `useCopyToClipboard`, `useClickOutside`, `useKeypress`,
  `useInterval`, `useTimeout`, `useOnlineStatus`,
  `usePrefersReducedMotion`, `useDocumentVisibility`, `useAsync`,
  `useEventListener`, `useMounted`, `useDisclosure`,
  `useControllableState`, `useSearch`, `usePagination`,
  `useSelection`, `useDebouncedCallback`, `useStableId`.
- Notifications: `kind` + deep link, `selectUnreadCount` selector,
  `notificationToneClass`, `sortByNewest`, `notificationAge`.
- API: `http()`, `retry()`, `httpWithRetry` (retries only on 5xx /
  network crashes), `X-Request-Id` header per call, opt-in
  `maybeFail()` chaos simulator.
- Formatting: `formatList`, `formatOrdinal`, `scoreLabel`,
  `scoreToneClass`, `formatBytes` SI + IEC scales.
- Accessibility: `announce()` aria-live helper.
- `validateOnboarding` runs structured input validation server-side.

### Changed
- `loginUser` / `signupUser` / `forgotPassword` throw typed
  `AuthError` / `ValidationError` with structured field issues.
- `generateWarmUpPlan` takes a `WarmUpIntensity` (was `string`).
- Dashboard sidebar + navbar use the centralised `ROUTES` table.
- `formatBytes` defaults to SI (decimal); opt-in binary scale.
- Logger redacts password / token keys from context.
- Notifications render newest-first, coloured by kind, with relative
  timestamps in the navbar dropdown.

### Fixed
- `uuid()` no longer trips the strict-mode narrowing on `crypto`.
- `formatNumber` / `formatCompactNumber` / `formatPercent` /
  `formatRelativeTime` short-circuit on non-finite or `-0` inputs.
- `http()` surfaces non-JSON responses as a `NetworkError` instead of
  crashing in `.json()`.
