/**
 * NOTE: sorting affects router behavior
 * NOTE: do not use numeric keys to prevent JS auto sorting
 */

export const routesList = {
  home: "/",
  products: "/products",
  cart: "/cart",
  productDetails: "/products/:id",
  productReviews: "/products/:id/reviews",
  error: "*",
} as const;

export type RouteIndex = keyof typeof routesList;

export type AppRoute = (typeof routesList)[RouteIndex];
