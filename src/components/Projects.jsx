import React, { useState } from "react";
import "../index.css";
import ProjectCard from "./ProjectCard";
import useStore from "../Store.js";

const ProjectsSection = () => {
  const { masterpieces } = useStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const projectsPerPage = 6;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = masterpieces.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(masterpieces.length / projectsPerPage);

  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setLoading(true);
      setCurrentPage(page);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Simulate a delay for loading
    }
  };

  return (
    <section className="projects-section py-10 scroll-smooth" id="masterpieces">
      <div className="m-auto px-4">
      <h1 className="text-center text-4xl mb-4 font-mona font-bold text-gray-800  dark:text-white py-5 uppercase">

      New Adventures: Latest Creations 🔮✨
        </h1>

        {loading ? (
          <div className="flex justify-center items-center py-10 h-96">
            <div className="spinner-border animate-spin border-4 border-t-4 border-gray-800 rounded-full w-8 h-8"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-96">
            {currentProjects.map((project) => (
              <div key={project.id} className="bg-transparent h-full">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}

        <nav className="w-full flex justify-center mt-10">
          <ul className="inline-flex -space-x-px text-base h-10">
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </a>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <a
                  href="#"
                  onClick={() => handlePageChange(index + 1)}
                  className={`flex items-center justify-center px-4 h-10 leading-tight ${
                    currentPage === index + 1
                      ? "text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                      : "text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  }`}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default ProjectsSection;
