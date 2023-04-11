"use client";

import { useCallback, useState } from "react";

/**
 * Lets a component accept either a controlled `value` prop or fall back
 * to internal state. Mirrors the shadcn / Radix conventions for
 * "value-or-defaultValue" components.
 */
export function useControllableState<T>(args: {
  value?: T;
  defaultValue: T;
  onChange?: (next: T) => void;
}): [T, (next: T) => void] {
  const { value, defaultValue, onChange } = args;
  const [internal, setInternal] = useState<T>(defaultValue);
  const isControlled = value !== undefined;
  const resolved = isControlled ? (value as T) : internal;

  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) setInternal(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  );

  return [resolved, setValue];
}
