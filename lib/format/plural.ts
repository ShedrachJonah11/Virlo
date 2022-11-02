/**
 * Pick the correct word for a quantity.
 *
 *   pluralize(1, "video")             -> "video"
 *   pluralize(2, "video")             -> "videos"
 *   pluralize(2, "person", "people")  -> "people"
 */
export function pluralize(
  count: number,
  singular: string,
  plural?: string
): string {
  return count === 1 ? singular : plural ?? `${singular}s`;
}

/** Convenience: returns "<count> <word>" with the right plural form. */
export function countLabel(
  count: number,
  singular: string,
  plural?: string
): string {
  return `${count} ${pluralize(count, singular, plural)}`;
}
