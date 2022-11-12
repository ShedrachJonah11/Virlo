/**
 * Pragmatic email validator. Not RFC-5322 exhaustive, but rejects the
 * obvious junk and accepts everything most providers actually allow.
 * For form validation, prefer pairing this with `zod`.
 */
const EMAIL_RE =
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

export function isEmail(value: string): boolean {
  if (typeof value !== "string") return false;
  const trimmed = value.trim();
  if (trimmed.length === 0 || trimmed.length > 254) return false;
  return EMAIL_RE.test(trimmed);
}
