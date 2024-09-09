// src/components/Map.js
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function Map() {
  const ipKey = process.env.REACT_APP_IP_KEY;
  const [position, setPosition] = useState([51.505, -0.09]); // Default to some position
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `https://api.ipapi.com/api/check?access_key=${ipKey}`
        );
        const data = await response.json();
        if (data && data.latitude && data.longitude) {
          setPosition([data.latitude, data.longitude]);
        } else {
          console.error("Failed to get location data");
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLocation();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "50vh", width: "100%", margin: "20px 0px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
        icon={L.icon({
          iconUrl:
            "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowUrl:
            "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
          shadowSize: [41, 41],
        })}
      >
        <Popup>
          You are here: {position[0]}, {position[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
