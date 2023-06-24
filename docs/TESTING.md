# Testing

This repo currently relies on **two cheap layers** of testing:

1. **The TypeScript compiler.** Strict mode is on. Most utilities
   are pure functions with explicit type signatures, so a green
   `tsc --noEmit` catches the bulk of regressions.
2. **Type-only assertion files** under `lib/**/__type_tests__/*.test-d.ts`.
   They're picked up by the compiler but never executed, and serve
   as machine-checked usage examples for the public API.

## Adding a runtime test runner

When we're ready, [Vitest](https://vitest.dev/) is the recommended
choice — it tracks Next.js's ESM module graph cleanly and has zero
config for TypeScript. Wire it up as `npm run test`, and co-locate
tests as `*.test.ts` next to the file under test (no `__tests__`
folders).

## Manual checks

Before opening a PR:

```bash
npm run lint
npx tsc --noEmit
npm run build
```
