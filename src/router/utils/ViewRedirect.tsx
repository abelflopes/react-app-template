// React
import React from "react";
// Router
import { Navigate, generatePath, useParams } from "react-router-dom";
import { type View } from "@router/index";
// Utils
import { requiredRoutePath } from "../utils/required-route-path";

interface RedirectProps {
  route: View;
}

export const ViewRedirect = (redirection: RedirectProps): React.ReactElement => {
  const params = useParams();

  const path = requiredRoutePath(redirection.route);

  if (typeof path !== "string") throw new TypeError("Redirect path must be a string");

  return <Navigate to={generatePath(path, params)} replace />;
};
