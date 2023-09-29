// Styles
import "./index.scss";
/// React
import React from "react";

interface FiltersProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Filters = ({ children }: Readonly<FiltersProps>): React.ReactElement => (
  <section className="filters">{children}</section>
);
