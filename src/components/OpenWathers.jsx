import React, { useState } from "react";
import Search from "../components/Search";

function OpenWathers() {
  let urlWather =
    "https://api.openweathermap.org/data/2.5/weather?appid=e036d4f4d6d54dda063441f754104fe6&lang=es";
  let cityUrl = "&q=";
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=e036d4f4d6d54dda063441f754104fe6&lang=es";
  {
    /** repeusta del tiempo actual*/
  }

  const [Wather, setWather] = useState([]);

  {
    /**repeusta del tiempo extendido */
  }
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  // variable de estado para que se pueda comunicar con el formulario
  const [location, setLocation] = useState("");
  {
    /* funcion llamada a la api, y recoje la ciudad, funcion asincrona*/
  }

  const getLocation = async (loc) => {
    setLoading(true);
    setLocation(loc);

    // Llamada a la API para obtener el clima actual
    let currentWeatherURL = urlWather + cityUrl + loc;
    await fetch(currentWeatherURL)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json(); // Corregir "Response.jason()" a "response.json()"
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWather(weatherData);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });

    // Llamada a la API para obtener el pronóstico extendido
    let extendedForecastURL = urlForecast + cityUrl + loc;
    await fetch(extendedForecastURL) // Cambiar de urlWather a urlForecast
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json(); // Corregir "Response.jason()" a "response.json()"
      })
      .then((forecastData) => {
        console.log(forecastData);
        setForecast(forecastData);
        setLoading(false);
        setShow(true);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setShow(false);
      });
  };

  return (
    <React.Fragment>
      <Search newLocation={getLocation} />
      <div className='max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
        <a href='#'>
          <img
            className='rounded-t-lg'
            src='/docs/images/blog/image-1.jpg'
            alt=''
          />
        </a>
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href='#'
            className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg
              className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'>
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default OpenWathers;
