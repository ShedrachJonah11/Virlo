/** Sleep for `ms` milliseconds. */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Wrap a promise so it rejects with the given message after `ms`.
 * Useful for putting an upper bound on a long-running call.
 */
export function timeout<T>(promise: Promise<T>, ms: number, message: string = "Timed out"): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const id = setTimeout(() => reject(new Error(message)), ms);
    promise.then(
      (value) => {
        clearTimeout(id);
        resolve(value);
      },
      (error) => {
        clearTimeout(id);
        reject(error);
      }
    );
  });
}
