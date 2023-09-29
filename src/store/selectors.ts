import { Store } from "@store/index";
import { type Product } from "@services/fake-store-api";

export const selectItemCount = (): number => Store.cart((state) => state.data.length);

export const selectById = (id: number): Product | undefined =>
  Store.products((state) => state.data.find((i) => i.id === id));

export const selectFiltered = (query: string): Product[] =>
  Store.products((state) =>
    state.data.filter((i) => JSON.stringify(i).toLowerCase().includes(query.toLowerCase())),
  );

export const selectCart = (): { total: number; products: Product[] } =>
  Store.products((state) => {
    const cart = Store.cart.getState().data;

    const products = state.data.filter((i) => cart.includes(i.id));

    const total = Math.round(products.reduce((a, b) => a + b.price, 0) * 100) / 100;

    return {
      total,
      products,
    };
  });
