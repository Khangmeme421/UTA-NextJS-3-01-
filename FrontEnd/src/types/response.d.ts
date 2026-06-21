//Generic Paginated Response
export default interface HttpResponseCommon<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[] | T;
}

//API Error
export interface ApiError {
  status: number;
  message: string;
  errors?: Record<string, string[]>;
}

//Paginated Meta
export interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

//Generic Success Response
export interface SuccessResponse<T = unknown> {
  data: T;
  message?: string;
  meta?: PaginationMeta;
}
