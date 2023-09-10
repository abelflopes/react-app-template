import { type StateCreator, create } from "zustand";
import { createSelectorHooks } from "auto-zustand-selectors-hook";
import { persist } from "zustand/middleware";

// Block values from persisting (partial string match)
const blockList = ["loading"];
const persistedStoreEntries: string[] = [];

export const createStore = <T extends object>(
  stateCreator: StateCreator<T>
): ReturnType<typeof createSelectorHooks<T>> => {
  const useStoreBase = create(stateCreator);

  const useStore = createSelectorHooks(useStoreBase);

  return useStore;
};

export const createPersistedStore = <T extends object>(
  name: string,
  stateCreator: StateCreator<T>
): ReturnType<typeof createSelectorHooks<T>> => {
  if (persistedStoreEntries.includes(name)) {
    throw new Error(
      `Persisted stores cannot have repeated names - "${name}" name is used multiple times`
    );
  } else {
    persistedStoreEntries.push(name);
  }

  const useStoreBase = create(
    persist<T>(stateCreator, {
      name,
      partialize: (state) =>
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        Object.fromEntries(
          Object.entries(state).filter(([key]) =>
            blockList.some((item) => !key.toLowerCase().includes(item.toLowerCase()))
          )
        ) as T,
    })
  );

  const useStore = createSelectorHooks(useStoreBase);

  return useStore;
};
