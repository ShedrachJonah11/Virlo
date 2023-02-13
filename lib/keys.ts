/** Cross-platform "modifier" key — Cmd on macOS, Ctrl elsewhere. */
export function isMetaOrCtrl(event: KeyboardEvent | MouseEvent): boolean {
  return event.metaKey || event.ctrlKey;
}

/**
 * Returns true when the event represents a "submit" gesture
 * (Cmd/Ctrl+Enter), regardless of focus context.
 */
export function isSubmitChord(event: KeyboardEvent): boolean {
  return event.key === "Enter" && isMetaOrCtrl(event);
}

/** Convention used by `useKeypress`: combine modifiers into a single key string. */
export type KeyChord = `${"Meta+" | "Ctrl+" | "Shift+" | "Alt+" | ""}${string}`;
