import React, { useState } from "react";
import { Table } from "flowbite-react";
import { Pagination } from "flowbite-react";
import UsersRow from "./UsersRow";

const Users = () => {
  const data = [
    {
      id: 1,

      name: "John",
      email: "john@example.com",
      password: "asdasdasd",
      bought_products: 42,
    },
    {
      id: 2,
      name: "Kevin",
      email: "kevin@example.com",
      password: "123456",
      bought_products: 23,
    },
    {
      id: 3,
      name: "Tommi",
      email: "tommi@example.com",
      password: "&@#ŁŁ$",
      bought_products: 31,
    },
  ];
  const [users, setUsers] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);

  const porstsPerPage = 10;
  const pageNumbers = Math.ceil(users.length / porstsPerPage);
  const onPageChange = (page: number) => setCurrentPage(page);

  //Get current posts/page
  const indexTo = currentPage * porstsPerPage; //(2 * 10)
  const indexFrom = indexTo - porstsPerPage; // (20 - 10)
  const currentPosts = users.slice(indexFrom, indexTo); // slice(10, 20)

  const handleDeleteUser = (id) => {
    const newProductList = users.filter((item) => item.id !== id);
    setUsers(newProductList);
  };

  return (
    <section className="w-full p-5 lg:pr-8 overflow-x-auto">
      <h2 className="mb-4 text-3xl font-bold">All Users!</h2>
      <div className="overflow-x-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Name</Table.HeadCell>
            <Table.HeadCell>E-mail</Table.HeadCell>
            <Table.HeadCell>Password</Table.HeadCell>
            <Table.HeadCell>Bought Products</Table.HeadCell>
            <Table.HeadCell>Manage</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {currentPosts.map((item, index) => (
              <UsersRow
                key={item.id}
                item={item}
                no={index}
                handleDeleteUser={handleDeleteUser}
              />
            ))}
          </Table.Body>
        </Table>
      </div>

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

export default Users;
