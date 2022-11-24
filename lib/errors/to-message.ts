import { isAppError } from "./AppError";

/**
 * Pull a user-safe string out of any thrown value. Falls back to a
 * generic message rather than leaking internal details.
 */
export function toErrorMessage(value: unknown): string {
  if (isAppError(value)) return value.message;
  if (value instanceof Error) return value.message;
  if (typeof value === "string") return value;
  return "Something went wrong. Please try again.";
}
