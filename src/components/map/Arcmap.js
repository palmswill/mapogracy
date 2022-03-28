import React, { useEffect } from "react";
import { dotColor, getMap, setPoint } from "../../helpers/mapHelpers";

import esriConfig from "@arcgis/core/config";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

const Arcmap = ({
  width = "100%",
  height = "350px",
  center = [43.65, 79.34],
  zoom = 5,
  style,
  voteList,
}) => {
  const mapStyle = {
    height,
    width,
    ...style,
  };

  // esri config that takes the api key
  esriConfig.apiKey = process.env.REACT_APP_ARCGIS_KEY;

  // initialize map

  const color=dotColor;

  useEffect(() => {
    const [map] = getMap(zoom, center, "viewDiv");

    // create points layer
    const pointGraphicsLayer = new GraphicsLayer();
    map.add(pointGraphicsLayer);

    // add points according to voter list;
    voteList.forEach((answer,index) => {
      const { coordinates } = answer;
      

      coordinates.forEach((coord) => {
        const arcCoord= [coord[1],coord[0]]  ///arcgis has is as [long,lat]; where normal its [lat,long]
        setPoint(arcCoord, pointGraphicsLayer,color[index]);
      });
    });


    // create polygon layer (area);
    const polygonPointsLayer = new GraphicsLayer();
    map.add(polygonPointsLayer);
    const polygonGraphicsLayer = new GraphicsLayer();
    map.add(polygonGraphicsLayer);
  }, [zoom, voteList, center,color]);

  return <div id="viewDiv" style={mapStyle}></div>;
};

export default React.memo(Arcmap);
