/* eslint-disable react/react-in-jsx-scope -- ignored to prevent unuused import error */
// Router
import { type View } from "@router/index";
// Utils
import { ViewRedirect } from "@router/utils/ViewRedirect";
// Views
import * as Views from "./views";

export const productsList: View = {
  name: "Products List",
  options: {
    path: "/products-list",
    element: <ViewRedirect route={Views.products} />,
  },
};

export const productDetails: View = {
  name: "Product Details",
  options: {
    path: "/products/:id",
    element: <ViewRedirect route={Views.productDetailsMain} />,
  },
};
/* eslint-enable */
