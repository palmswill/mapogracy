import React from "react";
import useInput from "../../../hooks/useInput";
import {
  FormControl,
  Select,
  OutlinedInput,
  MenuItem,
  InputLabel,
} from "@mui/material";

export default function EmailListCard({ handleSetState, poll }) {
  const [input, onChange] = useInput(
    poll.current.emailList ? poll.current.emailList : []
  );

    handleSetState("emailList", input);


  const names = [
    // { id: 1, name: "EmailList1" },
    // { id: 2, name: "EmailList2" },
    // { id: 3, name: "EmailList3" },
  ];

  return (
    <FormControl sx={{ m: 1, width: 300, mt: 8, mb: 8 }}>
      <InputLabel id="mutiple-select-label">Choose an Email List</InputLabel>

      <Select
        multiple
        value={input}
        onChange={onChange}
        input={<OutlinedInput />}
        inputProps={{ "aria-label": "Without label" }}
      >
        {names.map((emailList) => (
          <MenuItem key={emailList.name} value={emailList.id}>
            {emailList.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
