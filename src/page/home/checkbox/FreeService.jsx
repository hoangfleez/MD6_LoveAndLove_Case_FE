import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

export default function Free() {
  return (
    <FormGroup sx={{paddingLeft:"10px"}}>
      <h2>Dịch vụ miên phí</h2>
      <Box
        sx={{ display: "flex", flexDirection: "column", paddingLeft: "20px" }}
      >
        <FormControlLabel control={<Checkbox />} label="Nắm tay" />
        <FormControlLabel control={<Checkbox />} label="Nói yêu" />
        <FormControlLabel control={<Checkbox />} label="Nhìn mắt" />
      </Box>
    </FormGroup>
  );
}
