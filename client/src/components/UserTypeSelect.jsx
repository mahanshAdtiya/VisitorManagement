import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const UserTypeSelect = ({ userType, setUserType }) => {
  const handleChange = (event) => {
    setUserType(event.target.value); 
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="user-type-select">User Type</InputLabel>
        <Select
          id="user-type-select"
          label="user-type-select"
          value={userType}
          onChange={handleChange}
        >
          <MenuItem value="Professor">Professor</MenuItem>
          <MenuItem value="Student">Student</MenuItem>
          <MenuItem value="Faculty">Faculty</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

export default UserTypeSelect;
