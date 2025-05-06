import React from "react";
import Image from "next/image";

const MissionVisionApproach = () => {
  return (
    <div className="w-full bg-[#2a1b1b] py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Mission Section */}
        <div className="bg-[#3a2424] rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#ff6035]">Our</span>{" "}
                <span className="text-white">Mission</span>
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our personalized learning approach ensures that each student
                receives the attention they deserve. By focusing on both
                academic performance and personal development, Prep Academy
                provides a complete development program that fosters growth in
                every aspect of life.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <Image
                src="/onmission.png"
                alt="Hands joining together in unity"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Vision Section */}
        <div className="bg-[#3a2424] rounded-lg overflow-hidden">
          <div className="flex flex-col-reverse md:flex-row">
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <Image
                src="/ourvision.png"
                alt="People working on blueprints"
                fill
                className="object-cover"
              />
            </div>
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#ff6035]">Our</span>{" "}
                <span className="text-white">Vision</span>
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our personalized learning approach ensures that each student
                receives the attention they deserve. By focusing on both
                academic performance and personal development, Prep Academy
                provides a complete development program that fosters growth in
                every aspect of life.
              </p>
            </div>
          </div>
        </div>

        {/* Approach Section */}
        <div className="bg-[#3a2424] rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-4">
                <span className="text-[#ff6035]">Our</span>{" "}
                <span className="text-white">Approach</span>
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Our personalized learning approach ensures that each student
                receives the attention they deserve. By focusing on both
                academic performance and personal development, Prep Academy
                provides a complete development program that fosters growth in
                every aspect of life.
              </p>
            </div>
            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
              <Image
                src="/ourapproach.png"
                alt="Team collaborating around a table"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionApproach;
