import React, { useEffect, useState } from 'react';
import Arcmap from '../components/map/Arcmap';
import Population from '../components/Population';
import "../styles/app.scss";
import axios from 'axios';

const Landingpage = () => {
  const [poll, setPoll] = useState({});

  useEffect(() => {
    axios
      .get("/dummy/testData.json")
      .then((res) => res.data)
      .then((result) => setPoll(result));
  }, []);

  const voteList = poll.votes ? poll.votes : [];

 

  const getPolygonPoints = (points) => {
    console.log(points);
  };

  return (
    <>
      <h1>Landing</h1>
      <Arcmap
        height="500px"
        voteList={voteList}
        zoom={5}
        getPolygonPoints={getPolygonPoints}
      />
    </>
  );
};

export default Landingpage;
// dele the height from here and create a layout inside of panel