"use client";

import { useCallback, useState } from "react";

export interface UseCounterOptions {
  min?: number;
  max?: number;
}

export interface UseCounterApi {
  count: number;
  increment: () => void;
  decrement: () => void;
  set: (next: number) => void;
  reset: () => void;
}

export function useCounter(
  initial: number = 0,
  { min, max }: UseCounterOptions = {}
): UseCounterApi {
  const [count, setCount] = useState(initial);
  const clamp = useCallback(
    (n: number) => {
      let next = n;
      if (typeof min === "number") next = Math.max(next, min);
      if (typeof max === "number") next = Math.min(next, max);
      return next;
    },
    [min, max]
  );
  const increment = useCallback(() => setCount((c) => clamp(c + 1)), [clamp]);
  const decrement = useCallback(() => setCount((c) => clamp(c - 1)), [clamp]);
  const set = useCallback((next: number) => setCount(clamp(next)), [clamp]);
  const reset = useCallback(() => setCount(initial), [initial]);

  return { count, increment, decrement, set, reset };
}
