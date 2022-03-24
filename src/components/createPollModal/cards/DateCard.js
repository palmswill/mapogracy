import React, { useEffect, useState } from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider, DateRangePicker } from "@mui/lab";
import { Box } from "@mui/system";
import { TextField } from "@mui/material";

export default function DateCard({ handleSetState, poll }) {
  const [value, setValue] = useState([poll.current.start_date,poll.current.end_date]);

  useEffect(() => {
    handleSetState("start_date", dateConvert(value[0]));
    handleSetState("end_date", dateConvert(value[1]));
  }, [value, handleSetState]);

  const dateConvert = (dateString) => {
    const data = new Date(dateString).toLocaleDateString();
    const listString = data.split("/");
    const transString= [listString[2],listString[0],listString[1]].join("-");
    return transString;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        paddingBlock: "10%",
        gap: "20px",
        width: "80%",
        minWidth: "200px",
        marginTop: "15px",
      }}
    >
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateRangePicker
          startText="Start Date"
          endText="End Date"
          value={value}
          for
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </Box>
  );
}
