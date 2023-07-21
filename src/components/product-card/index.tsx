// React
import React from "react";
// Components
import { Alert } from "@components/alert";
import { Card } from "@components/card";
import { CartButton } from "@components/cart-button";
import { PriceTag } from "@components/price-tag";
// Store
import { Store } from "@store/index";
import { selectById } from "@store/selectors/products";

interface ProductCardProps {
  id: number;
}

export const ProductCard = ({ id }: ProductCardProps): React.ReactElement => {
  const product = Store.useSelector(selectById(id));

  return (
    <>
      {!product && <Alert title="Unable to display product" />}

      {product && (
        <Card
          key={product.id}
          image={product.image}
          label={product.title}
          data={{
            description: product.description,
            category: product.category,
            price: <PriceTag value={product.price} />,
          }}
        >
          <CartButton id={product.id} />
        </Card>
      )}
    </>
  );
};
