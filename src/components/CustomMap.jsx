import React, { useEffect } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../assets/css/cumtomMap.css";

function CustomMap() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const map = L.map("custom-map-container").setView(
          [latitude, longitude],
          15 // Nivel de zoom aumentado
        );

        // Agregar marcador en la ubicación del usuario
        L.marker([latitude, longitude])
          .addTo(map)
          .bindPopup("¡Estás aquí!")
          .openPopup();

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(map);
      },
      (error) => {
        console.error("Error obtaining user location:", error);
      }
    );
  }, []);

  return (
    <div
      className='customMap'
      id='custom-map-container'
      style={{ height: "400px" }}
    />
  );
}

export default CustomMap;
