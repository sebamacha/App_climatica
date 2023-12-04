import React from "react";
import Spinner from "./Spinner";
import "./RandomImage";
import RandomImage from "./RandomImage";
import "../assets/css/card.css";
function Card({ loadingData, showData, weather, forecast }) {
  // variable para obtener fecha actual
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();
  // concatenamos todas las variables
  var date = day + "/" + month + "/" + year;

  var url = "";
  var iconUrl = "";
  var iconUrl3 = "";
  var iconUrl6 = "";
  var iconUrl9 = "";

  var forecastDate3 = "";
  var forecastDate6 = "";
  var forecastDate9 = "";

  if (loadingData) {
    return <Spinner />;
  }
  if (showData) {
    url = "http://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      " " +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      " " +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      " " +
      forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className='contenedor-principal'>
      {/* show data decide que es lo ue tiene que mostrar  */}
      {showData === true ? (
        <div className='contenedor-principal'>
          <div class=' flex items-center justify-center contenedor-principal '>
            <div class='w-full flex flex-col sm:flex-row contenedor-principal'>
              <div class='flex-1 lado-izquierdo'>
                <h3 class='text-xl mb-2'>
                  <p className='card-name'>{weather.name}</p>
                  <p className='card-date'>{date}</p>
                </h3>
                <div className='container-img'>
                  <h1 className='card-temp'>
                    {(weather.main.temp - 273.15).toFixed(1)}ºC
                  </h1>
                  <p className='card-desc'>
                    <img className='icon-desc' src={iconUrl} alt='icon' />
                    {weather.weather[0].description}
                  </p>

                  <RandomImage />
                </div>
              </div>
              <div class='flex-1 '>
                <h3 class='text-xl mb-2  datos-de'>Datos de {weather.name}</h3>
                <div>
                  <h5 className='text-black font-bold'>
                    Temperatura máxima:{" "}
                    {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className='text-black font-bold'>
                    Temperatura mínima:{" "}
                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className='text-black font-bold'>
                    sensación térmica:{" "}
                    {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className='text-black font-bold'>
                    Humedad: {weather.main.humidity}%
                  </h5>
                  <h5 className='text-black font-bold'>
                    Velocidad del viento: {weather.wind.speed}m/s
                  </h5>
                  <hr />
                  <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                    <div className='text-black font-bold'>
                      <p>{forecastDate3}h</p>
                      <p className='text-black font-bold'>
                        <img src={iconUrl3} alt='icon' />
                        {forecast.list[1].weather[0].description}
                      </p>
                      <p className='text-black font-bold'>
                        {(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC
                      </p>
                    </div>
                    <div className='text-black font-bold'>
                      <p>{forecastDate6}h</p>
                      <p className='description'>
                        <img src={iconUrl6} alt='icon' />
                        {forecast.list[2].weather[0].description}
                      </p>
                      <p className='text-black font-bold'>
                        {(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC
                      </p>
                    </div>
                    <div className='text-black font-bold'>
                      <p>{forecastDate9}h</p>
                      <p className='description'>
                        <img src={iconUrl9} alt='icon' />
                        {forecast.list[3].weather[0].description}
                      </p>
                      <p className='temp'>
                        {(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className='sin-datos'>sin datos Ingresados </h1>
      )}
    </div>
  );
}

export default Card;
