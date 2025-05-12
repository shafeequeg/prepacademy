"use client";

import React, { useEffect, useRef, useState } from "react";

const ExamPrepLowerSections: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);

  const [activeTab, setActiveTab] = useState<string>("beginners-guide"); // Initial state is a string

  const tabs = [
    {
      id: "beginners-guide",
      label: "Beginners Guide",
      className: "text-orange-500",
    },
    { id: "study-plan", label: "Study Plan", className: "text-gray-400" },
    { id: "syllabus", label: "Syllabus", className: "text-gray-400" },
    { id: "top-college", label: "Top College", className: "text-gray-400" },
    {
      id: "free-resources",
      label: "Free Resources",
      className: "text-gray-400",
    },
  ];

  const tabContent = [
    { title: "Beginner's Guide Volume 1", id: 1 },
    { title: "Beginner's Guide Volume 2", id: 2 },
    { title: "Beginner's Guide Volume 3", id: 3 },
    { title: "Beginner's Guide Volume 4", id: 4 },
    { title: "Beginner's Guide Volume 5", id: 5 },
    { title: "Beginner's Guide Volume 6", id: 6 },
  ];

  const handleTabClick = (tabId: number | string) => {
    setActiveTab(String(tabId)); // Convert to string
  };

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  const faqs = [
    {
      question: "	What is NID DAT exam",
      answer:
        "National Institute of Design Design Aptitude Test (NID DAT) is an entrance examination conducted for admission to undergraduate (B.Des) and postgraduate (M.Des) design programs offered by various NID campuses across India.",
    },
    {
      question: "Is NID DAT compulsory for taking admission in NID?",
      answer:
        "Yes, NID DAT (Design Aptitude Test) is compulsory for admissions to design programs at National Institute of Design campuses in India.",
    },
    {
      question: "Where can I get the NID DAT syllabus?",
      answer:
        "Aspirants are strongly advised to review the NID DAT syllabus and eligibility criteria on admissions.nid.edu to ensure they meet the admission requirements and prepare effectively.",
    },
    {
      question: "Is the NID DAT exam tough?",
      answer:
        "The NID DAT exam is generally considered moderately to highly difficult, depending on individual creativity, design aptitude, and preparation level.",
    },
  ];
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
          index < rating
            ? "fill-current text-[#F55D3E]"
            : "fill-current text-gray-400"
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
      comment:
        "The aptitude sessions provided for me at DCSMAT Vagamon was very interesting and useful . Both the session was good.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 4,
      name: "Anupama Nair",
      rating: 5,
      comment:
        "Best faculty training, excellent classes ( Especially Arun sir)",
      avatar: "/api/placeholder/40/40",
    },

    {
      id: 5,
      name: "Amrutha Santhu S",
      rating: 5,
      comment:
        "Great faculties. They provide comprehensive material and mock test that stimulated actual test experience. They had in-depth knowledge of the subject matter and were able to break complex concept into understandable language.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 6,
      name: "navami vinod",
      rating: 5,
      comment:
        "The mock tests & practice sessions at Prep Academy were very realistic . I felt well prepared on the exam day thanks to their rigorous training!!The supportive & encouraging atmosphere at Prep Academy made my IPM preparationjourney smooth & stress free. The teachers were always approachable & providedconstructive feedbackI highly recommend Prep Academy for CAT coaching. Their holistic approach, experiencedfaculty & supportive learning environment made a significant difference in my preparationjourney.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 7,
      name: "Sandra",
      rating: 5,
      comment:
        "The mock tests & practice sessions at Prep Academy were very realistic & helped me buildmy confidence.The supportive & encouraging atmosphere at Prep Academy made my IPM preparationjourney smooth & stress free. The teachers were always approachable & providedconstructive feedbackI highly recommend Prep Academy for the coaching classes",
      avatar: "/api/placeholder/40/40",
    },

    {
      id: 8,
      name: "Alphons Roy",
      rating: 5,
      comment:
        "The coaching centre's teaching methodology was very effective in helping me grasp complex topics easily.The coaching centre's online resources and support were extremely helpful in my preparation for the entrance exam.The coaching centre's regular doubt-clearing sessions were very beneficial in clarifying concepts and improving my understanding.",
      avatar: "/api/placeholder/40/40",
    },

    {
      id: 9,
      name: "DIVYA A.S",
      rating: 5,
      comment:
        "I attended the class of Arun sir... its too good and excellent.Thank you",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 10,
      name: "sreelakshmi K",
      rating: 5,
      comment:
        "If you're looking for the best place to improve your aptitude skills, I highly recommend this academy under Arun Sir’s guidance. His teaching style is unmatched, breaking down complex problems into simple, understandable concepts.",
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
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalSlides = Math.ceil(testimonials.length / visibleItems);

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
    <div className="flex flex-col bg-gray-900 text-white">
      {/* Explore About Courses Section */}
      <section className="p-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-semibold text-center">
            <span className="text-orange-500 italic font-normal">
              Explore About
            </span>{" "}
            <span className="text-white">Courses</span>
          </h2>

          <div className="flex flex-col md:flex-row">
            {/* Left Sidebar - Accessible Tabs */}
            <div className="w-full md:w-1/5 border-r border-gray-800  ">
              <div role="tablist" aria-label="Content Categories">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    className={`${
                      activeTab === tab.id ? "text-orange-500" : "text-gray-400"
                    } text-base md:text-lg py-1 w-full text-left `}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Content - Tab Panels */}
            <div className="w-full md:w-4/5 pl-0 md:pl-8 mt-4 md:mt-0">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  role="tabpanel"
                  id={`panel-${tab.id}`}
                  aria-labelledby={`tab-${tab.id}`}
                  className={`space-y-2 ${
                    activeTab === tab.id ? "block" : "hidden"
                  }`}
                >
                  {tabContent.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-2 border-b border-gray-800"
                    >
                      <p className="text-white text-base md:text-lg">
                        {tab.label} Volume {item.id}
                      </p>
                      <a
                        href="#"
                        className="text-orange-500 text-base md:text-lg"
                        onClick={(e) => e.preventDefault()}
                      >
                        Download File
                      </a>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="p-6 bg-gray-900 bg-opacity-70">
        <div className="container mx-auto">
          <h2 className="mb-6 text-4xl font-semibold text-center italic text-orange-500">
            FAQs
          </h2>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-700">
                <button
                  className="w-full flex items-center justify-between py-3 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-base md:text-lg ">{faq.question}</span>
                  <span className="text-orange-500 text-xl">
                    {openFaq === index ? "−" : "+"}
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
      <section className="py-16 bg-[#231815] text-white mt-5">
        <div className="container mx-auto px-4 md:px-8">
          {/* Row 1: Heading and Motivational Text */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-medium mb-4">
              <span className="font-dmserif italic"> Read what Our </span>
              <span className="text-[#F55D3E] font-bold">Students Say</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Are you ready to conquer the world? Your NID journey might seem
              daunting, but remember, every great achievement starts with a
              single step. Believe in yourself, because you hold the power to
              make your dreams a reality!
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
                <div
                  key={slideIndex}
                  className="flex-shrink-0 w-full flex flex-wrap"
                >
                  {testimonials
                    .slice(
                      slideIndex * visibleItems,
                      (slideIndex + 1) * visibleItems
                    )
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className={`p-2 ${
                          visibleItems === 1
                            ? "w-full"
                            : visibleItems === 2
                            ? "w-1/2"
                            : visibleItems === 3
                            ? "w-1/3"
                            : "w-1/4"
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
                            <h3 className="text-lg font-medium">
                              {testimonial.name}
                            </h3>
                          </div>

                          {/* Rating Stars */}
                          <div className="flex mb-3">
                            {renderStars(testimonial.rating)}
                          </div>

                          {/* Comment */}
                          <p className="text-sm text-gray-300">
                            {testimonial.comment
                              .split(" ")
                              .slice(0, 20)
                              .join(" ")}
                            {testimonial.comment.split(" ").length > 20
                              ? "..."
                              : ""}
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
                  className={`mx-1 h-2 w-2 rounded-full ${
                    currentIndex === index ? "bg-[#F55D3E]" : "bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamPrepLowerSections;
