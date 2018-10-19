import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="Choose a City" />
    <button>Show Weather</button>
  </form>
);

export default Form;
