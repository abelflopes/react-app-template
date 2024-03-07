import React from "react";
import { Alert } from "@react-ck/alert";
import { Card, CardImage } from "@react-ck/card";
import { CartButton } from "@components/cart-button";
import { PriceTag } from "@components/price-tag";
import { selectById } from "@store/selectors";
import { Divider } from "@react-ck/divider";
import { Link, generatePath } from "react-router-dom";
import { routesList } from "@router/routes-list";
import { Image } from "@react-ck/provisional";
import styles from "./index.module.scss";
import { Text } from "@react-ck/text";

interface ProductCardProps {
  id: number;
}

export const ProductCard = ({ id }: Readonly<ProductCardProps>): React.ReactElement => {
  const product = selectById(id);

  return (
    <>
      {product === undefined && <Alert title="Unable to display product" />}

      {product !== undefined && (
        <Card key={product.id} skin="ghost">
          <Image className={styles.image} src={product.image} alt={product.title} />

          <PriceTag className={styles.price} value={product.price} />

          <Text
            variation={["bold", "link"]}
            as={
              <Link
                className={styles.link}
                to={generatePath(routesList.productDetails, {
                  id: String(id),
                })}
              />
            }>
            {product.title}
          </Text>
        </Card>
      )}
    </>
  );
};
