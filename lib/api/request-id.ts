/**
 * Generate a short, URL-safe request id. Used as a correlation
 * identifier when logging API calls so the server and client logs
 * line up.
 */
export function createRequestId(): string {
  // Fast, no-dep id — not cryptographically strong; that's fine for tracing.
  const time = Date.now().toString(36);
  const rand = Math.random().toString(36).slice(2, 8);
  return `${time}-${rand}`;
}
