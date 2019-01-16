import React from "react";
import comp from "../images/comp.jpeg";
import comp1 from "../images/comp1.jpeg";

export default function Intro() {
  return (
    <div className="intro">
      <div className="intro-left">
        <img src={comp} alt="" />
      </div>
      <div className="intro-middle">
        <h2>Making it Happen</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore amet
          ipsam fuga maxime voluptate velit illum quisquam quis molestias quos,
          accusantium alias natus magni, illo repudiandae quibusdam odit quod
          commodi.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim at hic
          eligendi! Officiis mollitia, recusandae esse quisquam magnam quam
          velit laboriosam impedit omnis? Corrupti quidem accusamus praesentium,
          eos tempora rem.
        </p>
      </div>
      <div className="intro-right">
        <img src={comp1} alt="" />
      </div>
    </div>
  );
}
