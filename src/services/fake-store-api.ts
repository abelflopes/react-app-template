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

export class FakeStoreAPI {
  private static apiHost = "//fakestoreapi.com";

  public static getAllCategories = async (): Promise<Category[]> =>
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (await (await fetch(`${FakeStoreAPI.apiHost}/products/categories`)).json()) as Category[];

  public static getAllProducts = async (): Promise<Product[]> =>
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (await (await fetch(`${FakeStoreAPI.apiHost}/products`)).json()) as Product[];

  public static getAllProductsByCategory = async (category: string): Promise<Product[]> =>
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    (await (
      await fetch(`${FakeStoreAPI.apiHost}/products/category/${category}`)
    ).json()) as Product[];
}
