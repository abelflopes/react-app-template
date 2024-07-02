import { NavLink, useRoutes, useMatch, useMatches, useInRouterContext } from "react-router-dom";
import React, { useEffect } from "react";
import { routesList } from "@router/routes-list";
import { ErrorLayout } from "@components/error-layout";
import { Text } from "react-ck";

export interface ErrorViewProps {
  error?: string;
  reset?: () => void;
}

export const ErrorView = ({
  error = "Unknown Error",
  reset,
}: Readonly<ErrorViewProps>): React.ReactElement => {
  const isInRouter = useInRouterContext();

  return (
    <ErrorLayout title="Something went wrong" description={error}>
      {isInRouter ? (
        <Text skin="link" as={<NavLink to={routesList.home} />} onClick={reset}>
          Go to initial page
        </Text>
      ) : (
        <Text skin="link" onClick={reset}>
          Try Again
        </Text>
      )}
    </ErrorLayout>
  );
};
