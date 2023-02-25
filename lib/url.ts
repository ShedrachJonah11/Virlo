/**
 * Build a URL with query params, omitting `undefined`/`null` values.
 * Faster than reaching for URLSearchParams every time.
 */
export function buildUrl(
  base: string,
  params: Record<string, string | number | boolean | null | undefined> = {}
): string {
  const search = new URLSearchParams();
  for (const [key, value] of Object.entries(params)) {
    if (value === null || value === undefined) continue;
    search.set(key, String(value));
  }
  const query = search.toString();
  return query ? `${base}?${query}` : base;
}
