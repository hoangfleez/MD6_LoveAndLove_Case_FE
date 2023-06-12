import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

export default function Extended() {
  return (
    <FormGroup sx={{paddingLeft:"10px"}}>
      <h2>Dịch vụ mở rộng </h2>
      <Box sx={{display:"flex",flexDirection:"column", paddingLeft:"20px"}}>
        <FormControlLabel control={<Checkbox />} label="Hôn tay" />
        <FormControlLabel control={<Checkbox />} label="Ôm" />
        <FormControlLabel control={<Checkbox />} label="Nhõng nhẽo" />
        <FormControlLabel control={<Checkbox />} label="Cử chỉ thân mật" />
        <FormControlLabel control={<Checkbox />} label="Nói lời yêu" />
      </Box>
    </FormGroup>
  );
}
