import React, { useState, useEffect } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubCalendarComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="h-max z-20 relative py-10 scroll-smooth w-full flex-col items-center justify-center"
      id="contributuons"
    >
      <h1 className="text-center text-3xl font-mona font-bold text-gray-800  dark:text-white py-5 uppercase">
        Commitment in Action: My GitHub Story 🌱✨
      </h1>

      {loading ? (
        <div>Loading calendar...</div>
      ) : (
        <div className="flex justify-center w-full">
          <GitHubCalendar
            username={"Konain-Raza"}
            colorScheme="dark"
            style={{ color: "white", fontWeight: "bold" }}
          />
        </div>
      )}
    </section>
  );
};

export default GitHubCalendarComponent;
