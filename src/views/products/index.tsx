// React
import { Link, useParams } from "react-router-dom";
import React from "react";
import { generatePath } from "react-router";
// Components
import { Button } from "@components/button";
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

  const productsCount = Store.useSelector((store) => store.products.data.length);
  const productsList = Store.useSelector(selectFiltered(filterQuery));
  const categories = Store.useSelector((state) => state.categories.data);
  const loading = Store.useSelector(
    (store) => !!store.products.loading || !!store.categories.loading
  );

  const dispatch = Store.useDispatch();

  React.useEffect(() => {
    void dispatch(Store.categories.load());
  }, [dispatch]);

  React.useEffect(() => {
    void dispatch(
      Store.products.load({
        category: selectedCategory,
      })
    );
  }, [dispatch, selectedCategory]);

  return (
    <DefaultLayout>
      {productsCount && (
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

          <Button
            onClick={(): void => {
              setSelectedCategory("");
              setFilterQuery("");
            }}
          >
            Reset Filters
          </Button>
        </Filters>
      )}

      {!!loading && <p>Loading...</p>}

      {!!productsList.length && (
        <>
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

      {productsCount > 0 && !productsList.length && <p>No products found</p>}
    </DefaultLayout>
  );
};
