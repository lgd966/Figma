import React from "react";
import "./Contact.css";
import Footer from "../../Components/Footer/Footer";
import { useContext } from "react";
import { DarkModeContext } from "../Darkmode/DarkModeContext";

export default function Contactlink() {
  const { darkmode } = useContext(DarkModeContext);

  return (
    <>
      <section>
        <div className={darkmode ? `contact-bg-dark ` : `contact-bg-light`}>
          <div className="border rounded p-5">
            <p className="text-center border-bottom pb-4">New message</p>
            <div className="mb-3 row border-bottom pb-4">
              <label htmlFor="" className="col-sm-1 ">
                Email
              </label>
              <div className=" col-sm-11">
                <input
                  type="text"
                  className={
                    darkmode
                      ? `contact-bg-dark form-control form-control-sm border-0 `
                      : `contact-bg-light form-control form-control-sm  border-0`
                  }
                  name=""
                  id=""
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-3 row border-bottom pb-4">
              <label htmlFor="" className="col-sm-1">
                Name
              </label>
              <div className=" col-sm-11">
                <input
                  type="text"
                  className={
                    darkmode
                      ? `contact-bg-dark form-control form-control-sm border-0 `
                      : `contact-bg-light form-control form-control-sm  border-0`
                  }
                  name=""
                  id=""
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div className="mb-3 row border-bottom pb-4">
              <label htmlFor="" className="col-sm-1">
                Subject
              </label>
              <div className=" col-sm-11">
                <input
                  style={{ color: "#808080" }}
                  type="text"
                  className={
                    darkmode
                      ? `contact-bg-dark form-control form-control-sm border-0 pb-4`
                      : `contact-bg-light form-control form-control-sm  border-0 pb-4`
                  }
                  name=""
                  id=""
                  placeholder="Enter your email address"
                />
              </div>
            </div>
            <div class="form-floating">
              <textarea
                className={
                  darkmode
                    ? `contact-bg-dark form-control mb-5`
                    : `contact-bg-light form-control mb-5`
                }
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2">Comments</label>
            </div>
              <button type="submit" className="btn btn-dark button px-5">
                Send
              </button>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
