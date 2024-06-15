import { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import Lightswitch from "./LightSwitch";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import Aboutlink from "../About/Aboutlink";
import Worklink from "../Work/Worklink";
import Notebooklink from "../Notebook/Notebooklink";
import Contactlink from "../Contact/Contactlink";
import Bookshelflink from "../Bookshelf/Bookshelflink";
import Techstacklink from "../Techstack/Techstacklink";
import ScrollToTop from "../Scrolltop/Scrolltop";


function Container() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <div
      className={
        darkmode ? `Container Container-dark` : `Container Container-light`
      }
    >
      <BrowserRouter>
      <ScrollToTop>
        <Lightswitch />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<Aboutlink />} />
          <Route path="work" element={<Worklink />} />
          <Route path="notebook" element={<Notebooklink />} />
          <Route path="contact" element={<Contactlink />} />
          <Route path="bookshelf" element={<Bookshelflink />} />
          <Route path="techstack" element={<Techstacklink />} />
        </Routes>
        </ScrollToTop>
      </BrowserRouter>
      {/* <Hero />
      <Work1 />
      <Work2 />
      <Work3 />
      <About1 />
      <About2 />
      <Getintouch />
      <Footer /> */}
    </div>
  );
}

export default Container;
