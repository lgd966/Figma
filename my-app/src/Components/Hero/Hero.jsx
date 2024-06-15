import React from "react";
import "./Hero.css";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

// import LightCircle from '../../../public/Cricle-L.png'
// import DrakCircle from '../../../public/Cricle-D.png'

export default function Hero() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <div className="d-flex  justify-content-between align-items-center hero">
      <div>
        <h1 className="name-heading">
          <span>I,m </span>Eihab Khan
        </h1>
        <p className="hero-paragraph">
          A front-end engineer and UI/UX designer helping startups turn <br />{" "}
          their visions into a digital reality. I specialize in designing and{" "}
          <br /> building modern mobile and web-based apps.
        </p>
        <button className="btn btn-dark">See my resume</button>
        <button className="btn">Get in touch</button>
      </div>
      <div>
        <img
          src={darkmode ? `Circle-D.png` : `Circle-L.png`}
          className="circle-l-img"
          alt=""
        />
      </div>
    </div>
  );
}
