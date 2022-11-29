"use client";

import { useEffect, useState } from "react";

/**
 * Returns a value that only updates after `value` has been unchanged
 * for `delay` ms. Useful for debouncing search inputs.
 */
export function useDebounce<T>(value: T, delay: number = 300): T {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}
