type WeatherCondition = 'Clear' | 'Clouds' | 'Rain' | 'Snow' | 'Thunderstorm';

export interface WeatherMain {
  temp: number;
  feels_like: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
}

export interface WeatherDescription {
  main: WeatherCondition;
  description: string;
  icon: string;
}

export interface WeatherWind {
  speed: number;
}

export interface WeatherDescription {
  description: string;
}

export interface WeatherClouds {
  all: number;
}

export interface WeatherSys {
  sunrise: number;
  sunset: number;
}

export interface WeatherData {
  name: string;
  main: WeatherMain;
  wind: WeatherWind;
  weather: WeatherDescription[];
  clouds: WeatherClouds;
  sys: WeatherSys;

}


interface ITravel {
  location_id: string;
  name: string;
  address_obj: {
    address_string: string;
  };
}

interface CardProps {
  locations: ITravel[];
}

interface IndoorProps {
  locations: ITravel[];
}

interface OutdoorProps {
  locations: ITravel[];
}