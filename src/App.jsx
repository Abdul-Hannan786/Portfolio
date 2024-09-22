import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router components
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Grid from "./components/Grid";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonial from "./components/Testimonials";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
      document.title = document.hidden
        ? "Twist Time! Don't Blink!"
        : "Konain's Artistic Odyssey";
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Router>
      <div className="dark:bg-primary bg-yellow-50 relative overflow-hidden">

        <div className="z-[100]">
        <div className="absolute inset-0  pointer-events-none z-0">
          <div className="absolute top-0 left-[-20%] w-[800px] h-[700px] bg-blue-500 opacity-50 rounded-full animate-[spin_6s_linear_infinite] blur-3xl"></div>
          <div className="absolute top-[10%] right-[0%] w-[500px] h-[800px] bg-purple-500 opacity-50 rounded-full animate-[pulse_8s_linear_infinite] blur-3xl"></div>
          <div className="absolute bottom-[0%] left-[20%] w-96 h-96 bg-blue-600 opacity-20 rounded-full animate-[bounce_4s_linear_infinite] blur-3xl"></div>
          <div className="absolute bottom-[40%] right-[20%] w-96 h-96 bg-purple-600 opacity-40 rounded-full animate-[bounce_6s_linear_infinite] blur-3xl"></div>
          <div className="absolute top-[30%] left-[-10%] w-[600px] h-[600px] bg-blue-400 opacity-30 rounded-full animate-[pulse_5s_linear_infinite] blur-3xl"></div>
          <div className="absolute top-[60%] right-[-15%] w-[400px] h-[400px] bg-purple-400 opacity-25 rounded-full animate-[spin_7s_linear_infinite] blur-3xl"></div>
          <div className="absolute bottom-[20%] left-[5%] w-80 h-80 bg-blue-500 opacity-40 rounded-full animate-[bounce_5s_linear_infinite] blur-3xl"></div>
          <div className="absolute bottom-[50%] right-[10%] w-[500px] h-[500px] bg-purple-300 opacity-20 rounded-full animate-[spin_9s_linear_infinite] blur-3xl"></div>
          <div className="absolute top-[40%] right-[5%] w-[300px] h-[300px] bg-blue-300 opacity-35 rounded-full animate-[pulse_6s_linear_infinite] blur-3xl"></div>
          <div className="absolute top-[20%] left-[20%] w-[200px] h-[200px] bg-purple-500 opacity-30 rounded-full animate-[bounce_3s_linear_infinite] blur-3xl"></div>
          <div className="absolute top-[50%] left-[-5%] w-[400px] h-[400px] bg-blue-600 opacity-15 rounded-full animate-[spin_10s_linear_infinite] blur-3xl"></div>
        </div>
          <NavBar locoScroll={locomotiveScroll} />
          <Routes>
            <Route path="/" element={<Hero locoScroll={locomotiveScroll} />} />
            <Route
              path="/about"
              element={<Grid locoScroll={locomotiveScroll} />}
            />
            <Route
              path="/masterpieces"
              element={<Projects locoScroll={locomotiveScroll} />}
            />
            <Route path="/cheers" element={<Testimonial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
