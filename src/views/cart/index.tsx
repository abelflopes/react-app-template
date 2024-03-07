import React from "react";
import { Alert } from "@react-ck/alert";
import { Button } from "@react-ck/button";
import { DefaultLayout } from "@components/default-layout";
import { PriceTag } from "@components/price-tag";
import { Store } from "@store/index";
import { selectCart } from "@store/selectors";
import { CartButton } from "@components/cart-button";
import { Link, generatePath } from "react-router-dom";
import { routesList } from "@router/routes-list";
import { DataTable } from "@react-ck/data-table";

export const CartView = (): React.ReactElement => {
  const cart = selectCart();
  const loadProducts = Store.products.useLoad();
  const emptyCart = Store.cart.useReset();

  React.useEffect(() => {
    void loadProducts();
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
              emptyCart();
            }}>
            Checkout
          </Button>

          <DataTable
            skin="bordered"
            data={cart.products.map((product) => ({
              title: (
                <Link
                  to={generatePath(routesList.productDetails, {
                    id: String(product.id),
                  })}>
                  {product.title}
                </Link>
              ),
              price: <PriceTag value={product.price} />,
              action: <CartButton id={product.id} />,
            }))}
            autoHeaders
          />
        </>
      )}
    </DefaultLayout>
  );
};
