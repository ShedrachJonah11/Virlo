import { AppError } from "./AppError";

/** Authentication-specific failures (bad password, expired token, ...). */
export class AuthError extends AppError {
  constructor(
    message: string,
    options: { code?: string; status?: number; cause?: unknown } = {}
  ) {
    super(message, {
      code: options.code ?? "auth_error",
      status: options.status ?? 401,
      cause: options.cause,
    });
    this.name = "AuthError";
  }
}

export function isAuthError(value: unknown): value is AuthError {
  return value instanceof AuthError;
}
