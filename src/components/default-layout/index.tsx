import styles from "./index.module.scss";
import React from "react";
import { Container, Dock, Icon } from "react-ck";
import { IconCog } from "@react-ck/icon/icons/IconCog";
import { IconUserCircle } from "@react-ck/icon/icons/IconUserCircle";
import { Chat } from "@react-ck/icon/icons/Chat";
import { Notification } from "@react-ck/icon/icons/Notification";

export interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: Readonly<DefaultLayoutProps>): React.ReactElement => (
  <div className={styles.root}>
    <Dock
      skin="shadowed"
      header={
        <Dock.MainItem
          label="Fairstone"
          image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.fairstone.co.uk%2Fwp-content%2Fuploads%2F2021%2F08%2FFairstone-profile.jpg&f=1&nofb=1&ipt=cc31aeed757287dd5a68d4ac490884451baf29e47b97657ec95461d512bc2e67&ipo=images"
        />
      }>
      <Dock.Item
        label="Chat"
        icon={
          <Icon>
            <Chat />
          </Icon>
        }
        active
      />
      <Dock.Item
        active={false}
        label="Notification"
        icon={
          <Icon>
            <Notification />
          </Icon>
        }
      />
      <Dock.Item
        active={false}
        label="User"
        icon={
          <Icon>
            <IconUserCircle />
          </Icon>
        }
      />
      <Dock.Item
        active={false}
        label="Settings"
        icon={
          <Icon>
            <IconCog />
          </Icon>
        }
      />
    </Dock>
    <Container className={styles.container}>{children}</Container>
  </div>
);
