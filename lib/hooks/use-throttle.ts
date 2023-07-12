"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Returns a throttled version of `value` that updates at most once
 * every `interval` ms.
 */
export function useThrottle<T>(value: T, interval: number = 300): T {
  const [throttled, setThrottled] = useState(value);
  const lastRun = useRef<number>(0);

  useEffect(() => {
    if (lastRun.current === 0) {
      lastRun.current = Date.now();
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThrottled(value);
      return;
    }
    const now = Date.now();
    const elapsed = now - lastRun.current;

    if (elapsed >= interval) {
      lastRun.current = now;
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setThrottled(value);
      return;
    }

    const id = setTimeout(() => {
      lastRun.current = Date.now();
      setThrottled(value);
    }, interval - elapsed);
    return () => clearTimeout(id);
  }, [value, interval]);

  return throttled;
}
