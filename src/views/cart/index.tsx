// React
import React from "react";
// Components
import { Alert } from "@components/alert";
import { Button } from "@components/button";
import { DefaultLayout } from "@layouts/Default";
import { PriceTag } from "@components/price-tag";
import { ProductCard } from "@components/product-card";
// Store
import { Store } from "@store/index";
import { selectCart } from "@store/selectors";

export const CartView = (): React.ReactElement => {
  const cart = selectCart();
  const loadProducts = Store.products.useLoad();
  const emptyCart = Store.cart.useReset();

  React.useEffect(() => {
    loadProducts();
  }, [loadProducts]);

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

          <Button
            onClick={(): void => {
              alert("Done!");
              emptyCart();
            }}
          >
            Checkout
          </Button>

          {cart.products.map(({ id }) => (
            <ProductCard key={id} id={id} />
          ))}
        </>
      )}
    </DefaultLayout>
  );
};
