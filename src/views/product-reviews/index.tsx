// React
import { Link, useParams } from "react-router-dom";
import React from "react";
import { generatePath } from "react-router";
// Router
import { getRoute } from "@router/utils/get-route";
// Components
import { Card } from "@components/card";
import { DefaultLayout } from "@layouts/Default";
// Store
import { Store } from "@store/index";
import { selectById } from "@store/selectors";

export const ProductDetailsReviewView = (): React.ReactElement => {
  const params = useParams();

  if (!params.id) throw new Error("missing id");

  const product = selectById(Number(params.id));
  const load = Store.products.useLoad();

  React.useEffect(() => {
    void load();
  }, [load]);

  return (
    <DefaultLayout>
      <h2>Product Details</h2>

      {product !== undefined && (
        <Card
          label={product.title}
          data={{
            rating: product.rating.rate,
            count: product.rating.count,
          }}
        />
      )}

      <Link to={generatePath(getRoute("productDetailsMain"), params)}>Details</Link>
    </DefaultLayout>
  );
};
