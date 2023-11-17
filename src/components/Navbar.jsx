import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSwatchbook } from "react-icons/fa6";

const Navbar = () => {
  const location = useLocation();

  return (
    <h1 className="flex items-center gap-5 mt-3 text-blue-500">
      <Link to={"/"}>
        <FaSwatchbook className="ml-5 text-3xl" />
      </Link>
      {!(location.pathname === "/") && (
        <Link className="gap-2 text-2xl text-blue-500 font-logo w-fit" to={"/"}>
          user management dashboard
        </Link>
      )}
    </h1>
  );
};

export default Navbar;
