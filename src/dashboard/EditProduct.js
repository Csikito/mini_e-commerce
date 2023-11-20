import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import DataContext from "../context/DataContext";
import { IoMdCloseCircle } from "react-icons/io";

const EditProduct = () => {
  const { product, setProduct } = useContext(DataContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const editProductArray = product.filter((item) => item.id.toString() === id);

  const [proSize, setProSize] = useState("none");
  const [proImg, setProImg] = useState("");

  const [editProduct, setEditProduct] = useState(editProductArray);
  const [editTitle, setEditTitle] = useState("");
  const [editPrice, setEditPrice] = useState("");
  const [editQuantity, setEditQuantity] = useState("");
  const [editDetails, setEditDetails] = useState("");
  const [editImg, setEditImg] = useState([]);

  useEffect(() => {
    setEditTitle(editProduct[0].title);
    setEditDetails(editProduct[0].details);
    setEditPrice(editProduct[0].price);
    setEditQuantity(editProduct[0].quantity);
    setEditImg(editProduct[0].img);
  }, [editProduct]);

  // const sizes = {
  //   shoes: [
  //     "36",
  //     "37",
  //     "38",
  //     "39",
  //     "40",
  //     "41",
  //     "42",
  //     "43",
  //     "44",
  //     "45",
  //     "46",
  //     "47",
  //     "48",
  //     "49",
  //     "50",
  //   ],
  //   clothe: ["S", "M", "L", "XL", "XXL", "3XL", "4XL", "5XL"],
  //   none: [],
  // };

  // add product
  const handleEdit = (e) => {
    e.preventDefault();

    const newObj = {
      ...editProduct[0],
      title: editTitle,
      details: editDetails,
      quantity: editQuantity,
      price: editPrice,
      editImg: editImg,
    };

    const newProductsList = product.map((item) =>
      item.id === newObj.id ? newObj : item
    );

    console.log(newProductsList);
    setProduct(newProductsList);
    navigate("/mini_e-commerce/admin/dasboard/manage");
  };

  //add img
  const handlerClickImg = () => {
    const newImg = [...editImg, proImg];
    setEditImg(newImg);
    setProImg("");
  };
  // delete img
  const handleDeleteImg = (img) => {
    const newImgList = editProduct[0].img.filter((item) => item !== img);
    const newEditProductObject = [{ ...editProduct[0], img: newImgList }];
    setEditProduct(newEditProductObject);
  };

  return (
    <section className="px-4 mx-4 my-12 bg-gray-500 w-full">
      <h2 className="mb-8 text-3xl font-bold">Edit product!</h2>
      <form className="flex lg:max-w-[1180px] flex-col flex-wrap gap-4">
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
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
          </div>
        </div>

        {/* 2nd Row */}
        <div className="flex gap-8">
          {/* product size */}
          <div className="lg:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Product Size" />
            </div>
            <Select
              id="inputState"
              name="productSize"
              className="min-w-[150px] w-full rounded"
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
          <div className="lg:w-1/3">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              placeholder="Price"
              required
              type="number"
              name="price"
              className="w-full "
              value={editPrice}
              onChange={(e) => setEditPrice(e.target.value)}
            />
          </div>
          <div className="lg:w-1/3">
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
              value={editQuantity}
              onChange={(e) => setEditQuantity(e.target.value)}
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
            className="w-full "
            value={editDetails}
            onChange={(e) => setEditDetails(e.target.value)}
            rows={6}
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
          {editImg.length > 0 ? (
            editImg.map((item, index) => (
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
            <p className="text-red-400">upload img</p>
          )}
        </div>

        {/* Edit btn */}
        <Button type="text" onClick={(e) => handleEdit(e)} className="mt-5">
          Edit product
        </Button>
      </form>
    </section>
  );
};

export default EditProduct;
