"use client";

import { useEffect, useRef } from "react";

/**
 * `setInterval` as a hook. Pass `delay = null` to pause.
 * Avoids stale closures by storing `callback` in a ref.
 */
export function useInterval(callback: () => void, delay: number | null): void {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}
