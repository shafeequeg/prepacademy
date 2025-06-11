"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
// import Link from 'next/link';
import { ArrowRight } from "lucide-react";

const ExamPrepHomepage: React.FC = () => {
  const gladiators = [
    {
      name: "Hanna Susan Koshy ",
      title: "Founder",
      image: "/gladiators/HannaSusanKoshy.png",
    },
    {
      name: "	Dr. Nithya S Cherian ",
      title: "Co-Founder",
      image: "/gladiators/DrNithyaSCherian.png",
    },
    {
      name: "	Dr. Aleena Arun ",
      title: "Co-Founder",
      image: "/gladiators/aleenaarun.png",
    },
    {
      name: "	Annie Eapen ",
      title: "Co-Founder ",
      image: "/gladiators/AnnieEapen.png",
    },
    {
      name: "	Ashutosh Mishra",
      title: "Mentor - IIM Ahmedabad",
      image: "/gladiators/AshutoshMishra.png",
    },
    {
      name: "	Deepak Kushwaha ",
      title: "Mentor - IIM Lucknow",
      image: "/gladiators/deepakkushwah.png",
    },
    {
      name: "	Raghav Shukla",
      title: "",
      image: "/gladiators/RaghavShukla.png",
    },
    {
      name: "	Nikhil Bhalla",
      title: "22 Years Experienced VARC Mentor",
      image: "/gladiators/NikhilBhalla.png",
    },
   
  ];

  const gladiatorssecond = [
    {
      name: "Praveen J Nair ",
      title: "Mentor, QA Expert",
      image: "/gladiators/PraveenJNair.png",
    },
    {
      name: "	Sreejith A",
      title: "Mentor, VARC Expert",
      image: "/gladiators/sreejith.png",
    },
    {
      name: "	Varghese Joseph ",
      title: "Mentor, QA Expert",
      image: "/gladiators/Varghese.png",
    },
    {
      name: "Dr. Swati A. Mishra ",
      title: "Mentor",
      image: "/gladiators/DrSwatiAMishra.png",
    },
    {
      name: "Taruna B. Khanna ",
      title: "Mentor",
      image: "/gladiators/TarunaBKhann.png",
    },
    {
      name: "Kavya Narayani ",
      title: "Mentor",
      image: "/gladiators/Kavya.png",
    },
    {
      name: "Nandhu Anilkumar ",
      title: "Business Development Manager",
      image: "/gladiators/NandhuAnilkumar.png",
    },
    {
      name: "Sandya K V",
      title: "Student Counselor",
      image: "/gladiators/SandyaKV.png",
    },
   
  ];

  const blogs = [
    {
      id: 1,
      title: "Best IPM BBA Coaching & Exam Preparation Institute in India",
      description: "Your Path to Success",
      image: "/blogs/blog1.png",
    },
    {
      id: 2,
      title: "CAT Exam Preparation: Ace the CAT ",
      description: "Essential Tips and Resources for Exam Preparation",
      image: "/blogs/blog2.png",
    },
    {
      id: 3,
      title: "Important Study Hacks for CAT 2025 Students",
      description: "Important Study Hacks for CAT 2025 Students",
      image: "/blogs/blog3.png",
    },

    {
      id: 4,
      title: "CAT 2025 Course",
      description: "CAT 2025 Courses: Which One is Right for You?",
      image: "/blogs/blog4.png",
    },
  ];

  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselRefsecond = useRef<HTMLDivElement>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexsecond, setActiveIndexsecond] = useState(0);

  const totalSlides = Math.ceil(gladiators.length / 4);
  const totalSlidessecond = Math.ceil(gladiatorssecond.length / 4);

 

  const scrollLeft = () => {
    if (carouselRef.current) {
      const newIndex = (activeIndex - 1 + totalSlides) % totalSlides;
      setActiveIndex(newIndex);
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const newIndex = (activeIndex + 1) % totalSlides;
      setActiveIndex(newIndex);
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollLeftsecond = () => {
    if (carouselRefsecond.current) {
      const newIndex =
        (activeIndexsecond - 1 + totalSlidessecond) % totalSlidessecond;
      setActiveIndexsecond(newIndex);
      const slideWidth = carouselRefsecond.current.offsetWidth;
      carouselRefsecond.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRightsecond = () => {
    if (carouselRefsecond.current) {
      const newIndex = (activeIndexsecond + 1) % totalSlidessecond;
      setActiveIndexsecond(newIndex);
      const slideWidth = carouselRefsecond.current.offsetWidth;
      carouselRefsecond.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col min-h-screen  bg-gray-900 text-white">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 ">
        <section className="w-full bg-gradient-to-b from-[#1a0e0e] to-[#241010] py-20 px-8 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8 px-8">
            <div className="flex items-center">
              <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl md:mr-3">
                Meet Your Exam <br />
                <span className="text-3xl md:text-5xl font-bold text-white">
                  Gladiators
                </span>
              </h2>
            </div>

           
            <h4 className="text-gray-300 text-sm md:text-lg max-w-md leading-tight whitespace-pre-line relative px-6">
              <span className="text-2xl md:text-5xl text-gray-400 absolute -left-2 top-0">
                &ldquo;
              </span>
              <span>
                Behind every student&apos;s success are passionate, <br />
                experienced educators who&apos;ve cracked the toughest exams.
              </span>
              <span className="text-2xl md:text-5xl text-gray-400 absolute -right-1 bottom-0">
                &rdquo;
              </span>
            </h4>
          </div>

          <div className="max-w-7xl mx-auto mt-20 overflow-hidden relative px-12">
            <button
              onClick={scrollLeft}
              className="absolute left-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            <div
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out overflow-x-hidden"
              style={{
                scrollSnapType: "x mandatory",
                msOverflowStyle: "none",
                scrollbarWidth: "none", 
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {Array.from({ length: Math.ceil(gladiators.length / 4) }).map(
                (_, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="min-w-full flex justify-center px-4 flex-nowrap"
                    style={{ scrollSnapAlign: "start" }}
                  >
                   
                    {gladiators
                      .slice(groupIndex * 4, groupIndex * 4 + 4)
                      .map((gladiator, index) => (
                        <div key={index} className="w-1/4 px-2">
                          <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg w-full">
                            <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 relative overflow-hidden rounded-full mb-4">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Image
                                  src={gladiator.image}
                                  alt={gladiator.name}
                                  layout="fill"
                                  objectFit="cover"
                                  className="rounded-full"
                                  style={{
                                    width: "100%",
                                    height: "100%",
                                    objectPosition: "center",
                                  }}
                                />
                              </div>
                            </div>
                            <h4 className="font-semibold text-sm md:text-lg text-white text-center">
                              {gladiator.name}
                            </h4>
                            <p className="text-[#FF6B45] text-xs md:text-sm text-center">
                              {gladiator.title}
                            </p>
                          </div>
                        </div>
                      ))}
                  </div>
                )
              )}
            </div>

            
            <button
              onClick={scrollRight}
              className="absolute right-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="max-w-7xl mx-auto mt-20 overflow-hidden relative px-12">
            <button
              onClick={scrollLeftsecond}
              className="absolute left-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <div
              ref={carouselRefsecond}
              className="flex transition-transform duration-300 ease-in-out overflow-x-hidden"
              style={{
                scrollSnapType: "x mandatory",
                msOverflowStyle: "none",
                scrollbarWidth: "none",
              }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {Array.from({
                length: Math.ceil(gladiatorssecond.length / 4),
              }).map((_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="min-w-full flex justify-center px-4 flex-nowrap"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {gladiatorssecond
                    .slice(groupIndex * 4, groupIndex * 4 + 4)
                    .map((gladiator, index) => (
                      <div key={index} className="w-1/4 px-2">
                        <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg w-full">
                          <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 relative overflow-hidden rounded-full mb-4">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Image
                                src={gladiator.image}
                                alt={gladiator.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                                style={{
                                  width: "100%",
                                  height: "100%",
                                  objectPosition: "center",
                                }}
                              />
                            </div>
                          </div>
                          <h4 className="font-semibold text-sm md:text-lg text-white text-center">
                            {gladiator.name}
                          </h4>
                          <p className="text-[#FF6B45] text-xs md:text-sm text-center">
                            {gladiator.title}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <button
              onClick={scrollRightsecond}
              className="absolute right-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

        
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(gladiatorssecond.length / 4) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndexsecond(index);
                    if (carouselRefsecond.current) {
                      const slideWidth = carouselRefsecond.current.offsetWidth;
                      carouselRefsecond.current.scrollTo({
                        left: index * slideWidth,
                        behavior: "smooth",
                      });
                    }
                  }}
                 
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(gladiatorssecond.length / 4) }).map(
              (_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndexsecond(index);
                    if (carouselRefsecond.current) {
                      const slideWidth = carouselRefsecond.current.offsetWidth;
                      carouselRefsecond.current.scrollTo({
                        left: index * slideWidth,
                        behavior: "smooth",
                      });
                    }
                  }}
                 
                  aria-label={`Go to slide ${index + 1}`}
                />
              )
            )}
          </div>
        </section>
      </header>

      
    
      <div className="w-full bg-[#1a0e0e] py-6">
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-row flex-wrap justify-center items-center text-white text-sm md:text-base lg:text-lg">
          <div className="flex flex-row items-center justify-center flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">
                Top-Ranked Faculty
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">
                Master Trainers
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">Gurus</span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">
                One-On-One Mentorship
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">
                Zero Sugarcoating
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">
                Brutal Honesty & Proven Strategies
              </span>
            </div>
          </div>
        </div>
      </div>

     
     
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
          <span className="text-[#FF6347] font-serif italic">Latest</span>{" "}
          <span className="text-white font-normal text-4xl">Notifications</span>
        </h2>

        <div className="bg-[#231515] rounded-lg p-8">
         
          <div className="mb-4  pb-4">
            <div className="text-white bg-[#FF6347] text-sm inline-block px-2 py-1 rounded mb-3">
              Updated on 10 February 2025 | 2:30 PM |{" "}
              <span className="font-bold">CAT-2025</span>
            </div>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              The Common Admission Test is the gateway for admissions to the MBA
              programs at top B-schools in India.
            </p>
          </div>

         
          <div className="mb-4  pb-4">
            <div className="text-white bg-[#FF6347] text-sm inline-block px-2 py-1 rounded mb-3">
              Updated on 10 February 2025 | 2:30 PM |{" "}
              <span className="font-bold">CAT-2025</span>
            </div>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              The Common Admission Test is the gateway for admissions to the MBA
              programs at top B-schools in India.
            </p>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              The Common Admission Test is the gateway for admissions to the MBA
              programs at top B-schools in India.
            </p>
          </div>

          
          <div>
            <div className="text-white bg-[#FF6347] text-sm inline-block px-2 py-1 rounded mb-3">
              Updated on 10 February 2025 | 2:30 PM |{" "}
              <span className="font-bold">CAT-2025</span>
            </div>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              These exams serve as gateways to prestigious B-Schools across the
              country and internationally. Popular exams include CAT, XAT, CMAT,
              and GMAT, with the CAT being especially challenging due to limited
              seats and a vast pool of applicants.
            </p>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              The Common Admission Test is the gateway for admissions to the MBA
              programs at top B-schools in India.
            </p>
          </div>
        </div>
      </div>

      
      <section className="p-6 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
         
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-medium  text-center md:text-left">
              <span className="font-dmserif italic"> Know More With</span>{" "}
              <span className="text-[#F55D3E] font-bold not-italic">Blogs</span>
            </h2>
          </div>

         
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
               
                <div className="relative w-full aspect-video">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

               
                <div className="p-6">
                  
                  <h3 className="text-xl font-bold mb-3 text-white">
                    {blog.title}
                  </h3>

                 
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {blog.description}
                  </p>

               
                  <a
                    href={`/blogdetails/${blog.id}`}
                    className="inline-flex items-center text-[#F55D3E] hover:text-[#FF7D5E] font-medium"
                  >
                    Read Full
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

         
          <div className="text-center">
            <a
              href="/blogs"
              className="inline-flex items-center text-white hover:text-gray-200 font-medium"
            >
              View More
              <svg
                className="w-5 h-5 ml-2"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamPrepHomepage;
