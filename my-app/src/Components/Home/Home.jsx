import React from 'react'
import Hero from "../Hero/Hero";
import Work1 from "../Work/Work1";
import Work2 from "../Work/Work2";
import Work3 from "../Work/Work3";
import About1 from "../About/About1";
import About2 from "../About/About2";
import Getintouch from "../Getintouch/Getintouch";
import Footer from "../Footer/Footer";

export default function Home() {
  return (
    <>
    <Hero />
      <Work1 />
      <Work2 />
      <Work3 />
      <About1 />
      <About2 />
      <Getintouch />
      <Footer />
    </>
  )
}
