// API
import * as FakeStoreAPI from "@services/fake-store-api";
import { type Module, type State } from "./types";
import { type ActionCreator } from "@store/common/types";
import { createStore } from "@store/common/create-store";
import { store as notificationsStore } from "@store/modules/notifications";

// Initial State

const initialState: State = {
  loading: 0,
  error: undefined,
  data: [],
};

// Actions

const createLoadAction: ActionCreator<Module, Module["load"]> = (set) => async (options) => {
  set((state) => ({ loading: state.loading + 1 }));

  try {
    const data = options?.category
      ? await FakeStoreAPI.getAllProductsByCategory(options.category)
      : await FakeStoreAPI.getAllProducts();
    set(() => ({ data }));
  } catch (error: unknown) {
    const formattedError = error instanceof Error ? error.message : String(error);

    set(() => ({ error: formattedError }));

    notificationsStore.getState().add({
      type: "negative",
      title: "Failed to load products",
      description: formattedError,
    });
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
