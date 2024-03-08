import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./CurrentWeather.module.css";

import { BsArrowDown, BsArrowUp, BsSun, BsThermometer } from "react-icons/bs";

const apiKey = process.env.NEXT_PUBLIC_API_WEATHER

export default function CurrentWeather() {
  const [weather, setWeather] = useState<any | null>(null);

  const fetchWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=41.28&lon=-71.12&appid=0add98044a12afcd463bc2e26aa52e22&units=metric`
    );
    console.log(res.data);
    setWeather(res.data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.current_weather_container}>
      <BsSun size={200} />

      <div className={styles.current_conditions_container}>
        <div className={styles.current_temp}>{weather.main.temp}°C</div>

        <div className={styles.feels_like}>
          <BsThermometer size={20} /> Feels like {weather.main.feels_like}°C
        </div>

        <div className={styles.high_low_temp}>
          <BsArrowUp size={20} /> {weather.main.temp_max}°C
          <BsArrowDown size={20} /> {weather.main.temp_min}°C
        </div>
      </div>
    </div>
  );
}
