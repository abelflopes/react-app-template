// React
import { useEffect, useCallback } from "react";
// Redux
import { Store, StoreState } from "@store/index";

export const useGlobalNotifications = (): [
  StoreState["notifications"]["data"],
  (id: number) => void,
] => {
  // Store
  const notifications = Store.useSelector((state) => state.notifications);
  // Dispatch
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

  return [notifications.data, removeNotification];
};
