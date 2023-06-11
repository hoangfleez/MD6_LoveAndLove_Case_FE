import React from 'react';
import { Tab, Tabs, Typography } from '@mui/material';

const CustomTab = ({ label, ...props }) => {
  return (
    <Tab
      sx={{
        borderRadius: '8px',
        backgroundColor: 'gray',
        color: '#fff',
        '&.Mui-selected': {
          backgroundColor: '#fff',
          color: '#000',
        },
      }}
      label={label}
      {...props}
    />
  );
};

const CustomTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} aria-label="Custom Tabs">
      <CustomTab label="Tab 1" />
      <CustomTab label="Tab 2" />
      <CustomTab label="Tab 3" />
    </Tabs>
  );
};

export default CustomTabs;