import React, { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";

const Hero = ({ locoScroll }) => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".hero-section"),
      smooth: true,
    });

    // Clean up the scroll instance on unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  const handleLinkClick = (e, target) => {
    e.preventDefault();
    locoScroll.scrollTo(target);
  };

  return (
    <section className="hero-section relative lg:pt-24 md:pt-28 sm:pt-28 pt-32" >
    

      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center relative z-20 ">
        <a
          href="#"
          className="inline-flex justify-center items-center py-1 lg:mt-10 px-1 pr-4 mb-2 text-sm text-gray-700 bg-gray-200 rounded-full transition-all duration-300 hover:bg-gray-300 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 animate-[bounce_1s_linear_infinite]"
          role="alert"
        >
          <span className="text-lg bg-primary-600 rounded-full text-white px-2 py-1.5 mr-1">
            ✨
          </span>
          <span className="text-sm font-bold font-gilroy">
            Transformative Web Sorcery Unleashed
          </span>
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
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </a>

        <h1 className="uppercase lg:px-10 px-0 sm:w-full text-3xl sm:px-0 md:text-4xl lg:text-5xl sm:text-4xl font-bold md:leading-normal lg:leading-snug font-mona text-gray-900 dark:text-white">
          Imagination to Mastery: ✨🔮
          <br />
          Crafting Digital Adventures Beyond Boundaries 🌈🛠️
        </h1>

        <p className="mb-8 text-lg font-gilroy text-gray-500 lg:w-[90%] mx-auto lg:text-xl font-bold sm:px-16 xl:px-48 dark:text-gray-400">
          Salutations! I'm Konain, a digital virtuoso conjuring magic from
          Pakistan, where pixels dance to the rhythm of my code.
      
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 items-center">
  <a
    href="#"
    className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition-all duration-300"
  >
    Learn More
    <svg
      className="ml-2 -mr-1 w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </a>
  
  <img
    src="/assets/images/robot.png"
    alt="Robot"
    className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 transition-transform duration-500 hover:scale-105"
  />
</div>

      </div>
    </section>
  );
};

export default Hero;
