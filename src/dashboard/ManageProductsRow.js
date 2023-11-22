import React, { useContext } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import DataContext from "../context/DataContext";

const ManageProductsRow = ({ item, no }) => {
  const { product, setProduct } = useContext(DataContext);

  const handleDeleteProduct = (id) => {
    const newProductList = product.filter((item) => item.id !== id);
    setProduct(newProductList);
    console.log(newProductList);
  };

  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{no + 1 < 10 ? `0${no + 1}` : no + 1}</Table.Cell>
      <Table.Cell>
        <img src={`${item.img[0]}`} alt="item" className="w-[40px] " />
      </Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.title.length < 35 ? item.title : `${item.title.slice(0, 35)}...`}
      </Table.Cell>
      <Table.Cell>852</Table.Cell>
      <Table.Cell>€{item.price}</Table.Cell>
      <Table.Cell className=" ">
        <Link
          to={`/mini_e-commerce/admin/dasboard/edit_product/${item.id}`}
          className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
        >
          Edit
        </Link>
        <div
          className="font-medium cursor-pointer text-red-600 hover:underline dark:text-red-500"
          onClick={() => handleDeleteProduct(item.id)}
        >
          Delete
        </div>
      </Table.Cell>
    </Table.Row>
  );
};

export default ManageProductsRow;
