import dayjs from "dayjs";
export interface WeatherProps {
  id: number;
  main: string;
  description: string;
  icon: string;
}
export interface MainWeatherProps {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
  sea_level: number;
  grnd_level: number;
}
export interface WinProp {
  speed: number;
  deg: number;
  gust: number;
}
export interface CloudProps {
  all: number;
}
export interface CoordProp {
  lon: number;
  lat: number;
}
export interface SysProps {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export interface DataResponseProps {
  coord: CoordProp;
  weather: WeatherProps[];
  base: string;
  main: MainWeatherProps;
  visibility: number;
  wind: WinProp;
  clouds: CloudProps;
  dt: number;
  sys: SysProps;
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

export const backGroundColor = {
  light: "#EDF5F4",
  dark: "#25364D",
};


let currentTime = dayjs().get('hours')
console.log(currentTime)


export const DATA_FAKE = [
  {
    title: "clouds",
    icon: require("../assets/images/clouds.png"),
    code:'01d'
  },
  {
    title: "sun",
    icon: require("../assets/images/sun.png"),
    code:'01d',
  },
  {
    title: "sun clouds rain",
    icon: require("../assets/images/sun-clouds-rain.png"),
    code:{}
  },
  {
    title: "lightning",
    icon: require("../assets/images/lightning.png"),
  },
  {
    title: "sun cloud",
    icon: require("../assets/images/sun-clouds.png"),
  },
  {
    title: "colds",
    icon: require("../assets/images/clouds-snow.png"),
  },
  {
    title: "clear sky",
    icon: require("../assets/images/clouds.png"),
  },
];
export const fakeData: DataResponseProps  = {
  base: "stations",
  clouds: {
    all: 3,
  },
  cod: 200,
  coord: {
    lat: 21.0245,
    lon: 105.8412,
  },
  dt: 1649042462,
  id: 1581130,
  main: {
    feels_like: 22.58,
    grnd_level: 1021,
    humidity: 47,
    pressure: 1023,
    sea_level: 1023,
    temp: 23,
    temp_max: 23,
    temp_min: 23,
  },
  name: "Hanoi",
  sys: {
    country: "VN",
    id: 9308,
    sunrise: 1649026044,
    sunset: 1649070703,
    type: 1,
  },
  timezone: 25200,
  visibility: 10000,
  weather: [
    {
      description: " clear sky",
      icon: "01d",
      id: 800,
      main: "Clear",
    },
  ],
  wind: {
    deg: 106,
    gust: 1.7,
    speed: 1.16,
  },
};
