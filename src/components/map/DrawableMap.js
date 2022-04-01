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
  zoom = 5, //zoom level
  center = [-118.244, 34.052],
  pollRadius = 500,
  handleSetState,
  poll,
}) => {
  const [mapCenter, setMapCenter] = useState(center);

  const [radius, setRadius] = useState(pollRadius);

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
    "Africa",
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
    handleSetState("region", region);
  }, [region, handleSetState]);

  useEffect(() => {
    PointGraphicsLayerRef.current.removeAll();
    GeometryGraphicsLayerRef.current.removeAll();
    setPoint(mapCenter, PointGraphicsLayerRef.current);
    setCircle(mapCenter, radius, GeometryGraphicsLayerRef.current);
  }, [mapCenter, GeometryGraphicsLayerRef, PointGraphicsLayerRef, radius]);

  useEffect(() => {
    handleSetState("radius", Number(radius));
  }, [radius, handleSetState]);

  const handleRadiusChange = (e) => {
    setRadius(e.target.value);
    handleSetState("radius", Number(e.target.value));
    PointGraphicsLayerRef.current.removeAll();
    GeometryGraphicsLayerRef.current.removeAll();
    setPoint(mapCenter, PointGraphicsLayerRef.current);
    setCircle(mapCenter, radius, GeometryGraphicsLayerRef.current);
  };

  // viewport click event listener
  useEffect(() => {
    viewRef.current.on("click", (e) => {
      PointGraphicsLayerRef.current.removeAll();
      GeometryGraphicsLayerRef.current.removeAll();

      const coords = getClickedCoordinates(e);
      handleSetState("center", [coords[1], coords[0]]);
      setMapCenter(coords);
      setPoint(mapCenter, PointGraphicsLayerRef.current);
      setCircle(mapCenter, radius, GeometryGraphicsLayerRef.current);
    });
  }, [
    radius,
    GeometryGraphicsLayerRef,
    PointGraphicsLayerRef,
    viewRef,
    handleSetState,
    mapCenter,
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
