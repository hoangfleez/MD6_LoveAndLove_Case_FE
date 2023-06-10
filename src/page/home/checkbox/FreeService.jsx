import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Free() {
  return (
    <FormGroup>
    <h2>Dịch vụ miên phí</h2>
      <FormControlLabel  control={<Checkbox />} label="Nắm tay" />
      <FormControlLabel  control={<Checkbox />} label="Nói yêu" />
      <FormControlLabel  control={<Checkbox />} label="Nhìn mắt" />
    </FormGroup>
  );
}