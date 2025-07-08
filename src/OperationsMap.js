import React, { useState } from 'react';
import { MapContainer, TileLayer, ImageOverlay } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import UserLocation from './UserLocation';
import overlayImages from './overlayImages';

const OperationsMap = () => {
  const [showOverlays, setShowOverlays] = useState(true);

  const toggleOverlays = () => {
    setShowOverlays(prev => !prev);
  };

  return (
    <div style={{ position: 'relative' }}>
      <MapContainer 
        center={[44.05578432806585, -123.38670893629666]} 
        zoom={15} 
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showOverlays && overlayImages.map((overlay, index) => (
          <ImageOverlay
            key={index}
            url={overlay.url}
            bounds={overlay.bounds}
            opacity={overlay.opacity}
          />
        ))}
        <UserLocation />
      </MapContainer>

      
      <button
        onClick={toggleOverlays}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1000,
          padding: '8px 12px',
          backgroundColor: showOverlays ? '#04777a' : '#555',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        {showOverlays ? 'Hide Overlays' : 'Show Overlays'}
      </button>
    </div>
  );
};

export default OperationsMap;
