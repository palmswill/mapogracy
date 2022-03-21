import React, { useEffect } from "react";

import { getMap, setPoint } from "../../helpers/mapHelpers";

import esriConfig from "@arcgis/core/config";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

const Arcmap = ({
  width = "95%",
  height = "100%",
  center =[43.65 ,79.34],
  zoom = 5,
  voteList = [],
}) => {
  const mapStyle = {
    height,
    width,
  };

  //esriconfig that takes the api key
  esriConfig.apiKey = process.env.REACT_APP_ARCGIS_KEY;

  // initialize map

  useEffect(() => {
    const [map] = getMap(zoom, center, "viewDiv");

    // create points layer
    const pointGraphicsLayer = new GraphicsLayer();
    map.add(pointGraphicsLayer);

    // add points according to voter list;
    voteList.forEach((vote) => {
      setPoint(vote.cords, pointGraphicsLayer);
    });

    // create polygon layer (area);
    const polygonPointsLayer = new GraphicsLayer();
    map.add(polygonPointsLayer);
    const polygonGraphicsLayer = new GraphicsLayer();
    map.add(polygonGraphicsLayer);
  }, [zoom, voteList, center]);

  return <div id="viewDiv" style={mapStyle}></div>;
};

export default Arcmap;
