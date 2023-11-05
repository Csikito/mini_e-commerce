import React from "react";
import ProductCard from "./ProductCard";

const ProductsSection = ({ product, title, subtitle }) => {
  return (
    <section className="flex flex-col items-center mx-10 pb-10">
      <div className="text-center py-12">
        <h2 className="text-3xl xs:text-5xl font-semibold">{title}</h2>
        <p className="text-[--color-gray] font-semibold">{subtitle}</p>
      </div>
      <div className="flex flex-wrap  justify-center gap-10 ">
        {product.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSection;
