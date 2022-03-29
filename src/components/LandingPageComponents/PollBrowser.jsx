import { Tab, Tabs, Grid, Paper } from "@mui/material";

import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import Pollresultshow from "./PollResultShows";
import RegionSelect from "./RegionSelect";
import SpacedButtonGroup from "./SpacedButtonGroup";
import axios from "axios";
import {
  categoryOptions,
  regionOptions,
} from "../../helpers/DemographicOptions";
import PollDisplayerLoadingSection from "./PollDisplayerLoadingSection";

// const polls = [];
const PollBrowser = () => {
  const [liveIndex, setLiveIndex] = useState(0);
  const [regionIndex, setRegionIndex] = useState(0);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const live = ["Ongoing Pollings", "Finished Polls"];

  const categories = categoryOptions;
  const regions = regionOptions;

  const [polls, setPolls] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://mapocracy-api.azurewebsites.net/poll?category=${
          categories[categoryIndex]
        }&&region=${regions[regionIndex]}&&time=${
          liveIndex ? "past" : "current"
        }`
      )
      .then((res) => {
        const posts = res.data;
        setIsLoading(false);
        setPolls(posts);
      })
      .catch((error) => console.log("Error", error));
  }, [regionIndex, categoryIndex, liveIndex, categories, regions]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Tabs
          value={liveIndex}
          onChange={(e, newValue) => {
            setLiveIndex(newValue);
          }}
          textColor="primary"
          indicatorColor="primary"
        >
          {live.map((text, index) => {
            return <Tab key={index} value={index} label={text} />;
          })}{" "}
        </Tabs>{" "}
        <RegionSelect
          {...{
            regions,
            regionIndex,
            setRegionIndex,
          }}
        />{" "}
      </Box>{" "}
      <SpacedButtonGroup
        groupItems={categories}
        currentIndex={categoryIndex}
        setCurrentIndex={setCategoryIndex}
      />
      {isLoading && (
       <PollDisplayerLoadingSection />
      )}
      {!isLoading && (
        <Pollresultshow
          poll={polls}
          region={regions[regionIndex]}
          category={categories[categoryIndex]}
          status={live[liveIndex]}
        />
      )}{" "}
      <Box
        sx={{
          height: "50px",
        }}
      >
        {" "}
      </Box>{" "}
    </>
  );
};

export default PollBrowser;
