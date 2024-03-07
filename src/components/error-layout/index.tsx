import { Container } from "@react-ck/container";
import { Text } from "@react-ck/text";
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
    <Text type="h1">{title}</Text>

    <Text>{description}</Text>

    {children}
  </Container>
);
