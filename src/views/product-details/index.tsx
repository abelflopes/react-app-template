import { Link, useParams } from "react-router-dom";
import React from "react";
import { generatePath } from "react-router";
import { Alert } from "@components/alert";
import { DefaultLayout } from "@layouts/Default";
import { ProductCard } from "@components/product-card";
import { Store } from "@store/index";
import { routesList } from "@router/routes-list";

export const ProductDetailsMainView = (): React.ReactElement => {
  const params = useParams();

  const hasProducts = Store.products((state) => state.data.length > 0);
  const loadProducts = Store.products.useLoad();

  React.useEffect(() => {
    if (hasProducts) return;

    void loadProducts();
  }, [hasProducts, loadProducts]);

  return (
    <DefaultLayout>
      <h2>Product Details</h2>

      {params.id === undefined && <Alert title="Unable to get product id" />}

      {params.id !== undefined && <ProductCard id={Number(params.id)} />}

      <Link
        to={generatePath(routesList.productDetailsReviews, {
          id: params.id ?? null,
        })}>
        Reviews
      </Link>
    </DefaultLayout>
  );
};
