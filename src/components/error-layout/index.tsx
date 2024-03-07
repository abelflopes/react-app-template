import { Container } from "@react-ck/container";
import React from "react";

interface ErrorLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
  title: React.ReactNode;
  description: React.ReactNode;
}

export const ErrorLayout = ({
  title,
  description,
  children,
}: Readonly<ErrorLayoutProps>): React.ReactElement => (
  <Container>
    <h2>{title}</h2>
    <p>{description}</p>

    {children}
  </Container>
);
