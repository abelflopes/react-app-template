// React
import { useEffect } from "react";
// Redux
import { type State } from "@store/modules/notifications/types";
import { Store } from "@store/index";

export const useGlobalNotifications = (): [State["data"], (id: number) => void] => {
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

  return [notifications, removeNotification];
};
