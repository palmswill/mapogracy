import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import axios from "axios";

const UserPollTab = () => {
  const [polls, setPolls] = useState([]);
  // const [owners, setOwners] = useState([]);

  let navigate = useNavigate();
  const { user } = useAuth0();
  // console.log('user = ', user.email);
  // let resultArray = [];

  useEffect(() => {
    if (!user) return;

    axios
      .get(`https://mapocracy-api.azurewebsites.net/user/${user.email}/poll`)
      .then((res) => res.data)
      .then((result) => setPolls(result));

    // let one = `http://mapocracy-api.azurewebsites.net/poll?time=current`;
    // let two = `http://mapocracy-api.azurewebsites.net/user/${user.email}/poll?time=current`;
    // const requestOne = axios.get(one);
    // const requestTwo = axios.get(two);
    // axios
    //   .all([requestOne, requestTwo])
    //   .then(
    //     axios.spread((...responses) => {
    //       const responseOne = responses[0];
    //       const responseTwo = responses[1];

    //       setPolls(responseOne.data);
    //       setOwners(responseTwo.data);
    //     })
    //   )
    //   .catch((errors) => {
    //     console.error(errors);
    //   });
  }, [user]);

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

  // resultArray = polls.filter(poll => poll.user_id === 'test4@email.com');
  // resultArray = polls.filter((poll) => poll.user_id === user.email);

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {}
        {polls.map((contents, index) => {
          let totalVotes = 0;
          console.log(contents)

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
                    e
                    // contents.answers[0].poll_id,
                    // contents.answers[0].content,
                    // contents.first_name,
                    // contents.last_name
                  )
                }
              >
                <Paper
                  sx={{ minHeight: "200px", color: "primary", padding: "20px" }}
                  onClick={()=>navigate(`/polls/${contents.id}`)}
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
              <br></br>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default UserPollTab;
