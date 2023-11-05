import React from "react";
import PaymentLeftSide from "./PaymentLeftSide";
import PaymentRightSide from "./PaymentRightSide";
import { ToastContainer } from "react-toastify";

const Payment = () => {
  return (
    <main className=" w-full flex  justify-center ">
      <div className="max-w-[1400px] flex flex-col lg:flex-row m-10">
        <PaymentLeftSide />
        <PaymentRightSide />
        <ToastContainer autoClose={2000} />
      </div>
    </main>
  );
};

export default Payment;
