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

// const particleParams = {
//   particles: {
//     number: {
//       value: 150,
//       density: {
//         enable: true,
//         value_area: 800
//       }
//     },

//     size: {
//       value: 2,
//       random: true,
//       anim: {
//         speed: 20,
//         size_min: 0.3
//       }
//     },

//     color: {
//       value: "#3f87c6"
//     }
//   }
// };

const particleParams = {
  particles: {
    number: {
      value: 8,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      enable: false
    },
    move: {
      speed: 1,
      out_mode: "out"
    },
    shape: {
      type: "images",
      images: [
        {
          src:
            "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
          height: 15,
          width: 18
        },
        {
          src:
            "https://pngimage.net/wp-content/uploads/2018/06/react-logo-png-1.png",
          height: 20,
          width: 25
        },
        {
          src:
            "https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png",
          height: 20,
          width: 25
        }
      ]
    },
    color: {
      value: "#CCC"
    },
    size: {
      value: 20,
      random: false,
      anim: {
        enable: true,
        speed: 4,
        size_min: 10,
        sync: false
      }
    }
  },
  retina_detect: false
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
