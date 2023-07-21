// Router
import { RouteObject } from "react-router-dom";
// Views & Redirects
import * as Redirects from "./redirects";
import * as Views from "./views";

// DOCS: https://beta.reactrouter.com/en/v6.3.0/upgrading/v5#upgrade-all-switch-elements-to-routes

export interface View {
  name: string;
  options: RouteObject;
}

export const allRoutes = {
  ...Redirects,
  ...Views,
};

export type RouteIndex = keyof typeof allRoutes;

// Generate routes list from grouped imports object
export const routes: View[] = Object.values(allRoutes);
