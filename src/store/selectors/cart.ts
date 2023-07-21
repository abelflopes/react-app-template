// Redux
import { StateProps } from "@store/modules/products";
import { Store } from "@store/index";

export const selectCart = Store.createSelector(
  () =>
    (state): { total: number; products: StateProps["data"] } => {
      const products = state.products.data.filter((i) => state.cart.data.includes(i.id));

      const total = products.reduce((a, b) => a + b.price, 0);

      return {
        total,
        products,
      };
    }
);
