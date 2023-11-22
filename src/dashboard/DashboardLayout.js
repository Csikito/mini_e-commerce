import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

const DashboardLayout = () => {
  const [sideBarMenu, setSideBarMenu] = useState(false);

  return (
    <div className="relative flex gap-5 flex-col md:flex-row">
      <SideBar sideBarMenu={sideBarMenu} setSideBarMenu={setSideBarMenu} />
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
