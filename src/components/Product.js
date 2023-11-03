import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import BestSellPro from "./BestSellPro";
import ProductLeftSide from "./ProductLeftSide";
import ProductRightSide from "./ProductRightSide";
import DataContext from "../context/DataContext";
import { ToastContainer } from "react-toastify";

const Product = () => {
  const { id } = useParams();
  const { product } = useContext(DataContext);
  const currentItem = product.find((item) => item.id.toString() === id);
  const bestSellerProduct = product
    .sort((a, b) => {
      return b.soldProduct - a.soldProduct;
    })
    .slice(0, 4);

  return (
    <main className="flex flex-col items-center">
      <section className="w-full flex flex-col md:flex-row py-8 px-10 sm:px-20 max-w-[1400px]">
        <ProductLeftSide currentItem={currentItem} />
        <ProductRightSide currentItem={currentItem} />
      </section>
      <BestSellPro product={bestSellerProduct} />
      <div>
        <ToastContainer autoClose={2000} />
      </div>
    </main>
  );
};

export default Product;
