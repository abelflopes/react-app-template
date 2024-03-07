import { NavLink } from "react-router-dom";
import React from "react";
import { routesList } from "@router/routes-list";
import { ErrorLayout } from "@components/error-layout";

export const Error404View = (): React.ReactElement => (
  <ErrorLayout title="Something went wrong" description="The requested page was not found">
    <NavLink to={routesList.home}>Go to initial page</NavLink>
  </ErrorLayout>
);
