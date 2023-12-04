import React from "react";
import Location from "./location";
import OpenWathers from "./OpenWathers";

function Estructure() {
  return (
    <div className=''>
      {/* geolocalizacion */}
      <Location />
      <div className='mb-3 text-gray-500 dark:text-gray-400'></div>

      {/* Contenedor para el contenido principal */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
        {/* Contenido principal: OpenWathers u otras APIs */}
        <div className='mb-3 text-gray-500 dark:text-gray-400 sm:col-span-2'>
          <OpenWathers />
        </div>
        {/* Otros divs con la misma estructura */}
        {/* ... */}
      </div>

      {/* Contenido adicional */}
      <div className='mb-3 text-gray-500 dark:text-gray-400'>
        Deliver great service experiences fast - without the complexity of
        traditional ITSM solutions.Accelerate critical development work,
        eliminate toil, and deploy changes with ease, with a complete audit
        trail for every change.
      </div>
    </div>
  );
}

export default Estructure;
