/**
 * Pull a required env var or throw a clear error at startup.
 * Use this instead of `process.env.X!` so misconfiguration is loud.
 */
export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `See .env.example for the full list.`
    );
  }
  return value;
}

/** Optional env var with a typed default. */
export function envOr<T extends string>(name: string, fallback: T): string | T {
  return process.env[name] ?? fallback;
}

/** Parse an env var as a boolean. Truthy values: 1, true, yes, on (case-insensitive). */
export function envBool(name: string, fallback: boolean = false): boolean {
  const raw = process.env[name];
  if (raw === undefined) return fallback;
  return /^(1|true|yes|on)$/i.test(raw);
}
