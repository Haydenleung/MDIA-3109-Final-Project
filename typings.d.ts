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

interface IImage {
  images: {
    original: {
      url: string;
    }
  };
}

interface IDetail {
  rating: number;
  rating_image_url: string;
  num_reviews: number;
  description: string;
}

interface IReview {
  rating: number;
  published_date: string;
  rating_image_url: string;
  user: {
    username: string;
    avatar: {
      original: string;
    }
  }
  text: string;
}

interface CardProps {
  locations: ITravel[];
  locaImage: IImage[][];
  locaDetail: IDetail[];
  locaReview: IReview[][];
}

interface IndoorProps {
  locations: ITravel[];
  locaImage: IImage[][];
  locaDetail: IDetail[];
  locaReview: IReview[][];
}

interface OutdoorProps {
  locations: ITravel[];
}