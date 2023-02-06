import { http, type HttpOptions } from "./http";
import { retry, type RetryOptions } from "./retry";
import { isNetworkError } from "@/lib/errors";

/**
 * GET helper that retries on transient network failures (5xx, fetch errors).
 * 4xx responses are *not* retried because they're caller bugs.
 */
export function httpWithRetry<T>(
  url: string,
  httpOptions: HttpOptions = {},
  retryOptions: RetryOptions = {}
): Promise<T> {
  return retry(() => http<T>(url, httpOptions), {
    attempts: 3,
    baseDelayMs: 250,
    shouldRetry: (error) => {
      if (!isNetworkError(error)) return false;
      const status = error.status;
      // No status -> connection failure; retry it.
      if (status === undefined) return true;
      return status >= 500;
    },
    ...retryOptions,
  });
}
