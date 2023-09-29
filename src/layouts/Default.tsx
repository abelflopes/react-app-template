/// React
import React from "react";
// Layouts
import type { LayoutProps } from "@layouts/types";
// Components
import { GlobalNotifications } from "@components/global-notifications";
import { Nav } from "@components/nav";

export const DefaultLayout = ({ children }: LayoutProps): React.ReactElement => (
  <main className="container">
    <Nav />
    <GlobalNotifications />
    {children}
  </main>
);
