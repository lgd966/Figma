import React from "react";
import Footer from '../../Components/Footer/Footer'

export default function Aboutlink() {
  return (
    <>
      <section>
        <div className="border-top pt-5">
          <h1>A little bit about me</h1>
          <p>Who I am and what I do.</p>
          <div className="row">
            <div className="col-sm-8">
              <p>Who I am</p>
              <p>
                I’m Eihab (Pronounced “Ee-hab”) a multi-disciplinary front-end
                engineer and UI/UX designer based in Rabat, Morocco 🇲🇦.
              </p>
              <p>What I Do</p>
              <p>
                With two years of invaluable experience in my role at Harmony
                Technology –– a tech company based here in Rabat, I have honed
                my skills in React.js, Next.js, TailwindCSS, and TypeScript,
                allowing me to craft seamless and interactive user experiences.
                During my time at Harmony Technology, I had the privilege of
                collaborating on projects for esteemed clients such as the
                Ministry of Health, Ministry of Education, and Ministry of
                Justice. It was an incredibly rewarding experience to develop
                applications that directly impact the lives of Moroccan
                citizens.
              </p>
              <p>What I Do</p>
              <p>
                Before delving into the realm of front end engineering, I spent
                five years as a graphic designer. This background has equipped
                me with a keen eye for aesthetics and a deep understanding of
                user-centered design principles. It enables me to seamlessly
                blend functionality and visual appeal in every project I
                undertake.
              </p>
              <p>
                Feel free to reach out via e-mail, or follow me on Twitter. Want
                to see where I’ve worked? Check out my Resume, or Connect with
                me on LinkedIn.
              </p>
              <p>Let’s build something great,</p>
              <img src="sign.png" alt="" />
            </div>
            <div className="col-sm-4">
              <img src="geist.png" className="border px-5 py-5" alt="" />
              <button className="btn btn-dark mt-5">Get in touch</button>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
