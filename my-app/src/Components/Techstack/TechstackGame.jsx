import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function TechstackGame() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <>
      <section>
        <div>
          <div className="border-top">
            <p className="display-5">Games</p>
            <div className="row ms-5 ps-5">
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Elden Ring.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Elden Ring</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Sekiro.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Sekiro: Shadows Die Twice</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Stardew Valley.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Stardew Valley</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="FH 5.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Forza Horizon 5</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="GTA V.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>GTA Online</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Witcher 3.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>The Witcher 3</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="CoD MW.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>CoD Modern Warfare</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 13.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Brawl Stars</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Skyrim.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Skyrim</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Gears of War.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Gears of War</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="AC Origins.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>AC Origins</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="RDR 2.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>RDR 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
