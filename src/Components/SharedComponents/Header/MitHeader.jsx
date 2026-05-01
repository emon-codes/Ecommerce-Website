import React from "react";
import logo from "../../../assets/image/logo.png";
import { CiUser } from "react-icons/ci";

const MitHeader = () => {
  return (
    <div className="backdrop-blur-2xl">
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

        <div>
          <div className="flex gap-2 items-center">
            <CiUser className="text-xl" />
            <div>
              <p className="ts">Account</p>
              <p className="ts">Logi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MitHeader;
