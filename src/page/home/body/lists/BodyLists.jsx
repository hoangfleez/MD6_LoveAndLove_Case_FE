import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import ShowAll from "./ShowAll";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                padding: "0 95px",
              }}
            >
              {children}
            </Box>
          </Container>
        </Box>
      )}
    </div>
  );
}

const CustomTab = ({ label, ...props }) => {
  return (
    <Tab
      sx={{
        borderRadius: "8px",
        backgroundColor: "customBtnColor.backgroundColor",
        color: "customBtnColor.color",
        margin: "10px",
        padding: "0 15px",
        minHeight: "35px",
        textTransform: 'none',
        "&.Mui-selected": {
          backgroundColor: "customSelected.backgroundColor",
          color: "customSelected.color",
        },
      }}
      label={label}
      {...props}
    />
  );
};

export default function BodyLists() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            position: "fixed",
            zIndex: 1,
            backgroundColor: "customColorSchemes.basicColor",
            "& .MuiTabs-indicator": { display: "none" },
          }}
        >
          <CustomTab label="Tất cả" />
          <CustomTab label="Ra mắt người nhà" />
          <CustomTab label="Ra mắt bạn bè" />
          <CustomTab label="Du lịch chung cùng nhóm bạn" />
          <CustomTab label="Đi chơi chung" />
          <CustomTab label="Tham dự sinh nhật" />
          <CustomTab label="Trò chuyện offline" />
          <CustomTab label="Trò chuyện online" />
          <CustomTab label="Đi chơi tết" />
          <CustomTab label="Đi chơi ngày lễ" />
        </Tabs>
      </Box>
      <Box sx={{ marginTop: "48px" }}>
        <TabPanel value={value} index={0}>
          <ShowAll />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Ra mat nguoi nha
        </TabPanel>
        <TabPanel value={value} index={2}>
          Ra mat ban be
        </TabPanel>
        <TabPanel value={value} index={3}>
          Du lich vs nhom ban
        </TabPanel>
        <TabPanel value={value} index={4}>
          Di choi chung
        </TabPanel>
        <TabPanel value={value} index={5}>
          Tham du sinh nhat
        </TabPanel>
        <TabPanel value={value} index={6}>
          Nc online
        </TabPanel>
        <TabPanel value={value} index={7}>
          Nc offline
        </TabPanel>
        <TabPanel value={value} index={8}>
          Đi chơi tết
        </TabPanel>
        <TabPanel value={value} index={9}>
          Đi chơi ngày lễ
        </TabPanel>
      </Box>
    </Box>
  );
}
