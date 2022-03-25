import { Typography, Paper} from "@mui/material";
import React,{useState,useEffect } from "react";
import axios from "axios"
import Mainpollcard from "./PollCards/MainPollCard";

const TopPoll = () => {

  const [newestPoll, setNewestPoll] = useState([]);

  useEffect(() => {
    axios
      .get("http://mapocracy-api.azurewebsites.net/poll?order=new")
      .then((res) => res.data)
      .then((result) => {
        console.log(result)
        return setNewestPoll(result[0])});
  }, []);




  return (
    <>
      <Typography sx={{ mb: 2 }} variant="h5">
        What's New?
      </Typography>
      <Paper
        sx={{
          // height: "400px",
          padding: "2%",
          position: "relative",
        }}
      >
        {newestPoll.length && <Mainpollcard poll={newestPoll} />}
      </Paper>
    </>
  );
};

export default TopPoll;
