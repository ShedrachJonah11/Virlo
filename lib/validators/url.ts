/**
 * Validate that a string is a parseable URL with an http/https scheme.
 * We intentionally reject other schemes (data:, javascript:, file:) which
 * are common XSS / phishing vectors when echoed back into UI.
 */
export function isHttpUrl(value: string): boolean {
  if (typeof value !== "string" || value.length === 0) return false;
  try {
    const url = new URL(value);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
