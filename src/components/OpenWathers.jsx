import React, { useState } from "react";
import Search from "../components/Search";
import Card from "./Card";
function OpenWathers() {
  let urlWeather =
    "https://api.openweathermap.org/data/2.5/weather?appid=e036d4f4d6d54dda063441f754104fe6&lang=es";
  let cityUrl = "&q=";
  let urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?appid=e036d4f4d6d54dda063441f754104fe6&lang=es";
  {
    /** repeusta del tiempo actual*/
  }

  const [weather, setWeather] = useState([]);

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
    let currentWeatherURL = urlWeather + cityUrl + loc;
    await fetch(currentWeatherURL)
      .then((response) => {
        if (!response.ok) throw { response };
        return response.json(); // Corregir "Response.jason()" a "response.json()"
      })
      .then((weatherData) => {
        console.log(weatherData);
        setWeather(weatherData);
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
      <Card
        // componentes y props para visualizar la informacion
        showData={show}
        loadingData={loading}
        // datos del tiempo y la prediccion de la siguiente horas
        weather={weather}
        forecast={forecast}
      />
    </React.Fragment>
  );
}

export default OpenWathers;
