import React from "react";
import logo from "../../../assets/image/logo.png";
import { CiShoppingCart, CiUser } from "react-icons/ci";

const MitHeader = () => {
  return (
    <div className=" py-2 ">
      <div className="flex justify-between items-center container mx-auto px-24">
        <div>
          <img className="w-24 " src={logo} alt="" />
        </div>
        <div className="w-92">
  <div className="flex items-center bg-white border border-gray-300 rounded-full px-3 py-1.5 focus-within:border-green-500 transition">

    {/* icon */}
    <svg
      className="h-4 w-4 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>

    {/* input */}
    <input
      type="search"
      placeholder="Search..."
      className="ml-2 w-full text-sm outline-none border-none bg-transparent"
    />
  </div>
</div>

        {/*  icon  */}

        <div className="flex items-center gap-6 ">
          {/* user icon  */}

          <div className="flex gap-1 items-center">
            <CiUser className="text-3xl" />
            <div>
              <p className="ct text-xs">Account</p>
              <p className="ts">Logi</p>
            </div>
          </div>
          {/* cart icon  */}
          <div className="flex gap-1 items-center">
            <CiShoppingCart className="text-3xl" />
            <div>
              <div>
                <p className="ct text-xs">Cart</p>
                <p className="ts">Logi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitHeader;
