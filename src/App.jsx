import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { db } from "../firebase-config";
import { getDocs, collection } from "firebase/firestore";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import NotFound from "./components/NotFound";
import Admin from "./pages/Admin";

function App() {
  const [isVisible, setIsVisible] = useState(true);
  const locomotiveScroll = new LocomotiveScroll();
  const [testimonials, setTestimonials] = useState([]);
  const [masterpieces, setMasterpieces] = useState([]);

  const fetchTestimonials = async () => {
    try {
      const response = await getDocs(collection(db, "reviews"));
      const data = response.docs.map((doc) => doc.data());
      setTestimonials(data);
    } catch (error) {
      console.error("Error fetching testimonials", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const response = await getDocs(collection(db, "projects"));
      const data = response.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMasterpieces(data);
    } catch (err) {
      console.error("Failed to fetch projects. Please try again later.");
    }
  };

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
      document.title = document.hidden
        ? "Twist Time! Don't Blink!"
        : "Konain's Artistic Odyssey";
    };
    fetchTestimonials();
    fetchProjects();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <Router>
      <div className="dark:bg-primary bg-yellow-50 relative overflow-hidden h-max">
        <div className="z-[100]">
          <div className="absolute inset-0 pointer-events-none z-0">
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
            <Route path="/masterpieces" element={<Projects locoScroll={locomotiveScroll} masterpieces={masterpieces} />} />
            <Route path="/cheers" element={<Testimonials testimonials={testimonials} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
