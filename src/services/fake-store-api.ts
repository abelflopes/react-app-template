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

const apiHost = "//fakestoreapi.com";

export const getAllCategories = async (): Promise<Category[]> =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, unicorn/no-await-expression-member
  (await (await fetch(`${apiHost}/products/categories`)).json()) as Category[];

export const getAllProducts = async (): Promise<Product[]> =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, unicorn/no-await-expression-member
  (await (await fetch(`${apiHost}/products`)).json()) as Product[];

export const getAllProductsByCategory = async (category: string): Promise<Product[]> =>
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions, unicorn/no-await-expression-member
  (await (await fetch(`${apiHost}/products/category/${category}`)).json()) as Product[];
