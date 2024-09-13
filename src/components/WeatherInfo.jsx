import React from 'react';
import './WeatherInfo.css';
const WeatherInfo = ({ data }) => {
  const { name, main, weather } = data;

  return (
    <div className='info'>
      <h2>{name}</h2>
      <p id="temp">Temperature: {main.temp}°C</p>
      <p id="cond">Condition: {weather[0].description}</p>
    </div>
  );
};

export default WeatherInfo;
