import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "../index.css";
import ProjectCard from "./ProjectCard";
import useStore from "../Store.js";
const ProjectsSection = () => {
  const { masterpieces } = useStore();
  return (
    <section
      className="projects-section h-max relative py-10 scroll-smooth"
      id="masterpieces"
    >
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
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 1.5,
                spaceBetween: 40,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 40,
              },
            }}
          >
            {masterpieces.map((project) => (
              <SwiperSlide
                key={project.id}
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
