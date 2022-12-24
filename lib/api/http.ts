import { NetworkError } from "@/lib/errors";

export interface HttpOptions extends RequestInit {
  /** Optional request timeout in ms. */
  timeoutMs?: number;
}

/**
 * Thin wrapper around `fetch` that:
 *   - Throws {@link NetworkError} on non-2xx responses
 *   - Supports a per-call timeout via AbortController
 *   - Always returns the parsed JSON body
 */
export async function http<T>(
  url: string,
  { timeoutMs, signal, ...init }: HttpOptions = {}
): Promise<T> {
  const controller = new AbortController();
  const timer =
    typeof timeoutMs === "number" && timeoutMs > 0
      ? setTimeout(() => controller.abort(), timeoutMs)
      : null;

  // Chain any caller-supplied signal into our controller.
  if (signal) {
    if (signal.aborted) controller.abort();
    else signal.addEventListener("abort", () => controller.abort(), { once: true });
  }

  let response: Response;
  try {
    response = await fetch(url, { ...init, signal: controller.signal });
  } catch (cause) {
    throw new NetworkError("Network request failed", { cause });
  } finally {
    if (timer) clearTimeout(timer);
  }

  if (!response.ok) {
    throw new NetworkError(`Request failed with ${response.status}`, {
      status: response.status,
    });
  }

  // 204 No Content
  if (response.status === 204) return undefined as T;
  return (await response.json()) as T;
}
