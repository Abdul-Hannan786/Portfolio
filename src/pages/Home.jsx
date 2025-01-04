import React from "react";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

const Home = ({ masterpieces, testimonials }) => {
  return (
    <div>
      <Hero />
      <Projects masterpieces={masterpieces} />
      <Testimonials testimonials={testimonials} />
      <Contact />
    </div>
  );
};

export default Home;
