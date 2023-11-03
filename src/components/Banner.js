import React from "react";
import { Link } from "react-router-dom";
import sneaker_pur_3 from "../assets/image/products/sneaker/sneaker_pur_3.png";

const Banner = () => {
  return (
    <section className="w-full ">
      <div className="relative max-h-[410px] bg-banner-img bg-cover bg-[center_center] rounded-[25px] flex flex-col-reverse xs:flex-row justify-between items-center mx-3 sm:mx-10 my-2 ">
        <div className="absolute w-full h-full bg-black bg-opacity-80 rounded-[25px]"></div>
        <div className="xs:w-3/2 z-10">
          <img
            src={sneaker_pur_3}
            className="transform -scale-x-100 xs:rotate-[8deg] md:w-[90%] lg:w-[650px]"
            alt='Air Jordan Luka 2 "Lake Bled"'
          />
        </div>
        <div className="w-full sm:w-1/2 px-2 flex 2xl:justify-end lg:p-10 xl:ml-10 pt-10  sx:pt-0 z-10">
          <div className="sm:w-[300px] lg:w-[380px] flex flex-col sm:items-center  ">
            <h2 className="text-xl sm:text-3xl lg:text-5xl text-white ">
              Air Jordan Luka 2 "Lake Bled"
            </h2>
            <Link
              to="/product/1"
              className="xs:w-[100px] sm:w-[150px]  tracking-wider sm:py-2 mx-5 xs:mx-0 mt-5 sm:mt-10 text-2xl space rounded-[5px] bg-gradient-to-t from-[--btn-color-blue] to-[--btn-color-purple] bg-opacity-90 text-white text-center hover:scale-105 duration-300"
            >
              Buy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
