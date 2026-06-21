//App Routes
export const ROUTES = {
  HOME: "/",
  HOMEPAGE: "/homepage",

  // Auth
  SIGNIN: "/signin",
  SIGNUP: "/signup",

  // Shop
  SHOP: "/shop",
  SALE: "/sale",
  NEW_ARRIVALS: "/new-arrivals",
  BRANDS: "/brands",

  // Dress Styles
  CASUAL: "/casual",
  FORMAL: "/formal",
  PARTY: "/party",
  GYM: "/gym",

  // Product
  PRODUCT: (id: string) => `/product/${id}`,

  // Account
  CART: "/cart",
  PROFILE: "/profile",
  ORDERS: "/orders",

  // Info
  ABOUT: "/about",
  CONTACT: "/contact",
  BLOG: "/blog",
  DASHBOARD: "/dashboard",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
