import React from "react";
import "./Techstack.css";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function TechstackDev() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <>
      <section>
        <div>
          <h1>Tech stack</h1>
          <p>The dev tools, apps, devices, and games I use and play.</p>
          <div className="border-top">
            <p className="display-5">Dev & Design</p>
            <div className="row ms-5 ps-5">
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Figma.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Figma</p>
                  <p>Design</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Nextjs.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Figma</p>
                  <p>Design</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="TailwindCSS.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Tailwind</p>
                  <p  className="border rounded-pill px-3">CSS</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Github.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Github</p>
                  <p className="border rounded-pill px-1">Version Control</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 2.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Warp</p>
                  <p className="border rounded-pill px-1">Terminal</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Vercel.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Vercel</p>
                  <p className="border rounded-pill px-2">Deployment</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 17.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>VSCode</p>
                  <p className="border rounded-pill px-2">Editor</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Framer.png" className="m-5" alt="" />
                <div className="d-flex gap-3">
                  <p>Framer Motion</p>
                  <p className="border rounded-pill px-2">Animation</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="TypeScript.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>TypeScript</p>
                  <p className="border rounded-pill px-2">Language</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="hook.png" className="m-5" alt="" />
                <div className="d-flex gap-2">
                  <p>React Hook Form</p>
                  <p className="border rounded-pill px-2">Library</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Mask group.png" className="m-5" alt="" />
                <div className="d-flex gap-4">
                  <p>React Query</p>
                  <p  className="border rounded-pill px-2">Server State</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="image 18.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Zustand</p>
                  <p className="border rounded-pill px-2">Global State</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Zod.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Zod</p>
                  <p  className="border rounded-pill px-2" >Validation</p>
                </div>
              </div>
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Expo.png" className="m-5" alt="" />
                <div className="d-flex gap-2">
                  <p>Expo</p>
                  <p className="border rounded-pill px-2">Mobile Framework</p>
                </div>
              </div>  
              <div
                className={
                  darkmode
                    ? `tech-bg-dark col-sm-3 display`
                    : `tech-bg-light  col-sm-3 display`
                }
              >
                <img src="Sanity.png" className="m-5" alt="" />
                <div className="d-flex gap-5">
                  <p>Sanity</p>
                  <p className="border rounded-pill px-2">Headless CMS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
