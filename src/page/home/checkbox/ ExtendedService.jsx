import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Extended() {
  return (
    <FormGroup>
      <h2>Dịch vụ mở rộng </h2>
      <FormControlLabel control={<Checkbox />} label="Hôn tay" />
      <FormControlLabel control={<Checkbox />} label="Ôm" />
      <FormControlLabel control={<Checkbox />} label="Nhõng nhẽo" />
      <FormControlLabel control={<Checkbox />} label="Cử chỉ thân mật" />
      <FormControlLabel control={<Checkbox />} label="Nói lời yêu" />
    </FormGroup>
  );
}
