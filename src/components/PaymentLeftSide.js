import React, { useContext } from "react";
import CartItem from "./CartItem";
import DataContext from "../context/DataContext";

const PaymentLeftSide = () => {
  const { cartItems, totalPrice } = useContext(DataContext);

  return (
    <section className="w-full lg:w-2/3 h-max mb-10 lg:mb-0 mx-4 shadow-lg rounded-xl">
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
      <div className="w-full flex  justify-between p-5">
        <p className="font-bold">Subtotal:</p>
        <p className="text-[--color-light-blue] font-bold text-2xl">
          €{totalPrice}
        </p>
      </div>
    </section>
  );
};

export default PaymentLeftSide;
