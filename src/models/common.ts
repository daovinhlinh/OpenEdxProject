export interface PaginationParams {
  _next: any,
  _previous: any,
  _count: number,
  _num_pages: number
}

export interface ListResponse<T> {
  results: T[],
  pagination: PaginationParams;
}

export interface ListParams {
  _page?: number;
  _limit?: number;
  _sort?: string;
  _order?: 'asc' | 'desc';

  [key: string]: any;
}

export interface LoginResponse {
  success: boolean;
  value: string;
  error_code: string;
}