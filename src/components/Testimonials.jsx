import React from "react";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const testimonials = [
  {
    name: "Huzaifa",
    feedback:
      "Konain transformed our vague ideas into a digital masterpiece. His innovative approach and technical wizardry made our project not only functional but a delight to use. A true artisan in the world of code!",
    img: "https://cdn-icons-png.flaticon.com/128/300/300221.png", 
  },
  {
    name: "Huzaifa",
    feedback:
      "Konain transformed our vague ideas into a digital masterpiece. His innovative approach and technical wizardry made our project not only functional but a delight to use. A true artisan in the world of code!",
    img: "https://cdn-icons-png.flaticon.com/128/300/300221.png", 
  },
  {
    name: "Huzaifa",
    feedback:
      "Konain transformed our vague ideas into a digital masterpiece. His innovative approach and technical wizardry made our project not only functional but a delight to use. A true artisan in the world of code!",
    img: "https://cdn-icons-png.flaticon.com/128/300/300221.png", 
  },
  {
    name: "Huzaifa",
    feedback:
      "Konain transformed our vague ideas into a digital masterpiece. His innovative approach and technical wizardry made our project not only functional but a delight to use. A true artisan in the world of code!",
    img: "https://cdn-icons-png.flaticon.com/128/300/300221.png", 
  },
  {
    name: "Huzaifa",
    feedback:
      "Konain transformed our vague ideas into a digital masterpiece. His innovative approach and technical wizardry made our project not only functional but a delight to use. A true artisan in the world of code!",
    img: "https://cdn-icons-png.flaticon.com/128/300/300221.png", 
  },
  {
    name: "Huzaifa",
    feedback:
      "Konain transformed our vague ideas into a digital masterpiece. His innovative approach and technical wizardry made our project not only functional but a delight to use. A true artisan in the world of code!",
    img: "https://cdn-icons-png.flaticon.com/128/300/300221.png", 
  },
];



function Testimonials() {
  return (
    <div id="allcomments" className=" h-screen  relative mx-auto flex flex-col justify-center items-center py-20 px-4 md:px-8 lg:pt-24 scroll-smooth">
        <h1 className="text-center text-5xl font-obviouslyBold text-[6rem]  dark:text-white text-gray-800 font-bold  mb-5">


          Echoes of Delight: Testimonials
        </h1>

      <Marquee speed={100} gradient={false} className="space-x-6" pauseOnHover>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            feedback={testimonial.feedback}
            img={testimonial.img}
          />
        ))}
      </Marquee>
    </div>
  );
}

export default Testimonials;
