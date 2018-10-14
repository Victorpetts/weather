import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="City" />
    <input type="text" name="country" placeholder="Country" />
    <button>Show Weather</button>
  </form>
);

export default Form;

// The component for the text inputs and the button
// It's a stateless functional component since this component does not contains any states
