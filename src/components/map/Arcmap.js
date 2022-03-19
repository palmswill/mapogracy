import React, { useEffect } from "react";
import Map from "@arcgis/core/Map";
import esriConfig from "@arcgis/core/config";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
const Arcmap = ({
  width = "100%",
  height = "100%",
  center = [-118.244, 34.052],
  zoom = 12,
  voteList = [],
}) => {
  const mapStyle = {
    height,
    width,
  };

  esriConfig.apiKey =process.env.REACT_APP_ARCGIS_KEY

  // initialize map
  
  // settting map if center or zoom Change
  useEffect(() => {
    // start map with coordinates and zoom level
    const map = new Map({
      basemap: "arcgis-topographic", // Basemap layer service
    });

    
    const view = new MapView({
      map: map, //the arcGISMap class object;
      container: "viewDiv", //div id where it should be put
      center: center, // [long,lad] center of map
      zoom: zoom, // zoom level
    });
    // event after when map runs
    view.when(() => {
      console.log("Map is loaded");
    });

    const graphicsLayer = new GraphicsLayer();
    map.add(graphicsLayer);

    voteList.forEach((vote) => {
      const [long, lat] = vote.cords;
      const point = {
        //Create a point
        type: "point",
        longitude: long,
        latitude: lat,
      };
      const simpleMarkerSymbol = {
        type: "simple-marker",
        color: [226, 119, 40], // Orange
        outline: {
          color: [255, 255, 255], // White
          width: 1,
        },
      };

      const pointGraphic = new Graphic({
        geometry: point,
        symbol: simpleMarkerSymbol,
      });
      graphicsLayer.add(pointGraphic);
    });


  }, [zoom,voteList, center]);

  

  return <div id="viewDiv" style={mapStyle}></div>;
};

export default Arcmap;
