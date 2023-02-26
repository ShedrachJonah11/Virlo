export interface Page<T> {
  items: T[];
  page: number;
  pageSize: number;
  total: number;
}

export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

/** Standard ok/err envelope mirroring the server. */
export type ApiResult<T> =
  | { ok: true; data: T }
  | { ok: false; code: string; message: string };
