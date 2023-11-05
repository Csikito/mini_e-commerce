import React, { useContext } from "react";
import Banner from "./Banner";
import ProductsSection from "./ProductsSection";
import GiftSection from "./GiftSection";
import DataContext from "../context/DataContext";

const Home = () => {
  const { product } = useContext(DataContext);

  return (
    <main className="flex justify-center">
      <div className="max-w-[1400px]">
        <Banner />
        <ProductsSection
          product={product}
          title="Premium Products"
          subtitle="Excellent premium products"
        />
        <GiftSection />
      </div>
    </main>
  );
};

export default Home;
