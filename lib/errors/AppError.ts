/**
 * Base error for predictable, user-facing failures.
 *
 * Use this anywhere we want the UI to render a friendly message
 * rather than treating the failure as an "unexpected" exception.
 */
export class AppError extends Error {
  /** Stable machine-readable code, e.g. "invalid_credentials". */
  readonly code: string;
  /** Optional HTTP-style status for transports that need one. */
  readonly status?: number;
  /** Free-form structured context, never logged to the user. */
  readonly cause?: unknown;

  constructor(
    message: string,
    options: { code?: string; status?: number; cause?: unknown } = {}
  ) {
    super(message);
    this.name = "AppError";
    this.code = options.code ?? "app_error";
    this.status = options.status;
    this.cause = options.cause;
  }
}

export function isAppError(value: unknown): value is AppError {
  return value instanceof AppError;
}
