// Styles
import "./index.scss";
/// React
import { NavLink, useParams } from "react-router-dom";
import React from "react";
import { generatePath } from "react-router";
// Routes
import { allRoutes } from "@router/index";
import { getRoute } from "@router/utils/get-route";
// Store
import { selectItemCount } from "@store/selectors";

export const Nav = (): React.ReactElement => {
  const params = useParams();

  const cartItemsCount = selectItemCount();

  const links = React.useMemo(
    () => [
      {
        to: generatePath(getRoute("home"), params),
        label: allRoutes.home.name,
      },
      {
        to: generatePath(getRoute("products"), params),
        label: allRoutes.products.name,
      },
      {
        to: generatePath(getRoute("productsList"), params),
        label: `${allRoutes.productsList.name} (redirect)`,
      },
      {
        to: generatePath(getRoute("cart"), params),
        label: `${allRoutes.cart.name} (${cartItemsCount})`,
      },
    ],
    [cartItemsCount, params],
  );

  return (
    <nav className="nav">
      {links.map((i) => (
        <NavLink
          key={i.to}
          className={({ isActive }): string =>
            ["nav__link", ...(isActive ? ["is-active"] : [])].join(" ")
          }
          to={i.to}>
          {i.label}
        </NavLink>
      ))}
    </nav>
  );
};
