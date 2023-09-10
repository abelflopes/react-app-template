// Modules
import * as cart from "./modules/cart";
import * as categories from "./modules/categories";
import * as notifications from "./modules/notifications";
import * as products from "./modules/products";

export const Store = {
  categories: categories.store,
  cart: cart.store,
  notifications: notifications.store,
  products: products.store,
};
