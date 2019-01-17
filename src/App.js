import React, { Component } from "react";
import Particles from "react-particles-js";
import Welcome from "./components/Welcome";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import react from "./images/react.png";

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
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 20,
        size_min: 0.3
      }
    },
    // shape: {
    //   type: "image",
    //   image: {
    //     src: "../source/images/comp.jpeg",
    //     width: 100,
    //     height: 100
    //   }
    // },
    color: {
      value: "#3f87c6"
    }
  }
};

// const particleParams = {
//   particles: {
//     number: {
//       value: 50
//     },
//     size: {
//       random: true
//     }
//   },
//   interactivity: {
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse"
//       }
//     }
//   }
// };

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
            top: 0,
            zIndex: -1
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
