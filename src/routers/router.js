import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Product from "../components/Product";

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
    ],
  },
]);

export default router;
