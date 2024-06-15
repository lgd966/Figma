import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import Logo from "../../../public/Union.png";
import Linkedin from "../../../public/LinkedIn.png";
import X from "../../../public/Frame.png";
import Git from "../../../public/Githubnav.png";
import { Link } from "react-router-dom";

function Lightswitch() {
  const { darkmode, toggleDarkMode } = useContext(DarkModeContext);
  const handleclick = () => {
    toggleDarkMode();
  };
  return (
    <>
    <div  className={
        darkmode ? `Container Container-dark` : `Container Container-light`
      }>
      <nav class="navbar navbar-expand-lg position-sticky">
        <div class="container-fluid cont mx-5">
          <Link class="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/about"
                  class="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link to="/work" class="nav-link" href="#">
                  Work
                </Link>
              </li>
              <li class="nav-item">
                <Link to="notebook" class="nav-link" href="#">
                  Notebook
                </Link>
              </li>
              <li class="nav-item">
                <Link to="contact" class="nav-link" href="#">
                  Contact
                </Link>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link to="bookshelf" class="dropdown-item" href="#">
                      Bookshelf
                    </Link>
                  </li>
                  <li>
                    <Link to="techstack" class="dropdown-item" href="#">
                      Tech stack
                    </Link>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      This UI Kit
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="icons">
              <ul className="d-flex gap-3 pt-1">
                <li>
                  <a href="">
                    <img src={Linkedin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={X} alt="" />
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={Git} alt="" />
                  </a>
                </li>
                <li>
                  <img
                    src={darkmode ? `Group.png` : `Group.png`}
                    alt=""
                    onClick={handleclick}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      </div>
      {/* <div className="lightswitch">
        <img
          src={darkmode ? `Group.png` : `Group.png`}
          alt=""
          onClick={handleclick}
        />
      </div> */}
    </>
  );
}

export default Lightswitch;
