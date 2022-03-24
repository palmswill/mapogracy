import React from "react";
import { useParams } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button } from "@mui/material";
import ButtonBase from '@mui/material/ButtonBase';
import Arcmap from "../components/map/Arcmap";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

const mockObj = {
  "id": "1",
  "name": "Which Name for My new Born Child?",
  "user":"William Liu",
  "description": "I am gettting a new boy in 8 month! I have a list of baby names I would like to choose, pls help.",
  "answers": [
    { "id": "1", "name": "Adamn" },
    { "id": "2", "name": "John" },
    { "id": "3", "name": "William" }
  ],
  "votes": [
    { "answer_id": "1", "cords": [-118.244, 34.052] },
    { "answer_id": "3", "cords": [-118.245, 34.057] },
    { "answer_id": "1", "cords": [-119.245, 33.057] }
  ],
  "restriction":[[],[],[],[]],
  "category":{"id":"1","name":"animal"},
  "center":[-118.244, 34.052],
  "created_at":"2021-03-01",
  "start_at":"2021-03-01",
  "end_at":"2021-05-01",
  
  "visibility":true

}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#18181B' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const Polldisplay = (props) => {
  const pollId = useParams().pollid;
  console.log('pollId: ', pollId);

  const { user, isAuthenticated, isLoading } = useAuth0();
  const { pollName, poll} = props
  console.log('pollName: ', pollName);
  console.log('poll: ', poll);

  if (!isAuthenticated) {
    return <div>You need to login before to vote!</div>;
  }


  
    const handleRadioChange = (event) => {
      event.preventDefault();

      const myFormData = new FormData(event.target);
      const values = Object.fromEntries(myFormData.entries());
      console.log(`Event change: ${values.quiz}`);

      // setHelperText(' ');
      // setError(false);
    };
  


  return (
    <Paper
    sx={{
      p: 2,
      margin: 'auto',
      maxWidth: 1424,
      flexGrow: 1,
      backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#18181B' : '#fff',
    }}
  >
    <div>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={1}>
     
          <Box gridColumn="span 12" spacing={{ xs: 1, md: 1 }} columns={{ xs: 2, sm: 10, md: 12 }}>
            <Item>Which is your favorite in your opinion</Item>
            <Item>{user.name}</Item>
            <Item>The future of word depend of vote you are to make now!</Item>
          </Box>
          <Box gridColumn="span 4">
            <Item></Item>
          </Box>
      </Box>
    </div>

    <Grid container spacing={2}>
        <Grid item>
        
          <ButtonBase sx={{ width: 900, height: 350 }}>
            <Arcmap />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
    <form onSubmit={handleRadioChange}>
      <FormControl sx={{ m: 3 }} variant="standard" border={2}>
        <FormLabel id="radios">What is your vote</FormLabel>
        <RadioGroup
          aria-labelledby="radios"
          name="quiz"
          // onSubmit={handleRadioChange}
        >
          <FormControlLabel value="agree" control={<Radio />} label="Agree" />
          <FormControlLabel value="disagree" control={<Radio />} label="Desagree" />
          <FormControlLabel value="other1" control={<Radio />} label="Other opinion" />
          <FormControlLabel value="other2" control={<Radio />} label="Other opinion" />
          <FormControlLabel value="other3" control={<Radio />} label="Other opinion" />
          <FormControlLabel value="other4" control={<Radio />} label="Other opinion" />
        </RadioGroup>
        <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="outlined">
          Submit your vote
        </Button>
      </FormControl>
    </form>
            </Grid>

          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};



export default Polldisplay;
