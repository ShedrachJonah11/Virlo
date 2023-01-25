/** Group an array by a key derived from each element. */
export function groupBy<T, K extends string | number>(
  items: ReadonlyArray<T>,
  keyOf: (item: T) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of items) {
    const key = keyOf(item);
    (result[key] ??= []).push(item);
  }
  return result;
}

/** Remove duplicates, preserving first-seen order. */
export function unique<T>(items: ReadonlyArray<T>): T[] {
  return Array.from(new Set(items));
}

/** Remove duplicates using a derived key. */
export function uniqueBy<T, K>(
  items: ReadonlyArray<T>,
  keyOf: (item: T) => K
): T[] {
  const seen = new Set<K>();
  const out: T[] = [];
  for (const item of items) {
    const key = keyOf(item);
    if (seen.has(key)) continue;
    seen.add(key);
    out.push(item);
  }
  return out;
}

/** Split an array into pages of `size`. */
export function chunk<T>(items: ReadonlyArray<T>, size: number): T[][] {
  if (size <= 0) return [];
  const out: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    out.push(items.slice(i, i + size));
  }
  return out;
}
