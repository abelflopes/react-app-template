// React
import { NavLink } from "react-router-dom";
import React from "react";
// Router
import { allRoutes } from "@router/index";
import { requiredRoutePath } from "@router/utils/required-route-path";
// Layouts
import { ErrorLayout } from "@layouts/Error";

export const Error404View = (): React.ReactElement => (
  <ErrorLayout title="Something went wrong" description="The requested page was not found">
    <NavLink to={requiredRoutePath(allRoutes.home)}>Go to initial page</NavLink>
  </ErrorLayout>
);
