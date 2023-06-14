# Utility quick reference

A flat index of the most-used helpers in `lib/`. Deep imports work,
but a barrel exists for each module.

## Formatting (`@/lib/format`)

- `formatNumber(value)`
- `formatCompactNumber(value)` — "1.2K", "3.4M"
- `formatPercent(value, { alreadyPercent? })`
- `formatPercentDelta(value)` — "+12.5%" / "−4.0%"
- `formatCurrency(value)`, `formatCurrencyFromCents(cents)`
- `formatDuration(seconds)`
- `formatBytes(bytes, { unit: "decimal" | "binary" })`
- `formatRelativeTime(date)`
- `formatList(items, { type: "conjunction" | "disjunction" })`
- `formatOrdinal(n)` — "1st", "2nd", …
- `scoreLabel(0..100)`, `scoreToneClass(0..100)`
- `handleWithPlatform(handle, platform)`
- `pluralize(count, word)`, `countLabel(count, word)`

## Dates (`@/lib/date`)

- `parseDate(value)`, `parseDateOr(value, fallback)`
- `toISODate(value)`, `formatLongDate(value)`, `formatShortDate(value)`
- `daysBetween(a, b)`, `isSameDay(a, b)`, `addDays(value, n)`
- `getWeekday(value)`, `isWeekend(value)`

## Validation (`@/lib/validators`)

- `isEmail(value)`
- `isStrongPassword(value)`, `getPasswordStrength(value)`
- `isHttpUrl(value)`
- `isUsername(value)`, `normaliseUsername(value)`

## Arrays / promises (`@/lib/array`, `@/lib/promise`)

- `groupBy`, `unique`, `uniqueBy`, `chunk`
- `sortBy`, `compareBy`
- `range`, `clamp`
- `sleep`, `timeout`

See [`hooks.md`](./hooks.md) for the React-hook surface.
