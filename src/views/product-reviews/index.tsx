import { Link, useParams } from "react-router-dom";
import React from "react";
import { generatePath } from "react-router";
import { routesList } from "@router/routes-list";
import { Card } from "@react-ck/card";
import { DefaultLayout } from "@components/default-layout";
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
      <h2>Product Reviews</h2>

      {product !== undefined && (
        <Card>
          {product.title}
          Rating: {product.rating.rate} ({product.rating.count} reviews)
        </Card>
      )}

      <Link
        to={generatePath(routesList.productDetailsMain, {
          id: params.id ?? null,
        })}>
        Details
      </Link>
    </DefaultLayout>
  );
};
