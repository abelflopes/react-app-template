// React
import { useEffect } from "react";
// Components
import { Alert } from "@components/alert";
// Redux
import { Store } from "@store/index";

export const GlobalNotifications = (): React.ReactElement => {
  const notifications = Store.notifications.useData();
  const removeNotification = Store.notifications.useRemove();

  useEffect(() => {
    if (!notifications) return;

    notifications.forEach((notification) => {
      const timeout = setTimeout(() => removeNotification(notification.id), 8000);

      return () => clearTimeout(timeout);
    });
  }, [notifications, removeNotification]);

  return (
    <>
      {!!notifications.length &&
        notifications.map((notification) => (
          <Alert
            key={notification.id}
            title={notification.title || ""}
            onClose={(): void => removeNotification(notification.id)}
          >
            {notification.description}
          </Alert>
        ))}
    </>
  );
};
