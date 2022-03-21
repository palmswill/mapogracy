import React from 'react';
import Arcmap from '../components/map/Arcmap';
import Population from '../components/Population';
import "../styles/app.scss";

const Landingpage = () => {
 
  console.log("test")

  return (
    <>
    <h1>Landing</h1>
    <Arcmap height="400px" voteList={[{cords:[-118.244, 34.052]}]}/>
    <Population />
    </>)
}

export default Landingpage;
// dele the height from here and create a layout inside of panel