import { useEffect, useRef } from "react";

import { getMap } from "../helpers/mapHelpers";
// arcgis
import esriConfig from "@arcgis/core/config";
import Map from "@arcgis/core/Map";

import MapView from "@arcgis/core/views/MapView";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";

export default function useMap(zoom, center, mapContainerId) {
  //esriconfig that takes the api key
  esriConfig.apiKey = process.env.REACT_APP_ARCGIS_KEY;

  //
  const viewRef = useRef(new MapView()); //viewport ref
  const PointGraphicsLayerRef = useRef(new GraphicsLayer());
  const GeometryGraphicsLayerRef = useRef(new GraphicsLayer());
  const mapRef = useRef(new Map());

  // initialize polygon layers
  useEffect(() => {
    // initialize map
    const [map, view] = getMap(zoom, center, mapContainerId);
    viewRef.current = view;
    mapRef.current = map;
    // create polygon layer (area);
    const PointGraphicsLayer = new GraphicsLayer();
    PointGraphicsLayerRef.current = PointGraphicsLayer;
    map.add(PointGraphicsLayer);
    const GeometryGraphicsLayer = new GraphicsLayer();
    GeometryGraphicsLayerRef.current = GeometryGraphicsLayer;

    map.add(GeometryGraphicsLayer);
  }, [zoom, center, mapContainerId]);

  return [viewRef, PointGraphicsLayerRef, GeometryGraphicsLayerRef, mapRef];
}
