import { Notification } from ".";
import { createAction } from "@reduxjs/toolkit";

export const reset = createAction("notifications/reset");

export const remove = createAction("notifications/remove", (value: Notification["id"]) => ({
  payload: value,
}));

export const add = createAction("notifications/add", (value: Omit<Notification, "id">) => ({
  payload: value,
}));
