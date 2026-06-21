// Base URL
export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080/api";

//Auth
export const API_ENDPOINTS = {
  AUTH: {
    SIGNIN: `${API_BASE_URL}/auth/login`,
    SIGNUP: `${API_BASE_URL}/auth/register`,
    REFRESH: `${API_BASE_URL}/auth/refresh`,
    LOGOUT: `${API_BASE_URL}/auth/logout`,
  },

  // Products
  PRODUCTS: {
    LIST: `${API_BASE_URL}/products`,
    DETAIL: (id: string) => `${API_BASE_URL}/products/${id}`,
    NEW_ARRIVALS: `${API_BASE_URL}/products/new-arrivals`,
    TOP_SELLING: `${API_BASE_URL}/products/top-selling`,
    BY_STYLE: (style: string) => `${API_BASE_URL}/products/style/${style}`,
    SEARCH: `${API_BASE_URL}/products/search`,
  },

  // Cart
  CART: {
    GET: `${API_BASE_URL}/cart`,
    ADD: `${API_BASE_URL}/cart/items`,
    UPDATE: (itemId: string) => `${API_BASE_URL}/cart/items/${itemId}`,
    REMOVE: (itemId: string) => `${API_BASE_URL}/cart/items/${itemId}`,
    CLEAR: `${API_BASE_URL}/cart/clear`,
  },

  // Reviews
  REVIEWS: {
    LIST: (productId: string) =>
      `${API_BASE_URL}/products/${productId}/reviews`,
    CREATE: (productId: string) =>
      `${API_BASE_URL}/products/${productId}/reviews`,
  },

  // Newsletter
  NEWSLETTER: {
    SUBSCRIBE: `${API_BASE_URL}/newsletter/subscribe`,
  },
} as const;
