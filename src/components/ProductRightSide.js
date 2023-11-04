import React, { useContext } from "react";
import DataContext from "../context/DataContext";

const ProductRightSide = ({ currentItem }) => {
  const { qua, handleIncrement, handleDecrement, handleIncrementItem } =
    useContext(DataContext);

  return (
    <div className="md:w-2/3 sm:pl-10">
      <div className="text-2xl text-[--color-light-blue]">
        {currentItem.title}
      </div>
      <div className="pt-2">
        <p className="font-bold">Details:</p>
        <p>
          The “Lake Bled” iteration comes in a polar, bright crimson, psychic
          blue, diffused blue, university blue and blue tint color scheme. The
          shoe’s upper is constructed with engineered mesh and leather with TPU
          reinforcements for added support. The dominant blue shade is seen
          throughout the shoe, intermixing with hints of crimson accents seen on
          the laces, Luka-branded tongues, Jumpman logo and insoles. The shoe’s
          sustainability element is indicated with the Nike pinwheel logo and
          comes with Formula 23 foam and Cushlon 3.0 on the medial side for
          added comfort. This pair sits atop a white midsole and blue outsole to
          round out the design.
        </p>
      </div>
      <div className="flex max-[400px]:flex-col flex-row pt-6 gap-5">
        <div className="w-1/2">
          <p className="text-2xl text-[--color-light-blue]">
            €{currentItem.price}
          </p>
          <div className="flex pt-4">
            <p className="font-bold">Quantity:</p>
            <div className="flex border-2 border-black ml-2 select-none">
              <p
                className="px-3 cursor-pointer hover:bg-[--color-light-blue] hover:text-white "
                onClick={handleDecrement}
              >
                -
              </p>
              <p className="w-[50px] text-center border-x-2 border-black">
                {qua}
              </p>
              <p
                className="px-3 cursor-pointer hover:bg-[--color-light-blue] hover:text-white "
                onClick={handleIncrement}
              >
                +
              </p>
            </div>
          </div>
        </div>
        <div className="min-[401px]:w-1/2 flex max-[400px]:flex-row flex-col items-end  sm:items-start md:pl-4  gap-2">
          <button
            onClick={() => handleIncrementItem(currentItem, qua)}
            className="py-1 border-2 border-[--color-light-blue] text-[--color-light-blue] w-[100px] "
          >
            Add to cart
          </button>
          <button className="py-1 border-2 border-[--color-light-blue] bg-[--color-light-blue] text-white w-[100px]">
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductRightSide;
