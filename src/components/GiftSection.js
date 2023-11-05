import React from "react";
import { Link } from "react-router-dom";
import gift from "../assets/image/luka/gift.png";
import figure from "../assets/image/luka/figure.png";

const GiftSection = () => {
  return (
    <section className="w-full my-12 lg:my-24 xl:my-36 ">
      <div className="h-full sm:h-[350px] md:h-[450px] lg:h-[550px] bg-[--color-gift-section] rounded-[25px] flex flex-col sm:flex-row justify-between items-center mx-3 sm:mx-10 my-2 ">
        <div className=" relative w-full h-full xs:w-3/2 z-10">
          <div className="md:absolute -top-16 lg:-top-16 xl:-top-24  ">
            <img
              src={figure}
              className=" w-full md:w-[600px] lg:w-[650px] pt-4"
              alt='Air Jordan Luka 2 "Lake Bled"'
            />
          </div>
        </div>
        <div className="relative w-full h-full p-4 flex lg:p-10 sx:pt-0 ">
          <div className="hidden sm:block absolute w-[180px] md:w-[250px] lg:w-[350px] lg:top-4 lg:left-32 ">
            <img
              src={gift}
              className=" opacity-20"
              alt='Air Jordan Luka 2 "Lake Bled"'
            />
          </div>
          <div className="w-full xl:w-[450px] flex flex-col sm:ml-0 lg:ml-20 md:my-10 z-10  ">
            <h2 className="w-full xl:w-[400px] text-xl sm:text-3xl lg:text-4xl  text-white">
              Order now and get a Luka figurine as a gift!"
            </h2>
            <p className="text-md mt-4 mr-2 text-[--color-gray] sm:text-xl lg:text-2xl text-right">
              11 Nov to 10 Dec
            </p>
            <div className=" w-full flex justify-center mx-0 mt-8 md:mt-40">
              <Link
                to="product/1"
                className=" sm:w-[150px]  tracking-wider  px-4 py-2 sm:py-3 mx-5  text-2xl space rounded-[5px] bg-gradient-to-t from-[--btn-color-blue] to-[--btn-color-purple] bg-opacity-90 text-white text-center hover:scale-105 duration-300"
              >
                Buy now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftSection;
