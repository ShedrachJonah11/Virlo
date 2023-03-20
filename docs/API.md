# API layer

The app talks to the server through `lib/api.ts`. While we're on
mocks, every function:

- Returns `Promise<T>` (aliased as `ApiPromise<T>`).
- Throws a typed error from `lib/errors`:
  - `AuthError` for credential / session issues.
  - `ValidationError` for bad input (with `issues: FieldIssue[]`).
  - `NetworkError` for transport failures.
- Can be made flaky on demand by setting `NEXT_PUBLIC_MOCK_FAIL=1`, which
  routes a random subset of calls through `maybeFail()`.

## Adding a new endpoint

1. Add the response shape to `types/` or `types/api.ts`.
2. Add the function to `lib/api.ts`.
3. Throw typed errors — never bare `throw new Error("…")`.
4. If the endpoint is idempotent, prefer `httpWithRetry` over `http`.
