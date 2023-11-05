import React, { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const ProductCard = ({ item }) => {
  const { setSize } = useContext(DataContext);
  const itemSize = item.size ? item.size[0] : "";

  return (
    <div className="hover:scale-105 duration-300 max-w-[200px] md:max-w-[250px]">
      <Link to={`/mini_e-commerce/product/${item.id}`}>
        <div
          className="w-full bg-[--color-gray] rounded-2xl"
          onClick={() => setSize(itemSize)}
        >
          <img src={item.img[0]} alt={item.title} />
        </div>
      </Link>
      <div className="px-2 pt-2">
        <p className="font-sans">{item.title}</p>
        <span className="text-[--color-light-blue] font-semibold">
          €{item.price}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
