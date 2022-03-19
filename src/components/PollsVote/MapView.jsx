import React, { useRef, useEffect } from 'react';

export const MapView = ({ basemap, zoom }) => {
  const [view, setView] = useState(null);
  const mapRef = useRef();

  useEffect(() => {
    // read map and view properties from props
    const mapProperties = { basemap };
    const viewProperties = { zoom };
    if (!view) {
      return;
    }
    // create map end view
    setView(createMapView(mapRef.current, mapProperties, viewProperties));
    // clean up
    return () => { view && view.destroy(); };
  }, [view, basemap]); // only after initial render

  return(
    <div ref={mapRef} />
  );

};