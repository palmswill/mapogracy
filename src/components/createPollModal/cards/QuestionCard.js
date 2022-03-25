import React, { useEffect } from "react";
import useInput from "../../../hooks/useInput";
import { TextField, Select, FormControl, MenuItem,InputLabel } from "@mui/material";

const Quesioncard = ({ handleSetState, poll, propName, cat }) => {
  const [value, onChange] = useInput(
    poll.current[propName] ? poll.current[propName] : ""
  );

  const categories = [
    "Nature",
    "Econ",
    "Travel",
    "Politics",
    "Media",
    "Others",
  ];

  const [catVal, onCatChange] = useInput(
    poll.current["category"] ? poll.current["category"] : "Others"
  );

  useEffect(() => {
    handleSetState(propName, value);
    if (cat) {
      handleSetState("category", catVal);
    }
  }, [value, propName, handleSetState]);

  return (
    <>
      <TextField
        size={"medium"}
        sx={{ marginTop: "10%", width: "80%" }}
        value={value}
        inputProps={{ style: { fontSize: 40 } }}
        onChange={onChange}
        id="standard-basic"
        variant="standard"
      />
      {cat && (
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="mutiple-select-label">Category</InputLabel>

          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={catVal}
            onChange={onCatChange}
          >
            {categories.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    </>
  );
};

export default Quesioncard;
