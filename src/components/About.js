import React from "react";
import myPhoto from "../images/myphoto.jpeg";
import comp1 from "../images/comp1.jpeg";

export default function About() {
  return (
    <div className="about">
      <img id="about-img" src={comp1} alt="" />
      <h1 className="about-title">Jonathan Tiede</h1>
      <h2 className="about-subtitle">Full Stack Developer</h2>
      <div className="about-text">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa maiores
          illo minima accusamus fugit delectus, ut dicta debitis beatae corporis
          id impedit optio totam, rem, magni minus odit ratione voluptates.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id
          consequatur in ab neque fuga eligendi maxime aspernatur laudantium
          officiis totam unde molestiae fugiat error nobis, soluta perferendis
          mollitia deleniti odit?
        </p>
      </div>
    </div>
  );
}
