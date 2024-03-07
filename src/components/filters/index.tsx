import React from "react";
import { Card } from "@react-ck/card";

interface FiltersProps {
  children: React.ReactNode | React.ReactNode[];
}

export const Filters = ({ children }: Readonly<FiltersProps>): React.ReactElement => (
  <Card>{children}</Card>
);
