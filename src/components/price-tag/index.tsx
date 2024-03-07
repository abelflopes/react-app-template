import React from "react";
import { Chip } from "@react-ck/chip";

interface PriceTagProps {
  value: number;
}

export const PriceTag = ({ value }: Readonly<PriceTagProps>): React.ReactElement => (
  <Chip>€ {value}</Chip>
);
