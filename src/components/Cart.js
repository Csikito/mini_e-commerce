import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import DataContext from "../context/DataContext";
import CartItem from "./CartItem";
import { toast } from "react-toastify";

const Cart = ({ handleCartClick, cartModal }) => {
  const { cartItems, totalQuantities, totalPrice } = useContext(DataContext);

  const notify = () => toast("Thank you for your purchase!");

  return (
    <div
      className={`${
        cartModal ? "w-[270px] min-[450px]:w-[450px] right-0" : "-right-[800px]"
      } fixed top-0 bottom-0 overflow-y-auto h-full bg-gray-400 flex flex-col justify-between ease-in-out duration-300 z-30`}
    >
      <div>
        <div
          className="px-6 py-3 flex cursor-pointer "
          onClick={handleCartClick}
        >
          <FaLongArrowAltLeft className="text-2xl" />
          <p className="pl-4">
            Your Cart{" "}
            <span className="text-[--color-light-blue]">
              ({totalQuantities} item)
            </span>
          </p>
        </div>
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>
      </div>
      <div className="m-5 flex flex-col items-center gap-6">
        <div className="w-full flex justify-between">
          <p className="font-bold">Subtotal:</p>
          <p className="text-[--color-light-blue] font-bold text-2xl">
            €{totalPrice}
          </p>
        </div>
        {cartItems.length > 0 ? (
          <Link
            to="/mini_e-commerce/payment"
            type="text"
            onClick={notify}
            className="bg-[--color-light-blue] text-white py-1 px-10 rounded-lg"
            onClickCapture={handleCartClick}
          >
            Pay
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
