import React, { useContext } from "react";

import DataContext from "../context/DataContext";
import { GrFormClose } from "react-icons/gr";

const CartItem = ({ item }) => {
  const { handleCartItemQuyantity, handleDeleteItem } = useContext(DataContext);

  return (
    <div className=" flex flex-col min-[450px]:flex-row justify-start border-b pb-5 m-5">
      <div className=" max-w-[130px] bg-[--color-gray] rounded-2xl">
        <img src={item?.img[0]} alt={item?.title} />
      </div>
      <div className="w-full flex flex-col justify-between items-start min-[440px]:pl-5 pt-4 min-[440px]:pt-0">
        <div className="w-full flex flex-col min-[450px]:flex-row justify-between">
          <p className="w-2/3 text-md text-[--color-light-blue]">
            {item?.title}
          </p>
          <p className="full text-xl py-2 min-[450px]:py-0 text-[--color-light-blue]">
            €{item?.price}
          </p>
        </div>
        <div className="w-full flex justify-between">
          <div className="flex">
            <p className="font-bold">Quantity:</p>
            <div className="flex border-2 border-black ml-2 select-none text-xs">
              <p
                className="px-2 sm:px-4 flex justify-center items-center cursor-pointer hover:bg-[--color-light-blue] hover:text-white  font-bold"
                onClick={() => handleCartItemQuyantity(item?.id, "dec")}
              >
                -
              </p>
              <p className="px-2 sm:px-4 flex justify-center items-center border-x-2 border-black text-xs font-bold">
                {item.quantity}
              </p>
              <p
                className="px-2 sm:px-4 flex justify-center items-center cursor-pointer hover:bg-[--color-light-blue] hover:text-white text-xs font-bold"
                onClick={() => handleCartItemQuyantity(item?.id, "inc")}
              >
                +
              </p>
            </div>
          </div>
          <p>
            <GrFormClose
              className="text-2xl cursor-pointer"
              onClick={() => handleDeleteItem(item)}
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
