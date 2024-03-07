import React from "react";
import { GlobalNotifications } from "@components/global-notifications";
import { Nav } from "@components/nav";
import { Container } from "@react-ck/container";

export interface DefaultLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

export const DefaultLayout = ({ children }: Readonly<DefaultLayoutProps>): React.ReactElement => (
  <Container>
    <Nav />
    <GlobalNotifications />
    {children}
  </Container>
);
