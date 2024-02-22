import React from "react";
import { type LayoutProps } from "@layouts/types";
import { GlobalNotifications } from "@components/global-notifications";
import { Nav } from "@components/nav";

export const DefaultLayout = ({ children }: LayoutProps): React.ReactElement => (
  <main className="container">
    <Nav />
    <GlobalNotifications />
    {children}
  </main>
);
