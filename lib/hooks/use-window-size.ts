"use client";

import { useEffect, useState } from "react";

export interface WindowSize {
  width: number;
  height: number;
}

/** Tracks the current window dimensions. Returns 0/0 during SSR. */
export function useWindowSize(): WindowSize {
  const [size, setSize] = useState<WindowSize>({ width: 0, height: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}
