import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Pollresultshow from "./PollResultShows";
import RegionSelect from "./RegionSelect";
import SpacedButtonGroup from "./SpacedButtonGroup";
import axios from "axios";




const polls = [];
const PollBrowser = () => {
  const [liveIndex, setLiveIndex] = useState(0);
  const [regionIndex, setRegionIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const live = ["Ongoing Pollings", "Finished Polls"];
  const [regions] = useState([
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Oceania",
  ]);
  const [categories] = useState([
    "Nature",
    "Econ",
    "Travel",
    "Politics",
    "Media",
    "Others",
  ]);

  const PollResult = () => {
    const [polls, setPolls] = useState();
    useEffect(() => {
      axios
        .get("http://mapocracy-api.azurewebsites.net/")
        .then((res) => res.data)
        .then((polls) => setPolls(polls));
        // return polls;
  }, []);
  
  }
  
  // PollResult();

  useEffect(() => {
  }, [regionIndex, categoryIndex, liveIndex]);

  return (
    <>
      <Box sx={{ display: "flex",flexWrap:"wrap" }}>
        <Tabs
          value={liveIndex}
          onChange={(e, newValue) => {
            setLiveIndex(newValue);
          }}
          textColor="primary"
          indicatorColor="primary"
        >
          {live.map((text, index) => {
            return <Tab key={index}value={index} label={text} />;
          })}
        </Tabs>
        <RegionSelect {...{ regions, regionIndex, setRegionIndex }} />
      </Box>
      <SpacedButtonGroup
        groupItems={categories}
        currentIndex={categoryIndex}
        setCurrentIndex={setCategoryIndex}
      />
      <Pollresultshow currentPolls={polls}/>
      <Box sx={{height:"50px"}}></Box>
    </>
  );
};

export default PollBrowser;
