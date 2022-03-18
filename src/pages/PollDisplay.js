import React from 'react';
import { useParams } from 'react-router-dom';

const Polldisplay = () => {
  const pollId=useParams().pollid;
  
  return (
    <div>
      <h1>Poll Id:{pollId}</h1>
      
      
    </div>
  );
}

export default Polldisplay;
