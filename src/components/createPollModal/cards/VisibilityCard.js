import React from "react";
import useInput from "../../../hooks/useInput";
import { FormControl, Select, OutlinedInput, MenuItem } from "@mui/material";

export default function VisibilityCard({ handleSetState, poll }) {
  const [input, onChange] = useInput(
    poll.current.visibility ? poll.current.visibility : true
  );
  console.log();

  handleSetState("visibility", input);



  return (
    <FormControl sx={{ m: 1, width: 300, mt: 8, mb: 8 }}>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={input}
        onChange={onChange}
      >
        <MenuItem value={true}>YES</MenuItem>
        <MenuItem value={false}>FALSE</MenuItem>
      </Select>
    </FormControl>
  );
}
