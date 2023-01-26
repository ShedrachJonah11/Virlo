/** Sort comparator factory for a property accessor. */
export function compareBy<T>(
  keyOf: (item: T) => number | string,
  direction: "asc" | "desc" = "asc"
): (a: T, b: T) => number {
  const sign = direction === "asc" ? 1 : -1;
  return (a, b) => {
    const ka = keyOf(a);
    const kb = keyOf(b);
    if (ka < kb) return -1 * sign;
    if (ka > kb) return 1 * sign;
    return 0;
  };
}

/** Convenience: return a sorted copy of `items` (does not mutate). */
export function sortBy<T>(
  items: ReadonlyArray<T>,
  keyOf: (item: T) => number | string,
  direction: "asc" | "desc" = "asc"
): T[] {
  return [...items].sort(compareBy(keyOf, direction));
}
