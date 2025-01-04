import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import useStore from "../Store"
function Testimonials() {
  const {testimonials} = useStore();
  return (
    <div
      id="testimonials"
      className="h-max relative mx-auto flex flex-col justify-center items-center py-20 px-4 md:px-8 lg:pt-24 scroll-smooth"
    >
      <h1 className="text-center text-5xl font-obviouslyBold text-[6rem] dark:text-white text-gray-800 font-bold mb-5">
        Echoes of Delight: Testimonials
      </h1>

      <Marquee speed={100} gradient={false} className="space-x-6" pauseOnHover>
        {testimonials && testimonials.length > 0 ? ( 
          testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} reviews={testimonial} />
          ))
        ) : (
          <div className="text-center text-lg text-gray-500">
            Loading testimonials...
          </div>
        )}
      </Marquee>
    </div>
  );
}

export default Testimonials;
