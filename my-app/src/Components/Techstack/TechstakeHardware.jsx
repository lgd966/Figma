import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function TechstakeHardware() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <>
      <section>
        <div>
          <div className="border-top">
            <p className="display-5">Hardware</p>
            <div className="row ms-5 ps-5">
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="MBP 2017.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Apple MacBook Pro 2017</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="MX.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Logitech MX Master 2S</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="MSI G24.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>MSI G24C4</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Ajazz Keyboard.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Ajazz AK33</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="iPhone X.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Apple iPhone X</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="AirPods.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Apple AirPods 3</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 5.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Xbox One X</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="table.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Ikea LAGKAPTEN / OLOV</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Markus.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Ikea Markus</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
