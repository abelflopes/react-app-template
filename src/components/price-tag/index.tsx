import React from "react";
import { Chip } from "react-ck";

interface PriceTagProps {
  className?: string;
  value: number;
}

export const PriceTag = ({ value, className }: Readonly<PriceTagProps>): React.ReactElement => (
  <Chip className={className}>€ {value}</Chip>
);
