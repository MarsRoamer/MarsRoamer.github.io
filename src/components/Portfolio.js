import React from "react";
import wodtracker from "../images/wodtracker.png";

export default function Portfolio() {
  return (
    <div className="portfolio">
      <h1>My Work</h1>
      <div className="portfolio-items">
        {/* <!- - Portfolio item 1 - -> */}

        <figure className="portfolio-item featured">
          <img className="portfolio-image" src={wodtracker} alt="" />
          <figcaption>
            <h2 className="portfolio-title">Wod Tracker</h2>
            <p className="portfolio-description">
              A short description of the app
            </p>
            <a
              href="https://workoutboss.herokuapp.com"
              className="portfolio-link"
            >
              See App in action!
            </a>
          </figcaption>
        </figure>

        {/* <!- - Portfolio item 2 - -> */}
        <figure className="portfolio-item">
          <img className="portfolio-image" src={wodtracker} alt="" />
          <figcaption>
            <h2 className="portfolio-title">Wod Tracker</h2>
            <p className="portfolio-description">
              A short description of the app
            </p>
            <a
              href="https://workoutboss.herokuapp.com"
              className="portfolio-link"
            >
              See App in action!
            </a>
          </figcaption>
        </figure>
        {/* <!- - Portfolio item 3 - -> */}
        <figure className="portfolio-item">
          <img className="portfolio-image" src={wodtracker} alt="" />
          <figcaption>
            <h2 className="portfolio-title">Wod Tracker</h2>
            <p className="portfolio-description">
              A short description of the app
            </p>
            <a
              href="https://workoutboss.herokuapp.com"
              className="portfolio-link"
            >
              See App in action!
            </a>
          </figcaption>
        </figure>
        {/* <!- - Portfolio item 4 - -> */}
        <figure className="portfolio-item">
          <img className="portfolio-image" src={wodtracker} alt="" />
          <figcaption>
            <h2 className="portfolio-title">Wod Tracker</h2>
            <p className="portfolio-description">
              A short description of the app
            </p>
            <a
              href="https://workoutboss.herokuapp.com"
              className="portfolio-link"
            >
              See App in action!
            </a>
          </figcaption>
        </figure>
        {/* <!- - Portfolio item 5 - -> */}
        <figure className="portfolio-item">
          <img className="portfolio-image" src={wodtracker} alt="" />
          <figcaption>
            <h2 className="portfolio-title">Wod Tracker</h2>
            <p className="portfolio-description">
              A short description of the app
            </p>
            <a
              href="https://workoutboss.herokuapp.com"
              className="portfolio-link"
            >
              See App in action!
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
