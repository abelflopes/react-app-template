import React from "react";
import { Container, Text } from "react-ck";

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
    <Text variation="h1">{title}</Text>

    <Text>{description}</Text>

    {children}
  </Container>
);
