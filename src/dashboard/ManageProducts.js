import React, { useState, useContext } from "react";
import { Table } from "flowbite-react";
import DataContext from "../context/DataContext";
import ManageProductsRow from "./ManageProductsRow";
import { Pagination } from "flowbite-react";

const ManageProducts = () => {
  const { product } = useContext(DataContext);
  const [currentPage, setCurrentPage] = useState(1);
  const porstsPerPage = 10;
  const pageNumbers = Math.ceil(product.length / porstsPerPage);

  const onPageChange = (page: number) => setCurrentPage(page);

  //Get current posts/page
  const indexTo = currentPage * porstsPerPage; //(2 * 10)
  const indexFrom = indexTo - porstsPerPage; // (20 - 10)
  const currentPosts = product.slice(indexFrom, indexTo); // slice(10, 20)

  return (
    <section className="w-full p-5 lg:pr-8 ">
      <h2 className="mb-4 text-3xl font-bold">Manage Your Products!</h2>
      <Table striped>
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Quantity</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Manage</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {currentPosts.map((item, index) => (
            <ManageProductsRow key={item.id} item={item} no={index} />
          ))}
        </Table.Body>
      </Table>

      {pageNumbers > 1 ? (
        <div className="flex overflow-x-auto sm:justify-center mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={pageNumbers}
            onPageChange={onPageChange}
          />
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default ManageProducts;
