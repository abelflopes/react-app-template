// React
import { Link, useParams } from "react-router-dom";
import React from "react";
import { generatePath } from "react-router";
// Components
import { CartButton } from "@components/cart-button";
import { DefaultLayout } from "@layouts/Default";
import { Filters } from "@components/filters";
import { PriceTag } from "@components/price-tag";
// Store
import { Store } from "@store/index";
import { selectFiltered } from "@store/selectors/products";
// Router
import { getRoute } from "@router/utils/get-route";

export const ProductsView = (): React.ReactElement => {
  const params = useParams();

  const [filterQuery, setFilterQuery] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string | undefined>(undefined);

  const productsList = Store.useSelector(selectFiltered(filterQuery));
  const categories = Store.useSelector((state) => state.categories.data);
  const loading = Store.useSelector(
    (store) => !!store.products.loading || !!store.categories.loading
  );
  const error = Store.useSelector((state) => state.products.error || state.categories.error);

  const dispatch = Store.useDispatch();

  React.useEffect(() => {
    if (loading || categories.length || error) return;

    void dispatch(Store.categories.load());
  }, [dispatch, loading, categories.length, error]);

  React.useEffect(() => {
    if (loading || productsList.length || error) return;

    void dispatch(
      Store.products.load({
        category: selectedCategory,
      })
    );
  }, [dispatch, selectedCategory, loading, productsList.length, error]);

  return (
    <DefaultLayout>
      {!!loading && <p>Loading...</p>}

      {!!productsList.length && (
        <>
          <Filters>
            <select
              defaultValue={""}
              onChange={(e): void =>
                setSelectedCategory(e.target.value.length ? e.target.value : undefined)
              }
              value={selectedCategory}
            >
              <option disabled value={""}>
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
              onChange={(e): void => setFilterQuery(e.target.value)}
            />

            <button
              onClick={(): void => {
                setSelectedCategory("");
                setFilterQuery("");
              }}
            >
              Reset Filters
            </button>
          </Filters>

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {productsList.map((product) => (
                <tr key={product.id}>
                  <td>
                    <Link
                      to={generatePath(getRoute("productDetails"), {
                        ...params,
                        id: product.id,
                      })}
                    >
                      {product.title}
                    </Link>
                  </td>
                  <td>
                    <PriceTag value={product.price} />
                  </td>
                  <td>
                    <CartButton id={product.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </DefaultLayout>
  );
};
