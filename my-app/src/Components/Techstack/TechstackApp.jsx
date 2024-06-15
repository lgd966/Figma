import React from "react";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function TechstackApp() {
  const { darkmode } = useContext(DarkModeContext);
  return (
    <>
      <section>
        <div>
          <div className="border-top">
            <p className="display-5">Apps</p>
            <div className="row ms-5 ps-5">
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Raycast.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Raycast</p>
                  <p className="border rounded-pill px-2">Launcher</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Todoist.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Todoist</p>
                  <p className="border rounded-pill px-2">Productivity</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 26.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Notion</p>
                  <p className="border rounded-pill px-2">Notes</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 25.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Amie</p>
                  <p className="border rounded-pill px-2">Calendar</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="chatgpt.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>ChatGPT</p>
                  <p className="border rounded-pill px-2">Productivity</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Discord.png" className="m-5" alt="" />
                <div className="d-flex gap-4">
                  <p>Discord</p>
                  <p className="border rounded-pill px-2">Communication</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Duolingo.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Duolingo</p>
                  <p className="border rounded-pill px-2">Email</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Books.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Books</p>
                  <p className="border rounded-pill px-2">Education</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Chrome.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Chrome</p>
                  <p className="border rounded-pill px-2">Browser</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Spark.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Spark</p>
                  <p className="border rounded-pill px-2">Email</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 28.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Spotify</p>
                  <p className="border rounded-pill px-2">Music</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 29.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Slack</p>
                  <p className="border rounded-pill px-2">Communication</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Twitch.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Twitch</p>
                  <p className="border rounded-pill px-2">Entertainment</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="460.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Pocket Casts</p>
                  <p className="border rounded-pill px-2">Podcast</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Logo 1.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Subbi</p>
                  <p className="border rounded-pill px-2">Utility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
