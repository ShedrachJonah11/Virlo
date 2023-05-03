/**
 * Wrap Intl.ListFormat with sane defaults.
 * formatList(["a", "b", "c"]) -> "a, b, and c"
 */
export function formatList(
  items: ReadonlyArray<string>,
  opts: { type?: "conjunction" | "disjunction"; locale?: string } = {}
): string {
  const { type = "conjunction", locale = "en-US" } = opts;
  return new Intl.ListFormat(locale, { type }).format(items);
}
