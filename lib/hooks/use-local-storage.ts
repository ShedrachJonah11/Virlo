"use client";

import { useCallback, useEffect, useState } from "react";
import { getItem, removeItem, setItem } from "@/lib/storage";

export type UseLocalStorage<T> = readonly [
  T,
  (value: T | ((prev: T) => T)) => void,
  () => void,
];

/**
 * Like `useState`, but persisted to localStorage under `key`.
 *
 * - SSR-safe: first render returns `initial`, then re-reads from
 *   storage on the client after hydration.
 * - The returned tuple is `[value, setValue, remove]`.
 */
export function useLocalStorage<T>(key: string, initial: T): UseLocalStorage<T> {
  const [value, setValue] = useState<T>(initial);

  useEffect(() => {
    setValue(getItem<T>(key, initial));
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

  const remove = useCallback(() => {
    removeItem(key);
    setValue(initial);
  }, [key, initial]);

  return [value, update, remove] as const;
}
