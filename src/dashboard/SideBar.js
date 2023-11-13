import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiUser,
} from "react-icons/hi";

const SideBar = () => {
  return (
    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo
        href="#"
        img="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black-thumbnail.png"
        imgAlt="Flowbite logo"
      >
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/mini_e-commerce/admin/dasboard"
            icon={HiChartPie}
          >
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/mini_e-commerce/admin/dasboard/uploade"
            icon={HiOutlineCloudUpload}
          >
            Upload Product
          </Sidebar.Item>
          <Sidebar.Item
            href="/mini_e-commerce/admin/dasboard/manage"
            icon={HiShoppingBag}
          >
            Manage Products
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Products
          </Sidebar.Item>
          <Sidebar.Item href="/mini_e-commerce/logout" icon={HiArrowSmRight}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
