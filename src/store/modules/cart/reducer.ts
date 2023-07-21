import { add, remove, reset } from "./actions";
import { StateProps } from "./types";
import { createReducer } from "@reduxjs/toolkit";
import { initialState } from "./initial-state";

export const reducer = createReducer<StateProps>(initialState, (builder) => {
  builder
    .addCase(reset, () => initialState)
    .addCase(add, (state, action) => ({
      ...state,
      data: [...state.data, ...(state.data.includes(action.payload) ? [] : [action.payload])],
    }))
    .addCase(remove, (state, action) => ({
      ...state,
      data: state.data.filter((i) => i !== action.payload),
    }));
});
