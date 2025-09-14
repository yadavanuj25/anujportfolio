import React from "react";
import Hero from "../components/hero/Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
