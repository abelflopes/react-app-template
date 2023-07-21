import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FakeStoreAPI } from "@services/fake-store-api";
import { StateProps } from "./types";
import { Store } from "@store/index";
import { initialState } from "./initial-state";
import { parseError } from "../../../utils/parse-error";

export const reset = createAction("products/reset");

export const load = createAsyncThunk<
  Partial<StateProps>,
  | undefined
  | {
      category?: string;
    }
>("products/load", async (options, { dispatch }) => {
  let data: StateProps["data"] = initialState.data;
  let error: StateProps["error"] = initialState.error;

  try {
    data = options?.category
      ? await FakeStoreAPI.getAllProductsByCategory(options?.category)
      : await FakeStoreAPI.getAllProducts();
  } catch (e) {
    error = parseError(e);
  }

  if (error) {
    void dispatch(
      Store.notifications.add({
        type: "error",
        title: "Failed to load products",
        description: error,
      })
    );
  }

  return {
    data,
    error,
  };
});
