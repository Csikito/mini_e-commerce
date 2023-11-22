import React, { useState, useContext } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import DataContext from "../context/DataContext";
import { IoMdCloseCircle } from "react-icons/io";

const UploadProduct = () => {
  const { product, setProduct } = useContext(DataContext);

  const [proSize, setProSize] = useState("none");
  const [proImg, setProImg] = useState("");
  const [allProImg, setAllProImg] = useState([]);

  const sizes = {
    shoes: [
      "36",
      "37",
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44",
      "45",
      "46",
      "47",
      "48",
      "49",
      "50",
    ],
    clothe: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
    none: [],
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const productTitle = form.productTitle.value;
    const size = form.productSize.value;
    const price = form.price.value;
    const productDetails = form.productDetails.value;

    const productSize = sizes[size];

    const productObj = {
      productTitle,
      productSize,
      price,
      productDetails,
      allProImg,
    };

    const newProductsList = [...product, productObj];

    setProduct(newProductsList);
  };
  //add img

  const handlerClickImg = () => {
    if (proImg !== "") {
      const newImg = [...allProImg, proImg];
      setAllProImg(newImg);
      setProImg("");
    } else {
      alert("Fill in the part of product image link!");
    }
  };

  // delete img
  const handleDeleteImg = (img) => {
    const newImgList = allProImg.filter((item) => item !== img);
    setAllProImg(newImgList);
  };

  return (
    <section className="px-4 mx-4 my-12 w-full ">
      <h2 className="mb-8 text-3xl font-bold">Upload A Product!</h2>
      <form
        className="flex lg:max-w-[1180px] flex-col flex-wrap gap-4 bg-slate-200 p-5 rounded mr-6 md:mr-0"
        onSubmit={handleSubmit}
      >
        {/* first row */}
        <div className="flex gap-8">
          {/* product name */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="productTitle" value="Product Title" />
            </div>
            <TextInput
              id="productTitle"
              placeholder="Product Name"
              required
              type="text"
              name="productTitle"
              className="w-full"
            />
          </div>
        </div>

        {/* 2nd Row */}
        <div className="sm:flex gap-8">
          {/* product size */}
          <div className="w-full sm:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Product Size" />
            </div>
            <Select
              id="inputState"
              name="productSize"
              className="w-full rounded"
              value={proSize}
              onChange={(e) => setProSize(e.target.value)}
            >
              <option value="none" title="No size">
                None of them
              </option>
              <option value="shoes" title="Size from 36 to 50">
                Shoes
              </option>
              <option value="clothe" title="Size from S to 5XL">
                Clothe
              </option>
            </Select>
          </div>

          {/* price */}
          <div className="w-full sm:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              placeholder="Price"
              required
              type="number"
              name="price"
              className="w-full"
            />
          </div>
          <div className="w-full sm:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="quantity" value="Quantity" />
            </div>
            <TextInput
              id="quantity"
              placeholder="Quantity"
              required
              type="number"
              name="quantity"
              className="w-full"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="productDetails" value="Product Details" />
          </div>
          <Textarea
            id="productDetails"
            placeholder="Product Details"
            required
            type="text"
            name="productDetails"
            className="w-full"
            rows={4}
          />
        </div>

        {/* product img url */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="productImgUrl" value="Product Img Link" />
          </div>
          <TextInput
            id="productImgUrl"
            placeholder="Paste Product Img URL here"
            type="text"
            name="productImgUrl"
            className="w-full"
            value={proImg}
            onChange={(e) => setProImg(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2">
          <span
            className=" w-10 h-10 text-center bg-white rounded-full text-4xl text-green-600 hover:text-green-400 cursor-pointer"
            onClick={handlerClickImg}
          >
            +
          </span>
          {allProImg.length > 0 ? (
            allProImg.map((item, index) => (
              <div key={index} className="relative group  ">
                <img
                  src={item}
                  alt={item}
                  className="w-10 bg-white rounded-lg group-hover:opacity-50 group-hover:transition group-hover:duration-300 "
                />
                <IoMdCloseCircle
                  className="absolute opacity-0  group-hover:opacity-100 text-red-500 cursor-pointer text-4xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:transition group-hover:duration-300"
                  onClick={() => handleDeleteImg(item)}
                />
              </div>
            ))
          ) : (
            <p className="text-red-400">Upload image</p>
          )}
        </div>

        {/* Submit btn */}
        <Button type="submit" className="mt-5">
          Upload product
        </Button>
      </form>
    </section>
  );
};

export default UploadProduct;
