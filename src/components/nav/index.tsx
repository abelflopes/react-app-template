import styles from "./index.module.scss";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { generatePath } from "react-router";
import { routesList } from "@router/routes-list";
import { selectItemCount } from "@store/selectors";
import { Badge } from "@react-ck/badge";

export const Nav = (): React.ReactElement => {
  const params = useParams();

  const cartItemsCount = selectItemCount();

  const links = React.useMemo(
    () => [
      {
        to: generatePath(routesList.home, params),
        label: "Home",
      },
      {
        to: generatePath(routesList.products, params),
        label: "Products",
      },
      {
        to: generatePath(routesList.productsList, params),
        label: `Products List (redirect)`,
      },
      {
        to: generatePath(routesList.cart, params),
        label: (
          <>
            Cart&nbsp;<Badge skin="negative">{cartItemsCount}</Badge>
          </>
        ),
      },
    ],
    [cartItemsCount, params],
  );

  return (
    <nav className={styles.nav}>
      {links.map((i) => (
        <NavLink
          key={i.to}
          to={i.to}
          className={({ isActive }): string =>
            [styles.nav__link, ...(isActive ? ["is-active"] : [])].join(" ")
          }>
          {i.label}
        </NavLink>
      ))}
    </nav>
  );
};
