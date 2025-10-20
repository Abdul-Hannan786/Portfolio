import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import GitHubCalendarComponent from "../components/Contributions";

const Home = () => {
  return (
    <>
      <Hero />
      <GitHubCalendarComponent />
      <Projects />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;
