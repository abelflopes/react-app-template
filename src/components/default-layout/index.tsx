import React from "react";
import { useGlobalNotifications } from "@hooks/global-notifications";
import { Nav } from "@components/nav";
import { Container } from "react-ck";

export interface DefaultLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const DefaultLayout = ({ children }: Readonly<DefaultLayoutProps>): React.ReactElement => {
  useGlobalNotifications();

  return (
    <Container>
      <Nav />
      {children}
    </Container>
  );
};
