# Error handling

All predictable failures throw an `AppError` (or a subclass) from
`lib/errors`. Anything else — `TypeError`, missing-key crashes,
runtime bugs — is a "real" error: log it and let the boundary catch it.

## Subclasses

| Class              | Use when…                                              |
| ------------------ | ------------------------------------------------------ |
| `AppError`         | Generic user-visible failure (default code `app_error`). |
| `AuthError`        | Login / token / permission problems.                   |
| `NetworkError`     | Transport-layer failures (5xx, fetch crash).           |
| `ValidationError`  | User input failed validation (carries `issues`).       |

## Picking a code

`AppError.code` is a stable, snake_case string the UI can switch on
to render specific copy (e.g. `invalid_credentials`,
`email_not_found`). Don't reuse codes across subclasses.

## Surfacing to the UI

Use `toErrorMessage(error)` to extract a user-safe string. It returns
a generic fallback for non-`AppError` values so we don't leak internal
details.

## Logging

`lib/logger.ts` redacts `password`, `token`, `accessToken`,
`refreshToken`, and `authorization` keys from any context object — so
it's safe to pass through the raw request body when debugging.
