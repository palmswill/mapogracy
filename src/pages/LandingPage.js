import React from 'react';
import Arcmap from './components/map/Arcmap';


const Landingpage = () => {
 

  return (
    <>
    <h1>Landing</h1>
    <Arcmap height="500px" voteList={[{cords:[-118.244, 34.052]}]}/>

    </>)
}

export default Landingpage;
