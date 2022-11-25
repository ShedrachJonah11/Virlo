/**
 * Minimal structured logger. In dev it prints; in production it
 * forwards to whatever sink we wire up (Sentry / Datadog / ...).
 *
 * Keep the API small on purpose — every component should be able to
 * import and call this without thinking about transport details.
 */
type Level = "debug" | "info" | "warn" | "error";

const LEVEL_ORDER: Record<Level, number> = {
  debug: 10,
  info: 20,
  warn: 30,
  error: 40,
};

const MIN_LEVEL: Level =
  process.env.NODE_ENV === "production" ? "info" : "debug";

function log(level: Level, message: string, context?: Record<string, unknown>) {
  if (LEVEL_ORDER[level] < LEVEL_ORDER[MIN_LEVEL]) return;
  const payload = context ? { message, ...context } : message;
  // eslint-disable-next-line no-console
  console[level === "debug" ? "log" : level](payload);
}

export const logger = {
  debug: (message: string, context?: Record<string, unknown>) =>
    log("debug", message, context),
  info: (message: string, context?: Record<string, unknown>) =>
    log("info", message, context),
  warn: (message: string, context?: Record<string, unknown>) =>
    log("warn", message, context),
  error: (message: string, context?: Record<string, unknown>) =>
    log("error", message, context),
};

export type Logger = typeof logger;
