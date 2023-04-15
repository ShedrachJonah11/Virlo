"use client";

import { useCallback, useMemo, useState } from "react";

export interface UseSelectionApi<T> {
  selected: ReadonlySet<T>;
  isSelected: (item: T) => boolean;
  toggle: (item: T) => void;
  select: (item: T) => void;
  deselect: (item: T) => void;
  clear: () => void;
  selectedArray: T[];
}

/** Track a set of selected items by reference equality. */
export function useSelection<T>(initial: Iterable<T> = []): UseSelectionApi<T> {
  const [selected, setSelected] = useState<Set<T>>(new Set(initial));
  const isSelected = useCallback((item: T) => selected.has(item), [selected]);
  const toggle = useCallback((item: T) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(item) ? next.delete(item) : next.add(item);
      return next;
    });
  }, []);
  const select = useCallback((item: T) => {
    setSelected((prev) => new Set(prev).add(item));
  }, []);
  const deselect = useCallback((item: T) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(item);
      return next;
    });
  }, []);
  const clear = useCallback(() => setSelected(new Set()), []);
  const selectedArray = useMemo(() => Array.from(selected), [selected]);

  return { selected, isSelected, toggle, select, deselect, clear, selectedArray };
}
