import React, { useState, useEffect } from "react";
import Card from "./Card";

function OpenWathers() {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const getLocation = async () => {
      setLoading(true);
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            const urlWeather = `https://api.openweathermap.org/data/2.5/weather?appid=TU_API_KEY_AQUI&lang=es&lat=${latitude}&lon=${longitude}`;
            const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?appid=TU_API_KEY_AQUI&lang=es&lat=${latitude}&lon=${longitude}`;

            try {
              const [weatherResponse, forecastResponse] = await Promise.all([
                fetch(urlWeather),
                fetch(urlForecast),
              ]);

              if (!weatherResponse.ok || !forecastResponse.ok) {
                throw new Error("Network response was not ok");
              }

              const weatherData = await weatherResponse.json();
              const forecastData = await forecastResponse.json();

              setWeather(weatherData);
              setForecast(forecastData);
              setLoading(false);
              setShow(true);
            } catch (error) {
              console.error("Error fetching data:", error);
              setLoading(false);
              setShow(false);
            }
          },
          (error) => {
            console.error("Error getting geolocation:", error);
            setLoading(false);
            setShow(false);
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        setLoading(false);
        setShow(false);
      }
    };

    getLocation();
  }, []);

  return (
    <React.Fragment>
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </React.Fragment>
  );
}

export default OpenWathers;
