import React from "react";
import { PriceTag } from "@components/price-tag";
import { selectById } from "@store/selectors";
import { Link, generatePath } from "react-router-dom";
import { routesList } from "@router/routes-list";
import styles from "./index.module.scss";
import { Image, Card, Text, Alert } from "react-ck";

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
