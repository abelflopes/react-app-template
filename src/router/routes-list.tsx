/**
 * NOTE: sorting affects router behavior
 * NOTE: do not use numeric keys to prevent JS auto sorting
 */

export const routesList = {
  home: "/",
  cart: "/cart",
  productDetails: "/products/:id",
  productDetailsMain: "/products/:id/details",
  productDetailsReviews: "/products/:id/reviews",
  products: "/products",
  productsList: "/products-list",
  error: "*",
} as const;

export type RouteIndex = keyof typeof routesList;

export type AppRoute = (typeof routesList)[RouteIndex];
