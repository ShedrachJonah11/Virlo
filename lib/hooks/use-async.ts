"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type AsyncStatus = "idle" | "pending" | "success" | "error";

export interface UseAsyncState<T> {
  status: AsyncStatus;
  data: T | null;
  error: unknown;
}

export interface UseAsyncApi<T, Args extends unknown[]> extends UseAsyncState<T> {
  run: (...args: Args) => Promise<T | undefined>;
  reset: () => void;
}

/**
 * Generic wrapper for invoking async functions from React. Tracks
 * pending / success / error state and ignores results from stale
 * invocations to avoid race conditions.
 */
export function useAsync<T, Args extends unknown[]>(
  fn: (...args: Args) => Promise<T>
): UseAsyncApi<T, Args> {
  const [state, setState] = useState<UseAsyncState<T>>({
    status: "idle",
    data: null,
    error: null,
  });
  const invocationRef = useRef(0);

  useEffect(() => {
    // Invalidate any in-flight calls when the component unmounts.
    return () => {
      invocationRef.current += 1;
    };
  }, []);

  const run = useCallback(
    async (...args: Args) => {
      const id = ++invocationRef.current;
      setState({ status: "pending", data: null, error: null });
      try {
        const data = await fn(...args);
        if (invocationRef.current !== id) return undefined;
        setState({ status: "success", data, error: null });
        return data;
      } catch (error) {
        if (invocationRef.current !== id) return undefined;
        setState({ status: "error", data: null, error });
        return undefined;
      }
    },
    [fn]
  );

  const reset = useCallback(() => {
    invocationRef.current += 1;
    setState({ status: "idle", data: null, error: null });
  }, []);

  return { ...state, run, reset };
}
