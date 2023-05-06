/**
 * Toast contract. We don't ship a toast component yet; this lets
 * call sites be written against a stable API so adopting `sonner`
 * (or anything else) later is a one-file change.
 */
export type ToastKind = "info" | "success" | "warning" | "error";

export interface ToastOptions {
  title: string;
  description?: string;
  kind?: ToastKind;
  /** Auto-dismiss timeout in ms. Pass `null` to require manual close. */
  timeoutMs?: number | null;
}

export type ToastSink = (options: ToastOptions) => void;

let currentSink: ToastSink = ({ title, description, kind }) => {
  // Fallback: log to console until a real sink is registered.
  // eslint-disable-next-line no-console
  console.log(`[toast:${kind ?? "info"}] ${title}${description ? ` — ${description}` : ""}`);
};

export function setToastSink(sink: ToastSink): void {
  currentSink = sink;
}

export function toast(options: ToastOptions): void {
  currentSink(options);
}
