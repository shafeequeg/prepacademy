"use client";

import React, { useEffect, useRef, useState } from "react";

const StudentTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "zayan Muhammed ZayanIbrahim",
      rating: 5,
      comment: "Excellent faculties",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 2,
      name: "Salini C",
      rating: 4,
      comment: "Teaching style is effective and easy",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 3,
      name: "Sreenath",
      rating: 5,
      comment: "The aptitude sessions provided for me at DCSMAT Vagamon was very interesting and useful . Both the session was good.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 4,
      name: "Anupama Nair",
      rating: 5,
      comment: "Best faculty training, excellent classes ( Especially Arun sir)",
      avatar: "/api/placeholder/40/40",
    },

    {
      id: 5,
      name: "Amrutha Santhu S",
      rating: 5,
      comment: "Great faculties. They provide comprehensive material and mock test that stimulated actual test experience. They had in-depth knowledge of the subject matter and were able to break complex concept into understandable language.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 6,
      name: "navami vinod",
      rating: 5,
      comment: "The mock tests & practice sessions at Prep Academy were very realistic . I felt well prepared on the exam day thanks to their rigorous training!!The supportive & encouraging atmosphere at Prep Academy made my IPM preparationjourney smooth & stress free. The teachers were always approachable & providedconstructive feedbackI highly recommend Prep Academy for CAT coaching. Their holistic approach, experiencedfaculty & supportive learning environment made a significant difference in my preparationjourney.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 7,
      name: "Sandra",
      rating: 5,
      comment: "The mock tests & practice sessions at Prep Academy were very realistic & helped me buildmy confidence.The supportive & encouraging atmosphere at Prep Academy made my IPM preparationjourney smooth & stress free. The teachers were always approachable & providedconstructive feedbackI highly recommend Prep Academy for the coaching classes",
      avatar: "/api/placeholder/40/40",
    },

    {
      id: 8,
      name: "Alphons Roy",
      rating: 5,
      comment: "The coaching centre's teaching methodology was very effective in helping me grasp complex topics easily.The coaching centre's online resources and support were extremely helpful in my preparation for the entrance exam.The coaching centre's regular doubt-clearing sessions were very beneficial in clarifying concepts and improving my understanding.",
      avatar: "/api/placeholder/40/40",
    },

    {
      id: 9,
      name: "DIVYA A.S",
      rating: 5,
      comment: "I attended the class of Arun sir... its too good and excellent.Thank you",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 10,
      name: "sreelakshmi K",
      rating: 5,
      comment: "If you're looking for the best place to improve your aptitude skills, I highly recommend this academy under Arun Sir’s guidance. His teaching style is unmatched, breaking down complex problems into simple, understandable concepts.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);



  // Function to render stars
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-current text-[#F55D3E]" : "fill-current text-gray-400"
          }`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  // Update visible items based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1); // Mobile: 1 item
      } else if (window.innerWidth < 768) {
        setVisibleItems(2); // Small tablets: 2 items
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3); // Tablets: 3 items
      } else {
        setVisibleItems(4); // Desktop: 4 items
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatic carousel scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const maxIndex = Math.ceil(testimonials.length / visibleItems) - 1;
        const nextIndex = currentIndex < maxIndex ? currentIndex + 1 : 0;
        setCurrentIndex(nextIndex);
        carouselRef.current.scrollTo({
          left: (nextIndex * carouselRef.current.clientWidth),
          behavior: "smooth",
        });
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length, visibleItems]);

  // Calculate how many slides are needed based on visible items
  const totalSlides = Math.ceil(testimonials.length / visibleItems);

  // Handle manual navigation
  const goToSlide = (index: number) => {
    if (carouselRef.current) {
      setCurrentIndex(index);
      carouselRef.current.scrollTo({
        left: index * carouselRef.current.clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-[#231815] text-white mt-5">
      <div className="container mx-auto px-4 md:px-8">
        {/* Row 1: Heading and Motivational Text */}

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            <span className="font-dmserif italic"> Read what Our{" "}</span>
            <span className="text-[#F55D3E] font-bold">Students Say</span>
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Are you ready to conquer the world? Your CAT 2025 journey might seem daunting, but remember, every great achievement starts with a single step. Believe in yourself, because you hold the power to make your dreams a reality!
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Row 2: Testimonials Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth relative"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Create groups of cards based on visibleItems */}
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="flex-shrink-0 w-full flex flex-wrap">
                {testimonials
                  .slice(slideIndex * visibleItems, (slideIndex + 1) * visibleItems)
                  .map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className={`p-2 ${visibleItems === 1
                        ? 'w-full'
                        : visibleItems === 2
                          ? 'w-1/2'
                          : visibleItems === 3
                            ? 'w-1/3'
                            : 'w-1/4'
                        }`}
                    >
                      <div className="bg-[#2C2422] p-6 rounded-lg shadow-md h-full">
                        {/* Avatar and Name */}
                        <div className="flex items-center mb-3">
                          {/* <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-500 mr-3">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-full h-full object-cover"
                            />
                          </div> */}
                          <h3 className="text-lg font-medium">{testimonial.name}</h3>
                        </div>

                        {/* Rating Stars */}
                        <div className="flex mb-3">{renderStars(testimonial.rating)}</div>

                        {/* Comment */}
                        <p className="text-sm text-gray-300">
                          {testimonial.comment.split(" ").slice(0, 20).join(" ")}
                          {testimonial.comment.split(" ").length > 20 ? "..." : ""}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 h-2 w-2 rounded-full ${currentIndex === index ? 'bg-[#F55D3E]' : 'bg-gray-400'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentTestimonials;