import React, { useEffect, useState } from "react";
// import Drawablemap from "../components/map/DrawableMap";
// import Arcmap from "../components/map/Arcmap";
import Arcmap from "../components/map/Arcmap";

import axios from "axios";
import LandingPageLayout from "../layouts/LandingPageLayout";
import { Paper } from "@mui/material";
import TopPoll from "../components/LandingPageComponents/TopPoll";
import PollBrowser from "../components/LandingPageComponents/PollBrowser";

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
      <LandingPageLayout>
        <TopPoll>
          <Paper
            sx={{
              height: "400px",
            }}
          >
            <Arcmap
              center={[-118.244, 34.052]}
              voteList={voteList}
              zoom={5}
              getPolygonPoints={getPolygonPoints}
            />
          </Paper>
        </TopPoll>
        <PollBrowser/>
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
      /> */}
    </>
  );
};

export default Landingpage;
