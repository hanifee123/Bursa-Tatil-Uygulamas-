// Harita.js
import React from 'react';
import { MapContainer as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';

const MapContainer = () => {
  const defaultCenter = [40.1800, 29.0679];

  return (
    <LeafletMap center={defaultCenter} zoom={10} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={defaultCenter}>
        <Popup>Bursa Plajları</Popup>
      </Marker>
    </LeafletMap>
  );
};

export default MapContainer;
