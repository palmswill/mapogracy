import React from "react";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

const RegionSelect = ({ regionIndex, setRegionIndex, regions }) => {
  return (
    <FormControl sx={{ marginLeft: "auto" }}>
      <InputLabel id="demo-simple-select-label">Region</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        defaultValue={regionIndex}
        onChange={(e) => {
          setRegionIndex(e.target.value);
        }}
        label="Region"
      >
        {regions.map((region, index) => (
          <MenuItem key={region + index} value={index}>
            {region}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RegionSelect;
