import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Arcmap from "../../map/Arcmap";
import { Typography } from "@mui/material";

import axios from "axios";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
// export default function UserPollTab() {
//   return (
//     <div>UserPollTab are you there ???</div>
//   )
// }

const UserPollTab = (props) => {
  const [polls, setPolls] = useState([]);
  const [owners, setOwners] = useState([]);

  let navigate = useNavigate();
  const { user, isAuthenticated } = useAuth0();

  let resultArray = [];

  useEffect(() => {
    if (!user) return;
    let one = `http://mapocracy-api.azurewebsites.net/poll`;
    let two = `http://mapocracy-api.azurewebsites.net/user/test19@email.com/poll`;
    const requestOne = axios.get(one);
    const requestTwo = axios.get(two);
    axios
      .all([requestOne, requestTwo])
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];

          setPolls(responseOne.data);
          setOwners(responseTwo.data);
        })
      )
      .catch((errors) => {
        console.error(errors);
      });

  }, [user.email]);

  function handleClick(e) {
    e.preventDefault();

    // let host_name = '';
    // if (!first && !last) {
    //   host_name = polls.user_id;
    // } else {
    //   host_name = `${first} ${last}`;
    // };
    // navigate(`/polls/${id}`, { state: {id, host_name}});
  }

  resultArray = polls.filter(poll => poll.user_id === user.email);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {}
        {resultArray.map((contents, index) => {
          let totalVotes = 0;

          contents.answers.forEach((answer) => {
            totalVotes += answer.vote_count;
          });

          return (
            <Grid>
              <div
                className="map-result"
                onClick={(e) =>
                  handleClick(
                    e
                    // contents.answers[0].poll_id,
                    // contents.answers[0].content,
                    // contents.first_name,
                    // contents.last_name
                  )
                }
              >
                <Paper
                  sx={{ height: "200px", color: "primary" }}
                  key={contents.name}
                >
                  <div className="poll-titre">
                    <p className="poll-name">{contents.name}</p>
                  </div>
                  <br></br>
                  <section className="host-by" key={contents.user_id}>
                    <p className="host-name">{contents.user_id}</p>
                    <div className="poll-total-vote">
                      <br></br>
                      <i className="fa-solid fa-user chateau"></i>
                      <p>
                        {contents.answers[0].vote_count +
                          contents.answers[1].vote_count}
                      </p>
                    </div>
                  </section>
                  <br></br>
                  <div className="poll-positive">
                    <p>{contents.answers[0].content}</p>
                    <i className="fa-solid fa-user"></i>
                    <p>{contents.answers[0].vote_count}</p>
                  </div>
                  <div className="poll-negative">
                    <p>{contents.answers[1].content}</p>
                    <i className="fa-solid fa-user"></i>
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
export default UserPollTab;
