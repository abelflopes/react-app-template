import React from "react";
import classNames from "classnames";
import styles from "./index.module.scss";

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Button = ({ children, ...otherProps }: Readonly<ButtonProps>): React.ReactElement => (
  <button className={classNames(styles.root, otherProps.className)} {...otherProps}>
    {children}
  </button>
);
