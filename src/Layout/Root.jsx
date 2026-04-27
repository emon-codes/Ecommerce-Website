import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/SharedComponents/Header/Header";

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
