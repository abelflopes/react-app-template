// Redux
import { Store } from "@store/index";
// API
import { Product } from "@services/fake-store-api";

/**
 * Return a product matching the provided id
 * @param id - product id
 * @returns - `Product | undefined`
 */
export const selectById = Store.createSelector<number, Product | undefined>(
  (id: number) =>
    (state): Product | undefined =>
      state.products.data.find((i) => i.id === id)
);

/**
 * Return products filtered by text search
 * @param query - text to search
 * @returns - `Product[]`
 */
export const selectFiltered = Store.createSelector<string, Product[]>(
  (query: string) =>
    (state): Product[] =>
      state.products.data.filter((i) =>
        JSON.stringify(i).toLowerCase().includes(query.toLowerCase())
      )
);
