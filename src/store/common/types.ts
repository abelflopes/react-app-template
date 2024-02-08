import { type StateCreator } from "zustand";

// eslint-disable-next-line @typescript-eslint/ban-types -- expected any function type
export type ActionCreator<T extends object, Action extends Function> = (
  ...a: Parameters<StateCreator<T>>
) => Action;
