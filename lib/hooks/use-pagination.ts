"use client";

import { useMemo, useState } from "react";

export interface UsePaginationApi<T> {
  page: number;
  pageSize: number;
  pageCount: number;
  items: T[];
  setPage: (next: number) => void;
  next: () => void;
  prev: () => void;
}

/** Client-side pagination of an in-memory array. */
export function usePagination<T>(
  items: ReadonlyArray<T>,
  pageSize: number = 10
): UsePaginationApi<T> {
  const [page, setPageState] = useState(1);
  const pageCount = Math.max(1, Math.ceil(items.length / pageSize));
  const safePage = Math.min(Math.max(1, page), pageCount);

  const slice = useMemo(() => {
    const start = (safePage - 1) * pageSize;
    return items.slice(start, start + pageSize);
  }, [items, safePage, pageSize]);

  return {
    page: safePage,
    pageSize,
    pageCount,
    items: slice,
    setPage: (next) => setPageState(Math.min(Math.max(1, next), pageCount)),
    next: () => setPageState((p) => Math.min(p + 1, pageCount)),
    prev: () => setPageState((p) => Math.max(p - 1, 1)),
  };
}
