// React
import React from "react";
// Store
import { Store } from "@store/index";
import { selectById } from "@store/selectors/products";
// Components
import { Button } from "@components/button";

interface CartButtonProps {
  id: number;
}

export const CartButton = ({ id }: CartButtonProps): React.ReactElement => {
  const product = Store.useSelector(selectById(id));

  if (!product) throw new Error("missing product to display");

  const cartItems = Store.useSelector((store) => store.cart.data);

  const dispatch = Store.useDispatch();

  return (
    <>
      {!cartItems.includes(product.id) && (
        <Button onClick={(): void => void dispatch(Store.cart.add(product.id, dispatch))}>
          Add to Cart
        </Button>
      )}

      {cartItems.includes(product.id) && (
        <Button onClick={(): void => void dispatch(Store.cart.remove(product.id, dispatch))}>
          Remove from Cart
        </Button>
      )}
    </>
  );
};
