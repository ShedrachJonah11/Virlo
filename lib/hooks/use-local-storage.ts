"use client";

import { useCallback, useEffect, useState } from "react";
import { getItem, setItem } from "@/lib/storage";

/**
 * Like `useState`, but persisted to localStorage under `key`.
 * SSR-safe: first render returns `initial`, then re-reads from storage
 * on the client after hydration.
 */
export function useLocalStorage<T>(
  key: string,
  initial: T
): [T, (value: T | ((prev: T) => T)) => void] {
  const [value, setValue] = useState<T>(initial);

  // Hydrate from storage on mount
  useEffect(() => {
    setValue(getItem<T>(key, initial));
    // We intentionally don't depend on `initial` — it's the fallback,
    // not a reactive source.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  const update = useCallback(
    (next: T | ((prev: T) => T)) => {
      setValue((prev) => {
        const resolved =
          typeof next === "function" ? (next as (p: T) => T)(prev) : next;
        setItem(key, resolved);
        return resolved;
      });
    },
    [key]
  );

  return [value, update];
}
