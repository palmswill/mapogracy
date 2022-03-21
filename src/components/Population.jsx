import React from 'react';
import { AppBar,Box,Toolbar,Typography} from '@mui/material';
import Usernavsection from './UserNavSection';
import Arcmap from '../components/map/Arcmap';


const voteNumber = function() {
  let number = 0;

  // const voteExist = email.include("a@aol.com")
  const voteExist = true;
  if (!voteExist) {
    number++
  }
  return 57;

}
const ethnicity = ["Whit(non-hispanic)", "Hispanic", "Black and Afrrican American", "Asia"];
const email = ["a@aol.com", "b@aol.com"];
const vote_number = [300, 200, 350, 130];
const Population = (props) => {
  // const { email, ethnicity, vote_number } = props;

  return (
    <section className="container">
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

export default Population;
