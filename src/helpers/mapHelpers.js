import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Graphic from "@arcgis/core/Graphic";


// get the
export const getMap = (zoom, center, divId) => {
  // start map with coordinates and zoom level
  const map = new Map({
    basemap: "arcgis-topographic", // Basemap layer service
  });

  const view = new MapView({
    map: map, //the arcGISMap class object;
    container: divId, //div id where it should be put
    center: center, // [long,lad] center of map
    zoom: zoom, // zoom level
  });
  // event after when map runs
  view.when(() => {
    console.log("Map is loaded");
  });

  return [map, view];
};

// set point on a given layer
export const setPoint = ([long, lat], graphicsLayer) => {
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
    size: "10px",
  };

  const pointGraphic = new Graphic({
    geometry: point,
    symbol: simpleMarkerSymbol,
  });

  graphicsLayer.add(pointGraphic);
};

// get the rounded long,lat when clicked;
export const getClickedCoordinates = (e) => {
  const longitude = e.mapPoint.longitude;
  const latitude = e.mapPoint.latitude;
  // Round the coordinates for visualization purposes
  var long = Math.round(longitude * 1000) / 1000;
  var lat = Math.round(latitude * 1000) / 1000;

  return [long, lat];
};



// set polygon providing points on graphic layer;
export const setPolygon = (points, graphicsLayer) => {
  if (points.length >= 3) {
    const polygon = {
      type: "polygon",
      rings: points,
    };
  
    const simpleFillSymbol = {
      type: "simple-fill",
      color: [227, 139, 79, 0.1], // Orange, opacity 80%
      outline: {
        color: [255, 255, 255],
        width: 1,
      },
    };
    
  
    const polygonGraphic = new Graphic({
      geometry: polygon,
      symbol: simpleFillSymbol,
    });
    graphicsLayer.add(polygonGraphic);
       
  }
 
};
