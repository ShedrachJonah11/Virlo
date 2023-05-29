"use client";

import { useCallback, useEffect, useRef } from "react";

/**
 * Returns a stable, debounced version of `callback`. Re-rendering
 * with a new `callback` keeps the same identity but always invokes
 * the latest function on flush.
 */
export function useDebouncedCallback<Args extends unknown[]>(
  callback: (...args: Args) => void,
  delay: number = 300
): (...args: Args) => void {
  const saved = useRef(callback);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    saved.current = callback;
  }, [callback]);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return useCallback(
    (...args: Args) => {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => saved.current(...args), delay);
    },
    [delay]
  );
}
