// React
import React from "react";
// Utils
import classNames from "classnames";
// Styles
import styles from "./index.module.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button = ({ children, ...otherProps }: ButtonProps): React.ReactElement => (
  <button className={classNames(styles.root, otherProps.className)} {...otherProps}>
    {children}
  </button>
);
