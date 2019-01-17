import React from "react";
import github from "../images/github.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="social-icons">
        <img className="social-icon" src={github} alt="" />
      </div>
      <p className="copywright">Copyright 2019 Jonathan Tiede</p>
    </div>
  );
}
