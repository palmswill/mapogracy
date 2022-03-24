import { Box } from "@mui/system";
import React, { useEffect } from "react";
import useInput from "../../../hooks/useInput";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";

const Multiinputcard = ({ handleSetState, poll, propName }) => {
  const [answer0, onChange0] = useInput(
    poll.current[propName] ? poll.current[propName][0] : ""
  );
  const [answer1, onChange1] = useInput(
    poll.current[propName] ? poll.current[propName][1] : ""
  );

  const [answer2, onChange2] = useInput(
    poll.current[propName] ? poll.current[propName][2] : ""
  );

  const [answer3, onChange3] = useInput(
    poll.current[propName] ? poll.current[propName][3] : ""
  );

  useEffect(() => {
    handleSetState(propName, [answer0, answer1, answer2, answer3]);
  }, [answer0, answer1, answer2, answer3, propName, handleSetState]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "50%",
        minWidth: "200px",
        marginTop: "15px",
      }}
    >
      <FormControl>
        <InputLabel htmlFor="component-outlined">Answer 1</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={answer0}
          onChange={onChange0}
          label="Name"
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Answer 2</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={answer1}
          onChange={onChange1}
          label="Name"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Answer 3</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={answer2}
          onChange={onChange2}
          label="Name"
          required
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="component-outlined">Answer 4</InputLabel>
        <OutlinedInput
          id="component-outlined"
          value={answer3}
          onChange={onChange3}
          label="Name"
        />
      </FormControl>
    </Box>
  );
};

export default Multiinputcard;
