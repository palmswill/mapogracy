import React from 'react';
import { AppBar,Box,Toolbar,Typography} from '@mui/material';
import Usernavsection from './UserNavSection';
import Arcmap from './map/Arcmap';


const voteNumber = function(props) {
  const voteExist = true;
 // props.email = object must come from db
  for (const ele in props.email) {
    if (email === ele) {
      return 0;
    }
      return 1;
  }
}


const ethnicity = ["Whit(non-hispanic)", "Hispanic", "Black and Afrrican American", "Asia"];
const email = ["a@aol.com", "b@aol.com"];
const vote_number = [300, 200, 350, 130];


const Polls = (props) => {
  // const { email, ethnicity, vote_number } = props;

  return (
    <section className="container">
      <img src="Arcmap" alt="Map View" />
      <ul className="ethnicity_total">
        <li className="ethnicity">{ethnicity[0]}</li><br />
        <li className="number_vote">{vote_number[0] + voteNumber(email)}</li><br />
        <li className="ethnicity">{ethnicity[1]}</li><br />
        <li className="number_vote">{vote_number[1]+ voteNumber(email)}</li><br />
        <li className="ethnicity">{ethnicity[2]}</li><br />
        <li className="number_vote">{vote_number[2] + voteNumber(email)}</li><br />
        <li className="ethnicity">{ethnicity[3]}</li><br />
        <li className="number_vote">{vote_number[3] + voteNumber(email)}</li><br />
      </ul>
    </section>
  );
};

export default Polls;
