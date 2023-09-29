/* eslint-disable react/react-in-jsx-scope */
import { CartView } from "@views/cart";
import { Error404View } from "@views/error-404";
import { HomeView } from "@views/home";
import { ProductDetailsMainView } from "@views/product-details";
import { ProductDetailsReviewView } from "@views/product-reviews";
import { ProductsView } from "@views/products";
import type { View } from "@router/index";

export const home: View = {
  name: "Home",
  options: {
    path: "/",
    element: <HomeView />,
  },
};

export const cart: View = {
  name: "Cart",
  options: {
    path: "/cart",
    element: <CartView />,
  },
};

export const productDetailsMain: View = {
  name: "Product Details Index",
  options: {
    path: "/products/:id/details",
    element: <ProductDetailsMainView />,
  },
};

export const productDetailsReviews: View = {
  name: "Product Details Reviews",
  options: {
    path: "/products/:id/reviews",
    element: <ProductDetailsReviewView />,
  },
};

export const products: View = {
  name: "Products",
  options: {
    path: "/products",
    element: <ProductsView />,
    errorElement: <p>Error</p>,
  },
};

export const error404: View = {
  name: "Error",
  options: {
    path: "*",
    element: <Error404View />,
  },
};
