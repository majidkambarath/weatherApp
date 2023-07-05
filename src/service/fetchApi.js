import { DateTime } from "luxon";

const API_KEY = "b9616a9a770ad6c7d7fc92bd4ebdd373";

const BASE_URL = "https://api.openweathermap.org/data/2.5/";

const getWeatherData = (infoType, searchParams) => {
  const url = new URL(BASE_URL + "/" + infoType);
  url.search = new URLSearchParams({ ...searchParams, appid: API_KEY });
  return fetch(url).then((res) => res.json());
};
const formatCurrentWeather = (data) => {
  const {
    coord: { lat, lon },
    main: { temp, humidity },
    name,
    dt,
    weather,
    wind: { speed },
  } = data;
  const { main: details, icon } = weather[0];
  return { lat, lon, temp, humidity, name, dt, details, icon, speed };
};
console.log(formatCurrentWeather)
const formatForecastWeather = (data) => {
    const { list, city } = data;
    const daily = list.filter((d, i) => {
        return (i % 8 === 0 || i === 0)
    }).map((d) => {
      return {
        title: formatToLocalTime(d.dt, city.timezone, "ccc"),
        temp: d.main.temp,
        icon: d.weather[0].icon,
      };
    })
    
    const hourly = list.slice(1, 6).map((d) => {
        return {
            title: formatToLocalTime(d.dt, city.timezone, "hh:mm a"),
            temp: d.main.temp,
            icon: d.weather[0].icon,
        };
    });
  
    return { timezone: city.timezone, daily, hourly };
  };

const getFormattedWeatherData = async (searchParams) => {
  const formattedCurrentWeather = await getWeatherData(
    "weather",
    searchParams
  ).then(formatCurrentWeather);
  const { lat, lon } = formattedCurrentWeather;
  console.log(lat);

    const formattedForecastWeather = await getWeatherData("forecast ", {
      lat,
      lon,
      exclude: "current,minutely,alerts",
       units: searchParams.units,
    }).then(formatForecastWeather);

    return { ...formattedCurrentWeather, ...formattedForecastWeather };
};

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy'|'hh:mm a"
  ) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);


  
  const iconUrlFromCode = (code) =>
    `http://openweathermap.org/img/wn/${code}@2x.png`;
export default getFormattedWeatherData;
export { formatToLocalTime, 
    iconUrlFromCode
 };

// const currentWeather = fetch(`${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
//    const currentForecast = fetch(`${BASE_URL}forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
//     Promise.all([currentWeather,currentForecast])
//     .then(async(res)=>{
//      const weather = await res[0].json();
//      const forecast = await res[1].json()
//      console.log(forecast)
//      console.log(weather)
//     })