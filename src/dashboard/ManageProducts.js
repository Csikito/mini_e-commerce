import React, { useContext } from "react";
import { Table } from "flowbite-react";
import DataContext from "../context/DataContext";
import ManageProductsRow from "./ManageProductsRow";

const ManageProducts = () => {
  const { product } = useContext(DataContext);

  return (
    <section>
      <h2 className="mb-8 text-3xl font-bold">Manage Your Products!</h2>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Manage</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {product.map((item, index) => (
            <ManageProductsRow key={item.id} item={item} no={index} />
          ))}
        </Table.Body>
      </Table>
    </section>
  );
};

export default ManageProducts;
