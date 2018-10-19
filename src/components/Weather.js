import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city && props.temperature &&
    <p className="weather__key">The temperature in {props.city} is {props.temperature} degrees</p>}
    {props.description &&
    <p className="weather__key">It's {props.description}<img src={`http://openweathermap.org/img/w/${props.icon}.png`} alt='weather icon' /></p>}
    {props.error && <p className="weather__key">{props.error}</p>}
  </div>
);

export default Weather;
