import React from "react";
import { Store } from "@store/index";
import { selectById } from "@store/selectors";
import { Button } from "react-ck";

interface CartButtonProps {
  id: number;
}

export const CartButton = ({ id }: Readonly<CartButtonProps>): React.ReactElement => {
  const product = selectById(id);

  if (!product) throw new Error("missing product to display");

  const cartItems = Store.cart.useData();
  const add = Store.cart.useAdd();
  const remove = Store.cart.useRemove();

  return (
    <>
      {!cartItems.includes(product.id) && (
        <Button
          skin="secondary"
          onClick={(): void => {
            add(product.id);
          }}>
          Add to Cart
        </Button>
      )}

      {cartItems.includes(product.id) && (
        <Button
          skin="secondary"
          onClick={(): void => {
            remove(product.id);
          }}>
          Remove from Cart
        </Button>
      )}
    </>
  );
};
