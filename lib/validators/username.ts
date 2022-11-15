const USERNAME_RE = /^[a-zA-Z0-9_]{3,30}$/;

/**
 * Social-style handle validation: 3-30 chars, alphanum + underscore.
 * Stripped of leading "@".
 */
export function isUsername(value: string): boolean {
  if (typeof value !== "string") return false;
  const stripped = value.startsWith("@") ? value.slice(1) : value;
  return USERNAME_RE.test(stripped);
}

/** Normalise a handle by lowercasing and dropping a leading "@". */
export function normaliseUsername(value: string): string {
  const stripped = value.startsWith("@") ? value.slice(1) : value;
  return stripped.toLowerCase();
}
