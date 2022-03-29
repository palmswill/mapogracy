import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
// import { calculteAnswers } from "../../helpers/pollHelper";

const Pollresultshow = (props) => {
  // let { state } = useLocation();

  const polls = props.poll;

  let navigate = useNavigate();

  function handleClick(e, id, pollName, first, last) {
    e.preventDefault();

    let host_name = "";
    if (!first && !last) {
      host_name = polls.user_id;
    } else {
      host_name = `${first} ${last}`;
    }
    navigate(`/polls/${id}`, { state: { id, host_name } });
  }

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ minHeight: "500px" }}
      >
        {polls.map((contents, index) => {
          let totalVotes = 0;

          contents.answers.forEach((answer) => {
            totalVotes += answer.vote_count;
          });
          const sortedAnswers = contents.answers
            .slice()
            .sort((a, b) => b.vote_count - a.vote_count);

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
                <Paper
                  className="base"
                  sx={{ minHeight: "250px", color: "primary", padding: "20px" }}
                >
                  <div className="poll-titre">
                    <h3 className="poll-name">{contents.name}</h3>
                  </div>
                  <section className="host-by">
                    <p className="host-name">
                      {contents.first_name + " " + contents.last_name}
                    </p>
                    <div className="poll-total-vote">
                      <i className="fa-solid fa-user chateau"></i>
                      <p>{totalVotes}</p>
                    </div>
                  </section>
                  {sortedAnswers.map((answer, index) => {
                    if (index !== 0 && index !== 1) return <></>; ///we only want the first two (if there is two)
                    return (
                      <div
                        key={`${answer.content + index}`}
                        className="poll-positive"
                      >
                        <p>{answer.content}</p>
                        <i className="fa-solid fa-user"></i>
                        <p>{answer.vote_count}</p>
                      </div>
                    );
                  })}
                </Paper>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default React.memo(Pollresultshow);
