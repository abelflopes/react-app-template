// Router config
import { allRoutes, type RouteIndex } from "../index";
import { requiredRoutePath } from "./required-route-path";

/**
 * Returns a valid route url
 * @param index - index name to find
 * @returns route url
 */

export const getRoute = (index: RouteIndex): string => {
  const to = requiredRoutePath(allRoutes[index]);

  if (typeof to !== "string") throw new Error("Expected route path to be a string");

  return to;
};
