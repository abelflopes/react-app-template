import React from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import { DefaultLayout } from "@components/default-layout";
import { Store } from "@store/index";
import { selectById } from "@store/selectors";
import { PriceTag } from "@components/price-tag";
import { routesList } from "@router/routes-list";
import { CartButton } from "@components/cart-button";
import { Grid, Text, Alert, Image } from "react-ck";
import styles from "./index.module.scss";

export const ProductDetailsMainView = (): React.ReactElement => {
  const params = useParams();

  const hasProducts = Store.products((state) => state.data.length > 0);
  const loadProducts = Store.products.useLoad();

  const product = selectById(Number(params.id));

  React.useEffect(() => {
    if (hasProducts) return;

    void loadProducts();
  }, [hasProducts, loadProducts]);

  return (
    <DefaultLayout>
      {params.id === undefined && <Alert title="Unable to get product id" />}

      {product ? (
        <Grid>
          <Grid.Column size={4}>
            <Image src={product.image} alt={product.title} />
          </Grid.Column>
          <Grid.Column size={8}>
            <Text variation="h1">{product.title}</Text>

            <Text>{product.description}</Text>

            <Text
              skin="link"
              as={
                <Link
                  to={generatePath(routesList.productReviews, {
                    id: String(product.id),
                  })}>
                  Reviews
                </Link>
              }
            />

            <div className={styles.footer}>
              <PriceTag value={product.price} />
              <CartButton id={product.id} />
            </div>
          </Grid.Column>
        </Grid>
      ) : null}
    </DefaultLayout>
  );
};
