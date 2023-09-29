// React
import React from "react";

interface PriceTagProps {
  value: number;
}

export const PriceTag = ({ value }: Readonly<PriceTagProps>): React.ReactElement => (
  <span>€ {value}</span>
);
