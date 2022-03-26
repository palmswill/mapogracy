import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Arcmap from "../components/map/Arcmap";
import { Typography } from "@mui/material";

import axios from "axios";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { fontSize } from "@mui/system";
import { id } from "date-fns/locale";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const mockObj = {
  id: "1",
  name: "Which Name for My new Born Child?",
  user: "William Liu",
  description:
    "I am gettting a new boy in 8 month! I have a list of baby names I would like to choose, pls help.",
  answers: [
    { id: "1", name: "Adamn" },
    { id: "2", name: "John" },
    { id: "3", name: "William" },
  ],
  votes: [
    { answer_id: "1", cords: [-118.244, 34.052] },
    { answer_id: "3", cords: [-118.245, 34.057] },
    { answer_id: "1", cords: [-119.245, 33.057] },
  ],
  restriction: [[], [], [], []],
  category: { id: "1", name: "animal" },
  center: [-118.244, 34.052],
  created_at: "2021-03-01",
  start_at: "2021-03-01",
  end_at: "2021-05-01",

  visibility: true,
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#18181B" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Polldisplay = (props) => {
  const pollId = useParams().pollid;
  let navigate = useNavigate();
  const [poll, setPoll] = useState({});
  const { state } = useLocation();

  console.log("State values: ", state);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const { pollName } = props;
  console.log("pollName: ", pollName);

  let { pollid } = useParams();

  // function Invoice() {
  //   let params = useParams();
  //   return <h1>Invoice {params.poll.answers}</h1>;
  // }

  useEffect(() => {
    axios
      .get(`http://mapocracy-api.azurewebsites.net/poll/${pollid}`)
      .then((result) => result.data)
      .then((data) => setPoll(data));
  }, []);

  let values = '';

  const handleRadioChange = (event) => {
    event.preventDefault();
    if (!isAuthenticated) {
      alert("You need to login before to vote!");
    }
    const myFormData = new FormData(event.target);
    values = Object.fromEntries(myFormData.entries());

    console.log("values === ", values);


  };

  useEffect(() => {
    const article = { user_id: id, poll_id: pollid, answer_id: values };
    axios
      .post(`http://mapocracy-api.azurewebsites.net/vote`, article)
      .catch((error) => {
        console.error("There was an error in vote adding process!", error);
      });
    navigate("/");
  }, [values]);

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
      <div>
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
          <Box
            gridColumn="span 12"
            spacing={{ xs: 1, md: 1 }}
            columns={{ xs: 2, sm: 10, md: 12 }}
          >
            <Typography>{state.pollName}</Typography>
            <Typography variant="h6" color="primary">
              {user.name}
            </Typography>
            <Typography>
              The future of word depend of vote you are to make now!
            </Typography>
          </Box>
          <Box gridColumn="span 4">
            <Item></Item>
          </Box>
        </Box>
      </div>
      {console.log("  POLL: ", poll)}
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 900, height: 350 }}>
            {poll.answers && (
              <Arcmap
                style={{ minHeight: "300px" }}
                center={[poll.longitude, poll.latitude]}
                voteList={poll.answers}
                zoom={10}
              />
            )}
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Box sx={{ border: 1 }}>
                <form onSubmit={handleRadioChange}>
                  <FormControl
                    id="radios"
                    sx={{ m: 3, fontSize: 12 }}
                    variant="standard"
                    border={2}
                  >
                    <RadioGroup
                      aria-labelledby="radios"
                      name="quiz"
                      // onSubmit={handleRadioChange}
                    >
                      {poll.id &&
                        poll.answers.map((answer) => {
                          return (
                            <FormControlLabel
                              key={answer.id}
                              value={answer.content}
                              control={<Radio />}
                              label={answer.content}
                            />
                          );
                        })}
                    </RadioGroup>
                    <Button
                      sx={{ mt: 1, mr: 1 }}
                      type="submit"
                      variant="contained"
                    >
                      Submit your vote
                    </Button>
                  </FormControl>
                </form>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Polldisplay;

// //////////

// import { Paper } from "@mui/material";

// import { Box } from "@mui/system";
// import { Grid } from "@mui/material";

// const Userinterface = () => {

//   return (
//     <div>
//       <Grid>
//         <Box sx={{ texAlign: "center", border: 1 }} textAlign="center">
// {poll.id &&
//   poll.answers.map((answer) => {
//     return <div>{answer.content}</div>;
//   })}
//         </Box>
//       </Grid>

//       <h1>UserInterface</h1>
//     </div>
//   );
// };

// export default Userinterface;
