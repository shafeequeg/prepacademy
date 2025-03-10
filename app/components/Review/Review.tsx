"use client";

import React, { useEffect, useRef, useState } from "react";

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
    {
      id: 4,
      name: "John Doe",
      rating: 4,
      comment: "Great experience with the course. Highly recommended!",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 5,
      name: "Jane Smith",
      rating: 5,
      comment: "The faculty is amazing and the study material is top-notch.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 6,
      name: "Alice Johnson",
      rating: 5,
      comment: "The mock tests were very helpful for my preparation.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-current text-[#F55D3E]" : "fill-current text-gray-400"
        }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  // Automatic carousel scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (currentIndex + 1) % (testimonials.length / 4);
        setCurrentIndex(nextIndex);
        carouselRef.current.scrollTo({
          left: nextIndex * carouselRef.current.clientWidth,
          behavior: "smooth",
        });
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  return (
    <section className="py-16 bg-[#231815] text-white mt-5">
      <div className="container-fluid mx-auto px-4 md:px-8 w-full">
        {/* Row 1: Heading and Motivational Text */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            <span className="font-dmserif italic"> Read what Our{" "}</span>
            <span className="text-[#F55D3E] font-bold">Students Say</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Are you ready to conquer the world? Your CAT 2024 journey might seem daunting, but remember, every great achievement starts with a single step. Believe in yourself, because you hold the power to make your dreams a reality!
          </p>
        </div>

        {/* Row 2: Testimonials Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-1/4 p-2" // 4 cards in a row
            >
              <div className="bg-[#2C2422] p-6 rounded-lg shadow-md h-full">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;