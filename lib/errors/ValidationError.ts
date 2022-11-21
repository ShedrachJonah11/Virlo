import { AppError } from "./AppError";

export interface FieldIssue {
  /** Dotted path to the failing field, e.g. "user.email". */
  path: string;
  message: string;
}

/**
 * Raised when user-provided input fails validation. `issues` is the
 * structured payload the form layer can iterate to highlight fields.
 */
export class ValidationError extends AppError {
  readonly issues: FieldIssue[];

  constructor(
    message: string,
    issues: FieldIssue[] = [],
    options: { code?: string; cause?: unknown } = {}
  ) {
    super(message, {
      code: options.code ?? "validation_error",
      status: 422,
      cause: options.cause,
    });
    this.name = "ValidationError";
    this.issues = issues;
  }
}

export function isValidationError(value: unknown): value is ValidationError {
  return value instanceof ValidationError;
}
