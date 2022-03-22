import React from "react";
import { Grid, Paper } from "@mui/material";
const pollTitle = "Title for example";
const positiveVote = 5789;
const negativeVote = 389;
const hostBy = "Erene Thim Horton";

const Pollresultshow = ({ result = Array.from(Array(6)) }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {result.map((_, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <Paper sx={{ height: "200px" }}>
            <a className="poll_title">{pollTitle}</a>
            <p>{hostBy}</p>
            <a>{positiveVote + negativeVote}</a>
            <br></br>
            <a>Vote for </a>
            <a>{positiveVote}</a>
            <br></br>
            <a>Vote again</a>
            <a>{negativeVote}</a>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default Pollresultshow;
