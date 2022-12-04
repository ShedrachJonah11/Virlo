"use client";

import { useEffect, useRef } from "react";

/** Returns the previous value of `value` (undefined on first render). */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}
