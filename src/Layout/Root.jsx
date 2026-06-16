import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/SharedComponents/Header/Header";
import Test from "../Components/SharedComponents/Header/Test";
import Try from "../Page/Home/HomeComponents/Popularproducts/Try";
import Home from "../Page/Home/Home";
import Posts from "../Components/Posts";
import PopularProducts from "../Page/Home/HomeComponents/Popularproducts/PopularProducts";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />

   
      <h2>footer</h2>
     
    </div>
  );
};

export default Root;
