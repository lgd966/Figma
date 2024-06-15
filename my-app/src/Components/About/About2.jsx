import React from "react";
import "./About.css";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";
import { Link } from "react-router-dom";

export default function About1() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <>
      <div className="about">
        <div className="text-center">
          <div className="row">
            <div className="col-sm-6">
              <div
                className={darkmode ? `work-dark` : `work-light`}
                id="work-1-div"
              >
                <h2 className="pt-3">Bookshelf</h2>
                <p>Books and pieces of wisdom I’ve enjoyed reading</p>
                <Link to="bookshelf">
                  <img src="Group 1984.png" className="img-fluid" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className={darkmode ? `work-dark` : `work-light`}
                id="work-1-div"
              >
                <h2 className="pt-3">Tech Stack</h2>
                <p>The dev tools, apps, devices, and games I use and play.</p>
                <Link to="techstack">
                <img
                  src="Tech Stack.png"
                  className="img-fluid"
                  style={{ height: "320px", width: "350px" }}
                  alt=""
                />
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
