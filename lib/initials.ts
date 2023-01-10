/**
 * Build a 1-3 character initials string from a person's display name.
 * Empty / whitespace-only input returns "?".
 */
export function getInitials(name: string, maxChars: number = 2): string {
  const parts = name
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "?";
  return parts
    .map((part) => part[0])
    .join("")
    .slice(0, maxChars)
    .toUpperCase();
}
