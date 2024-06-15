import React from "react";
import "./Work.css";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function Work1() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <>
      <div className="work">
        <h1 className="pb-4">Selected Work</h1>
        <div className={darkmode ? `work-dark` : `work-light` } id="work-1-div">
          <div className="row">
            <div class="col-md-7 pt-5 ps-5">
              <img src="Logo.png" alt="" />
              <h2 className="mt-4">Subbi -- The free subscriptions manager</h2>
              <p className="mt-4">
                Subbi is a side project that I’ve built to help me keep track of
                how much I spend on subscriptions and also to prevent the
                “accidental” bill after a 14-day trail ends. It helps you keep
                track of bills like Netflix, Spotify, Xbox Game Pass, Bus Card,
                Bank Cards, and many more
              </p>
              <button className="btn download-btn mt-5 ">Download App</button>
            </div>
            <div class="col-md-5">
              <img src="Subbi.png" className="img-fluid " alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
