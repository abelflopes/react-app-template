// React
import { useEffect, useCallback } from "react";
// Components
import { Alert } from "@components/alert";
// Redux
import { Store } from "@store/index";

export const GlobalNotifications = (): React.ReactElement => {
  const notifications = Store.useSelector((state) => state.notifications);
  const dispatch = Store.useDispatch();

  const removeNotification = useCallback(
    (id: number): void => void dispatch(Store.notifications.remove(id)),
    [dispatch]
  );

  useEffect(() => {
    if (!notifications.data) return;

    notifications.data.forEach((notification) => {
      const timeout = setTimeout(() => removeNotification(notification.id), 8000);

      return () => clearTimeout(timeout);
    });
  }, [notifications.data, dispatch, removeNotification]);

  return (
    <>
      {!!notifications.data.length &&
        notifications.data.map((notification) => (
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
