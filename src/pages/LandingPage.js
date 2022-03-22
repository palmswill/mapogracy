import React, { useEffect, useState } from "react";
// import Drawablemap from "../components/map/DrawableMap";
import Arcmap from "../components/map/Arcmap";
import axios from "axios";
import LandingPageLayout from "../layouts/LandingPageLayout";
import { Paper } from "@mui/material";
import TopPoll from "../components/LandingPageComponents/TopPoll";
import PollBrowser from "../components/LandingPageComponents/PollBrowser";

import Population from "../components/Polls";
import Race from "../components/Race";
import TotalVote from "../components/Total_vote";
import "../styles/app.scss";

const ethnicity = [
  "Whit(non-hispanic)",
  "Hispanic",
  "Black and Afrrican American",
  "Asia",
];
const email = ["a@aol.com", "b@aol.com"];
const vote_number = [300, 200, 350, 130];

const voteNumber = function (emails) {
  let number = 0;

  const voteExist = true;
  // const voteExist = emails.include("a@aol.com")
  if (!voteExist) {
    number++;
  }
  return 57;
};

const Landingpage = (props) => {
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
        <div className="showMap">
          <section className="container-with-map">
            <div>
              <TopPoll>
                <Paper
                  sx={{
                    height: "400px",
                  }}
                >
                  <Arcmap
                    className="arcmap"
                    center={[-118.244, 34.052]}
                    voteList={voteList}
                    zoom={5}
                    getPolygonPoints={getPolygonPoints}
                  />
                </Paper>
              </TopPoll>
            </div>
          </section>
          <section className="container">
            <ul className="ethnicity_total">
              <li className="ethnicity">{ethnicity[0]}</li>
              <br />
              <li className="number_vote">
                {vote_number[0] + voteNumber(email)}
              </li>
              <br />
              <li className="ethnicity">  {ethnicity[1]}</li>
              <br />
              <li className="number_vote">
                {vote_number[1] + voteNumber(email)}
              </li>
              <br />
              <li className="ethnicity">{ethnicity[2]}</li>
              <br />
              <li className="number_vote">
                {vote_number[2] + voteNumber(email)}
              </li>
              <br />
              <li className="ethnicity">{ethnicity[3]}</li>
              <br />
              <li className="number_vote">
                {vote_number[3] + voteNumber(email)}
              </li>
              <br />
            </ul>
          </section>
        </div>
        <PollBrowser />
      </LandingPageLayout>
    </>
  );
};

export default Landingpage;
// dele the height from here and create a layout inside of panel
