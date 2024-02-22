import React from "react";
import { FaX } from "react-icons/fa6";
import { Button } from "@components/button";
import styles from "./index.module.scss";

export interface AlertProps {
  title?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const Alert = ({ title, onClose, children }: Readonly<AlertProps>): React.ReactElement => (
  <div className={styles.root} role="alert">
    <div>
      {title !== undefined && <b className={styles.title}>{title}</b>}
      {children}
    </div>
    {onClose !== undefined && (
      <Button onClick={onClose}>
        <FaX />
      </Button>
    )}
  </div>
);
