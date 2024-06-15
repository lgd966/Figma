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
              <img src="Frame-s.png" alt="" />
              <h2 className="mt-4">Storybook Documentation</h2>
              <p className="mt-4">
                This was my very first OSS contribution, I contributed to
                translating the documentation of Storybook into Arabic, enabling
                a wider audience to access and understand the resources
                available. I gained valuable experience in working effectively
                with teams and navigating the pull request process.
              </p>
              <button className="btn download-btn mt-1 ">Visit site</button>
            </div>
            <div class="col-md-5">
              <img src="Storybook.png" className="book-img mt-1 img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
