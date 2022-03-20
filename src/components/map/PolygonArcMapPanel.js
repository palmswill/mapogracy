import React, { useEffect, useRef } from "react";
import { Button } from "@mui/material";

import {
  getClickedCoordinates,
  setPoint,
  setPolygon,
} from "../../helpers/mapHelpers";


import useMap from "../../hooks/useMap";

const DrawableArcmap = ({
  width = "100%", //width of map
  height = "100%", //height of map
  center = [-118.244, 34.052], //center of map
  zoom = 5, //zoom level
  points=[],
  getPolygonPoints, //function that get polygon points
}) => {
  const areaPoints = useRef(points?points:[]);

  const mapStyle = {
    height,
    width,
  };

  const [viewRef, GeometryGraphicsLayerRef, PointGraphicsLayerRef] = useMap(
    zoom,
    center,
    "viewDiv"
  );


  

  // viewport click event listener
  useEffect(() => {
    viewRef.current.on("click", (e) => {
      GeometryGraphicsLayerRef.current.removeAll();
      const coords = getClickedCoordinates(e);
      areaPoints.current = [...areaPoints.current, coords];
      getPolygonPoints(areaPoints.current);
      setPoint(coords, PointGraphicsLayerRef.current);
      setPolygon(areaPoints.current, GeometryGraphicsLayerRef.current);
    });
  }, [getPolygonPoints,GeometryGraphicsLayerRef,PointGraphicsLayerRef,viewRef]);


  

  return (
    <>
      <div id="viewDiv" style={mapStyle}></div>
      <Button />
    </>
  );
};

export default DrawableArcmap;
