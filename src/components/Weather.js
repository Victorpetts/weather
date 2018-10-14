import React from "react";

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && props.temperature &&
    <p className="weather__key">The temperature in {props.city}, {props.country} is {props.temperature} degrees</p>}
    {props.description && <p className="weather__key">Its {props.description}</p>}
    {props.error && <p className="weather__key">{props.error}</p>}
  </div>
);

export default Weather;
