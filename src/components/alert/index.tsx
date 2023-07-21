// React
import React from "react";
// Icons
import { FaX } from "react-icons/fa6";
// Components
import { Button } from "@components/button";
// Styles
import styles from "./index.module.scss";

export interface AlertProps {
  title: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const Alert = ({ title, onClose, children }: AlertProps): React.ReactElement => (
  <div className={styles.root} role="alert">
    <div>
      {title && <b className={styles.title}>{title}</b>}
      {children}
    </div>
    {onClose && (
      <Button onClick={onClose}>
        <FaX />
      </Button>
    )}
  </div>
);
