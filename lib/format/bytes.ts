const UNITS_BINARY = ["B", "KiB", "MiB", "GiB", "TiB", "PiB"] as const;
const UNITS_DECIMAL = ["B", "KB", "MB", "GB", "TB", "PB"] as const;

export interface FormatBytesOptions {
  /** Number of fraction digits. Defaults to 1. */
  digits?: number;
  /** Use 1024-based (binary) or 1000-based (SI) scale. Defaults to "decimal". */
  unit?: "binary" | "decimal";
}

/**
 * Format a byte count. Defaults to the SI (1000-based) scale which is
 * what most users expect when seeing "MB" / "GB" — the binary scale
 * uses the IEC suffixes ("MiB", "GiB").
 */
export function formatBytes(bytes: number, options: FormatBytesOptions = {}): string {
  const { digits = 1, unit = "decimal" } = options;
  if (!Number.isFinite(bytes) || bytes < 0) return "0 B";
  const base = unit === "binary" ? 1024 : 1000;
  const units = unit === "binary" ? UNITS_BINARY : UNITS_DECIMAL;

  if (bytes < base) return `${bytes} B`;

  let i = 0;
  let value = bytes;
  while (value >= base && i < units.length - 1) {
    value /= base;
    i += 1;
  }
  return `${value.toFixed(digits)} ${units[i]}`;
}
