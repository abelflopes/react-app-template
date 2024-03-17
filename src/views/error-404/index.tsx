import { NavLink } from "react-router-dom";
import React from "react";
import { routesList } from "@router/routes-list";
import { ErrorLayout } from "@components/error-layout";
import { Text } from "react-ck";

export const Error404View = (): React.ReactElement => (
  <ErrorLayout title="Something went wrong" description="The requested page was not found">
    <Text variation="link" as={<NavLink to={routesList.home}>Go to initial page</NavLink>} />
  </ErrorLayout>
);
