/**
 * `JSON.parse` that returns `null` instead of throwing on bad input.
 * Useful around localStorage and unverified server responses.
 */
export function safeParse<T>(input: string): T | null {
  try {
    return JSON.parse(input) as T;
  } catch {
    return null;
  }
}

/**
 * `JSON.stringify` that returns `null` on circular references etc.
 */
export function safeStringify(value: unknown): string | null {
  try {
    return JSON.stringify(value);
  } catch {
    return null;
  }
}
