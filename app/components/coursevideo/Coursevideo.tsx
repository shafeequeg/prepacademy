"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";


const CourseVideos = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const logos = [
    { src: "/dailyhunt.png", alt: "DailyHunt logo" },
    { src: "/businessstandard.png", alt: "Business Standard logo" },
    { src: "/asianetnews.png", alt: "AsiaNet News logo" },
    { src: "/mint.png", alt: "Mint logo" },
   
  ];

  const scrollRight = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].children[0].clientWidth;
      const newIndex = Math.min(currentIndex + 1, logos.length - 1);
      
      carouselRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth'
      });
      
      setCurrentIndex(newIndex);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const itemWidth = carouselRef.current.children[0].children[0].clientWidth;
      const newIndex = Math.max(currentIndex - 1, 0);
      
      carouselRef.current.scrollTo({
        left: newIndex * itemWidth,
        behavior: 'smooth'
      });
      
      setCurrentIndex(newIndex);
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
      <section className="bg-gradient-to-r from-[#2B1615] to-[#1A0F0E] py-16 mt-7">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-medium">
            <span className="text-[#F55D3E] font-dmserif italic">Read Features</span>
            <span className="text-white font-bold"> Online</span>
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Left Navigation Button */}
          <button
            onClick={scrollLeft}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-[#F55D3E] text-white rounded-full p-2 shadow-lg hover:bg-[#a52a1a] transition ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentIndex === 0}
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

          {/* Carousel Container */}
          <div 
            ref={carouselRef}
            className="flex overflow-x-hidden scroll-smooth space-x-8 justify-center items-center"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            <div className="flex space-x-8 py-4">
              {logos.map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-40 h-24 flex items-center justify-center"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={80}
                    className="max-h-20 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Navigation Button */}
          <button
            onClick={scrollRight}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-[#F55D3E] text-white rounded-full p-2 shadow-lg hover:bg-[#a52a1a] transition ${currentIndex === logos.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={currentIndex === logos.length - 1}
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
    </section>
    </section>
  );
};

export default CourseVideos;