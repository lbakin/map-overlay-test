import React, { useState, useEffect, useRef } from 'react';
import {  Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Define the custom icon
const customIcon = L.icon({
  iconUrl: '/images/Marker_Oregon.png',  // Adjust the path based on where you store your image
  iconSize: [50, 75],  // Size of the icon
  iconAnchor: [20, 80],  // Point of the icon which will correspond to marker's location
  popupAnchor: [1, -34],  // Point from which the popup should open relative to the iconAnchor
});

const UserLocation = () => {
  const [userLocation, setUserLocation] = useState([44.05578432806585, -123.38670893629666]);

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
    const mapRef = useRef(null);
    const map = useMap();
    mapRef.current = map;
    
    useEffect(() => {
      if (userLocation) {
        mapRef.current.flyTo(userLocation, mapRef.current.getZoom());
      }
      //eslint-disable-next-line
    }, [userLocation]);  
    

    return userLocation === null ? null : (
      <Marker position={userLocation} icon={customIcon}>
        <Popup>You are here</Popup>
      </Marker>
    );
  };
  return <LocationMarker />;
}

export default UserLocation;