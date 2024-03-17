import React, { useEffect } from "react";
import { Alert } from "react-ck";
import { Store } from "@store/index";

export const GlobalNotifications = (): React.ReactElement[] => {
  const notifications = Store.notifications.useData();
  const removeNotification = Store.notifications.useRemove();

  useEffect(() => {
    if (!notifications.length) return;

    notifications.forEach((notification) => {
      const timeout = setTimeout(() => {
        removeNotification(notification.id);
      }, 8000);

      return () => {
        clearTimeout(timeout);
      };
    });
  }, [notifications, removeNotification]);

  return notifications.map((notification) => (
    <Alert
      key={notification.id}
      title={notification.title}
      skin={notification.type}
      onClick={(): void => {
        removeNotification(notification.id);
      }}>
      {notification.description}
    </Alert>
  ));
};
