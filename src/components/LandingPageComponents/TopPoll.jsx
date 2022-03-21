import { Typography } from "@mui/material";
import React from "react";

const TopPoll = ({ children }) => {
  return (
    <>
      <Typography sx={{ mb: 2 }} variant="h5">
        What's Hot?
      </Typography>
      {children}
    </>
  );
};

export default TopPoll;
