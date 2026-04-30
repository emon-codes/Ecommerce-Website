import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";

const TopHeader = () => {
  return (
    <>
      <div>
        <div className="flex items-center gap-2">
          <IoLogoWhatsapp />
          <p className="text-[12px] ct">01310258092</p>
        </div>
      </div>
    </>
  );
};

export default TopHeader;
