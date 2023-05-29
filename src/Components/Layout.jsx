import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
const Layout = () => {
  return (
    <main className="h-screen">
      <NavBar />
      <Outlet />
    </main>
  );
};

export default Layout;
