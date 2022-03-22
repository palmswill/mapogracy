import { Tab, Tabs } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import Pollresultshow from "./PollResultShow";
import RegionSelect from "./RegionSelect";
import SpacedButtonGroup from "./SpacedButtonGroup";

const Pollbrowser = () => {
  const [pageIndex, setPageIndex] = useState(0);
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

  useEffect(() => {
    setPageIndex(0);
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
      <Pollresultshow/>
      <Box sx={{height:"50px"}}></Box>
    </>
  );
};

export default Pollbrowser;
