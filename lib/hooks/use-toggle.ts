"use client";

import { useCallback, useState } from "react";

/**
 * Minimal boolean state hook with a stable toggle callback.
 *
 *   const [open, toggleOpen, setOpen] = useToggle();
 */
export function useToggle(
  initial: boolean = false
): [boolean, () => void, (next: boolean) => void] {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle, setValue];
}
