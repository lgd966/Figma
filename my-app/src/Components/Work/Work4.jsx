import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function Work4() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <div className="work">
      <div className={darkmode ? `work-dark` : `work-light`} id="work-1-div">
        <div className="row">
          <div class="col-md-7 pt-5 ps-5">
            <img src="Parrotxt.png" alt="" />
            <h2 className="mt-4">Parrotxt</h2>
            <p className="mt-4">
              Lorem Ipsum Is Not Professional, use Parrotxt to generate real
              text for your design. This was my first product I launched on
              Product Hunt
            </p>
            <button className="btn download-btn mt-5 ">Download App</button>
          </div>
          <div class="col-md-5 ps-2">
            <div className="col-sm-7 mt-5">
              <p className="bg-white p-4">
                Lorem ipsum dolor sit amet <br /> consectetur. Adipiscing vel{" "}
                <br /> faucibus sit enim venenatis <br /> pretium.
              </p>
              <p className="bg-white p-4 ms-4">
                {" "}
                Blog single-origin coffee <br /> keffiyeh disrupt air plant.{" "}
                <br /> Actually 90's beard, four <br /> enamel pin salvia.F
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
