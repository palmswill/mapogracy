import { Typography, Paper } from "@mui/material";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Mainpollcard from "./PollCards/MainPollCard";
import { useNavigate } from "react-router-dom";
import MainpollcardLoader from "./PollCards/MainPollCardLoader";

const TopPoll = () => {
  const navigate = useNavigate();

  const [newestPoll, setNewestPoll] = useState([]);

  useEffect(() => {
    axios
      .get("https://mapocracy-api.azurewebsites.net/poll?order=popularity")
      .then((res) => res.data)
      .then((result) => {
        return setNewestPoll(result[0]);
      });
  }, []);

  return (
    <>
      <Typography sx={{ mb: 2 }} variant="h5">
        What's Hot?
      </Typography>
      <Paper
        className="main-card"
        onClick={() => navigate(`/polls/${newestPoll.id}`)}
        sx={{
          minHeight: "400px",
          boxSizing: "border-box",
          padding: "15px",
          border: "black solid 1px",

          position: "relative",
          "&:hover ": {
            boxSizing: "border-box",

            outline: "purple solid 2px",
            border: "purple solid 1px",

            cursor: "pointer",
            outlineOffset: "-10px",
          },
        }}
      >
        {!newestPoll.id && <MainpollcardLoader/>}
        {newestPoll.id && <Mainpollcard poll={newestPoll} />}
      </Paper>
    </>
  );
};

export default TopPoll;
