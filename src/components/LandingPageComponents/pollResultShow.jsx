import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Paper } from "@mui/material";

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
  console.log('Porps:  ', props);

  const polls = props.poll;
  console.log('pollContent: ', polls);

  const pollAnswer = props[1];

  let navigate = useNavigate();

  const int = new Intl.NumberFormat('en-US')



  function handleClick(e, id) {
    e.preventDefault();
    navigate(`/polls/${id}`, { state: 1});

  };
  
  return (
    <>
   
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {polls.map((content, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <div className="map-result" onClick={(e) => handleClick(e, content[1].answers[0].poll_id)}>
            <Paper sx={{ height: "200px", color: "primary"}}>
              <div className="poll-titre">
                <p className="poll-name">{content[0].name}</p>
              </div>
              <br></br>
              <section className="host-by">
                <p className="host-name">{content[0].user_id}</p>
                <div className="poll-total-vote">
                  <i className="fa-solid fa-user chateau"></i>
                  <p>{(content[1].answers[0].vote_count) + (content[1].answers[1].vote_count)}</p>
                </div>
              </section>
              <br></br>
              <div className="poll-positive">
                <p>{content[0].agree}</p>
                <i className="fa-solid fa-user"></i>
                <a>{content[1].answers[0].vote_count}</a>
              </div>
              <div className="poll-negative">
                <a>{content[0].disagree}</a>
                <i className="fa-solid fa-user"></i>
                <a>{content[1].answers[1].vote_count}</a>
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
