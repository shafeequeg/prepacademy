"use client";

import React from "react";

const StudentTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Amrutha Santhu",
      rating: 5,
      comment: "Teaching Style (Great faculties. They provide comprehensive material and mock test that stimulated actual test experiences.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "Sreenath",
      rating: 5,
      comment: "Teaching Style is effective and easy",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      name: "Anupama Nair",
      rating: 5,
      comment: "Best faculty training, excellent classes (Especially Arun sir)",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, index) => (
        <svg
          key={index}
          className="w-4 h-4 fill-current text-[#F55D3E]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ));
  };
  

  return (
    <section className="py-16 bg-[#231815] text-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Row 1: Heading and Motivational Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Read what Our{" "}
            <span className="text-[#F55D3E] font-bold">Students Say</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Are you ready to conquer the world? Your CAT 2024 journey might seem daunting, but remember, every great achievement starts with a single step. Believe in yourself, because you hold the power to make your dreams a reality!
          </p>
        </div>

        {/* Row 2: Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#2C2422] p-6 rounded-lg shadow-md"
            >
              {/* Avatar and Name */}
              <div className="flex items-center mb-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-500 mr-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-medium">{testimonial.name}</h3>
              </div>

              {/* Rating Stars */}
              <div className="flex mb-3">{renderStars(testimonial.rating)}</div>

              {/* Comment */}
              <p className="text-sm text-gray-300">{testimonial.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;
