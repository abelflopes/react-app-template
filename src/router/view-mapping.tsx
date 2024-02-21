/* eslint-disable react/react-in-jsx-scope -- ignored to prevent unuused import error */
import { type RouteProps } from "react-router-dom";
import { type RouteIndex } from "./routes-list";

import { CartView } from "@views/cart";
import { Error404View } from "@views/error-404";
import { HomeView } from "@views/home";
import { ProductDetailsMainView } from "@views/product-details";
import { ProductDetailsReviewView } from "@views/product-reviews";
import { ProductsView } from "@views/products";
import { RedirectView } from "./Redirect";

type ViewsMap = { [key in RouteIndex]: NonNullable<RouteProps["Component"]> };

export const viewsMap: ViewsMap = {
  home: () => <HomeView />,
  cart: () => <CartView />,
  productDetails: () => <RedirectView to="productDetailsMain" />,
  productDetailsMain: () => <ProductDetailsMainView />,
  productDetailsReviews: () => <ProductDetailsReviewView />,
  products: () => <ProductsView />,
  productsList: () => <RedirectView to="products" />,
  error: () => <Error404View />,
};

/* eslint-enable */
