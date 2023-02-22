/**
 * Convenience helpers for nullable values without going full Option monad.
 */

export function isSome<T>(value: T | null | undefined): value is T {
  return value !== null && value !== undefined;
}

export function isNone<T>(value: T | null | undefined): value is null | undefined {
  return value === null || value === undefined;
}

export function mapSome<T, U>(
  value: T | null | undefined,
  fn: (value: T) => U
): U | undefined {
  return isSome(value) ? fn(value) : undefined;
}
