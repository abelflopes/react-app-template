// React
import { NavLink } from "react-router-dom";
import React from "react";
// Router
import { routesList } from "@router/routes-list";
// Layouts
import { ErrorLayout } from "@layouts/Error";

export const Error404View = (): React.ReactElement => (
  <ErrorLayout title="Something went wrong" description="The requested page was not found">
    <NavLink to={routesList.home}>Go to initial page</NavLink>
  </ErrorLayout>
);
