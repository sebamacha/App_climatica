import React from "react";

function location() {
  {
    /**obtener coordenadas */
  }
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        {
          /**obtiene una data position */
        }
        const coords = {
          lat: position.coords.latitude,
          lgn: position.coords.longitude,
        };
      },
      () => {
        alert("op!, algo salio mal");
      }
    );
  } else {
    alert("tu navegador no soporta geolocalizacion");
  }

  return (
    <div>
      <div id='mapDiv'></div>
    </div>
  );
}

export default location;
