import React, { useState } from "react";
import Confetti from "react-confetti";
import firebase from "../assets/Images/firebase.png";
import Marquee from "react-fast-marquee";
import ClipboardButton from "./CopyButton";
import "../index.css";
const Grid = () => {
  const [showConfetti, setShowConfetti] = useState(false);
  const skills = [
    "html",
    "css",
    "javascript",
    "dart",
    "c",
    "cpp",
    "php",
    "py",
    "nodejs",
    "figma",
    "bootstrap",
    "tailwindcss",
    "react",
    "docker",
    "dotnet",
    "flutter",
    "git",
    "github",
    "ai",
    "ps",
    "linux",
    "md",
    "mysql",
    "netlify",
    "vercel",
  ];
  const copyToClipboard = () => {
    navigator.clipboard.writeText("konainraza105@gmail.com");
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="scroll-smooth z-[100] grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-4  w-[95%] mx-auto py-36 px-4 md:px-8 lg:pt-36 " id="about">
      <div className="col-span-1 sm:col-span-2 lg:col-span-2 border-opacity-30 border-solid rounded-3xl shadow-lg p-6 flex items-center justify-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className="text-left text-gray-800 dark:text-gray-200 ">
          <h2 className="text-4xl font-mona font-bold sm:text-4xl lg:test-5xl md:text-3xl mb-2">
            Hey There, I'm Konain Raza! 😎
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl font-gilroy">
            Stirring up creativity and code to bake digital masterpieces! 🎨💻
            If tech is a puzzle, I'm your missing piece—let’s solve it together
            and make magic happen! 🧩✨🚀
          </p>
        </div>
      </div>

      <div className="relative border-opacity-30 border-solid rounded-3xl shadow-lg p-4 flex flex-col gap-4 items-center justify-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        {showConfetti && <Confetti />}
        <h1 className="text-gray-800 dark:text-gray-200 text-3xl font-mona font-bold sm:text-4xl lg:test-4xl md:text-3xl text-center">
          Ready to team up for a project? ✨
        </h1>
        <button className="flex items-center space-x-2 border border-white dark:border-gray-200 text-gray-800 dark:text-gray-200 p-2 rounded-full  transition duration-300">
          <span className="text-sm sm:text-base lg:text-lg font-bold font-mona ">
            Steal My Email! ✌️
          </span>

          <ClipboardButton onClick={copyToClipboard} />
        </button>
      </div>

      <div className="border-opacity-30 border-solid rounded-3xl shadow-lg p-4 flex items-center justify-center bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className="text-center flex flex-col gap-2">
          <h2 className="text-gray-800 dark:text-gray-200 text-3xl font-mona font-bold sm:text-4xl lg:test-4xl md:text-3xl">
            Want to See My Powers?💪
          </h2>
          <p className="text-xl sm:text-2xl lg:text-xl md:text-xl font-gilroy text-gray-800 dark:text-gray-200">
            Snag my resume and dive into my skill-filled adventures! 🌟📄✨
          </p>
          <a
            href="https://drive.google.com/file/d/1PGgKQa4qwDMdyMHegludwjRYJ91j5rm7/view?usp=sharing" target="blank"
            download
            className=" transition duration-300 ease-in-out "
          >
            <button
              type="submit"
              className="flex justify-center gap-2 items-center mx-auto shadow-xl text-lg dark:bg-transparent bg-s backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-purple-950 hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border rounded-full group font-mona"
            >
              <span className="text-black dark:text-white">
                {" "}
                Fetch My Fame!
              </span>
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </button>
          </a>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-2 flex flex-col gap-4">
        <div className="border-opacity-30 border-solid rounded-3xl shadow-lg p-4 py-7 flex flex-col items-left h-auto dark: bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h2 className="text-gray-800 dark:text-gray-200 text-4xl font-mona font-bold sm:text-4xl lg:test-5xl md:text-4xl mb-2">
            What’s on My Plate? 🥗✨
          </h2>
          <p className="text-xl sm:text-2xl lg:text-2xl font-gilroy text-gray-800 dark:text-gray-200">
            Diving into web apps, new tech stacks, and solutions that make
            waves! 🌊 Ready for the next challenge—because who doesn’t enjoy a
            little code chaos? 😄💻
          </p>
        </div>

        <div className="border-opacity-30 border-solid rounded-3xl shadow-lg p-4 px-4 flex flex-col items-center justify-center w-full sm:h-32 lg:h-32 bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
          <h2 className="text-gray-800 dark:text-gray-200 text-2xl sm:text-3xl md:text-2xl lg:text-2xl font-mona font-bold text-left">
            Whipping up something special in the code kitchen! 🍳✨
          </h2>
          <p className="hidden sm:inline text-xl w-full sm:text-2xl lg:text-2xl font-gilroy text-gray-800 dark:text-gray-200 text-left">
            Stay tuned—chaos is on the menu! 😄💻
          </p>
        </div>
      </div>

      <div className="col-span-1 sm:col-span-2 lg:col-span-2 border-opacity-30 border-solid rounded-3xl shadow-lg flex items-center justify-center relative overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
        <div className="  flex flex-col items-start h-auto w-full py-2">
          <div className="w-full px-5">
            <h2 className="text-gray-800 dark:text-gray-200 text-4xl font-mona font-bold sm:text-5xl lg:text-4xl md:text-4xl mb-2">
              My Tech Arsenal 💥
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-gilroy text-gray-800 dark:text-gray-200 text-left ">
              Surfing the code waves like a tech-savvy mermaid! 🧜‍♂️🌊 Whipping up
              solutions like a master chef—just add a pinch of creativity! 🍳✨
              Are you ready to sprinkle some code magic? Let’s create some
              delightful chaos! 😄
            </p>
          </div>
          <div className="w-full overflow-hidden bg-transparent h-max">
            <Marquee speed={50} className="flex items-center bg-none h-max" pauseOnHover>
              {skills.map((skill) => (
                <a
                  key={skill}
                  href="https://skillicons.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-none mt-5 flex items-center h-max justify-center" // Centered items for better alignment
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${skill}&theme=dark`}
                    alt={skill}
                    className="h-14 mx-3 transition-transform duration-200 hover:scale-125" // Slightly smaller height for better responsiveness
                  />
                </a>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
