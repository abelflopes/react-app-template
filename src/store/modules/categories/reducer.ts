import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { load, reset } from "./actions";
import { StateProps } from "./types";
import { initialState } from "./initial-state";

export const reducer = createReducer<StateProps>(initialState, (builder) => {
  builder
    .addCase(reset, () => initialState)
    .addCase(load.fulfilled, (state, action) => ({
      ...state,
      ...action.payload,
    }))
    .addMatcher(isAnyOf(load.pending), (state) => ({
      ...state,
      loading: state.loading + 1,
    }))
    .addMatcher(isAnyOf(load.rejected, load.fulfilled), (state) => ({
      ...state,
      loading: state.loading - 1,
    }));
});
