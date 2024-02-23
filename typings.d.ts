type WeatherCondition = 'Clear' | 'Clouds' | 'Rain' | 'Snow' | 'Thunderstorm' ;

export interface WeatherMain {
    temp: number;
    feels_like: number;
    humidity: number;
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
  