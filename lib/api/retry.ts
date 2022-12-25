export interface RetryOptions {
  /** Total attempts including the first call. Defaults to 3. */
  attempts?: number;
  /** Base backoff in ms; doubled on each retry. Defaults to 200. */
  baseDelayMs?: number;
  /** Return false to stop retrying for this error. */
  shouldRetry?: (error: unknown, attempt: number) => boolean;
}

/**
 * Retry an async operation with exponential backoff.
 * Re-throws the last error if all attempts fail.
 */
export async function retry<T>(
  fn: () => Promise<T>,
  options: RetryOptions = {}
): Promise<T> {
  const attempts = options.attempts ?? 3;
  const baseDelayMs = options.baseDelayMs ?? 200;
  const shouldRetry = options.shouldRetry ?? (() => true);

  let lastError: unknown;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      return await fn();
    } catch (error) {
      lastError = error;
      if (attempt === attempts || !shouldRetry(error, attempt)) {
        throw error;
      }
      const delay = baseDelayMs * 2 ** (attempt - 1);
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  throw lastError;
}
