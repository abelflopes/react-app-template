import React from "react";
import { Alert } from "@react-ck/alert";
import { Card, CardImage } from "@react-ck/card";
import { CartButton } from "@components/cart-button";
import { PriceTag } from "@components/price-tag";
import { selectById } from "@store/selectors";
import { Divider } from "@react-ck/divider";
import { Link, generatePath } from "react-router-dom";
import { routesList } from "@router/routes-list";

interface ProductCardProps {
  id: number;
}

export const ProductCard = ({ id }: Readonly<ProductCardProps>): React.ReactElement => {
  const product = selectById(id);

  return (
    <>
      {product === undefined && <Alert title="Unable to display product" />}

      {product !== undefined && (
        <Card key={product.id}>
          <CardImage src={product.image} />
          <p>{product.title}</p>
          <PriceTag value={product.price} />
          <p>{product.category}</p>

          <Divider />
          <p>{product.description}</p>

          <Link
            to={generatePath(routesList.productDetailsReviews, {
              id: String(id),
            })}>
            Reviews
          </Link>

          <CartButton id={product.id} />
        </Card>
      )}
    </>
  );
};
