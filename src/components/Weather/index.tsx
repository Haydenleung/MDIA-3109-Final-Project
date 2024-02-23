import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { WeatherData } from '../../../typings';


export default function Weather() {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const apiKey = '0add98044a12afcd463bc2e26aa52e22'; 
    const city = 'Vancouver';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    async function fetchWeather() {
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    }

    fetchWeather();
  }, []);

  return (
    <main>
    {weatherData ? (
      <div>
        <h1>Weather in {weatherData.name}</h1>
        <img 
          src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} 
          alt={weatherData.weather[0].description}
        />
        <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
        <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        <p>Feels Like: {(weatherData.main.feels_like - 273.15).toFixed(2)}°C</p>
        <p>Condition: {weatherData.weather[0].description}</p>
        <p>Humidity: {weatherData.main.humidity}%</p>
        <p>Cloudiness: {weatherData.clouds.all}%</p>
        <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString()}</p>
      </div>
    ) : (
      <p>No weather data to show right now :(</p>
    )}
  </main>
  
  );
}
