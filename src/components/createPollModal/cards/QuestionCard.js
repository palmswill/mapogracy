import React, { useEffect } from "react";
import useInput from "../../../hooks/useInput";
import { TextField } from "@mui/material";

const Quesioncard = ({ handleSetState,poll,propName }) => {
  console.log (poll.current);
  const [value, onChange] = useInput(poll.current[propName]?poll.current[propName]:"");

  useEffect(() => {
    handleSetState(propName, value);
  }, [value,propName,handleSetState]);

  return (
    <TextField
      size={"medium"}
      sx={{ marginTop:"10%",width: "40%" }}
      value={value}
      inputProps={{style:{fontSize:40}}}
      onChange={onChange}
      id="standard-basic"
      variant="standard"
    />
  );
};

export default Quesioncard;
