
import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Box } from "@mui/material";

export default function Free({ setService }) {
  const handleCheckboxChange = (event) => {
    const checkedService = event.target.name;
    if (event.target.checked) {
      setService((prevService) => [...prevService, checkedService]);
    } else {
      setService((prevService) => prevService.filter((item) => item !== checkedService));
    }
  };

  return (
    <FormGroup sx={{ paddingLeft: "10px" }}>
      <h2>Dịch vụ miên phí</h2>
      <Box sx={{ display: "flex", flexDirection: "column", paddingLeft: "20px" }}>
        <FormControlLabel
          control={<Checkbox onChange={handleCheckboxChange} name="namTay" />}
          label="Nắm tay"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleCheckboxChange} name="noiYeu" />}
          label="Nói yêu"
        />
        <FormControlLabel
          control={<Checkbox onChange={handleCheckboxChange} name="nhinMat" />}
          label="Nhìn mắt"
        />
      </Box>
    </FormGroup>
  );
}
