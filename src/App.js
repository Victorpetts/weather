import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a006750ca4dde6fb4a27c7a510e15e11";

class App extends React.Component {
  state = {
    city: undefined,
    country: undefined,
    temperature: undefined,
    description: undefined,
    error: undefined
  }
  // the initial states

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();
    //calling the API

    if (city && country) {

      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        description: undefined,
        error: "Please enter a location"
      });
    }
    // get the data from the API if the user has filled in both city and country and chnage the state
    // display error message otherwise
  }

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="title-container">
                  <Titles />
                </div>
                <div className="form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    city={this.state.city}
                    country={this.state.country}
                    temperature={this.state.temperature}
                    description={this.state.description}
                    error={this.state.error}
                   />
                </div>
                {/*passing the props to the components*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default App;
