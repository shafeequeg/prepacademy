import React from "react";
import Image from "next/image";

const SuccessStories = () => {
  // Sample gallery images - replace with your actual images
  const galleryImages = [
    "/aboutbenefitlogo.png",
    "/aboutbenefitlogo.png",
    "/aboutbenefitlogo.png",
    "/aboutbenefitlogo.png",
    "/aboutbenefitlogo.png",
    "/aboutbenefitlogo.png",
    "/aboutbenefitlogo.png",
    "/aboutbenefitlogo.png",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 text-white">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          <span className="font-serif italic text-[#FF6B45]">Our Success</span>{" "}
          Stories
        </h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg">
          At Prep Academy, we take pride in our students&apos; achievements.
          From excelling in competitive exams to gaining admission into top
          universities, our students&apos; success reflects our commitment to
          providing the best career counseling services and academic support.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="relative h-48 w-full">
              <Image
                src={image}
                alt={`Student success story ${index + 1}`}
                layout="fill"
                objectFit="cover"
                className="brightness-90 hover:brightness-100 transition-all duration-300"
              />
            </div>
          </div>
        ))}
      </div>

      {/* View More Link */}
      <div className="text-center mb-16">
        <a
          href="#"
          className="text-[#FF6B45] font-medium inline-flex items-center hover:text-[#ff8a6c] transition-colors"
        >
          View More Photos
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#2a1a1a] to-[#341f1f] rounded-xl p-6 md:p-10 mt-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="md:max-w-md">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl leading-tight mb-4">
              <span className="text-[#FF6B45] italic">
                Looking For The Best
              </span>
              <br />
              Educational Academy
              <br />
              Near You?
            </h3>
          </div>

          <div className="md:max-w-md">
            <p className="text-gray-300 mb-6">
              Join us today and discover how Prep Academy helps students achieve
              success. For more information, visit our website or contact us
              directly to learn more about our comprehensive career counseling
              and academic excellence programs.
            </p>
            <a
              href="#"
              className="inline-flex items-center bg-[#FF6B45] hover:bg-[#ff8a6c] text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              JOIN NOW
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
