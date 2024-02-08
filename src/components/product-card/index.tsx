// React
import React from "react";
// Components
import { Alert } from "@components/alert";
import { Card } from "@components/card";
import { CartButton } from "@components/cart-button";
import { PriceTag } from "@components/price-tag";
// Store
import { selectById } from "@store/selectors";

interface ProductCardProps {
  id: number;
}

export const ProductCard = ({ id }: Readonly<ProductCardProps>): React.ReactElement => {
  const product = selectById(id);

  return (
    <>
      {product === undefined && <Alert title="Unable to display product" />}

      {product !== undefined && (
        <Card
          key={product.id}
          image={product.image}
          label={product.title}
          data={{
            description: product.description,
            category: product.category,
            price: <PriceTag value={product.price} />,
          }}>
          <CartButton id={product.id} />
        </Card>
      )}
    </>
  );
};
