import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";
import useStore from "../Store";
function Testimonials() {
  const { testimonials } = useStore();
  return (
    <div
      id="cheers"
      className="w-full h-max relative mx-auto flex flex-col justify-center items-center pb-20  scroll-smooth"
    >
      <h1 className="text-center text-4xl mb-4 font-mona font-bold text-gray-800  dark:text-white py-5 uppercase">
      Voices of Joy: What People Say 🎤✨
      </h1>

      <Marquee speed={100} gradient={false} pauseOnHover>
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
