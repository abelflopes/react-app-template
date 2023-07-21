// React
import React from "react";
// Redux
import {
  Reducer,
  ActionFromReducersMapObject,
  CombinedState,
  StateFromReducersMapObject,
  AnyAction,
} from "redux";
import { ThunkMiddleware } from "@reduxjs/toolkit";
import { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";

/**
 * Type that we use to describe file exports
 * of what we consider to be a redux module, only requires
 * the reducer to be exported in order to give flexibility to export  anything else
 * @see {@link Reducer}
 */
export type ModulesMap = Record<string, { reducer: Reducer }>;

/**
 * Component type of {@link ReactRedux.Provider} abstraction
 */
export type Provider = (props: {
  children: React.ReactNode | React.ReactNode[];
}) => React.ReactElement;

/**
 * Mapping which is a transformation of {@link ModulesMap}
 * maps the modules map directly to `key > reducer`
 */
export type MappedReducers<M extends ModulesMap> = {
  [key in keyof M]: M[key]["reducer"];
};

/**
 * Root reducer (return type of {@link combineReducers})
 */
export type AppRootState<M extends ModulesMap> = ReturnType<
  Reducer<
    CombinedState<StateFromReducersMapObject<MappedReducers<M>>>,
    ActionFromReducersMapObject<MappedReducers<M>>
  >
>;

/**
 * Store (return type of {@link configureStore})
 */
export type Store<M extends ModulesMap> = ToolkitStore<
  CombinedState<StateFromReducersMapObject<MappedReducers<M>>>,
  ActionFromReducersMapObject<MappedReducers<M>>,
  [
    ThunkMiddleware<
      CombinedState<StateFromReducersMapObject<MappedReducers<M>>>,
      AnyAction,
      undefined
    >,
  ]
>;

/**
 * Pre typed Dispatch function type
 * @remarks
 * Acts as the return type of the useDispatch proxy
 */
export type Dispatch<M extends ModulesMap> = Store<M>["dispatch"];

/**
 * Selector function type with pre typed state param
 */
export type Selector<Return, M extends ModulesMap> = (state: AppRootState<M>) => Return;

export type UseSelector<Return, M extends ModulesMap> = (
  selector: Selector<Return, M>,
  equalityFn?: (a: Return, b: Return) => boolean
) => ReturnType<typeof selector>;

/**
 * Configuration object of store setup
 * @see {@link setupRtkStore}
 */
export interface SetupRtkStoreOptions<M extends ModulesMap> {
  /** object which consists on a list of exports of individual redux modules */
  modules: M;
}
