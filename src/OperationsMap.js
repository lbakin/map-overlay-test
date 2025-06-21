import React from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import UserLocation from './UserLocation';
import overlayImages from './overlayImages';

const OperationsMap = () => {

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
