"use client";

import { useCallback, useState } from "react";

export interface UseDisclosureApi {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  toggle: () => void;
}

/**
 * Standard open / close / toggle controller for modal-shaped UI.
 * Cleaner than three useStates when you have many overlays on a page.
 */
export function useDisclosure(initialOpen: boolean = false): UseDisclosureApi {
  const [isOpen, setIsOpen] = useState(initialOpen);
  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((v) => !v), []);
  return { isOpen, open, close, toggle };
}
