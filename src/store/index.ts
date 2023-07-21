// Utils
import { AppRootState } from "./config/types";
import { SetupRtkStore } from "./config";
// Modules
import * as cart from "@store/modules/cart";
import * as categories from "@store/modules/categories";
import * as notifications from "@store/modules/notifications";
import * as products from "@store/modules/products";

/**
 * Group redux modules for store configuration
 */
const modules = {
  products,
  cart,
  categories,
  notifications,
};

/**
 * Export store utils & redux modules
 */
export const Store = {
  ...new SetupRtkStore({
    modules,
  }),
  ...modules,
};

/**
 * Export global store state type
 */
export type StoreState = AppRootState<typeof modules>;
