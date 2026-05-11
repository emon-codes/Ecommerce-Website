import React from "react";
import { BiCategory } from "react-icons/bi";
import { NavLink } from "react-router";
const active = ({ isActive }) => isActive ? "text-[100px]" : "";

const Test = () => {
  return (
    <div className="border-y border-gray-200 py-2">
      <div className="flex items-center justify-between container mx-auto px-24">
        <div className="flex items-center  gap-2 text-white bgp py-2 px-6">
          <BiCategory />
          <p>All Category</p>
        </div>
        <div className="flex gap-12">
          <NavLink className={active} to="/">Home</NavLink>
          <NavLink className={active} to="/">Home</NavLink>
          <NavLink className={active} to="/">Home</NavLink>
          {/* <NavLink  className={({isActive}) => isActive? `cp` : `` } to="/shop">Shop now</NavLink>
          <NavLink  className={({isActive}) => isActive? `cp` : `` } to="/contacts">Contact</NavLink>
          <NavLink  className={({isActive}) => isActive? `cp` : `` } to="/about">About</NavLink>
          <NavLink  className={({isActive}) => isActive? `cp` : `` } to="/blog">Blog</NavLink> */}
        </div>

        <div className="flex items-center  gap-2 text-white bgp py-2 px-6">
          <BiCategory />
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default Test;