import { Typography, Paper } from "@mui/material";
import React from "react";
import Mainpollcard from "./PollCards/MainPollCard";

const TopPoll = ({ poll }) => {
  return (
    <>
      <Typography sx={{ mb: 2 }} variant="h5">
        What's Hot?
      </Typography>
      <Paper
        sx={{
          // height: "400px",
          padding: "2%",
          position: "relative",
        }}
      >
        {poll.id && <Mainpollcard poll={poll} />}
      </Paper>
    </>
  );
};

export default TopPoll;
