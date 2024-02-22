import { Link } from "react-router-dom";
import React, { useMemo } from "react";
import { generatePath } from "react-router";
import { Button } from "@components/button";
import { CartButton } from "@components/cart-button";
import { DefaultLayout } from "@layouts/Default";
import { Filters } from "@components/filters";
import { PriceTag } from "@components/price-tag";
import { Store } from "@store/index";
import { selectFiltered } from "@store/selectors";
import { routesList } from "@router/routes-list";

export const ProductsView = (): React.ReactElement => {
  const [filterQuery, setFilterQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | undefined>();

  const productsCount = Store.products((state) => state.data.length);
  const productsList = selectFiltered(filterQuery);
  const categories = Store.categories.useData();
  const categoriesLoading = Store.categories.useLoading();
  const productsLoading = Store.products.useLoading();
  const loadCategories = Store.categories.useLoad();
  const loadProducts = Store.products.useLoad();
  const loading = useMemo(
    () => Boolean(categoriesLoading) || Boolean(productsLoading),
    [categoriesLoading, productsLoading],
  );

  React.useEffect(() => {
    void loadCategories();
  }, [loadCategories]);

  React.useEffect(() => {
    void loadProducts({
      category: selectedCategory,
    });
  }, [loadProducts, selectedCategory]);

  return (
    <DefaultLayout>
      {productsCount > 0 && (
        <Filters>
          <select
            defaultValue=""
            value={selectedCategory}
            onChange={(e): void => {
              setSelectedCategory(e.target.value.length > 0 ? e.target.value : undefined);
            }}>
            <option value="" disabled>
              Category
            </option>
            {categories.map((i) => (
              <option key={i}>{i}</option>
            ))}
          </select>

          <input
            type="search"
            placeholder="Search"
            value={filterQuery}
            onChange={(e): void => {
              setFilterQuery(e.target.value);
            }}
          />

          <Button
            onClick={(): void => {
              setSelectedCategory("");
              setFilterQuery("");
            }}>
            Reset Filters
          </Button>
        </Filters>
      )}

      {Boolean(loading) && <p>Loading...</p>}

      {productsList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th aria-label="Actions" />
            </tr>
          </thead>
          <tbody>
            {productsList.map((product) => (
              <tr key={product.id}>
                <td>
                  <Link
                    to={generatePath(routesList.productDetails, {
                      id: String(product.id),
                    })}>
                    {product.title}
                  </Link>
                </td>
                <td aria-label="Price">
                  <PriceTag value={product.price} />
                </td>
                <td aria-label="Actions">
                  <CartButton id={product.id} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {productsCount > 0 && productsList.length === 0 && <p>No products found</p>}
    </DefaultLayout>
  );
};
