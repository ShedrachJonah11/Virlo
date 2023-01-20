# Changelog

All notable changes to this project are documented in this file.
This project follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/)
and uses Semantic Versioning.

## [Unreleased]

### Added
- Initial project scaffolding for Virlo (Next.js 16, Tailwind v4, shadcn/ui).
- Foundational docs: ARCHITECTURE, DEVELOPMENT, STATE, STYLING.
- `.env.example`, CONTRIBUTING and SECURITY policies.
- `lib/format` (numbers, currency, duration, bytes, plural, relative time).
- `lib/date` (parse, format, ranges, weekday helpers).
- `lib/validators` (email, password strength, http url, username).
- `lib/errors` (AppError + AuthError/NetworkError/ValidationError subclasses).
- `lib/constants` (app, platforms, routes, plan limits).
- `lib/hooks` (debounce, throttle, toggle, counter, previous, localStorage,
  media query, window size, copy to clipboard, click outside, keypress,
  interval, timeout, online status, prefers reduced motion, document
  visibility, async, event listener).
- `lib/analytics` summarisation helpers and `growthRate`.
- Structured `lib/logger`, SSR-safe `lib/storage`.
- Notification `kind` + deep link; `selectUnreadCount` selector.

### Changed
- `loginUser` / `signupUser` / `forgotPassword` now throw typed
  `AuthError` / `ValidationError` with structured field issues.
- Dashboard sidebar and navbar consume the centralised `ROUTES` table.
- Initials rendering pulled into `lib/initials.ts` and reused.
