import React from "react";
import { Table } from "flowbite-react";

const UsersRow = ({ item, no, handleDeleteUser }) => {
  return (
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{no + 1 < 10 ? `0${no + 1}` : no + 1}</Table.Cell>
      <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
        {item.name}
      </Table.Cell>
      <Table.Cell>{item.email}</Table.Cell>
      <Table.Cell>{item.password}</Table.Cell>
      <Table.Cell>{item.bought_products}</Table.Cell>
      <Table.Cell
        className="font-medium cursor-pointer text-red-600 hover:underline dark:text-red-500"
        onClick={() => handleDeleteUser(item.id)}
      >
        Delete
      </Table.Cell>
    </Table.Row>
  );
};

export default UsersRow;
