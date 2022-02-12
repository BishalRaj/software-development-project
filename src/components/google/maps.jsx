import React, { useCallback, useRef, useState } from "react";
import {
  GoogleMap,
  Marker,
  useLoadScript,
  InfoWindow,
} from "@react-google-maps/api";

const Maps = () => {
  const [markers, setMarkers] = useState([]);
  const [selected, setSelected] = useState([]);
  const libraries = ["places"];
  const mapContainerStyle = {
    width: "100vw",
    height: "85vh",
  };
  const center = { lat: 52.407121, lng: -1.510917 };
  const options = {
    disableDefaultUI: true,
    zoomControl: true,
  };

  const onMapClick = useCallback((e) => {
    setMarkers((current) => [
      ...current,
      {
        lat: e.latLng.lat(),
        lng: e.latLng.lng(),
      },
    ]);
  }, []);

  const mapRef = useRef();
  const onMapLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onMarkerClicked = () => {
    console.log("Marker Clicked");
  };

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB00OdR-qnJVFJCJaWT9P__O30_V6eGb8g",
    libraries,
  });

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading maps";

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={16}
        center={center}
        options={options}
        onClick={onMapClick}
        onLoad={onMapLoad}
      >
        {markers.map((marker, key) => (
          <Marker
            key={key}
            position={{ lat: marker.lat, lng: marker.lng }}
            icon={{
              url: "/images/coventry-university-logo.png",
              scaledSize: new window.google.maps.Size(45, 30),
              origin: new window.google.maps.Point(0, 0),
              anchor: new window.google.maps.Point(22.5, 15),
            }}
            onMouseOver={() => {
              setSelected(marker);
            }}
            onClick={onMarkerClicked}
          />
        ))}

        {selected.lat ? (
          <InfoWindow
            position={selected}
            onCloseClick={() => {
              setSelected([]);
            }}
          >
            <div onClick={onMarkerClicked}>
              <h5>Location Selected</h5>
              <p>Selected: {selected.lat}</p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
};

export default Maps;
