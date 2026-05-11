import React from "react";

import bgimage from "../../../assets/image/watchBg.png";

const Hero = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgimage}` }}
        className="bg-cover h-[70vh] my-10 container px-24 mx-auto"
      >
        <div className=" flex flex-col justify-center  h-full items-start gap-3 ">
          <h3 className="cp text-2xl font-semibold">
             70% off This Eid
          </h3>
          <h1 className="text-5xl font-semibold ">Bigest sale for <br /> man & woman</h1>
          <button className="btn bgp" >Shop now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
