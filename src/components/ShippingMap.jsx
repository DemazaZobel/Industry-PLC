import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix for default marker icon issues in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const shippingRoutes = [
  {
    from: [41.8781, -87.6298], // Chicago [lat, lng]
    to: [9.0054, 39.7284],    // Addis Ababa
    label: "Chicago - Addis Ababa",
  },
  {
    from: [1.3521, 103.8198], // Singapore
    to: [9.0054, 39.7284],    // Addis Ababa
    label: "Singapore - Addis Ababa",
  },
  {
    from: [48.8566, 2.3522],  // Paris
    to: [9.0054, 39.7284],    // Addis Ababa
    label: "Paris - Addis Ababa",
  },
];

const certifications = [
  {
    coordinates: [9.0054, 39.7284],
    name: "Dankil HQ - ISO 9001 Certified",
  },
  {
    coordinates: [1.3521, 103.8198],
    name: "Singapore Port - Compliance Verified",
  },
];

const ShippingMap = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-primaryText mb-8 text-center">
        Global Shipping Routes & Certifications
      </h2>

      <MapContainer
        center={[20, 0]} // Centered near Africa for global view
        zoom={2}
        scrollWheelZoom={false}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        />

        {/* Draw Shipping Routes */}
        {shippingRoutes.map(({ from, to, label }, i) => (
          <Polyline
            key={i}
            positions={[from, to]}
            color="#0084A9"
            weight={3}
            opacity={0.7}
          >
            <Tooltip>{label}</Tooltip>
          </Polyline>
        ))}

        {/* Certification Markers */}
        {certifications.map(({ coordinates, name }, i) => (
          <Marker key={i} position={coordinates}>
            <Tooltip>{name}</Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default ShippingMap;
