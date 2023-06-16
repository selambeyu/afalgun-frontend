import React, { useState } from 'react';
import { Box, Tab, Tabs, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { TabPanel, TabContext } from '@mui/system';

export const LostAndFoundComponent = () => {
  const [tabValue, setTabValue] = useState('all');
  const [category, setCategory] = useState('');
  const [location, setLocation] = useState('');

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <Box>
      <TabContext value={tabValue}>
        <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" centered>
          <Tab label="All Items" value="all" />
          <Tab label="Lost" value="lost" />
          <Tab label="Found" value="found" />
        </Tabs>
        <TabPanel value="all">All Items Content</TabPanel>
        <TabPanel value="lost">Lost Items Content</TabPanel>
        <TabPanel value="found">Found Items Content</TabPanel>
      </TabContext>
      <Box mt={2} p={2} bgcolor="lightgray">
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category-select"
            value={category}
            onChange={handleCategoryChange}
            label="Category"
          >
            <MenuItem value="">All Categories</MenuItem>
            <MenuItem value="women">Women</MenuItem>
            <MenuItem value="men">Men</MenuItem>
            <MenuItem value="baby">Baby</MenuItem>
          </Select>
        </FormControl>
        <Box mt={2}>
          <FormControl variant="outlined" fullWidth>
            <InputLabel id="location-label">Location</InputLabel>
            <Select
              labelId="location-label"
              id="location-select"
              value={location}
              onChange={handleLocationChange}
              label="Location"
            >
              <MenuItem value="">All Locations</MenuItem>
              <MenuItem value="location1">Location 1</MenuItem>
              <MenuItem value="location2">Location 2</MenuItem>
              <MenuItem value="location3">Location 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

// export default LostAndFoundComponent;
