"use client"

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ExamPrepHomepage: React.FC = () => {
  const gladiators = [
    {
      name: 'Dr. Swati A. Mishra',
      title: 'Director Operations Lucknow Centre',
      image: '/gladiators/gladiator1.jpg'
    },
    {
      name: 'Ashutosh Mishra',
      title: 'Master IIM Ahmedabad',
      image: '/gladiators/gladiator2.webp'
    },
    {
      name: 'Deepak Kushwaha',
      title: 'Master IIM Lucknow',
      image: '/gladiators/gladiator3.jpg'
    },
    {
      name: 'Raghav Shukla',
      title: 'Co-Founder @ CAT Tutorials',
      image: '/gladiators/gladiator4.jpg'
    },
    {
      name: 'Nikhil Bhalla',
      title: 'CEO @ CATTutorials',
      image: '/gladiators/gladiator5.jpg'
    },
    {
      name: 'Taruna B. Khanna',
      title: '23 Years EXPERIENCED Certified Trainer VARC/DM/GWPI',
      image: '/gladiators/gladiator6.png'
    },
    {
      name: 'Nitin Kukreja',
      title: 'IIM Raipur',
      image: '/gladiators/gladiator7.webp'
    },
    {
      name: 'Kavya Narayani',
      title: '22 Years Experienced VARC Mentor',
      image: '/gladiators/gladiator8.jpg'
    },
    {
      name: 'Rahul',
      title: '15 Years Experience General Awareness and Innovation and Entrepreneurship Expert',
      image: '/gladiators/gladiator9.jpg'
    },
    {
      name: 'Ashutosh Mishra',
      title: 'Master IIM Ahmedabad',
      image: '/gladiators/gladiator10.png'
    },
    {
      name: 'Deepak Kushwaha',
      title: 'Master IIM Lucknow',
      image: '/gladiators/gladiator11.png'
    }

  ];

  const carouselRef = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
  
    // Auto-scroll effect
    useEffect(() => {
      const interval = setInterval(() => {
        if (carouselRef.current) {
          setActiveIndex((prevIndex) => {
            const newIndex = (prevIndex + 1) % Math.ceil(gladiators.length / 4);
            // Only scroll if the ref exists
            if (carouselRef.current) {
              const slideWidth = carouselRef.current.offsetWidth;
              carouselRef.current.scrollTo({
                left: newIndex * slideWidth,
                behavior: 'smooth'
              });
            }
            return newIndex;
          });
        }
      }, 3000); // Change slide every 3 seconds
    
      return () => clearInterval(interval);
    }, [gladiators.length]);


  return (
    <div className="flex flex-col min-h-screen  bg-gray-900 text-white">
      {/* Header Section with Gladiators - Full Width */}
      <header className="bg-gradient-to-r from-gray-900 to-gray-800 ">
        {/* Remove container and max-width constraints */}
        <section className="w-full bg-gradient-to-b from-[#1a0e0e] to-[#241010] py-20 px-8 relative">
        {/* Section Header - Updated for Responsive Layout */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8 px-8">
          {/* Left Side - Title & Subtitle */}
          <div className="flex items-center">
            <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl md:mr-3">
              Meet Your Exam <br /><span className='text-3xl md:text-5xl font-bold text-white'>Gladiators</span>
            </h2>
          </div>
      
          {/* Right Side - Description */}
          <h4 className="text-gray-300 text-sm md:text-lg max-w-md md:max-w-lg md:text-right mt-4 md:mt-0 leading-tight whitespace-pre-line">
        Behind every student&apos;s success are passionate, experienced educators who&apos;ve cracked the toughest exams.
      </h4>
      
        </div>
      
        {/* Gladiators Carousel - Updated to show 4 in a row */}
       {/* Gladiators Carousel - Updated to show 4 in a row */}
      <div className="max-w-7xl mx-auto mt-20 overflow-hidden relative">
        <div 
          ref={carouselRef}
          className="flex transition-transform duration-1500 ease-in-out overflow-x-hidden"
          style={{
            scrollSnapType: 'x mandatory',
            msOverflowStyle: 'none',  // Hide scrollbar in IE/Edge
            scrollbarWidth: 'none'    // Hide scrollbar in Firefox
          }}
        >
          {/* Hide scrollbar in WebKit browsers (Chrome, Safari) */}
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
      
          {/* Group gladiators into sets of 4 */}
          {Array.from({ length: Math.ceil(gladiators.length / 4) }).map((_, groupIndex) => (
        <div 
          key={groupIndex} 
          className="min-w-full flex justify-center px-4 flex-nowrap"
          style={{ scrollSnapAlign: 'start' }}
        >
          {/* Display 4 gladiators per slide */}
          {gladiators.slice(groupIndex * 4, groupIndex * 4 + 4).map((gladiator, index) => (
            <div 
              key={index} 
              className="w-1/4 px-2"
            >
              <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg w-full">
                <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 relative overflow-hidden rounded-full mb-4">
                  <Image
                    src={gladiator.image}
                    alt={gladiator.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                  />
                </div>
                <h4 className="font-semibold text-sm md:text-lg text-white text-center">{gladiator.name}</h4>
                <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
      
        </div>
        
        {/* Carousel Indicators - Updated for groups of 4 */}
        <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(gladiators.length / 4) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              if (carouselRef.current) {
                const slideWidth = carouselRef.current.offsetWidth;
                carouselRef.current.scrollTo({
                  left: index * slideWidth,
                  behavior: 'smooth'
                });
              }
            }}
            className={`w-3 h-3 rounded-full ${activeIndex === index ? 'bg-[#FF6B45]' : 'bg-gray-500'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      
      </div>
      
      </section>
      

      </header>

      {/* Rest of the code remains unchanged */}
      {/* Navigation Pills */}
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
              <span className="whitespace-nowrap font-medium">
                Gurus
              </span>
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
    <h2 className="text-4xl font-semibold mb-6">
      Know More With <span className="font-bold text-[#FF6347]">Blogs</span>
    </h2>

    {/* Blog Data */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {[
        {
          id: 4,
          title: "CAT 2025 Course",
          description: "CAT 2025 Courses: Which One is Right for You?",
          image: "/blogs/blog4.png",
        },
        {
          id: 8,
          title: "CAT 2025",
          description: "The Ultimate Guide to Preparing and Succeeding",
          image: "/blogs/blog8.png",
        },
        {
          id: 3,
          title: "Important Study Hacks for CAT 2025 Students",
          description: "Important Study Hacks for CAT 2025 Students",
          image: "/blogs/blog3.png",
        },
      ].map((blog) => (
        <div key={blog.id} className="bg-gray-800 rounded-lg overflow-hidden flex flex-col h-full">
          <div className="h-64 relative overflow-hidden"> 
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover w-full"
              style={{
                objectPosition: 'center center'
              }}
            />
          </div>
          <div className="p-4 flex-grow">
            <h3 className="font-bold mb-2">{blog.title}</h3>
            <p className="text-gray-300 text-base md:text-lg">{blog.description}</p>
            <Link href={`/blogdetails/${blog.id}`} className="text-orange-500 text-lg hover:underline mt-2 inline-block">
              Read More →
            </Link>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-6">
      <Link href="/blogs" className="text-white hover:text-orange-500">
        View More →
      </Link>
    </div>
  </div>
</section>


    </div>
  );
};

export default ExamPrepHomepage;