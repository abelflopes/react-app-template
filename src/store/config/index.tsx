import * as ReactRedux from "react-redux";
import * as SetupRtk from "./types";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { isEqual } from "./utils";

export class SetupRtkStore<M extends SetupRtk.ModulesMap> {
  private options: SetupRtk.SetupRtkStoreOptions<M>;
  private reducers: SetupRtk.MappedReducers<M>;

  constructor(options: SetupRtk.SetupRtkStoreOptions<M>) {
    this.options = options;

    this.reducers = this.createReducersMap();
  }

  /**
   * Create a `{ [key: string]: <reducer> }` map
   * from provided module exports
   */
  private createReducersMap = (): SetupRtk.MappedReducers<M> =>
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    Object.fromEntries(
      Object.entries(this.options.modules).map(([name, exports]) => [name, exports.reducer])
    ) as unknown as SetupRtk.MappedReducers<M>;

  get store(): SetupRtk.Store<M> {
    // https://github.com/reduxjs/redux-toolkit/issues/2068 change on reducers due to errors
    // const rootReducer: RootReducer<typeof reducers> = combineReducers(reducers);
    const rootReducer = combineReducers<SetupRtk.MappedReducers<M>>(this.reducers);

    return configureStore({
      reducer: rootReducer,
    });
  }

  /**
   * Abstracted ReactRedux.Provider with pre-configured store
   */
  public Provider: SetupRtk.Provider = ({ children }) => (
    <ReactRedux.Provider store={this.store}>{children}</ReactRedux.Provider>
  );

  /**
   * Pre typed proxy of useSelector
   * @param selector - {@link SetupRtk.Selector}
   * @param equalityFn - function to compare before and after versions of the
   * selector return, which helps prevents rerenders
   * @returns - output of the selector
   */
  public useSelector = <T,>(
    selector: SetupRtk.Selector<T, M>,
    equalityFn: (a: T, b: T) => boolean = isEqual
  ): ReturnType<SetupRtk.UseSelector<T, M>> =>
    ReactRedux.useSelector<SetupRtk.AppRootState<M>, T>(selector, equalityFn);

  public useDispatch = (): SetupRtk.Dispatch<M> =>
    ReactRedux.useDispatch<SetupRtk.Store<M>["dispatch"]>();

  /**
   * Utility to create a selector, provides pre-typed state object
   * @param selector - selector function
   * @example
   * ```ts
   *  const selectById = createSelector((id: string) => (state) : Product[] => state.products.find(id))
   * ```
   * @returns provided selector function
   */
  public createSelector = <A, T>(
    selectorCreator: (
      ...args: A extends Array<unknown> ? A : [A]
    ) => (state: SetupRtk.AppRootState<M>) => T
  ): typeof selectorCreator => selectorCreator;
}
