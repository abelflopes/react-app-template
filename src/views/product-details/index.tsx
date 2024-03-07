import React from "react";
import { useParams } from "react-router-dom";
import { Alert } from "@react-ck/alert";
import { DefaultLayout } from "@components/default-layout";
import { ProductCard } from "@components/product-card";
import { Store } from "@store/index";

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
    </DefaultLayout>
  );
};
