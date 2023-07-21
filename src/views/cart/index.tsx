// React
import React from "react";
// Components
import { Alert } from "@components/alert";
import { DefaultLayout } from "@layouts/Default";
import { PriceTag } from "@components/price-tag";
import { ProductCard } from "@components/product-card";
// Store
import { Store } from "@store/index";
import { selectCart } from "@store/selectors/cart";

export const CartView = (): React.ReactElement => {
  const cart = Store.useSelector(selectCart());

  const dispatch = Store.useDispatch();

  React.useEffect(() => {
    void dispatch(Store.products.load());
  }, [dispatch]);

  return (
    <DefaultLayout>
      {cart.products.length === 0 && (
        <Alert title="No items in the cart!">
          Make sure you know how these changes affect you.
        </Alert>
      )}

      {cart.products.length > 0 && (
        <>
          <h3>
            Total: <PriceTag value={cart.total} />
          </h3>

          <button
            onClick={(): void => {
              alert("Done!");
              void dispatch(Store.cart.reset());
            }}
          >
            Checkout
          </button>

          {cart.products.map(({ id }) => (
            <ProductCard key={id} id={id} />
          ))}
        </>
      )}
    </DefaultLayout>
  );
};
