import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the custom icon
const customIcon = L.icon({
  iconUrl: '/images/Marker_Oregon.png',  // Adjust the path based on where you store your image
  iconSize: [50, 75],  // Size of the icon
  iconAnchor: [20, 80],  // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34],  // Point from which the popup should open relative to the iconAnchor
});

const CustomMap = () => {
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setUserLocation([latitude, longitude]);
      },
      () => {
        alert('Could not fetch your location');
      }
    );
  }, []);

  const LocationMarker = () => {
    const map = useMap();

    useEffect(() => {
      if (userLocation) {
        map.flyTo(userLocation, map.getZoom());
      }
    }, [userLocation, map]);

    return userLocation === null ? null : (
      <Marker position={userLocation} icon={customIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };

  // Bounds are calculated with two points. Top-left and bottom-right
  const kentonBounds = [[45.590599995923284, -122.70865835100905], [45.57679998485993, -122.6780691107708]];

  return (
    <MapContainer center={[45.5775, -122.6816]} zoom={15} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ImageOverlay
        url="images/Kenton_Map.png"
        bounds={kentonBounds}
      />
      <LocationMarker />
    </MapContainer>
  );
};

export default CustomMap;
