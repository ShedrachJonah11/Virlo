/** Truncate a string to `maxLength` and append `ellipsis` if cut. */
export function truncate(input: string, maxLength: number, ellipsis: string = "…"): string {
  if (input.length <= maxLength) return input;
  if (maxLength <= ellipsis.length) return ellipsis.slice(0, maxLength);
  return input.slice(0, maxLength - ellipsis.length) + ellipsis;
}

/** Capitalise the first letter of a string. */
export function capitalise(input: string): string {
  if (input.length === 0) return input;
  return input[0].toUpperCase() + input.slice(1);
}

/** Convert "ALGORITHM_SCORE" or "algorithmScore" into "Algorithm Score". */
export function humanise(input: string): string {
  return input
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .toLowerCase()
    .split(" ")
    .filter(Boolean)
    .map(capitalise)
    .join(" ");
}

/** Slugify a string for use in URLs. */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
