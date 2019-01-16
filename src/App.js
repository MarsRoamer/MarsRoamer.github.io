import React, { Component } from "react";
import Welcome from "./components/Welcome";
import Intro from "./components/Intro";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome />
        <Intro />
        <About />
        <Portfolio />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
