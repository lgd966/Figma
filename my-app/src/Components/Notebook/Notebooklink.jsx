import React from "react";
import Footer from "../Footer/Footer";

export default function Notebooklink() {
  return (
    <>
      <section>
        <div>
          <h1>Notebook</h1>
          <p>My thoughts, insights, and reflections.</p>
        </div>
        <div className="border-top">
          <h3 className="mt-5">Dev</h3>
          <img src="Note2.png" className="mt-3 mb-5" alt="" />
          <h3>Design</h3>
          <img src="Note.png" className="mt-3" alt="" />
        </div>
      </section>
      <Footer />
    </>
  );
}
