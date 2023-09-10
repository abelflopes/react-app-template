import { type Module, type State } from "./types";
import { type ActionCreator } from "@store/common/types";
import { createPersistedStore } from "@store/common/create-store";
import { store as notificationsStore } from "@store/modules/notifications";

// Initial State

const initialState: State = {
  data: [],
};

// Actions

const createResetAction: ActionCreator<Module, Module["reset"]> = (set) => () => {
  set(initialState);
};

const createAddAction: ActionCreator<Module, Module["add"]> = (set) => (id) => {
  set((state) => ({
    data: [...state.data.filter((i) => i !== id), id],
  }));

  notificationsStore.getState().add({
    type: "success",
    description: "Successfully added to cart",
  });
};

const createRemoveAction: ActionCreator<Module, Module["remove"]> = (set) => (id) => {
  set((state) => ({
    data: [...state.data.filter((i) => i !== id), id],
  }));

  notificationsStore.getState().add({
    type: "success",
    description: "Successfully removed from cart",
  });
};

// Data

export const store = createPersistedStore<Module>("cart", (...a) => ({
  ...initialState,
  reset: createResetAction(...a),
  add: createAddAction(...a),
  remove: createRemoveAction(...a),
}));
