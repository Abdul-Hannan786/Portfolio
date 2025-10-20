import React from "react";

function TestimonialCard({ reviews }) {
  const { reviewerName, reviewerPicture, review } = reviews;
  return (
    <div
      className="p-6 max-w-md mx-auto shadow-lg bg-white dark:bg-opacity-10  rounded-3xl overflow-hidden transform  mr-10"
      style={{
        backdropFilter: "blur(0.5px)",
        WebkitBackdropFilter: "blur(0.5px)", // For Safari
      }}
    >
      <div className="flex items-center mb-4">
        <img
          loading="lazy"
          className="w-16 h-16 rounded-full border-4 border-indigo-500 object-cover"
          src={reviewerPicture}
          alt={reviewerName}
        />
        <div className="ml-4">
          <h2 className="text-xl font-semibold text-black dark:text-white font-mona">
            {reviewerName}
          </h2>
        </div>
      </div>
      <p className="dark:text-white text-gray-800 leading-relaxed font-gilroy">
        {review}
      </p>
    </div>
  );
}

export default TestimonialCard;
