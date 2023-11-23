import React from "react";
import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiUser,
  HiMenu,
} from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const SideBar = ({ sideBarMenu, setSideBarMenu }) => {
  return (
    <>
      <div
        className="absolute lg:hidden top-5 right-5 text-2xl p-1 bg-slate-300 rounded hover:text-blue-400 cursor-pointer transition-all duration-300 z-50"
        onClick={() => setSideBarMenu(!sideBarMenu)}
      >
        {sideBarMenu ? <IoMdClose /> : <HiMenu />}
      </div>
      <Sidebar
        aria-label="Sidebar with logo branding example"
        className={`${sideBarMenu ? "left-0" : "-left-72"} side__bar`}
      >
        <Sidebar.Logo
          href="#"
          img="https://w7.pngwing.com/pngs/223/244/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-rectangle-black-thumbnail.png"
          imgAlt="Flowbite logo"
          className="bg-gray-500 p-2 rounded-md "
        >
          Flowbite
        </Sidebar.Logo>
        <Sidebar.Items className="h-[90%]">
          <Sidebar.ItemGroup className="h-full flex flex-col justify-between">
            <div>
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
              <Sidebar.Item
                href="/mini_e-commerce/admin/dasboard/users"
                icon={HiUser}
              >
                Users
              </Sidebar.Item>
            </div>
            <Sidebar.Item
              href="/mini_e-commerce/logout"
              icon={HiArrowSmRight}
              className="hover:text-red-400"
            >
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </>
  );
};

export default SideBar;
