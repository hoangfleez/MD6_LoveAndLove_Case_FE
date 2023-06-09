import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Checkbox, FormControlLabel } from "@mui/material";

const drawerWidth = 300;

export default function SiderBar() {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          height: "calc(100vh - 64px)",
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            zIndex: -1,
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
        <h2>Dịch vụ</h2>
          <List>
            {[
              "Ra mắt người nhà",
              "Ra mắt bạn bè",
              "Đi chơi chung",
              "Tham dự sinh nhật",
              "Trò chuyện offline",
              "Trò chuyện online",
              "Đi chơi tết",
              "Đi chơi ngày lễ",
            ].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <FiberManualRecordIcon sx={{ fontSize: 10 , marginRight:2 }} />
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
              <h2>Dịch vụ miễn phí</h2>
            {["Nắm tay", "Nói yêu", "Nhìn mắt"].map((text) => (
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={text}
            />
            ))}
          </List>
          <Divider />
          <List>
              <h2>Dịch vụ mở rộng</h2>
            {["Hôn tay", "Ôm", "Nhõng nhẽo","Cử chỉ thân mật","Nói lời yêu"].map((text) => (
              <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label={text}
            />
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
