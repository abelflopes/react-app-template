import React, { useEffect } from "react";
import { Store } from "@store/index";
import { Alert, useSnackbarContext } from "react-ck";

export const useGlobalNotifications = (): void => {
  const snackbar = useSnackbarContext();
  const notifications = Store.notifications.useData();
  const removeNotification = Store.notifications.useRemove();

  useEffect(() => {
    notifications.forEach((notification) => {
      removeNotification(notification.id);

      const id = snackbar.add((id) => (
        <Alert
          title={notification.title}
          skin={notification.type}
          onClick={(): void => {
            snackbar.remove(id);
          }}>
          {notification.description}
        </Alert>
      ));

      setTimeout(() => {
        snackbar.remove(id);
      }, 8000);
    });
  }, [snackbar, notifications, removeNotification]);
};
