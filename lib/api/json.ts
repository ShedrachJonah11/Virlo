import { http } from "./http";

/** Typed convenience for `GET <url>` returning JSON. */
export function getJson<T>(url: string, init?: RequestInit): Promise<T> {
  return http<T>(url, { method: "GET", ...init });
}

/** Typed convenience for `POST <url>` with a JSON body. */
export function postJson<T>(url: string, body: unknown, init?: RequestInit): Promise<T> {
  return http<T>(url, {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json", ...(init?.headers ?? {}) },
    ...init,
  });
}
