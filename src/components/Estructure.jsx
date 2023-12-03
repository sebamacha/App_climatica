import React from "react";
import Search from "./Search";
import OpenWathers from "./OpenWathers";

function Estructure() {
  return (
    <div className=''>
      {/* Barra de búsqueda al principio */}
      <div className='mb-3 text-gray-500 dark:text-gray-400'>
        <Search />
      </div>

      {/* Contenedor para el contenido principal */}
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-3'>
        {/* Contenido principal: OpenWathers u otras APIs */}
        <div className='mb-3 text-gray-500 dark:text-gray-400'>
          <OpenWathers />
        </div>
        <div className='mb-3 text-gray-500 dark:text-gray-400'>
          <OpenWathers />
        </div>
        <div className='mb-3 text-gray-500 dark:text-gray-400'>
          {/* Otra API */}
        </div>
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
