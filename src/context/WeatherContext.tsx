import { PropsWithChildren, createContext, useState } from "react";

export enum Activity {
  Both = "Both",
  Indoor = "Indoor",
  Outdoor = "Outdoor",
}

export const WeatherContext = createContext<{
  currentWeather: Activity;
  setCurrentWeather: (weather: Activity) => void;
}>({
  currentWeather: Activity.Both,
  setCurrentWeather: (weather: Activity) => {},
});

export const WeatherProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [currentWeather, setCurrentWeather] = useState<Activity>(Activity.Both);

  return (
    <WeatherContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
