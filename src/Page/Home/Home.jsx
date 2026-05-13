import React from "react";
import Hero from "./HomeComponents/Hero";
import HomeCetagory from "./HomeComponents/HomeCetagory";
import PopularProducts from "./HomeComponents/Popularproducts/PopularProducts";

const Home = () => {
  return <div>
    <Hero />
    <HomeCetagory />
  <PopularProducts/>
  </div>;
};

export default Home;
