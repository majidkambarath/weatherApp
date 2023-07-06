import React, { useEffect, useState } from "react";
import weather from "../../assets/weather.jpg";
import bgWeather from "../../assets/bgWea.jpg";
import Weather from "../weather/weatherShow";
import Forecast from "../weather/forecast";
import LeftSide from "../weather/leftSide";
import Search from "../search/search";
import Selection from "../search/selection";
import getFormattedWeatherData from "../../service/fetchApi";
export default function HomeUI() {
  const [query, setQuery] = useState({ q: "berlin" });
  const [units, setUnits] = useState("metric");
  const [weatherData, setWeatherData] = useState(null);
  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeatherData(data);
      });
    };
    fetchWeather();
  }, [query, units]);
  let humidity = weatherData?.humidity;
  let temp = weatherData?.temp;
  let speed = weatherData?.speed;
  return (
    <>
      <div
        className="bg-no-repeat bg-fixed bg-cover min-h-screen h-full flex justify-center py-16 "
        style={{
          backgroundImage: `url(${weather})`,
        }}
      >
        <div className="md:h-[500px] w-full md:w-[1200px] bg-slate-100 md:flex flex-row-reverse ">
          <div>
            {/* <LeftSide data={weatherData} setQuery={query}   /> */}
            <div className="bg-black/70 h-full w-[400px] ">
              <div>
                <Search setQuery={setQuery} units={units} setUnits={setUnits} />
              </div>
              <div>
                <Selection
                  humidity={humidity}
                  temp={temp}
                  speed={speed}
                  setQuery={setQuery}
                />
              </div>
            </div>
          </div>
          <div
            className="bg-slate-500 h-full md:w-[800px] bg-no-repeat bg-fixed bg-cover  "
            style={{ backgroundImage: `url(${bgWeather})` }}
          >
            <span className="font-title text-lg font-semibold px-2">
              the.weatherapp{" "}
            </span>
            {weatherData && (
              <>
                <div>
                  <Weather data={weatherData} />
                </div>
                <div>
                  <Forecast
                    title="hourly forecast"
                    items={weatherData.hourly}
                  />
                  <div className="mt-4">
                    <Forecast
                      title="Daily forecast"
                      items={weatherData.daily}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
