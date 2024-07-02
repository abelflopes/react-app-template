/* eslint-disable react/react-in-jsx-scope -- ignored to prevent unuused import error */
import { type RouteProps } from "react-router-dom";
import { type RouteIndex } from "./routes-list";

import { CartView } from "@views/cart";
import { ErrorView } from "@views/error";
import { ProductDetailsMainView } from "@views/product-details";
import { ProductDetailsReviewView } from "@views/product-reviews";
import { ProductsView } from "@views/products";
import { RedirectView } from "./Redirect";

type ViewsMap = { [key in RouteIndex]: NonNullable<RouteProps["Component"]> };

export const viewsMap: ViewsMap = {
  home: () => <RedirectView to="products" />,
  cart: () => <CartView />,
  productDetails: () => <ProductDetailsMainView />,
  productReviews: () => <ProductDetailsReviewView />,
  products: () => <ProductsView />,
  error: () => <ErrorView />,
  notFound: () => <ErrorView error="The requested page was not found" />,
};

/* eslint-enable */
