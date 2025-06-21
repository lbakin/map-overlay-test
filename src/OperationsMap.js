import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, ImageOverlay } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import UserLocation from './UserLocation';
import overlayImages from './overlayImages';

const OperationsMap = () => {

  // Bounds are calculated with two points. Top-left and bottom-right
  const operationsBounds = [[44.05861201789468, -123.37425914407858], [44.05316623522475, -123.37008738693812]];

  return (
    <MapContainer center={[44.05578432806585, -123.38670893629666]} zoom={15} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {overlayImages.map((overlay, index) => (
  <ImageOverlay
    key={index}
    url={overlay.url}
    bounds={overlay.bounds}
    opacity={overlay.opacity}
  />
))}
      <UserLocation />
    </MapContainer>
  );
};

export default OperationsMap;
