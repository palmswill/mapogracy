import React, { useEffect, useRef } from "react";

import {
  getClickedCoordinates,
  getMap,
  setPoint,
  setPolygon,
} from "../../helpers/mapHelpers";

import esriConfig from "@arcgis/core/config";

import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

const Arcmap = ({
  width = "95%",
  height = "100%",
  center = [-118.244, 34.052],
  zoom = 12,
  voteList = [],
  getPolygonPoints,
}) => {
  const areaPoints = useRef([]);

  const mapStyle = {
    height,
    width,
  };

  //esriconfig that takes the api key
  esriConfig.apiKey = process.env.REACT_APP_ARCGIS_KEY;

  // initialize map

  useEffect(() => {
    const [map, view] = getMap(zoom, center, "viewDiv");

    // create points layer
    const pointGraphicsLayer = new GraphicsLayer();
    map.add(pointGraphicsLayer);

    // add points according to voter list;
    voteList.forEach((vote) => {
      setPoint(vote.cords, pointGraphicsLayer);
    });

    // create polygon layer (area);
    const polygonPointsLayer= new GraphicsLayer();
    map.add(polygonPointsLayer);
    const polygonGraphicsLayer = new GraphicsLayer();
    map.add(polygonGraphicsLayer);

  
    if (getPolygonPoints) {
      view.on("click", (e) => {
        polygonGraphicsLayer.removeAll()
        const coords = getClickedCoordinates(e);
        areaPoints.current = [...areaPoints.current, coords];
        getPolygonPoints(areaPoints.current);
        setPoint(coords, polygonPointsLayer);

        setPolygon(areaPoints.current, polygonGraphicsLayer);
      });
    }
  }, [zoom, voteList, center, areaPoints, getPolygonPoints]);

  return <div id="viewDiv" style={mapStyle}></div>;
};

export default Arcmap;
