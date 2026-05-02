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
        <div>
          <label class="input">
            <svg
              class="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input type="search" required placeholder="Search" />
          </label>
        </div>

        {/*  icon  */} 
        



        <div className="flex items-center gap-6 " >
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
