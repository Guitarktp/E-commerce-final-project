import React, { useState, useCallback } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function Mapgoogle({ setFormData }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const [markerPosition, setMarkerPosition] = useState(null);

  const handleClick = (event) => {
    const newLat = event.detail.latLng.lat;
    const newLng = event.detail.latLng.lng;
    setMarkerPosition({ lat: newLat, lng: newLng });
    setFormData((prevData) => ({
      ...prevData,
      latitude: `${newLat}`,
      longitude: `${newLng}`,
    }));
    return;
  };

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "744px", height: "400px" }}
        defaultCenter={{ lat: 13.736717, lng: 100.523186 }}
        defaultZoom={15}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
        onClick={handleClick}
      >
        <Marker position={markerPosition} />
      </Map>
    </APIProvider>
  );
}

export default Mapgoogle;
