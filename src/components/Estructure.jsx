import React from "react";
import CustomMap from "./CustomMap";
import OpenWathers from "./OpenWathers";
// import MeteoSource from "./MeteoSource";

function Estructure() {
  return (
    <div className=''>
      {/* geolocalizacion */}

      <div className='mb-3 text-gray-500 dark:text-gray-400'></div>

      {/* Contenedor para el contenido principal */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
        {/* Contenido principal: OpenWathers u otras APIs */}
        <div className='mb-3 text-gray-500 dark:text-gray-400 sm:col-span-2'>
          <OpenWathers />
        </div>
        <div className='customMap'>
          <CustomMap />
        </div>
      </div>

      {/* Contenido adicional */}
      <div className='mb-3 text-gray-500 dark:text-gray-400'>
        {/* <MeteoSource /> */}
      </div>
    </div>
  );
}

export default Estructure;
