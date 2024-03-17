import React from "react";
import { Card } from "react-ck";
import styles from "./index.module.scss";

interface FiltersProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Filters = ({ children }: Readonly<FiltersProps>): React.ReactElement => (
  <Card className={styles.root}>{children}</Card>
);
