import React from "react";

const ProductImg = ({ img, getImg, handleImgClick }) => {
  const activeImg =
    getImg === img ? "bg-[--bg-color-img]" : "bg-[--color-gray]";

  return (
    <div
      className={`${activeImg} md:max-w-[70px] lg:max-w-[100px] rounded-md xs:rounded-xl sm:rounded-2xl m-2 cursor-pointer`}
      onClick={(e) => handleImgClick(e)}
    >
      <img src={img} alt={img} />
    </div>
  );
};

export default ProductImg;
