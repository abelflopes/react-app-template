import { type StateCreator } from "zustand";

export type ActionCreator<T extends object, Action extends Function> = (
  ...a: Parameters<StateCreator<T>>
) => Action;
