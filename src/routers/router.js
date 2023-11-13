import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import Product from "../components/Product";
import Payment from "../components/Payment";
import SuccessfulPurchase from "../components/SuccessfulPurchase";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadProduct from "../dashboard/UploadProduct";
import ManageProducts from "../dashboard/ManageProducts";
import EditProduct from "../dashboard/EditProduct";

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
  {
    path: "/mini_e-commerce/admin/dasboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/mini_e-commerce/admin/dasboard",
        element: <Dashboard />,
      },
      {
        path: "/mini_e-commerce/admin/dasboard/uploade",
        element: <UploadProduct />,
      },
      {
        path: "/mini_e-commerce/admin/dasboard/manage",
        element: <ManageProducts />,
      },
      {
        path: "/mini_e-commerce/admin/dasboard/edit_product/:id",
        element: <EditProduct />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/products/${params.id}`),
      },
    ],
  },
]);

export default router;
