import React, { Component } from "react";
import Particles from "react-particles-js";
import Welcome from "./components/Welcome";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.scss";
//

const particleParams = {
  particles: {
    number: {
      value: 150,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Particles
          className="particles"
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0
          }}
          params={particleParams}
        />

        <Intro />

        <Portfolio />

        <Contact />
      </div>
    );
  }
}

export default App;
