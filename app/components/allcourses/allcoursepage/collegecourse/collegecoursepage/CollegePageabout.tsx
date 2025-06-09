// app/components/ExamPrepLowerSections.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import { courses } from "@/app/collegecoursespage/Data";

interface ExamPrepLowerSectionsProps {
  slug: string;
}

const ExamPrepLowerSections: React.FC<ExamPrepLowerSectionsProps> = ({ slug }) => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleItems, setVisibleItems] = useState(4);
  const [activeTab, setActiveTab] = useState<string>("");

  console.log("slug data",slug);
  
  // Find the course based on the slug
  const course = courses.find((c) => c.slug.toLowerCase() === slug.toLowerCase());

  // Set the initial active tab when course is loaded
  useEffect(() => {
    if (course && course.courseTabs.length > 0) {
      setActiveTab(course.courseTabs[0].id);
    }
  }, [course]);

  const handleTabClick = (tabId: number | string) => {
    setActiveTab(String(tabId));
  };

  const toggleFaq = (index: number) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  // Static testimonials data (since not available in content.ts)
  const testimonials = [
    {
      id: 1,
      name: "Zayan Muhammed ZayanIbrahim",
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
        "The aptitude sessions provided for me at DCSMAT Vagamon was very interesting and useful. Both the session was good.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 4,
      name: "Anupama Nair",
      rating: 5,
      comment: "Best faculty training, excellent classes (Especially Arun sir)",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 5,
      name: "Amrutha Santhu S",
      rating: 5,
      comment:
        "Great faculties. They provide comprehensive material and mock test that stimulated actual test experience.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 6,
      name: "Navami Vinod",
      rating: 5,
      comment:
        "The mock tests & practice sessions at Prep Academy were very realistic. I highly recommend Prep Academy for career counseling.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 7,
      name: "Sandra",
      rating: 5,
      comment:
        "The supportive & encouraging atmosphere at Prep Academy made my career preparation journey smooth & stress free.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 8,
      name: "Alphons Roy",
      rating: 5,
      comment:
        "The coaching centre's teaching methodology was very effective in helping me grasp complex topics easily.",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 9,
      name: "DIVYA A.S",
      rating: 5,
      comment: "I attended the class of Arun sir... its too good and excellent. Thank you",
      avatar: "/api/placeholder/40/40",
    },
    {
      id: 10,
      name: "Sreelakshmi K",
      rating: 5,
      comment:
        "If you're looking for the best place to improve your career skills, I highly recommend this academy under Arun Sir’s guidance.",
      avatar: "/api/placeholder/40/40",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${index < rating ? "fill-current text-[#F55D3E]" : "fill-current text-gray-400"}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextIndex = (currentIndex + 1) % (testimonials.length / visibleItems);
        setCurrentIndex(nextIndex);
        carouselRef.current.scrollTo({
          left: nextIndex * carouselRef.current.clientWidth,
          behavior: "smooth",
        });
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex, visibleItems]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 768) {
        setVisibleItems(2);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(3);
      } else {
        setVisibleItems(4);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
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

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="flex flex-col bg-gray-900 text-white">
      <section className="p-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-semibold text-center">
            <span className="text-orange-500 italic font-normal">Explore About</span>{" "}
            <span className="text-white">Courses</span>
          </h2>
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/5 border-r border-gray-800">
              <div role="tablist" aria-label="Content Categories">
                {course.courseTabs.map((tab) => (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={activeTab === tab.id}
                    aria-controls={`panel-${tab.id}`}
                    className={`${
                      activeTab === tab.id ? "text-orange-500" : "text-gray-400"
                    } text-base md:text-lg py-1 w-full text-left`}
                    onClick={() => handleTabClick(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
            <div className="w-full md:w-4/5 pl-0 md:pl-8 mt-4 md:mt-0">
              {course.courseTabs.map((tab) => (
                <div
                  key={tab.id}
                  role="tabpanel"
                  id={`panel-${tab.id}`}
                  aria-labelledby={`tab-${tab.id}`}
                  className={`space-y-2 ${activeTab === tab.id ? "block" : "hidden"}`}
                >
                  {course.courseContent.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between py-2 border-b border-gray-800"
                    >
                      <p className="text-white text-base md:text-lg">{item.title}</p>
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

      <section className="p-6 bg-[#1A0E0E]">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-semibold text-center">
            <span className="text-orange-500 italic font-normal">Frequently Asked</span>{" "}
            <span className="text-white">Questions</span>
          </h2>
          <div className="space-y-4">
            {course.faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-800"
              >
                <button
                  className="flex justify-between items-center w-full py-4 text-left"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  aria-controls={`faq-${index}`}
                >
                  <span className="text-white text-base md:text-lg">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <div
                  id={`faq-${index}`}
                  className={`text-gray-300 text-base md:text-lg overflow-hidden transition-all duration-300 ${
                    openFaq === index ? "max-h-96 py-4" : "max-h-0"
                  }`}
                >
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="mb-8 text-4xl font-semibold text-center">
            <span className="text-orange-500 italic font-normal">What Our</span>{" "}
            <span className="text-white">Students Say</span>
          </h2>
          <div className="relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-hidden"
              style={{ scrollSnapType: "x mandatory" }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div
                  key={slideIndex}
                  className="flex min-w-full"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {testimonials
                    .slice(slideIndex * visibleItems, slideIndex * visibleItems + visibleItems)
                    .map((testimonial) => (
                      <div
                        key={testimonial.id}
                        className={`p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0`}
                      >
                        <div className="bg-[#231515] rounded-lg p-6 h-full">
                          <div className="flex items-center mb-4">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="w-10 h-10 rounded-full mr-4"
                            />
                            <div>
                              <h4 className="text-white text-base font-medium">
                                {testimonial.name}
                              </h4>
                              <div className="flex">{renderStars(testimonial.rating)}</div>
                            </div>
                          </div>
                          <p className="text-gray-300 text-sm md:text-base">
                            {testimonial.comment}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${
                    currentIndex === index ? "bg-[#F55D3E]" : "bg-gray-500"
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to testimonial slide ${index + 1}`}
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