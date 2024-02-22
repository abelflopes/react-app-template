import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { type RouteIndex, routesList } from "./routes-list";
import { viewsMap } from "./view-mapping";

const router = createBrowserRouter(
  Object.keys(routesList).map((i) => ({
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- to match expected types
    path: routesList[i as RouteIndex] as unknown as string,
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- to match expected types
    Component: viewsMap[i as RouteIndex],
  })),
);

/**
 * Main / global router component
 */

export const DefaultRouter = (): React.ReactElement => <RouterProvider router={router} />;
