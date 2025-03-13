"use client"

import React, { useEffect, useRef, useState } from 'react';


const ExamPrepLowerSections: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
 const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);


  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  

  const faqs = [
    {
      question: "What is the last day for registering for CAT 2025?",
      answer: "The last day for registering for CAT 2025 is September 20, 2025. Candidates must ensure they've completed all parts of their application by this deadline to avoid any disqualification or issues."
    },
    {
      question: "What is the last day for registering for CAT 2024?",
      answer: "The last day for registering for CAT 2024 has already passed."
    },
    {
      question: "What is the last day for applying for CAP 2025?",
      answer: "The last day for applying for CAP 2025 is October 15, 2025."
    },
    {
      question: "What is the last day for registering for XAT 2025?",
      answer: "The last day for registering for XAT 2025 is November 30, 2025."
    }
  ];
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
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, testimonials.length]);

  return (
    <div className="flex flex-col bg-gray-900 text-white">
      {/* Explore About Courses Section */}
      <section className="p-6 bg-gray-900">
  <div className="container mx-auto">
    <h2 className="mb-8 text-4xl font-semibold text-center">
      <span className="text-orange-500 italic font-normal">Explore About</span> <span className="text-white">Courses</span>
    </h2>
    
    <div className="flex flex-col md:flex-row">
      {/* Left Sidebar */}
      <div className="w-full md:w-1/5 border-r border-gray-800 pr-4">
        <ul className="space-y-4">
          <li className="text-orange-500  text-base md:text-lg py-1">Beginners Guide</li>
          <li className="text-gray-400  text-base md:text-lg   py-1">Study Plan</li>
          <li className="text-gray-400 text-base md:text-lg   py-1">Syllabus</li>
          <li className="text-gray-400  text-base md:text-lg  py-1">Top College</li>
          <li className="text-gray-400  text-base md:text-lg  py-1">Free Resources</li>
        </ul>
      </div>
      
      {/* Main Content */}
      <div className="w-full md:w-4/5 pl-0 md:pl-8 mt-4 md:mt-0">
        <div className="space-y-2">
          <div className="flex items-center justify-between py-2 border-b border-gray-800">
            <p className="text-white text-base md:text-lg ">Beginner&apos;s Guide Volume 1</p>
            <a href="#" className="text-orange-500 text-base md:text-lg ">Download File</a>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-800">
            <p className="text-white text-base md:text-lg ">Beginner&apos;s Guide Volume 2</p>
            <a href="#" className="text-orange-500 text-base md:text-lg ">Download File</a>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-800">
            <p className="text-white text-base md:text-lg ">Beginner&apos;s Guide Volume 3</p>
            <a href="#" className="text-orange-500 text-base md:text-lg ">Download File</a>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-800">
            <p className="text-white text-base md:text-lg ">Beginner&apos;s Guide Volume 4</p>
            <a href="#" className="text-orange-500 text-base md:text-lg ">Download File</a>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-800">
            <p className="text-white text-sm">Beginner&apos;s Guide Volume 5</p>
            <a href="#" className="text-orange-500 text-base md:text-lg ">Download File</a>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-gray-800">
            <p className="text-white text-base md:text-lg ">Beginner&apos;s Guide Volume 6</p>
            <a href="#" className="text-orange-500 text-base md:text-lg ">Download File</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* FAQs Section */}
      <section className="p-6 bg-gray-900 bg-opacity-70">
        <div className="container mx-auto">
          <h2 className="mb-6 text-4xl font-semibold text-center italic text-orange-500">FAQs</h2>
          
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  className="w-full flex items-center justify-between py-3 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-base md:text-lg ">{faq.question}</span>
                  <span className="text-orange-500 text-xl">
                    {openFaq === index ? '−' : '+'}
                  </span>
                </button>
                
                {openFaq === index && (
                  <div className="pb-4 text-sm text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-[#231815] text-white mt-5 ">
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

        {/* Row 2: Testimonials */}
        <div
          ref={carouselRef}
          className="flex overflow-x-hidden scroll-smooth relative"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {testimonials.map((testimonial) => (
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
    </div>
  );
};

export default ExamPrepLowerSections;