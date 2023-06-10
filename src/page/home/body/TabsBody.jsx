import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import ActionAreaCard from "../../../components/Card";

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
                marginTop:"48px"
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

export default function TabsBody() {
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
          sx={{position:"fixed"}}
        >
          <Tab label="Tat ca" />
          <Tab label="Ra mắt người nhà" />
          <Tab label="Ra mắt bạn bè" />
          <Tab label="Du lịch chung cùng nhóm bạn" />
          <Tab label="Đi chơi chung" />
          <Tab label="Tham dự sinh nhật" />
          <Tab label="Trò chuyện offline" />
          <Tab label="Trò chuyện online" />
          <Tab label="Đi chơi tết" />
          <Tab label="Đi chơi ngày lễ" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} >
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <ActionAreaCard />
      </TabPanel>
      <TabPanel value={value} index={9}>
        <ActionAreaCard />
      </TabPanel>
    </Box>
  );
}
