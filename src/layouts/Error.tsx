/// React
import React from "react";
// Layouts
import { LayoutProps } from "@layouts/types";

interface ErrorLayoutProps extends LayoutProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export const ErrorLayout = ({
  title,
  description,
  children,
}: ErrorLayoutProps): React.ReactElement => (
  <main className="container">
    <h2>{title}</h2>
    <p>{description}</p>

    {children}
  </main>
);
