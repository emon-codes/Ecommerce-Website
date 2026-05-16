import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/SharedComponents/Header/Header";
import Test from "../Components/SharedComponents/Header/Test";
import Try from "../Page/Home/HomeComponents/Popularproducts/Try";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      
      <h2>footer</h2>
      <Try/>
    </div>
  );
};

export default Root;
