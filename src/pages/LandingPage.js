import React, { useEffect, useState } from "react";
// import Drawablemap from "../components/map/DrawableMap";
import axios from "axios";
import LandingPageLayout from "../layouts/LandingPageLayout";
import TopPoll from "../components/LandingPageComponents/TopPoll";
import PollBrowser from "../components/LandingPageComponents/PollBrowser";

// import Population from "../components/Population";
// import Race from '../components/Race';

import "../styles/app.scss";

// const ethnicity = ["Whit(non-hispanic)", "Hispanic", "Black and Afrrican American", "Asia"];
// const email = ["a@aol.com", "b@aol.com"];
// const vote_number = [300, 200, 350, 130];

// const voteNumber = function(emails, vote_number, ethnicity) {
//   let number = 0;

//   const voteExist = true;
//   // const voteExist = emails.include("a@aol.com")
//   if (!voteExist) {
//     number++
//   }
//   return 57;

// }


const Landingpage = (props) => {
  const [poll, setPoll] = useState({});

  useEffect(() => {
    axios
      .get("/dummy/testData.json")
      .then((res) => res.data)
      .then((result) => setPoll(result));
  }, []);

 

  return (
    <>
      <LandingPageLayout>
        <TopPoll poll={poll} />
        <PollBrowser />
      </LandingPageLayout>
      {/* <h1>Landing</h1>
      <Drawablemap
        height="500px"
        zoom={5}
        getPolygonPoints={getPolygonPoints}
      /> */}
      {/* <Arcmap
        height="500px"
        center={[-118.244, 34.052]}
        voteList={voteList}
        zoom={5}
        getPolygonPoints={getPolygonPoints}
      />
      <Race />
      <Population />
       */}
    </>
  );
};

export default Landingpage;
// dele the height from here and create a layout inside of panel
