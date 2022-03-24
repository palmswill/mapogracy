import React, { useEffect, useRef, useState } from "react";
import {
  Select,
  TextField,
  FormControl,
  InputLabel,
  MenuItem,
} from "@mui/material";
import { Box } from "@mui/system";

import {
  getClickedCoordinates,
  setCircle,
  setPoint,
} from "../../helpers/mapHelpers";

import useMap from "../../hooks/useMap";
import useInput from "../../hooks/useInput";

const DrawableArcmap = ({
  width = "100%", //width of map
  height = "100%", //height of map
  mapCenter = [-118.244, 34.052], //center of map
  zoom = 5, //zoom level
  area = { radius: "500", points: [[-118.244, 34.052]] },
  handleSetState,
  poll,
}) => {
  const isCircle = area.radius;
  const areaPoints = useRef(area.points ? area.points : []);

  const [radius, setRadius] = useState(area.radius);

  const mapStyle = {
    height,
    width,
    minHeight: "200px",
  };

  const regions = [
    "Asia",
    "Europe",
    "North America",
    "South America",
    "Oceania",
  ];

  const [region, onRegionChange] = useInput(
    poll.current.region ? poll.current.region : "North America"
  );

  const [viewRef, GeometryGraphicsLayerRef, PointGraphicsLayerRef] = useMap(
    zoom,
    mapCenter,
    "viewDivCreate"
  );

  useEffect(() => {
    PointGraphicsLayerRef.current.removeAll();
    GeometryGraphicsLayerRef.current.removeAll();
    setPoint(areaPoints.current[0], PointGraphicsLayerRef.current);
    setCircle(areaPoints.current[0], radius, GeometryGraphicsLayerRef.current);
  }, [
    isCircle,
    areaPoints.current,
    GeometryGraphicsLayerRef,
    PointGraphicsLayerRef,
    radius,
  ]);

  useEffect(() => {
    handleSetState("radius", radius);
    handleSetState("restriction", areaPoints.current[0]);
  }, [radius]);

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
    });
  }, [
    radius,
    GeometryGraphicsLayerRef,
    PointGraphicsLayerRef,
    viewRef,
    area,
    isCircle,
    region,
  ]);

  return (
    <>
      <div id="viewDivCreate" style={mapStyle}></div>
      <Box sx={{ display: "flex", gap: "10px" }}>
        <FormControl>
          <InputLabel id="demo-simple-select-label">region</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={region}
            label="Region"
            onChange={onRegionChange}
          >
            {regions.map((region) => (
              <MenuItem key={region} value={region}>
                {region}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          type="number"
          label="radius"
          color="primary"
          focused
          value={radius}
          onChange={handleRadiusChange}
        />
      </Box>
    </>
  );
};

export default DrawableArcmap;
