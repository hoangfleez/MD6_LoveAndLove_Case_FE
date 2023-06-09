import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./home/NavBar";

const Index = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Index;
