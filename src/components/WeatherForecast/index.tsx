import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "../../../typings";
import styles from "./WeatherForecast.module.css";
import Image from "next/image";
import temp from "../../../public/images/temp.svg"
import up from "../../../public/images/up.svg"
import down from "../../../public/images/down.svg"
import { WeatherProps } from "../../../typings";
import Link from "next/link";


const apiKey = process.env.NEXT_PUBLIC_API_WEATHER

export const WeatherForecast: React.FC<WeatherProps> = ({ location, getWeather }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [weather, setWeather] = useState<any | null>(null);
  const [lat, setLat] = useState<number | null>(null);
  const [lon, setLon] = useState<number | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;
      try {
        const response = await axios.get(url);
        const { coord } = response.data;
        setWeatherData(response.data);
        setLat(coord.lat);
        setLon(coord.lon);
        getWeather(true);
      } catch (error) {
        console.error("Error:", error);
        //getWeather(false);
      }
    };

    fetchWeather();
  }, [location, getWeather]);

  useEffect(() => {
    const fetchForecast = async () => {
      if (lat !== null && lon !== null) {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );
        setWeather(res.data);
      }
    };

    fetchForecast();
  }, []); 

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <main>

      {weatherData ? (
        <div className={styles.weather_forecast_container}>
          <div className={styles.weatherOuterContainer}>
            <Image
              src={`/icons/${weatherData.weather[0].icon}.png`}
              className={styles.iconS}
              width={120}
              height={120}
              alt="searchIcon"
            />

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
                    {(weatherData.main.temp_max - 273.15).toFixed(0)}°C
                  </div>
                  <div className={styles.subText}>
                    <Image
                      src={down}
                      className={styles.iconS}
                      width={15}
                      height={15}
                      alt="searchIcon"
                    />
                    {(weatherData.main.temp_min - 273.15).toFixed(0)}°C
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className={styles.forecast_container}>

              {weather.list
                .filter((x: any) => x.dt_txt.includes("00:00:00"))
                .map((x: any) => (

                  <div key={x.dt} className={styles.daily_forecast}>
                    <p>{new Date(x.dt * 1000).toDateString().split(' ').slice(1, 3).join(' ')}</p>
                    <div>
                      <Image
                        src={`/icons/${weatherData.weather[0].icon}.png`}
                        className={styles.mainIcon}
                        width={32}
                        height={32}
                        alt="searchIcon"
                      />
                      <p>{x.main.temp} &deg;C</p>
                    </div>
                  </div>
                ))}
            </div>

          </div>
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

export default WeatherForecast;
