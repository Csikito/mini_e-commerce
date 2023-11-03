import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <div className="hover:scale-105 duration-300 max-w-[200px] md:max-w-[250px]">
      <Link to={`/product/${item.id}`}>
        <div className="w-full bg-[--color-gray] rounded-2xl">
          <img src={item.img[0]} alt={item.title} />
        </div>
      </Link>
      <div className="px-2 pt-2">
        <p className="font-sans">{item.title}</p>
        <span>€{item.price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
