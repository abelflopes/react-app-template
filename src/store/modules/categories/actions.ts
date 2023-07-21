import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { FakeStoreAPI } from "@services/fake-store-api";
import { StateProps } from "./types";
import { initialState } from "./initial-state";
import { parseError } from "../../../utils/parse-error";

export const reset = createAction("categories/reset");

export const load = createAsyncThunk<Partial<StateProps>>("categories/load", async () => {
  let data: StateProps["data"] = initialState.data;
  let error: StateProps["error"] = initialState.error;

  try {
    data = await FakeStoreAPI.getAllCategories();
  } catch (e) {
    error = parseError(e);
  }

  return {
    data,
    error,
  };
});
