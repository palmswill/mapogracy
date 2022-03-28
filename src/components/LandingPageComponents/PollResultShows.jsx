import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Grid, Paper } from "@mui/material";

const Pollresultshow = (props) => {
  let { state } = useLocation();
  
  let polls = [];
  // if (state.index === 1) {
  //   polls = state.poll;
  //   state.index = 0;
  // } else {
    polls = props.poll;
  // }

  let navigate = useNavigate();

  function handleClick(e, id, pollName, first, last) {
    e.preventDefault();

    let host_name = '';
    if (!first && !last) {
      host_name = polls.user_id;
    } else {
      host_name = `${first} ${last}`;
    };
    navigate(`/polls/${id}`, { state: {id, host_name}});
  }

  return (
    <>

      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{minHeight:"500px"}}
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
    </>
  );
};

export default Pollresultshow;
