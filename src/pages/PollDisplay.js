import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Avatar, Button } from "@mui/material";
// import ButtonBase from "@mui/material/ButtonBase";
import Arcmap from "../components/map/Arcmap";
import { Typography } from "@mui/material";

import axios from "axios";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { dotColor } from "../helpers/mapHelpers";
import PollDisplayLoader from "../components/LandingPageComponents/LoadingSkeletons/PollDisplayLoader";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Polldisplay = (props) => {
  // let navigate = useNavigate();
  const [poll, setPoll] = useState({});
  // const { state } = useLocation();

  const { user, isAuthenticated } = useAuth0();
  // const { pollName } = props;

  let { pollid } = useParams();

  const color = dotColor;

  useEffect(() => {
    axios
      .get(`http://mapocracy-api.azurewebsites.net/poll/${pollid}`)
      .then((result) => result.data)
      .then((data) => setPoll(data));
  }, [pollid]);

  console.log(poll);

  const currentDate = new Date();
  const deadLine = new Date(poll.end_at);
  const disableVote = deadLine <= currentDate;

  const handleRadioChange = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      alert("You need to login before to vote!");
      // navigate("/");
      return;
    }

    const myFormData = new FormData(event.target);
    const values = Object.fromEntries(myFormData.entries());

    // this is the varible for post data.
    let post_poll_id = 0;
    let post_answer_id = 0;
    const post_answers = poll.answers;

    // I loop here for find the data to post regarding of the vote madded
    post_answers.forEach((element) => {
      if (element.content === values.quiz) {
        post_poll_id = element.poll_id;
        post_answer_id = element.id;
      }
    });
    const vote_added = {
      // user_id: user.email,
      poll_id: post_poll_id,
      answer_id: post_answer_id,
    };

    if (user) {
      vote_added.user_id = user.email;
    }

    axios
      .post(`http://mapocracy-api.azurewebsites.net/vote`, vote_added)
      .then(alert("Vote sending to registration!"))
      .catch((error) => {
        if (error.response) {
          alert(`Opps! You ${error.response.data} in the same poll`);
        }
      });

    axios
      .get(`http://mapocracy-api.azurewebsites.net/poll/${pollid}`)
      .then((result) => result.data)
      .then((data) => setPoll(data));
  };
  let sortedAnswers = [];
  let totalVote = 0;
  if (poll.answers) {
    poll.answers.forEach((answer) => {
      totalVote += answer.vote_count;
    });
    sortedAnswers = poll.answers
      .slice()
      .sort((a, b) => b.vote_count - a.vote_count);
  }

  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 1424,
        fontSize: 12,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#18181B" : "#fff",
      }}
    >
      {!poll.id ? (
        <PollDisplayLoader />
      ) : (
        <>
          <div>
            <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
              <Box
                gridColumn="span 12"
                sx={{marginBottom:"15px"}}
                spacing={{ xs: 1, md: 1 }}
                columns={{ xs: 2, sm: 10, md: 12 }}
              >
                <Typography variant="h4">{poll.name}</Typography>

                <Typography variant="h6" color="primary">
                  {poll.first_name && poll.last_name
                    ? `${poll.first_name} ${poll.last_name}`
                    : poll.first_name
                    ? poll.first_name
                    : poll.last_name
                    ? poll.last_name
                    : poll.user_id}
                </Typography>
                <Typography>{poll.description}</Typography>
              </Box>
              
            </Box>
          </div>
          <Grid container spacing={2}>
            <Grid item>
              <Box sx={{ minWidth: 900, minHeight: 350 }}>
                {poll.answers && (
                  <Arcmap
                    style={{ minHeight: "500px" }}
                    center={[poll.longitude, poll.latitude]}
                    voteList={sortedAnswers}
                    zoom={10}
                  />
                )}
              </Box>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Box
                    sx={{
                      border: "2px solid #000",
                      borderRadius: "10px",
                      boxShadow: 24,
                      bgcolor: "background.paper",
                      minHeight: "500px",
                      p: 9,
                    }}
                  >
                    <Typography variant="h5">{`${
                      disableVote ? "Final" : "Current"
                    } result:`}</Typography>
                    <form onSubmit={handleRadioChange}>
                      <FormControl
                        id="radios"
                        sx={{ m: 3, fontSize: 12 }}
                        variant="standard"
                        border={2}
                      >
                        <RadioGroup
                          sx={{ marginBottom: "20px" }}
                          aria-labelledby="radios"
                          name="quiz"
                        >
                          {poll.id &&
                            sortedAnswers.map((answer, index) => {
                              return (
                                <Box key={answer + index}>
                                  <FormControlLabel
                                    key={answer.id}
                                    sx={{ fontSize: "24px" }}
                                    value={answer.content}
                                    control={<Radio />}
                                    label={answer.content}
                                    disabled={disableVote}
                                  />
                                  <Box
                                    sx={{
                                      display: "flex",
                                      alignItems: "center",
                                    }}
                                  >
                                    <Avatar
                                      sx={{
                                        bgcolor: color[index],
                                        width: "20px",
                                        height: "20px",
                                        marginRight: "10px",
                                      }}
                                    >
                                      {" "}
                                    </Avatar>
                                    <Box sx={{ marginRight: "15px" }}>
                                      {" "}
                                      <i className="fa-solid fa-user"></i>
                                    </Box>
                                    <Typography>{answer.vote_count}</Typography>
                                  </Box>
                                </Box>
                              );
                            })}
                        </RadioGroup>
                        <Box ><Typography variant="h6">{`Total: ${totalVote} votes`}</Typography></Box>
                        {!disableVote && (
                          <Button
                            sx={{ mt: 1, mr: 1 }}
                            type="submit"
                            variant="contained"
                          >
                            Submit your vote
                          </Button>
                        )}
                      </FormControl>
                    </form>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
    </Paper>
  );
};

export default Polldisplay;
