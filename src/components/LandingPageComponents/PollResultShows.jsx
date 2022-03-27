import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import { Box } from "@mui/system";

// const array = [
//   {
//     id: 1,
//     hostName: "Ezechiel Iti",
//     pollName: "Election 2018",
//     agree: "Agree   ",
//     disagree: "Disagree",
//     pollPositive: 7457,
//     pollNegative: 234,
//   },
//   {
//     id: 2,
//     hostName: "William P.",
//     pollName: "Who like change in Compass",
//     agree: "Agree   ",
//     disagree: "Disagree",
//     pollPositive: 757,
//     pollNegative: 434,
//   },
//   {
//     id: 3,
//     hostName: "Allaina A",
//     pollName: "Marijuana ",
//     agree: "Agree   ",
//     disagree: "Disagree",
//     pollPositive: 17457,
//     pollNegative: 17400,
//   },
//   {
//     id: 4,
//     hostName: "Thim Horton",
//     pollName: "Coffee  Arabic",
//     agree: "Agree   ",
//     disagree: "Disagree",
//     pollPositive: 757,
//     pollNegative: 8234,
//   },
//   {
//     id: 5,
//     hostName: "Compass",
//     pollName: "Cohort 10 jan 2021",
//     agree: "Agree   ",
//     disagree: "Disagree",
//     pollPositive: 745,
//     pollNegative: 24,
//   },
//   {
//     id: 6,
//     hostName: "Ezechiel Iti",
//     pollName: "Election 2021",
//     agree: "Jo Biden",
//     disagree: "Donald T",
//     pollPositive: 207457,
//     pollNegative: 194234,
//   },
// ];

const Pollresultshow = (props) => {
  const polls = props.poll;

  let navigate = useNavigate();

  function handleClick(e, id, pollName, first, last) {
    e.preventDefault();
    const host_name = `${first} ${last}`;
    navigate(`/polls/${id}`, { state: { id, host_name } });
  }

  return (
    <Box sx={{ minHeight: "40vh" }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {polls.map((contents, index) => {
          let totalVotes = 0;

          contents.answers.forEach((answer) => {
            totalVotes += answer.vote_count;
          });

          return (
            <Grid item xs={4} sm={4} md={4} key={index}>
              <div
                className="map-result"
                onClick={(e) =>
                  handleClick(
                    e,
                    contents.answers[0].poll_id,
                    contents.answers[0].content,
                    contents.first_name,
                    contents.last_name
                  )
                }
              >
                <Paper sx={{ height: "200px", color: "primary" }}>
                  <div className="poll-titre">
                    <p className="poll-name">{contents.name}</p>
                  </div>
                  <br></br>
                  <section className="host-by">
                    <p className="host-name">
                      {contents.first_name + " " + contents.last_name}
                    </p>
                    <div className="poll-total-vote">
                      <i className="fa-solid fa-user chateau"></i>
                      <p>{totalVotes}</p>
                    </div>
                  </section>
                  <br></br>
                  <div className="poll-positive">
                    <p>{contents.agree}</p>
                    <i className="fa-solid fa-user"></i>
                    <p>{contents.answers[0].content}</p>

                    <p>{contents.answers[0].vote_count}</p>
                  </div>
                  <div className="poll-negative">
                    <p>{contents.disagree}</p>
                    <i className="fa-solid fa-user"></i>
                    <p>{contents.answers[1].content}</p>
                    <p>{contents.answers[1].vote_count}</p>
                  </div>
                </Paper>
              </div>
              <br></br>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Pollresultshow;
