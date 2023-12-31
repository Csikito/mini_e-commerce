import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import DataContext from "../context/DataContext";
import CartItem from "./CartItem";

const Cart = ({ handleCartClick, cartModal }) => {
  const { cartItems, totalQuantities, totalPrice } = useContext(DataContext);

  const handleEmptyCart = () => {
    window.scrollTo(0, 500);
    handleCartClick();
  };

  return (
    <div
      className={`${
        cartModal ? "w-[270px] min-[450px]:w-[450px] right-0" : "-right-[800px]"
      } fixed top-0 bottom-0 overflow-y-auto h-full bg-gray-400 flex flex-col justify-between ease-in-out duration-300 z-30`}
    >
      <div className="h-auto relative ">
        <div
          className="pl-6 py-3 inline-flex cursor-pointer "
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
        <div className="w-full h-full">
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => <CartItem key={index} item={item} />)
          ) : (
            <div className="h-full text-[200px] flex justify-center items-center opacity-40 ">
              <Link to="/mini_e-commerce/">
                <BsFillCartPlusFill onClick={handleEmptyCart} />
              </Link>
            </div>
          )}
        </div>
      </div>
      <div className="m-5 mt-0 flex flex-col items-center gap-6">
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
            onClick={handleCartClick}
            className="py-1 border rounded-md border-[--color-light-blue] bg-gradient-to-t from-[--btn-color-blue] to-[--color-light-blue] hover:bg-gradient-to-b  text-white text-center w-[150px]"
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
