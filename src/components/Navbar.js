import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/luka_logo.png";
import { BiSolidCart } from "react-icons/bi";
import Cart from "./Cart";
import DataContext from "../context/DataContext";

const Navbar = () => {
  const { totalQuantities } = useContext(DataContext);
  const [cartModal, setCartModal] = useState(false);

  const handleCartClick = () => {
    setCartModal(!cartModal);
    document.body.classList = cartModal ? "" : "overflow-hidden";
  };

  return (
    <header className="bg-white flex justify-center pr-3">
      <div className="relative max-w-[1400px] w-full flex justify-between items-center">
        <div
          className={`${
            cartModal
              ? "top-0 bottom-0 left-0 right-0 w-full h-full bg-black opacity-70 z-20"
              : ""
          } fixed ease-in-out duration-300`}
        ></div>
        <Cart handleCartClick={handleCartClick} cartModal={cartModal} />
        <div className="max-w-[200px]">
          <Link to="/mini_e-commerce">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <nav className="relative">
          <BiSolidCart
            className="text-black text-3xl cursor-pointer"
            onClick={handleCartClick}
          />
          <span
            className={`${
              totalQuantities > 0 ? "bg-red-500" : ""
            } absolute top-0 right-0 block w-3 h-3 rounded-full text-white text-[8px] text-center`}
          >
            {totalQuantities > 0 ? totalQuantities : ""}
          </span>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
