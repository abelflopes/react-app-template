// React
import { Link, useParams } from "react-router-dom";
import React from "react";
import { generatePath } from "react-router";
// Components
import { Alert } from "@components/alert";
import { DefaultLayout } from "@layouts/Default";
import { ProductCard } from "@components/product-card";
// Store
import { Store } from "@store/index";
// Router
import { getRoute } from "@router/utils/get-route";

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

      {!params.id && <Alert title="Unable to get product id" />}

      {params.id && <ProductCard id={Number(params.id)} />}

      <Link to={generatePath(getRoute("productDetailsReviews"), params)}>Reviews</Link>
    </DefaultLayout>
  );
};
