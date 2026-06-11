import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/SharedComponents/Header/Header";
import Test from "../Components/SharedComponents/Header/Test";
import Try from "../Page/Home/HomeComponents/Popularproducts/Try";
import Products from "../Page/Home/HomeComponents/Popularproducts/Products";
import Home from "../Page/Home/Home";
import Posts from "../Components/Posts";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Products />
      <Posts/>
      <h2>footer</h2>
     
    </div>
  );
};

export default Root;
