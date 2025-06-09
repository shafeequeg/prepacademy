"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";

interface Logo {
  src: string;
  alt: string;
}

interface Video {
  title: string;
  url: string;
}

const CourseVideos: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const logos: Logo[] = [
    { src: "/dailyhunt.png", alt: "DailyHunt logo" },
    { src: "/businessstandard.png", alt: "Business Standard logo" },
    { src: "/asianetnews.png", alt: "AsiaNet News logo" },
    { src: "/mint.png", alt: "Mint logo" },
  ];

  const videos: Video[] = [
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

  // Calculate carousel logic
  const logosPerRow = 4;
  const totalRows = Math.ceil(logos.length / logosPerRow);
  const hasMultipleRows = totalRows > 1;

  const scrollRight = () => {
    if (carouselRef.current && hasMultipleRows) {
      const newIndex = Math.min(currentIndex + 1, totalRows - 1);
      setCurrentIndex(newIndex);
      // Use CSS transform to slide
      carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current && hasMultipleRows) {
      const newIndex = Math.max(currentIndex - 1, 0);
      setCurrentIndex(newIndex);
      carouselRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
    }
  };

  const handleIndicatorClick = (index: number) => {
    if (carouselRef.current) {
      setCurrentIndex(index);
      carouselRef.current.style.transform = `translateX(-${index * 100}%)`;
    }
  };

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
              <span className="text-[#F55D3E] font-dmserif italic">
                Read Features
              </span>
              <span className="text-white font-bold"> Online</span>
            </h2>
          </div>

          <div className="relative max-w-6xl mx-auto">
            <button
              onClick={scrollLeft}
              className={`absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-[#F55D3E] text-white rounded-full p-2 shadow-lg transition ${
                !hasMultipleRows || currentIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#a52a1a]"
              }`}
              disabled={!hasMultipleRows || currentIndex === 0}
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
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
              className="mx-8 sm:mx-12 overflow-x-hidden"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <div
                ref={carouselRef}
                className="flex transition-transform duration-300 ease-in-out"
                style={{ width: `${totalRows * 100}%` }}
              >
                <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-8 py-4 w-full">
                  {logos.map((logo, logoIndex) => (
                    <div
                      key={logoIndex}
                      className="flex items-center justify-center p-2 sm:p-4"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={80}
                        className="max-h-12 xs:max-h-14 sm:max-h-16 md:max-h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Navigation Button */}
            <button
              onClick={scrollRight}
              className={`absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-[#F55D3E] text-white rounded-full p-2 shadow-lg transition ${
                !hasMultipleRows || currentIndex === totalRows - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-[#a52a1a]"
              }`}
              disabled={!hasMultipleRows || currentIndex === totalRows - 1}
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
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

          {/* Row Indicators */}
          {hasMultipleRows && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalRows }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentIndex === index ? "bg-[#F55D3E]" : "bg-gray-400"
                  }`}
                  aria-label={`Go to row ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </section>
  );
};

export default CourseVideos;
