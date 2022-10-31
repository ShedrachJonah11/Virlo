const UNITS = ["B", "KB", "MB", "GB", "TB", "PB"] as const;

/**
 * Format a byte count using the binary IEC scale (1024-based).
 *
 *   1023 -> "1023 B"
 *   1024 -> "1.0 KB"
 *   1_500_000 -> "1.4 MB"
 */
export function formatBytes(bytes: number, digits: number = 1): string {
  if (!Number.isFinite(bytes) || bytes < 0) return "0 B";
  if (bytes < 1024) return `${bytes} B`;

  let i = 0;
  let value = bytes;
  while (value >= 1024 && i < UNITS.length - 1) {
    value /= 1024;
    i += 1;
  }
  return `${value.toFixed(digits)} ${UNITS[i]}`;
}
