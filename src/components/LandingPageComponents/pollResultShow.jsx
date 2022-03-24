import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";
import axios from 'axios';


const array = [
  {
    id: 1,
    hostName: 'Ezechiel Iti',
    pollName: 'Election 2018',
    agree: 'Agree   ',
    disagree: 'Disagree',
    pollPositive: 7457,
    pollNegative: 234
  },
  {
    id: 2,
    hostName: 'William P.',
    pollName: 'Who like change in Compass',
    agree: 'Agree   ',
    disagree: 'Disagree',
    pollPositive: 757,
    pollNegative: 434
  },
  {
    id: 3,
    hostName: 'Allaina A',
    pollName: 'Marijuana ',
    agree: 'Agree   ',
    disagree: 'Disagree',
    pollPositive: 17457,
    pollNegative: 17400,
  },
  {
    id: 4,
    hostName: 'Thim Horton',
    pollName: 'Coffee  Arabic',
    agree: 'Agree   ',
    disagree: 'Disagree',
    pollPositive: 757,
    pollNegative: 8234
  },
  {
    id: 5,
    hostName: 'Compass',
    pollName: 'Cohort 10 jan 2021',
    agree: 'Agree   ',
    disagree: 'Disagree',
    pollPositive: 745,
    pollNegative: 24
  },
  {
    id: 6,
    hostName: 'Ezechiel Iti',
    pollName: 'Election 2021',
    agree:    'Jo Biden',
    disagree: 'Donald T',
    pollPositive: 207457,
    pollNegative: 194234
  }
]

const Pollresultshow = (props) => {
  // const Pollresultshow = ({ result = Array.from(array) }) => {
  let navigate = useNavigate();

  const int = new Intl.NumberFormat('en-US')

  function handleClick(e, id) {
    e.preventDefault();
    
    navigate(`/polls/${id}`);

    let config = {
      headers: {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Headers': '*'},
      }

    axios.get(`https://mapocracy-api.azurewebsites.net/poll`, config)
    .then(res => {
       const posts = res.data;
       console.log('Posts: ', posts);
      })
      .catch(error => console.log('hello', error));

    // alert(`You push poll: ${link}`)
    // navigate.push(`/localhost:3000/polls/1`);
  };

  // at line 84 handleClick should receive a good link in content.id or something else to navigate to this link
  return (
    <>
   
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {array.map((content, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <div className="map-result" onClick={(e) => handleClick(e, content.id)}>
            <Paper sx={{ height: "200px", color: "primary"}}>
              <div className="poll-titre">
                <p className="poll-name">{content.pollName}</p>
              </div>
              <br></br>
              <section className="host-by">
                <p className="host-name">{content.hostName}</p>
                <div className="poll-total-vote">
                  <i className="fa-solid fa-user chateau"></i>
                  <a>{int.format(content.pollPositive + content.pollNegative)}</a>
                </div>
              </section>
              <br></br>
              <div className="poll-positive">
                <p>{content.agree}</p>
                <i className="fa-solid fa-user"></i>
                <a>{int.format(content.pollPositive)}</a>
              </div>
              <div className="poll-negative">
                <a>{content.disagree}</a>
                <i className="fa-solid fa-user"></i>
                <a>{int.format(content.pollNegative)}</a>
              </div>
            </Paper>
          </div>
          <br></br>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default Pollresultshow;
