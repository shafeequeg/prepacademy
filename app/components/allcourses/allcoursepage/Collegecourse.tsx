// CatExamApplySection.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface VideoCardProps {
  title: string;
  thumbnail: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail }) => {
  return (
    <div className="relative group overflow-hidden rounded-lg">
      <div className="relative w-full h-32 md:h-40 ">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-black bg-opacity-30 rounded-full p-3 flex items-center justify-center">
            <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
          </div>
        </div>
      </div>
      <p className="text-white text-sm mt-2">{title}</p>
    </div>
  );
};

const CatExamApplySection: React.FC = () => {
  const videoCards = [
    {
      title: "Explore About Courses",
      thumbnail: "/cat-video-thumbnail-1.jpg",
    },
    {
      title: "Explore About Courses",
      thumbnail: "/cat-video-thumbnail-2.jpg",
    },
    {
      title: "Explore About Courses",
      thumbnail: "/cat-video-thumbnail-3.jpg",
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
    {/* Background Image Between Sections */}
   

    {/* Main Content */}
    <div className="relative container mx-auto px-4 py-10 z-10">

        
      <div className="flex flex-col lg:flex-row gap-8 mb-16 mt-28">
        {/* Left Content */}
        <div className="lg:w-1/2">
          <div className="mb-6">
            <p className="text-[#F55D3E] text-sm font-medium mb-1">LIMITED TIME OFFER</p>
            <h2 className="text-[#F55D3E] text-3xl font-bold mb-4">Apply For CAT 2025</h2>
            <p className="text-gray-300 mb-6">
              Never wait until the late to get into a good program. Take small, individual steps to get more attention to your application.
            </p>
          </div>

          {/* Progress Items */}
          <div className="space-y-3 mb-8">
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#F55D3E] mr-3"></div>
              <p className="text-white">Advance (Open Pool Strength Should Be 95%)</p>
            </div>
            <div className="flex items-center">
              <div className="w-4 h-4 rounded-full bg-[#F55D3E] mr-3"></div>
              <p className="text-white">Advance (Given Pool Average Should Be 90%)</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#F55D3E] hover:bg-[#E04D2E] text-white py-2 px-6 rounded-md transition-colors">
              Apply Now
            </button>
            <button className="border border-[#F55D3E] text-[#F55D3E] py-2 px-6 rounded-md hover:bg-[#F55D3E] hover:text-white transition-colors">
              Get a Free Trial
            </button>
          </div>

          {/* Telegram Link */}
          <div className="mt-4">
            <Link href="#" className="text-gray-400 hover:text-[#F55D3E] flex items-center text-sm">
              <span>Join Our Telegram Channel</span>
            </Link>
          </div>
        </div>

        {/* Right Content - Mascot and Form */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="bg-[#1F1414] p-6 rounded-lg relative">
            <h3 className="text-[#F55D3E] text-lg font-semibold mb-6">PREP POWERHOUSE</h3>
            <p className="text-white mb-6">Get guidance and clear your doubts</p>
            
            {/* Form Fields */}
            <div className="space-y-4 mb-6">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full bg-[#2A1B1B] border border-[#3A2A2A] rounded-md p-2 text-white"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-[#2A1B1B] border border-[#3A2A2A] rounded-md p-2 text-white"
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className="w-full bg-[#2A1B1B] border border-[#3A2A2A] rounded-md p-2 text-white"
              />
              <textarea 
                placeholder="Your Message (Optional)" 
                className="w-full bg-[#2A1B1B] border border-[#3A2A2A] rounded-md p-2 text-white h-24"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="bg-[#F55D3E] hover:bg-[#E04D2E] text-white py-2 px-6 rounded-md w-full transition-colors">
              SUBMIT
            </button>
          </div>
        </div>
      </div>

      {/* Related Videos Section */}
      <div className="mb-6">
        <h2 className="text-2xl mb-6 inline-block">
          <span className="text-white font-serif italic">Related</span> <span className="text-[#F55D3E]">Videos</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {videoCards.map((video, index) => (
            <VideoCard key={index} title={video.title} thumbnail={video.thumbnail} />
          ))}
        </div>

        <div className="flex justify-center">
          <Link href="/videos" className="text-[#F55D3E] flex items-center hover:underline">
            <span>View More</span>
            <ChevronRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CatExamApplySection;