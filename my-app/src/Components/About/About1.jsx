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
            <div className="col-sm-6 colums">
              <div
                className={darkmode ? `work-dark` : `work-light`}
                id="work-1-div"
              >
                <h2 className="pt-3">About me</h2>
                <p>Who I am and what I do</p>
                <Link to="/about" href="">
                  <img src="Face.png" className="img-fluid mt-5 mb-4" alt="" />
                </Link>
              </div>
            </div>
            <div className="col-sm-6">
              <div
                className={darkmode ? `work-dark` : `work-light`}
                id="work-1-div"
              >
                <h2 className="pt-3">Notebook</h2>
                <p>My thoughts, insights, and reflections</p>
                <Link to="notebook" href="">
                  <img src="Desknotes.png" className="img-fluid" alt="" />
                </Link>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </>
  );
}
