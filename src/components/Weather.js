import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherContainer, Temp, City } from "./WeatherStyling";

const url =
  "https://api.openweathermap.org/data/2.5/weather?q=jamshedpur&units=imperial&appid=4e4fec5005b9fd91f4f4e281ae7f56f5";

const Weather = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(data);

  if (!data) {
    return null;
  }

  return (
    <WeatherContainer>
      <Temp>{data.main.temp.toFixed(0)}&#176;</Temp>
      <City>Jamshedpur</City>
    </WeatherContainer>
  );
};

export default Weather;
