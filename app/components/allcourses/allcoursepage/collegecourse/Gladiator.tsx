import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ExamPrepHomepage: React.FC = () => {
  const gladiators = [
    {
      name: 'Maria Thomas',
      title: 'CAT Analyst',
      image: '/gladiator1.png',
    },
    {
      name: 'Jeffin George',
      title: 'CAT Attempt',
      image: '/gladiator.png',
    },
    {
      name: 'Rose Alvez',
      title: 'CAT Architect',
      image: '/gladiator3.png',
    },
    {
      name: 'Raj Takur',
      title: 'CAT Method',
      image: '/gladiator4.png',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen  bg-gray-900 text-white">
      {/* Header Section with Gladiators - Full Width */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 ">
        {/* Remove container and max-width constraints */}
        <section className="w-full bg-gradient-to-b from-[#1a0e0e] to-[#241010] py-20 relative">
  {/* Section Header - Updated for Responsive Layout */}
  <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8 px-8">
    {/* Left Side - Title & Subtitle */}
    <div className="flex items-center">
      <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl md:mr-3">
        Meet Your Exam <br />
        <span className="text-3xl md:text-5xl font-bold text-white">Gladiators</span>
      </h2>
    </div>

    {/* Right Side - Description */}
    <h4 className="text-gray-300 text-sm md:text-lg max-w-md md:max-w-lg md:text-right mt-4 md:mt-0">
      Behind every student&apos;s success is a passionate, experienced, and dedicated educator who&apos;s cracked
      the toughest exams themselves.
    </h4>
  </div>

  {/* Gladiators Grid */}
  <div className="w-full mt-20">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full max-w-screen-xl mx-auto px-6">
      {gladiators.map((gladiator, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-8 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg w-full"
        >
          <div className="w-52 h-52 relative overflow-hidden rounded-full mb-6">
            <Image
              src={gladiator.image}
              alt={gladiator.name}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
          <h4 className="font-semibold text-xl text-white">{gladiator.name}</h4>
          <p className="text-[#FF6B45] text-sm">{gladiator.title}</p>
        </div>
      ))}
    </div>
  </div>
</section>

      </header>

      {/* Rest of the code remains unchanged */}
      {/* Navigation Pills */}
      <div className="w-full bg-[#1a0e0e] py-4">
  <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center items-center text-white text-sm md:text-base">
    
    <span className="mx-2 flex items-center">
      Top-Ranked Faculty
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      Master Trainers
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      Gurus
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      One-On-One Mentorship
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      Zero Sugarcoating
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

    <span className="mx-2 flex items-center">
      Brutal Honesty & Proven Strategies
      <span 
        className="w-4 h-4 bg-contain bg-no-repeat bg-center ml-2" 
        style={{ backgroundImage: "url(/lightning.svg)" }} 
      ></span>
    </span>

  </div>
</div>

      {/* Bootcamp Banner */}
      <div className="bg-black text-white">
  {/* Summer Bootcamp Banner */}
  <div className="bg-[#FF6347] relative overflow-hidden">
  <div className="bg-black text-white">
  {/* Summer Bootcamp Banner */}
  <div className="bg-[#FF6347] relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-12">
      
      {/* Right side - Image */}
    <div className="flex-shrink-0 flex justify-center "> 
  <img 
    src="/allcoursecollegemaster.png" 
    alt="Mascot" 
    className="w-36 h-36 md:w-48 md:h-52 relative top-8"
  />
</div>


      {/* Left side - Content */}
      <div className="z-10 w-full max-w-lg text-center md:text-left">
  <h2 className="text-white text-4xl md:text-5xl font-bold mb-1">Be The Master</h2> 
  <h2 className="text-white text-4xl mb-4 font-bold md:mb-2">#SummerBootcamp2025</h2>
  <button className="bg-white text-[#FF6347] px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors flex items-center mx-auto md:mx-0">
    GET EARLY ACCESS <ArrowRight size={16} className="ml-2" />
  </button>
</div>


      {/* Background pattern - subtle lines and shapes */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-8 w-12 h-12 border-2 border-white rounded-md"></div>
        <div className="absolute bottom-4 left-1/4 w-8 h-8 border-2 border-white"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-1 bg-white"></div>
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white rounded-full"></div>
      </div>
    </div>
  </div>
</div>

  </div>
</div>
      {/* Notifications Section */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
          <span className="text-[#FF6347] font-serif italic">Latest</span>{" "}
          <span className="text-white font-normal text-4xl">Notifications</span>
        </h2>

        <div className="bg-[#231515] rounded-lg p-8">
          {/* First Notification */}
          <div className="mb-4  pb-4">
          <div className="text-white bg-[#FF6347] text-sm inline-block px-2 py-1 rounded mb-3">
          Updated on 10 February 2025 | 2:30 PM | <span className="font-bold">CAT-2025</span>
            </div>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              The Common Admission Test is the gateway for admissions to the MBA programs at top B-schools in India.
            </p>
          </div>

          {/* Second Notification */}
          <div className="mb-4  pb-4">
          <div className="text-white bg-[#FF6347] text-sm inline-block px-2 py-1 rounded mb-3">
          Updated on 10 February 2025 | 2:30 PM | <span className="font-bold">CAT-2025</span>
            </div>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              The Common Admission Test is the gateway for admissions to the MBA programs at top B-schools in India.
            </p>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              The Common Admission Test is the gateway for admissions to the MBA programs at top B-schools in India.
            </p>
          </div>

          {/* Third Notification */}
          <div>
            <div className="text-white bg-[#FF6347] text-sm inline-block px-2 py-1 rounded mb-3">
              Updated on 10 February 2025 | 2:30 PM | <span className="font-bold">CAT-2025</span>
            </div>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              These exams serve as gateways to prestigious B-Schools across the country and internationally. Popular exams include CAT, XAT, CMAT, and GMAT, with the CAT being especially challenging due to limited seats and a vast pool of applicants.
            </p>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              The Common Admission Test is the gateway for admissions to the MBA programs at top B-schools in India.
            </p>
          </div>
        </div>
      </div>
    

      {/* Blogs Section */}
      <section className="p-6 bg-gray-900">
        <div className="container mx-auto">
          <h2 className="text-4xl font-semibold  mb-6">
            Know More With <span className="font-bold text-[#FF6347] ">Blogs</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Blog 1 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-700 relative">
                <Image src="/news1.png" alt="Strategies for CAT 2025" layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Strategies for CAT 2025</h3>
                <p className="text-gray-300 text-base md:text-lg  flex">
                Preparing for the CAT 2024 exam is crucial. Get started with our expert...
                </p>
                <Link href="#" className="text-orange-500 text-lg hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog 2 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-700 relative">
                <Image src="/new2.png" alt="Are the CAT Essentials" layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">Are the CAT Essentials</h3>
                <p className="text-gray-300 text-base md:text-lg  flex">
                Preparing for the CAT 2024 exam is crucial. Get ready to explore...
                </p>
                <Link href="#" className="text-orange-500 text-lg hover:underline">
                  Read More →
                </Link>
              </div>
            </div>

            {/* Blog 3 */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="h-40 bg-gray-700 relative">
                <Image src="/news3.png" alt="How to Crack CAT?" layout="fill" objectFit="cover" />
              </div>
              <div className="p-4">
                <h3 className="font-bold mb-2">How to Crack CAT?</h3>
                <p className="text-gray-300 text-base md:text-lg  flex">
                Preparing for the CAT 2024 exam is crucial. Get started with our insider...
                </p>
                <Link href="#" className="text-orange-500 text-lg hover:underline">
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-6">
            <Link href="#" className="text-white hover:text-orange-500">
              View More →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExamPrepHomepage;