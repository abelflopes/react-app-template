// React
import React from "react";

interface PriceTagProps {
  value: number;
}

export const PriceTag = ({ value }: PriceTagProps): React.ReactElement => <span>€ {value}</span>;
