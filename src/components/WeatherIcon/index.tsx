import React from "react";
import { BsCloud, BsCloudRain, BsSun } from "react-icons/bs";

export const WeatherIcon: React.FC<{ icon: string; size: number }> = ({
  icon,
  size,
}) => {
  if (icon === "Rain") {
    return <BsCloudRain size={size} />;
  }

  if (icon === "Clear") {
    return <BsSun size={size} />;
  }

  if (icon === "Clouds") {
    return <BsCloud size={size} />;
  }

  console.log(icon);
  return <div>No Weather Icon Found for {icon}</div>;
};
