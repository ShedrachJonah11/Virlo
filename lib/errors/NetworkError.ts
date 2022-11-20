import { AppError } from "./AppError";

/** Failures coming from the network/transport layer. */
export class NetworkError extends AppError {
  constructor(
    message: string,
    options: { code?: string; status?: number; cause?: unknown } = {}
  ) {
    super(message, {
      code: options.code ?? "network_error",
      status: options.status,
      cause: options.cause,
    });
    this.name = "NetworkError";
  }
}

export function isNetworkError(value: unknown): value is NetworkError {
  return value instanceof NetworkError;
}
