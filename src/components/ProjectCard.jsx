import React from "react";

const ProjectCard = ({ project }) => {
  const {description, liveLink, githubLink, thumbnail, tags, name} = project;
  
  console.log("Tags=>",typeof tags)

  return (
    <div className="h-max group overflow-hidden rounded-3xl shadow-lg transition-transform transform hover:scale-105 flex-shrink-0">
      <img
        src={thumbnail}
        alt={name}
        className="aspect-[4.5/3] object-cover rounded-t-3xl transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 group-hover:opacity-80 transition-opacity duration-300"></div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
      <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4 md:p-5 lg:p-6 xl:p-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex flex-col h-full">
          <h3 className="text-5xl text-left font-mona font-bold mt-5">
            {name}
          </h3>
          <p className="text-xs sm:text-sm md:text-base lg:text-xl text-left font-medium mb-2 font-gilroy">
            {description}
          </p>
          <div className="flex flex-wrap gap-1 sm:gap-2 md:gap-3">
            {/* {tags.map((tag, index) => (
              <span
                key={index}
                className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-xs sm:text-sm px-2 py-1 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))} */}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-xs md:text-sm px-3 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </a>
          <a
           href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs md:text-sm px-3 py-2 rounded-lg text-white bg-gray-800 hover:bg-gray-700 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="40"
              height="40"
              viewBox="0 0 30 30"
            >
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
