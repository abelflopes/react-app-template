// API
import * as FakeStoreAPI from "@services/fake-store-api";
import { type Module, type State } from "./types";
import { type ActionCreator } from "@store/common/types";
import { createStore } from "@store/common/create-store";

// Initial State

const initialState: State = {
  loading: 0,
  error: undefined,
  data: [],
};

// Actions

const createLoadAction: ActionCreator<Module, Module["load"]> = (set) => async () => {
  set((state) => ({ loading: state.loading + 1 }));

  try {
    const data = await FakeStoreAPI.getAllCategories();
    set(() => ({ data }));
  } catch (error: unknown) {
    set(() => ({ error: error instanceof Error ? error.message : String(error) }));
  }

  set((state) => ({ loading: state.loading - 1 }));
};

const createResetAction: ActionCreator<Module, Module["reset"]> = (set) => () => {
  set(initialState);
};

// Data

export const store = createStore<Module>((...a) => ({
  ...initialState,
  load: createLoadAction(...a),
  reset: createResetAction(...a),
}));
