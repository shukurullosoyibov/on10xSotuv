import React from "react";
import Main from "../Component/Main";
import { Outlet } from "react-router-dom";

const MainLayout = () => {

  return (
    <>
      <Outlet></Outlet>

      <Main />
    </>
  );
};

export default MainLayout;
