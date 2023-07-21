// React
import React from "react";
// Router
import { Navigate, generatePath, useParams } from "react-router-dom";
import { View } from "@router/index";
// Utils
import { requiredRoutePath } from "../utils/required-route-path";

interface RedirectProps {
  route: View;
}

export const ViewRedirect = (redirection: RedirectProps): React.ReactElement => {
  const params = useParams();

  const path = requiredRoutePath(redirection.route);

  if (typeof path !== "string") {
    throw new Error("Redirect path must be a string");
  }

  return <Navigate replace to={generatePath(path, params)} />;
};
