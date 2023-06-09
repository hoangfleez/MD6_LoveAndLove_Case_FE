import { Box } from "@mui/material";
import React from "react";
import SiderBar from "./SiderBar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <SiderBar />
        <Outlet />
      </Box>
    </>
  );
};

export default Home;
