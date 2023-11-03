import React, { useState, useEffect } from "react";
import ProductImg from "./ProductImg";

const ProductLeftSide = ({ currentItem }) => {
  const [getImg, setGetImg] = useState(currentItem.img[0]);

  const handleImgClick = (e) => {
    setGetImg(e.target.alt);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setGetImg(currentItem.img[0]);
  }, [currentItem]);

  return (
    <div className="flex flex-col justify-center items-center md:block md:w-1/3 ">
      <div className="max-h- max-w-[350px] bg-[--color-gray] rounded-2xl">
        <img src={getImg} alt={currentItem.title} />
      </div>

      <div className="flex md:flex-wrap mt-2 ">
        {currentItem.img.map((img, index) => (
          <ProductImg
            key={index}
            img={img}
            getImg={getImg}
            handleImgClick={handleImgClick}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductLeftSide;
