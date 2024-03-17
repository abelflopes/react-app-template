import { useEffect, useMemo, type default as React } from "react";
import { generatePath, useLocation, useParams, useSearchParams } from "react-router-dom";
import { useNavigate, type PathParam } from "react-router";
import { type RouteIndex, routesList } from "./routes-list";

/**
 * Route redirection component
 * This component tries to preserve params by merging search and pat params
 * and injecting them on the target path, also allows overriding with "params prop"
 * It also preserves search params
 */

interface RedirectViewProps<T extends RouteIndex> {
  to: T;
  params?: Partial<PathParam<(typeof routesList)[T]>>;
}

export const RedirectView = <T extends RouteIndex>({
  to,
  params: additionalParams,
}: Readonly<RedirectViewProps<T>>): React.ReactNode => {
  const navigate = useNavigate();
  const pathParams = useParams();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const path = String(routesList[to]);

  const params = useMemo(
    () => ({
      ...searchParams,
      ...pathParams,
      ...additionalParams,
    }),
    [additionalParams, pathParams, searchParams],
  );

  useEffect(() => {
    navigate(
      {
        pathname: generatePath<string>(path, params),
        search: location.search,
      },
      {
        replace: true,
      },
    );
  }, [location.search, navigate, params, path]);

  return null;
};
