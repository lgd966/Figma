import React from "react";
import "./Footer.css";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function Footer() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <>
      <div className="footer">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-6">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <img src={darkmode ? `Logo d.png` : `Logo1.png`} alt="" />
            </a>
            <p class={darkmode ? `Container-dark` : `Container-light`}>
              © 2024
            </p>
            <p>Thanks for stopping by ッ</p>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3 ms-auto">
            <h5>Links</h5>
            <ul class="nav flex-column  ">
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  About
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  Work
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  Teckstack
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-6">
            <h5>Elsewhere</h5>
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  E mail
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  LinkedIn
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  Github
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  Twitter
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="#"
                  class={darkmode ? `Container-dark` : `Container-light`}
                >
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </footer>
        <p>© 2023 Eihab Khan. All Rights Reserved.</p>
      </div>
    </>
  );
}
