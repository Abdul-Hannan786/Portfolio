import React, { useEffect, useState } from "react";
import ReviewSubmition from "../components/ReviewSubmission";
import ProjectSubmition from "../components/ProjectSubmition";

const Admin = () => {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const password = prompt("Enter Admin Password:");
    if (password === import.meta.env.VITE_ADMIN_PASSWORD) {
      setIsAuth(true);
    } else {
      alert("Access Denied! Unauthorized credentials.");
      setIsAuth(false);
    }
  }, []);

  return (
    <section className="relative min-h-screen dark">
      {isAuth ? (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-32 gap-6 shadow-lg rounded-lg">
        
          <ProjectSubmition />
          <ReviewSubmition />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-32 h-screen gap-4">
          <h1 className="text-3xl font-bold text-red-600">
            Unauthorized Access Detected! 🚫
          </h1>
          <p className="text-lg text-gray-600">
            You are being redirected. Please provide correct credentials to gain access.
          </p>
        </div>
      )}
    </section>
  );
};

export default Admin;
