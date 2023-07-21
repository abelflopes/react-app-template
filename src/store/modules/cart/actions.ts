import * as Store from "@store/index";
import { createAction, PrepareAction, Dispatch } from "@reduxjs/toolkit";

export const reset = createAction("cart/reset");

export const add = createAction<PrepareAction<number>>(
  "cart/add",
  (value: number, dispatch: Dispatch) => {
    void dispatch(
      Store.Store.notifications.add({
        type: "success",
        description: "Successfully added to cart",
      })
    );

    return {
      payload: value,
    };
  }
);

export const remove = createAction<PrepareAction<number>>(
  "cart/remove",
  (value: number, dispatch: Dispatch) => {
    void dispatch(
      Store.Store.notifications.add({
        type: "success",
        description: "Successfully removed from cart",
      })
    );

    return {
      payload: value,
    };
  }
);
