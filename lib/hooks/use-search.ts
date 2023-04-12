"use client";

import { useMemo, useState } from "react";
import { useDebounce } from "./use-debounce";

/**
 * Minimal client-side search:
 *  - holds a debounced query
 *  - returns the filtered list and the raw query state
 *
 * `match` is called for each item; return true to keep it.
 */
export function useSearch<T>(
  items: ReadonlyArray<T>,
  match: (item: T, query: string) => boolean,
  delay: number = 200
) {
  const [query, setQuery] = useState("");
  const debounced = useDebounce(query, delay);

  const filtered = useMemo(() => {
    if (!debounced.trim()) return items as T[];
    return items.filter((item) => match(item, debounced));
  }, [items, debounced, match]);

  return { query, setQuery, debounced, filtered };
}
