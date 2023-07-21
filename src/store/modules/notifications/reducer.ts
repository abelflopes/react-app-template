import { Notification, StateProps } from "./types";
import { add, remove, reset } from "./actions";
import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";

export const reducer = createReducer<StateProps>(initialState, (builder) => {
  builder
    .addCase(reset, () => initialState)
    // Remove notification from state array
    .addCase(remove, (state, action) => ({
      ...state,
      data: state.data.filter((item) => item.id !== action.payload),
    }))
    // add notification to state array
    .addCase(add, (state, action) => {
      // Generate id for notifications, incrementing on highest found ID
      const highestId = Math.max(0, ...state.data.map((i) => i.id));

      // Needed assertion due do what we think is a Redux typing bug
      const currentStateNotifications = state.data.map((notification) => ({
        description: notification.description,
        id: notification.id,
        type: notification.type,
        title: notification.title,
      }));

      const newNotification: Notification = {
        ...action.payload,
        id: highestId + 1,
      };

      return {
        data: [...currentStateNotifications, newNotification],
      };
    });
});
