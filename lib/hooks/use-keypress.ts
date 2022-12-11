"use client";

import { useEffect } from "react";

/**
 * Fires `handler` whenever the matching key is pressed. Pass a single
 * key (`"Escape"`) or an array to match multiple keys.
 */
export function useKeypress(
  keys: string | string[],
  handler: (event: KeyboardEvent) => void
): void {
  useEffect(() => {
    const set = new Set(Array.isArray(keys) ? keys : [keys]);
    const listener = (event: KeyboardEvent) => {
      if (set.has(event.key)) handler(event);
    };
    document.addEventListener("keydown", listener);
    return () => document.removeEventListener("keydown", listener);
  }, [keys, handler]);
}
