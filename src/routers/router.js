import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Product from "../components/Product";
import Payment from "../components/Payment";

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
    ],
  },
]);

export default router;
