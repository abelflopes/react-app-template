// Styles
import "./index.scss";
// React
import React from "react";

/**
 * Alert component properties
 */
export interface AlertProps {
  /** Main label / title */
  title: string;
  /** Secondary content */
  children?: React.ReactNode;
  onClose?: () => void;
}

/**
 * Alert / banner component
 * @param props - {@link AlertProps}
 * @returns {@link React.ReactElement}
 */
export const Alert = ({ title, onClose, children }: AlertProps): React.ReactElement => (
  <div className="alert" role="alert">
    <div className="alert__content">
      {title && <b className="alert__title">{title}</b>}
      {children}
    </div>
    {onClose && <button onClick={onClose}>X</button>}
  </div>
);
