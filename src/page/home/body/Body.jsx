import { Box } from "@mui/material";
import React from "react";
import SiderBar from "./siderbar/SiderBar";
import BodyLists from "./lists/BodyLists";


export default function Body() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "64px",
        height: "calc(100vh - 64px)",
      }}
    >
      <SiderBar />
      <BodyLists />
    </Box>
  );
}
