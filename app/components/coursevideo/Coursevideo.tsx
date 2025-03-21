"use client";

import React, { useRef } from "react";

const CourseVideos = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const logos = [
    { src: "/dailyhunt.png", alt: "DailyHunt logo" },
    { src: "/businessstandard.png", alt: "Business Standard logo" },
    { src: "/asianetnews.png", alt: "AsiaNet News logo" },
    { src: "/mint.png", alt: "Mint logo" },
   
  ];

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.clientWidth, // Scroll by one viewport width
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.clientWidth, // Scroll by one viewport width
        behavior: "smooth",
      });
    }
  };

  const videos = [
    {
      title: "Preparing for the CAT 2025",
      url: "https://www.youtube.com/embed/Qiy4xihD_kM",
    },
    {
      title: "Best Coaching Centres",
      url: "https://www.youtube.com/embed/M33APKoNOqE",
    },
    {
      title: "How to Approach CAT Quantitative Ability",
      url: "https://www.youtube.com/embed/4g7cyj774_M",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-left text-white">
            <span className="font-dmserif italic">Course Related</span>{" "}
            <span className="text-[#F55D3E]">Videos</span>
          </h2>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Video Thumbnail */}
              <div className="w-full h-64">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8 flex items-center justify-center">
          <a
            href="https://www.youtube.com/@PrepAcademy"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#F55D3E] text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-[#a52a1a] transition-colors"
          >
            View More
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Read Features Section */}
      <div className="relative w-full bg-gradient-to-r from-[#2B1615] to-[#1A0F0E] bg-black mt-16 py-12">
        <div className="relative container mx-auto px-4 md:px-8">
          <div className="flex flex-col items-center">
            {/* Heading */}
            <h2 className="text-2xl md:text-3xl font-medium mb-12 relative z-10">
              <span className="text-[#F55D3E] font-dmserif italic">Read Features</span>
              <span className="text-white font-bold"> Online</span>
            </h2>

            {/* Carousel Container */}
            <div className="w-[70%] relative  mx-auto ">
              {/* Left Arrow */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#F55D3E] text-white rounded-full p-2 shadow-lg hover:bg-[#a52a1a] transition"
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

              {/* Carousel */}
              <div
                ref={carouselRef}
                className="flex overflow-x-hidden scroll-smooth relative z-10 ml-11"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="flex space-x-8">
                  {logos.map((logo, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[25%] flex items-center justify-center"
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-20 md:h-26 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={scrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#F55D3E] text-white rounded-full p-2 shadow-lg hover:bg-[#a52a1a] transition"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseVideos;