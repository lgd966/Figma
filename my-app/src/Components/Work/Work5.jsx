import React from "react";
import "./Work.css";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function Work5() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <div className="work">
      <div className={darkmode ? `work-dark` : `work-light`} id="work-1-div">
        <div className="work-5">
          <img src="Stars.png" alt="" />
          <h2>YOUR PROJECT GOES HERE</h2>
          <p className="mb-5">Let’s turn your idea into a visual reality</p>
          <button className="btn btn-dark">Get in touch </button>
        </div>
      </div>
    </div>
  );
}
