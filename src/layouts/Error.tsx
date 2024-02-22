import React from "react";
import { type LayoutProps } from "@layouts/types";

interface ErrorLayoutProps extends LayoutProps {
  title: React.ReactNode;
  description: React.ReactNode;
}

export const ErrorLayout = ({
  title,
  description,
  children,
}: Readonly<ErrorLayoutProps>): React.ReactElement => (
  <main className="container">
    <h2>{title}</h2>
    <p>{description}</p>

    {children}
  </main>
);
