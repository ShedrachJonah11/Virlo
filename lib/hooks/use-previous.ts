"use client";

import { useEffect, useState } from "react";

/**
 * Returns the previous value of `value` (undefined on first render).
 *
 * Implemented with state (not a ref) so it can be read during render
 * without violating the react-hooks/refs rule.
 */
export function usePrevious<T>(value: T): T | undefined {
  const [prev, setPrev] = useState<T | undefined>(undefined);
  const [current, setCurrent] = useState<T>(value);

  useEffect(() => {
    if (!Object.is(current, value)) {
      setPrev(current);
      setCurrent(value);
    }
  }, [value, current]);

  return prev;
}
