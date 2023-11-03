import React from "react";
import ProductCard from "./ProductCard";

const BestSellPro = ({ product }) => {
  return (
    <section className="flex flex-col items-center mx-10 pb-10">
      <div className="text-center py-12">
        <h2 className="text-3xl xs:text-5xl">Best Seller Products</h2>
        <p>If you want to be the best, this is what you choose</p>
      </div>
      <div className="flex flex-wrap  justify-center gap-10 ">
        {product.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default BestSellPro;
