import { Divider, Drawer, Toolbar } from "@mui/material";
import React from "react";
import Free from "../../checkbox/FreeService";
import Extended from "../../checkbox/ ExtendedService";

export default function SiderBar() {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: "300px",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: "300px", boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Free />
        <Divider />
        <Extended />
      </Drawer>
    </>
  );
}
