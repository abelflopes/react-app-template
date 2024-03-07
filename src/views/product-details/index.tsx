import React from "react";
import { Link, generatePath, useParams } from "react-router-dom";
import { Alert } from "@react-ck/alert";
import { DefaultLayout } from "@components/default-layout";
import { Store } from "@store/index";
import { selectById } from "@store/selectors";
import { Image } from "@react-ck/provisional";
import { PriceTag } from "@components/price-tag";
import { routesList } from "@router/routes-list";
import { CartButton } from "@components/cart-button";
import { GridColumn, GridContainer } from "@react-ck/grid";
import { Text } from "@react-ck/text";
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
        <GridContainer>
          <GridColumn size={4}>
            <Image src={product.image} alt={product.title} />
          </GridColumn>
          <GridColumn size={8}>
            <Text type="h1">{product.title}</Text>

            <Text>{product.description}</Text>

            <Text
              variation="link"
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
          </GridColumn>
        </GridContainer>
      ) : null}
    </DefaultLayout>
  );
};
