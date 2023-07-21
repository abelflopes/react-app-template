// React
import React from "react";
// Router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "..";

/**
 * Main / global router component
 */

export const DefaultRouter = (): React.ReactElement => {
  const router = createBrowserRouter(routes.map(({ options }) => options));

  return <RouterProvider router={router} />;
};
