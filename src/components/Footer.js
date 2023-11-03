import React from "react";
import { BsFacebook } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center py-5 text-base">
      <p>2023 © Luka Shop All Rights Reserved</p>
      <div className="flex justify-center items-center gap-6 pt-3">
        <Link to="#">
          <MdEmail className="text-[30px] xs:text-[45px] hover:text-[--color-light-blue]" />
        </Link>
        <Link to="#">
          <FaSquareXTwitter className="text-[25px] xs:text-[36px] hover:text-[--color-light-blue]" />
        </Link>
        <Link to="#">
          <PiInstagramLogoFill className="text-[30px] xs:text-[40px] hover:text-[--color-light-blue]" />
        </Link>
        <Link to="#">
          <BsFacebook className="text-[25px] xs:text-[36px] hover:text-[--color-light-blue]" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
