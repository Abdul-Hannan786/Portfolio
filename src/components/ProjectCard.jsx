import React from "react";
import "remixicon/fonts/remixicon.css";

const ProjectCard = ({ project }) => {
  const { description, liveLink, githubLink, thumbnail, tags, name } = project;

  return (
    <div className="relative h-max group overflow-hidden rounded-3xl shadow-lg transition-transform transform hover:scale-105 flex-shrink-0">
      <img
        src={thumbnail}
        alt={name}
        className="aspect-[5/3] object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex flex-col h-full justify-between">
          <div>
            <h3 className="text-2xl text-left font-mona font-bold">{name}</h3>
            <p className="text-xs sm:text-sm md:text-base lg:text-base text-left font-medium mb-2 font-gilroy">
              {description}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap gap-1">
              {tags.split(",").map((tag, index) => (
                <span
                  key={index}
                  className="dark:bg-gray-700 text-black bg-slate-200 font-bold dark:text-white text-xs py-0.5 px-2 rounded-md shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex bg-blue gap-2 items-center">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black dark:text-gray-900 font-bold dark:bg-white text-white text-xs py-1 px-2 rounded-md shadow-md flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <i className="ri-global-line"></i>
                <span className="ml-2">Website</span>
              </a>

              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black dark:text-gray-900 font-bold dark:bg-white text-white text-xs px-2 py-1 rounded-md shadow-md flex items-center space-x-2 hover:shadow-lg transition-all duration-300"
              >
                <i className="ri-github-fill"></i>
                <span className="ml-2">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
