import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherCondition, WeatherData } from "../../../typings";
import styles from "./Weather.module.css";
import Image from "next/image";
import temp from "../../../public/images/temp.svg"
import up from "../../../public/images/up.svg"
import down from "../../../public/images/down.svg"
import { WeatherProps } from "../../../typings";
import Link from "next/link";
import PrimaryButton from "@/components/Buttons/primaryButton";

const weatherIcon = {
  Clear: "clear.svg",
  Clouds: "clouds.svg",
  Rain: "rain.svg",
  Snow: "snow.svg",
  Thunderstorm: "thunderstorm.svg",
};

const apiKey = process.env.NEXT_PUBLIC_API_WEATHER

export const Weather: React.FC<WeatherProps> = ({ location, getWeather }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location},ca&appid=${apiKey}`;

    async function fetchWeather() {
      try {
        const response = await axios.get(url);
        setWeatherData(response.data);
        getWeather(true);
      } catch (error) {
        console.error("Error:", error);
        getWeather(false);
      }
    }

    fetchWeather();
  }, []);

  const getWeatherIcon = (weather: WeatherCondition) => {
    const defaultIcon = "default.svg";
    return weatherIcon[weather]
      ? `/images/${weatherIcon[weather]}`
      : `/images/${defaultIcon}`;
  };

  return (
    <main>
      
      {weatherData ? (
        <div className={styles.weather_data_container}>

          <div className={styles.vectorContainerDesktop}>
            <Image
              src={`/illustrations/${weatherData.weather[0].icon}.png`}
              width={400}
              height={400}
              alt="welcome"
            />
          </div>

          <div className={styles.weatherOuterContainer}>

            <div className={styles.weatherContainer}>
              <div>It is</div>
              <span className={styles.bigWeather}>
                {weatherData.weather[0].description
                  .split(" ")
                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                  .join(" ")}
              </span>
              <div>in <span className={styles.location}>{location}</span></div>
            </div>

            <div className={styles.vectorContainerTabletPhone}>
              <Image
                src={`/illustrations/${weatherData.weather[0].icon}.png`}
                width={400}
                height={400}
                alt="welcome"
              />
             </div>

            <div className={styles.tempContainer}>
              <div className={styles.bigTemp}>{(weatherData.main.temp - 273.15).toFixed(0)}°C</div>
              <div className={styles.subInfo}>
                <div className={styles.subText}>
                  <Image 
                    src={temp} 
                    className={styles.iconS} 
                    width={15} 
                    height={15} 
                    alt="searchIcon" 
                  />
                  Feels Like: {(weatherData.main.feels_like - 273.15).toFixed(0)}°C
                </div>
                <div className={styles.subTemp}>
                  <div className={styles.subText}>
                    <Image 
                      src={up} 
                      className={styles.iconS} 
                      width={15} 
                      height={15} 
                      alt="searchIcon" 
                    />
                    {(weatherData.main.temp_max - 273.15).toFixed(0)}°C</div>
                  <div className={styles.subText}>
                    <Image 
                      src={down} 
                      className={styles.iconS} 
                      width={15} 
                      height={15} 
                      alt="searchIcon" 
                    />
                    {(weatherData.main.temp_min - 273.15).toFixed(0)}°C</div>
                </div>
              </div>
            </div>


          </div>


          {/* <div className={styles.temp_data}>
            <p className={styles.temp_data_current}>
              {(weatherData.main.temp - 273.15).toFixed(2)}°C
            </p>
            <p className={styles.temp_data_feelslike}>
              Feels Like: {(weatherData.main.feels_like - 273.15).toFixed(2)}°C
            </p>
          </div>
          <div className={styles.weather_type_data}>
            <p>
              {weatherData.weather[0].description
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")}
            </p>
            <p>Wind speed: {(weatherData.wind.speed * 3.6).toFixed(2)} km/h</p>
            <p>Humidity: {weatherData.main.humidity}%</p>
          </div>

          <div className={styles.sunrise_sunset_data}>
            <p>
              Sunrise:{" "}
              {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>
              Sunset:{" "}
              {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </div> */}
        </div>
      ) : (
        <>
          <p className={styles.errormsg}>No weather data to show right now :(</p>
          <p className={styles.suberrormsg}>Try to search a city in Metro Vancouver</p>
          <Link href="/">
            <button className={styles.returnbtn}>Search Again</button>
          </Link>
        </>
      )}
    </main>
  );
}

export default Weather;
