import React, { useEffect, useState } from "react";
import axios from "axios";
import { WeatherIcon } from "../WeatherIcon";
import styles from "./FiveDayWeather.module.css"; 

export default function FiveDayWeather() {
  const [weather, setWeather] = useState<any | null>(null);

  const fetchWeather = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=49.28&lon=123.12&appid=0add98044a12afcd463bc2e26aa52e22&units=metric`
    );
    setWeather(res.data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className={styles.forecast_header}>Daily Forecast</h1>
      <div className={styles.forecast_container}>
        {weather.list
          .filter((x:any) => x.dt_txt.includes("00:00:00"))
          .map((x:any) => (
            <div key={x.dt} className={styles.daily_forecast}> 
              <h1>{new Date(x.dt * 1000).toDateString()}</h1>
              <div>
                <WeatherIcon icon={x.weather[0].main} size={20}/>
                <p>{x.main.temp} &deg;C</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
