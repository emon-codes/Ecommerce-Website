import React from "react";
import { FaSquarePhone } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

const TopHeader = () => {
  return (
    <div className="bg-[#f8f8fb] py-2 ">
      <div className="flex justify-between items-center container mx-auto px-24 ">
        <div className="flex gap-12 items-center  ct  ">
          <div className="flex items-center gap-2">
            <IoLogoWhatsapp />
            <p className="text-[12px] ct">01310258092</p>
          </div>
          <div className="flex items-center gap-2">
            <FaSquarePhone />
            <p className="text-[12px] ct">01310258092</p>
          </div>
        </div>
        <div>
          <p className="text-[12px] ct">
            world's Fastest online Shoping Destination
          </p>
        </div>
        <div className="flex items-center text-[12px] gap-5">
          <p>Help?</p>
          <p>Trac order?</p>
          <p>English</p>
          <p>Contact us</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
