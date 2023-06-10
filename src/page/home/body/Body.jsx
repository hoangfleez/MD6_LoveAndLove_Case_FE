import { Box, Divider, Drawer, Toolbar } from "@mui/material";
import React from "react";
import Tabs from "./TabsBody";
import TabsBody from "./TabsBody";
import Free from "../checkbox/FreeService";
import Extended from "../checkbox/ ExtendedService";

export default function Body() {
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "64px",
        height: "calc(100vh - 64px)",
      }}
    >
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
      <TabsBody />
    </Box>
  );
}
