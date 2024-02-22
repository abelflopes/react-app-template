import "./index.scss";
import React from "react";

/**
 * Card component properties
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Card media display slot */
  image?: string;
  /** Main text */
  label: string;
  /** Detailed data list */
  data?: Record<string, React.ReactNode>;
  /** Secondary content slot */
  children?: React.ReactNode | React.ReactNode[];
}

/**
 * Card component
 * @param props - {@link CardProps}
 * @returns {@link React.ReactElement}
 */
export const Card = ({
  image,
  label,
  data,
  children,
  ...nativeProps
}: Readonly<CardProps>): React.ReactElement => (
  <div {...nativeProps} className="card">
    {image !== undefined && <img alt={label} className="card__image" src={image} />}

    <div className="card__content">
      <h3>{label}</h3>

      {data !== undefined && (
        <ul>
          {Object.entries(data).map(([key, value]) => (
            <li key={key}>
              <b>{key}</b> - {value}
            </li>
          ))}
        </ul>
      )}

      {children}
    </div>
  </div>
);
