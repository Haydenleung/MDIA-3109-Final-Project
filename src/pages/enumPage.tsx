import { useState } from "react";
import { Activity } from "@/context/WeatherContext";
import router from "next/router";
import Weather from "@/components/Weather";

export default function EnumPage() {
  const [currentWeather, setCurrentWeather] = useState(Activity.Both);

  const handleYesClick = () => {
    setCurrentWeather(Activity.Indoor);
  };

  const handleNoClick = () => {
    setCurrentWeather(Activity.Outdoor);
  };


  return (
    <>
      <button onClick={() => router.push("/")} className={"homeButton"}>
        {" "}
        GO HOME
      </button>

      <div className={"weatherInfo"}>
      <Weather location={undefined} getWeather={(data: boolean) => {
              }} />

      </div>

      <div className={"questionContainer"}>
        <h1>Answer this, is it raining?</h1>
        <button onClick={handleYesClick}>YES</button>
        <button onClick={handleNoClick}>NO</button>
      </div>

      {currentWeather === Activity.Indoor && (
        <p className="weatherAdvice indoor">You should stay inside today!</p>
      )}
      {currentWeather === Activity.Outdoor && (
        <p className="weatherAdvice">Go outside today!</p>
      )}
    </>
  );
}
