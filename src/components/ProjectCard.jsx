import React from "react";

const ProjectCard = ({ project }) => {
  return (
<div className="h-60 w-[18rem] sm:w-[22rem] md:w-[24rem] group overflow-hidden rounded-3xl shadow-lg transition-transform transform hover:scale-105 flex-shrink-0">
  <img
    src={project.imgSrc}
    alt={project.title}
    className="w-full h-full object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
  />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex flex-col h-full">
          <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left font-bold">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-left font-medium mb-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs sm:text-sm px-2 py-1 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs md:text-sm px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <i className="ri-arrow-right-up-line text-lg md:text-xl"></i>
          </a>
          <a
            href={`https://github.com/your-username/${project.title
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm px-3 py-2 rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          >
            <i className="ri-github-line text-lg md:text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
