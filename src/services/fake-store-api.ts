/* eslint-disable @typescript-eslint/consistent-type-assertions -- needed to force api types */

// FAKE STORE API
// https://fakestoreapi.com/
// https://github.com/keikaavousi/fake-store-api

const apiHost = "//fakestoreapi.com";

export type Category = string;

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export const getAllCategories = async (): Promise<Category[]> =>
  (await (await fetch(`${apiHost}/products/categories`)).json()) as Category[];

export const getAllProducts = async (): Promise<Product[]> =>
  (await (await fetch(`${apiHost}/products`)).json()) as Product[];

export const getAllProductsByCategory = async (category: string): Promise<Product[]> =>
  (await (await fetch(`${apiHost}/products/category/${category}`)).json()) as Product[];

/* eslint-enable */
