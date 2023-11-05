import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Product from "../components/Product";
import Payment from "../components/Payment";
import SuccessfulPurchase from "../components/SuccessfulPurchase";

const router = createBrowserRouter([
  {
    path: "/mini_e-commerce",
    element: <App />,
    children: [
      {
        path: "/mini_e-commerce",
        element: <Home />,
      },
      {
        path: "/mini_e-commerce/product/:id",
        element: <Product />,
      },
      {
        path: "/mini_e-commerce/payment",
        element: <Payment />,
      },
      {
        path: "/mini_e-commerce/successful_purchase",
        element: <SuccessfulPurchase />,
      },
    ],
  },
]);

export default router;
