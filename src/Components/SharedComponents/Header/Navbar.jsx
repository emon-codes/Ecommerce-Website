import React from "react";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <div className="border-y border-gray-200 py-2">
      <div className="flex items-center justify-between container mx-auto px-24">
        <div className="flex items-center  gap-2 text-white bgp py-2 px-6">
          <BiCategory />
          <p>All Category</p>
        </div>
        <div className="flex gap-12">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/shop">Shop now</NavLink>
          <NavLink to="/contacts">Contact</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </div>

        <div className="flex items-center  gap-2 text-white bgp py-2 px-6">
          <BiCategory />
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
