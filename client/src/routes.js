import { createBrowserRouter } from "react-router-dom";
import ProductDetailsPage from "./pages/product-details/product-details-page";
import HomePage from "./pages/home/home-page";

export const routes = {
  home: "/",
  productDetails: "/product-details/:productId",
};

export const router = createBrowserRouter([
  {
    path: routes.home,
    element: <HomePage />,
  },
  { path: routes.productDetails, element: <ProductDetailsPage /> },
]);
