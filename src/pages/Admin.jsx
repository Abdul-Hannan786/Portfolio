import React, { useEffect } from "react";
import ReviewSubmition from "../components/ReviewSubmission";
import ProjectSubmition from "../components/ProjectSubmition";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const correctPassword = "your_password";
    const password = prompt("Please enter the admin password:");

    if (password === null || password !== correctPassword) {
      alert("Incorrect password. Redirecting to home.");
      navigate("/");
    }
  }, [navigate]);

  return (
    <section className="relative">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-4">
        <ProjectSubmition />
        <ReviewSubmition />
      </div>
    </section>
  );
};

export default Admin;
