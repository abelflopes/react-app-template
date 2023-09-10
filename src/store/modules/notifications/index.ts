import { type Module, type State } from "./types";
import { type ActionCreator } from "@store/common/types";
import { createPersistedStore } from "@store/common/create-store";

// Initial State

const initialState: State = {
  data: [],
};

// Actions

const createResetAction: ActionCreator<Module, Module["reset"]> = (set) => () => {
  set(initialState);
};

const createAddAction: ActionCreator<Module, Module["add"]> = (set) => (data) => {
  set((state) => {
    // Generate id for notifications, incrementing on highest found ID
    const highestId = Math.max(0, ...state.data.map((i) => i.id));

    return {
      data: [
        ...state.data,
        {
          ...data,
          id: highestId + 1,
        },
      ],
    };
  });
};

const createRemoveAction: ActionCreator<Module, Module["remove"]> = (set) => (id) => {
  set((state) => ({
    data: state.data.filter((i) => i.id !== id),
  }));
};

// Data

export const store = createPersistedStore<Module>(
  (...a) => ({
    ...initialState,
    reset: createResetAction(...a),
    add: createAddAction(...a),
    remove: createRemoveAction(...a),
  }),
  "notifications"
);
