import React, { useEffect, useRef, useState } from "react";
import { Button, TextField } from "@mui/material";

import {
  getClickedCoordinates,
  setCircle,
  setPoint,
  setPolygon,
} from "../../helpers/mapHelpers";

import useMap from "../../hooks/useMap";

const DrawableArcmap = ({
  width = "100%", //width of map
  height = "100%", //height of map
  mapCenter = [-118.244, 34.052], //center of map
  zoom = 5, //zoom level
  area = { radius: "500", points: [[-118.244, 34.052]] },
  getPolygonPoints, //function that get polygon points
  handleSetState,
}) => {
  const isCircle = area.radius;
  const areaPoints = useRef(area.points ? area.points : []);

  const [radius, setRadius] = useState(area.radius);

  const mapStyle = {
    height,
    width,
    minHeight: "350px",
  };

  const [viewRef, GeometryGraphicsLayerRef, PointGraphicsLayerRef] = useMap(
    zoom,
    mapCenter,
    "viewDivCreate"
  );

  useEffect(() => {
    if (isCircle) {
      setPoint(area.points[0], PointGraphicsLayerRef.current);
      setCircle(area.points[0], radius, GeometryGraphicsLayerRef.current);
    }
  }, [isCircle, area, GeometryGraphicsLayerRef, PointGraphicsLayerRef, radius]);

  useEffect(() => {

    handleSetState("radius", area.radius);
    handleSetState("restriction", area.points[0]);
  }, [area]);

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
    handleSetState("radius", e.target.value);
    PointGraphicsLayerRef.current.removeAll();
    GeometryGraphicsLayerRef.current.removeAll();
    setPoint(areaPoints.current[0], PointGraphicsLayerRef.current);
    setCircle(areaPoints.current[0], radius, GeometryGraphicsLayerRef.current);
  };

  // viewport click event listener
  useEffect(() => {
    viewRef.current.on("click", (e) => {
      PointGraphicsLayerRef.current.removeAll();
      GeometryGraphicsLayerRef.current.removeAll();
      if (isCircle) {
        const coords = getClickedCoordinates(e);
        handleSetState("center", coords);
        areaPoints.current[0] = coords;
        setPoint(areaPoints.current[0], PointGraphicsLayerRef.current);
        setCircle(
          areaPoints.current[0],
          radius,
          GeometryGraphicsLayerRef.current
        );
      }
      if (!isCircle) {
        const coords = getClickedCoordinates(e);
        areaPoints.current = [...areaPoints.current, coords];
        getPolygonPoints(areaPoints.current);
        setPoint(coords, PointGraphicsLayerRef.current);
        setPolygon(areaPoints.current, GeometryGraphicsLayerRef.current);
      }
    });
  }, [
    radius,
    getPolygonPoints,
    GeometryGraphicsLayerRef,
    PointGraphicsLayerRef,
    viewRef,
    area,
    isCircle,
  ]);

  return (
    <>
      <div id="viewDivCreate" style={mapStyle}></div>
      <Button />
      <TextField
        type="number"
        label="radius"
        color="primary"
        focused
        value={radius}
        onChange={handleRadiusChange}
      />
    </>
  );
};

export default DrawableArcmap;
