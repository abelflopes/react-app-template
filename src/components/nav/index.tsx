import styles from "./index.module.scss";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { generatePath } from "react-router";
import { routesList } from "@router/routes-list";
import { selectItemCount } from "@store/selectors";
import { Badge } from "@react-ck/badge";
import { Text } from "@react-ck/text";
import classNames from "classnames";

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
        <Text
          key={i.to}
          className={classNames(styles.nav__link)}
          as={<NavLink to={i.to}>{i.label}</NavLink>}
        />
      ))}
    </nav>
  );
};
