import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../index.css";
import SyncedImg from "../assets/Images/Synced.png";
import tackleitimg from "../assets/Images/tackleit.png";
import sundownimg from "../assets/Images/Sundown.png";
import rankedvoteimg from "../assets/Images/Ranked-Vote.png";
import martimg from "../assets/Images/mart.png";
import quoteimg from "../assets/Images/quotequirk.png";
import ProjectCard from "./ProjectCard";
import LocomotiveScroll from "locomotive-scroll";

const projects = [
  {
    title: "Synced",
    description: "A Chatting Application for seamless communication.",
    link: "https://lets-synced.vercel.app/",
    tags: ["React", "Firebase"],
    imgSrc: SyncedImg,
  },
  {
    title: "Tackleit",
    description: "A task management app to streamline your workflow.",
    link: "https://tackleit.netlify.app/",
    tags: ["React", "Node.js"],
    imgSrc: tackleitimg,
  },
  {
    title: "Sundown",
    description: "A modern weather application to track your local forecast.",
    link: "https://sundown-app.example.com",
    tags: ["React", "API"],
    imgSrc: sundownimg,
  },
  {
    title: "Ranked Vote",
    description: "A platform for conducting ranked voting with ease.",
    link: "https://rankedvote.example.com",
    tags: ["React", "GraphQL"],
    imgSrc: rankedvoteimg,
  },
  {
    title: "Mart",
    description: "An e-commerce application for seamless shopping experiences.",
    link: "https://mart.example.com",
    tags: ["React", "MongoDB"],
    imgSrc: martimg,
  },
  {
    title: "Quote Quirk",
    description: "A simple app to fetch and display motivational quotes.",
    link: "https://quotequirk.example.com",
    tags: ["React", "REST API"],
    imgSrc: quoteimg,
  },
];

const ProjectsSection = () => {
  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: document.querySelector(".projects-section"),
  //     smooth: true,
  //   });

  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);

  return (
    <section className="projects-section h-screen relative py-28 scroll-smooth">
      <div className=" m-auto px-4">
        <h1 className="text-center text-5xl font-obviouslyBold text-[5rem]  dark:text-white text-gray-800 font-bold py-5 uppercase bg-gradient-text bg-clip-text  m-auto">
          Fresh Endeavors: Recent Ventures
        </h1>

        <div className=" h-max ">
          <Swiper
            freeMode={true}
            modules={[FreeMode, Autoplay]}
            className="w-full h-full"
            loop={true}
            autoplay={{
              delay: 2000, // Delay in ms
              disableOnInteraction: false, // Continue autoplay after interaction
            }}
            breakpoints={{
              320: {
                slidesPerView: 1, // For very small mobile screens
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 1.5, // For mobile devices
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2, // For tablets
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5, // For laptops/desktops
                spaceBetween: 40,
              },
            }}
          >
            {projects.map((project) => (
              <SwiperSlide
                key={project.title}
                className="bg-transparent swiper-slide h-full "
              >
                <ProjectCard project={project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
