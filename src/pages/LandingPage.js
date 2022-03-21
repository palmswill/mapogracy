import React, { useEffect, useState } from 'react';
import Arcmap from '../components/map/Arcmap';
import Population from '../components/Population';
import Race from '../components/Race';
import TotalVote from '../components/Total_vote';
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
      <Race />
      <Arcmap
        height="500px"
        voteList={voteList}
        zoom={5}
        getPolygonPoints={getPolygonPoints}
      />
        <section className="result-view">
     
     <div>
       <li>Finished Pollings</li>
       <li>Ongoing Pollings</li>
     </div>
     <li>Current polls</li>
     <li>{current_polls}</li>
   </section>
      <Population />
    </>
  );
};

export default Landingpage;
// dele the height from here and create a layout inside of panel