import React from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "a006750ca4dde6fb4a27c7a510e15e11";

class App extends React.Component {
  state = {
    city: undefined,
    temperature: undefined,
    description: undefined,
    data: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    const data = await api_call.json();

    if (city) {

      this.setState({
        city: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
        icon: data.weather[0].icon,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        temperature: undefined,
        description: undefined,
        icon: undefined,
        error: "Please enter a location"
      });
    }
  }

  render() {
    return (
      <div>
          <div className="main">
            <div className="container">
                <div className="title-container">
                  <Titles />
                </div>
                <div className="form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather
                    city={this.state.city}
                    temperature={this.state.temperature}
                    description={this.state.description}
                    icon={this.state.icon}
                    error={this.state.error}
                   />
                </div>
            </div>
        </div>
      </div>
    );
  }
};

export default App;
