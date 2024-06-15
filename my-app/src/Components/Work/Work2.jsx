import React from "react";
import "./Work.css";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function Work1() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <>
      <div className="work">
        <div className={darkmode ? `work-dark` : `work-light`} id="work-1-div">
          <div className="row">
            <div class="col-md-7 pt-5 ps-5">
              <img src="react-icon.png" alt="" />
              <h2 className="mt-4">React Documentation</h2>
              <p className="mt-4">
                With the release of the new React website on March 16, there was
                a need for localization to make the documentation accessible to
                Arabic-speaking developers. I contributed to translating several
                documentation, worked with great developers, Improved my ability
                to write better PR requests, and as a side effect, I now know
                more about the Arabic grammar.
              </p>
              <button className="btn download-btn mt-1 ">Visit site</button>
            </div>
            <div class="col-md-5">
              <img src="iPad.png" className="ipad-img mt-5 img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
