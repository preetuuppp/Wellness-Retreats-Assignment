import React from "react";
import { FaBars, FaRegUserCircle } from "react-icons/fa";
import logo from "../Images/logo.png";

const Header = () => {
  return (
    <header className=" bg-blue-950 text-white p-4 flex justify-between items-center">
      <div>
        <img src={logo} className="rounded-lg h-12 w-14" alt="logotitle" />
      </div>
      <h1 className="text-3xl font-semibold">Wellness Retreats</h1>
      <div className="block sm:hidden">
        <FaBars className="w-20 h-10 cursor-pointer" />
      </div>
      <div className="hidden sm:block">
        <FaRegUserCircle className="w-20 h-10" />
      </div>
    </header>
  );
};

export default Header;
