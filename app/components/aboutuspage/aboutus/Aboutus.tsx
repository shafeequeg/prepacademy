"use client"

import React, {  useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const PrepAcademyTransform = () => {
  const gladiators = [
    {
      name: 'Hanna Susan Koshy ',
      title: 'Founder , Symbiosis (Economics, MBA)',
      image: '/gladiators/HannaSusanKoshy.png'
    },
    {
      name: '	Dr. Nithya S Cherian ',
      title: 'Co-Founder',
      image: '/gladiators/DrNithyaSCherian.png'
    },
    {
      name: '	Dr. Aleena Arun ',
      title: 'Co-Founder',
      image: '/gladiators/aleenaarun.png'
    },
    {
      name: '	Annie Eapen ',
      title: 'Co-Founder ',
      image: '/gladiators/AnnieEapen.png'
    },
   

    {
      name: 'Praveen J Nair ',
      title: 'Mentor, QA Expert',
      image: '/gladiators/PraveenJNair.png'
    },
    {
      name: '	Sreejith A',
      title: 'Mentor, VARC Expert',
      image: '/gladiators/sreejith.png'
    },
    {
      name: '	Varghese Joseph ',
      title: 'Mentor, QA Expert',
      image: '/gladiators/Varghese.png'
    },
    {
      name: 'Dr. Swati A. Mishra ',
      title: 'Mentor, MIT/University of Cambridge',
      image: '/gladiators/DrSwatiAMishra.png'
    },
    // {
    //   name: 'Rahul',
    //   title: '15 Years Experience General Awareness and Innovation and Entrepreneurship Expert',
    //   image: '/gladiators/gladiator9.jpg'
    // },
    // {
    //   name: 'Ashutosh Mishra',
    //   title: 'Master IIM Ahmedabad',
    //   image: '/gladiators/gladiator10.png'
    // },
    // {
    //   name: 'Deepak Kushwaha',
    //   title: 'Master IIM Lucknow',
    //   image: '/gladiators/gladiator11.png'
    // }

  ];

  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreenSize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  
  checkScreenSize();
  window.addEventListener('resize', checkScreenSize);
  return () => window.removeEventListener('resize', checkScreenSize);
}, []);

  const gladiatorssecond = [
   
    {
      name: '	Ashutosh Mishra',
      title: 'Mentor - IIM Ahmedabad',
      image: '/gladiators/AshutoshMishra.png'
    },
    {
      name: '	Deepak Kushwaha ',
      title: 'Mentor - IIM Lucknow',
      image: '/gladiators/deepakkushwah.png'
    },
    // {
    //   name: '	Raghav Shukla',
    //   title: 'Mentor IIM kozhikode',
    //   image: '/gladiators/RaghavShukla.png'
    // },
    {
      name: '	Nikhil Bhalla',
      title: 'Mentor, QA /LRDI Expert',
      image: '/gladiators/NikhilBhalla.png'
    },

    {
      name: 'Taruna B. Khanna ',
      title: 'Mentor, VARC Expert',
      image: '/gladiators/TarunaBKhann.png'
    },
    {
      name: 'Kavya Narayani ',
      title: 'Mentor, MA/ NTT/ B.Ed',
      image: '/gladiators/Kavya.png'
    },
    {
      name: 'Nandhu Anilkumar ',
      title: 'Business Development Manager',
      image: '/gladiators/NandhuAnilkumar.png'
    },
    {
      name: 'Sandya K V',
      title: 'Student Counselor',
      image: '/gladiators/SandyaKV.png'
    },

    {
      name: 'Danish',
      title: 'Digital Marketing',
      image: '/gladiators/danish1.png'
    },
    // {
    //   name: 'Rahul',
    //   title: '15 Years Experience General Awareness and Innovation and Entrepreneurship Expert',
    //   image: '/gladiators/gladiator9.jpg'
    // },
    // {
    //   name: 'Ashutosh Mishra',
    //   title: 'Master IIM Ahmedabad',
    //   image: '/gladiators/gladiator10.png'
    // },
    // {
    //   name: 'Deepak Kushwaha',
    //   title: 'Master IIM Lucknow',
    //   image: '/gladiators/gladiator11.png'
    // }

  ];

  // For carousel functionality - fixed TypeScript type
  const carouselRef = useRef<HTMLDivElement>(null);
  const carouselRefsecond = useRef<HTMLDivElement>(null);

  // Active indices for both carousels
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeIndexsecond, setActiveIndexsecond] = useState(0);

  // Total slides for both carousels
  const totalSlides = Math.ceil(gladiators.length / 4);
  const totalSlidessecond = Math.ceil(gladiatorssecond.length / 4);

  
  // Auto-scroll effect
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (carouselRef.current) {
  //       setActiveIndex((prevIndex) => {
  //         const newIndex = (prevIndex + 1) % Math.ceil(gladiators.length / 4);
  //         // Only scroll if the ref exists
  //         if (carouselRef.current) {
  //           const slideWidth = carouselRef.current.offsetWidth;
  //           carouselRef.current.scrollTo({
  //             left: newIndex * slideWidth,
  //             behavior: 'smooth'
  //           });
  //         }
  //         return newIndex;
  //       });
  //     }
  //   }, 10000); // Change slide every 3 seconds
  
  //   return () => clearInterval(interval);
  // }, [gladiators.length]);

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

  // Function to scroll right
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
      const newIndex = (activeIndexsecond - 1 + totalSlidessecond) % totalSlidessecond;
      setActiveIndexsecond(newIndex);
      const slideWidth = carouselRefsecond.current.offsetWidth;
      carouselRefsecond.current.scrollTo({
        left: newIndex * slideWidth,
        behavior: "smooth",
      });
    }
  };

  // Scroll right for the second carousel
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
    <div className="w-full bg-black text-white">
      {/* Transform Section */}
      <section className="bg-gradient-to-b  py-8 md:py-14 px-4 md:px-8 md:mt-16 mt-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        {/* Content Section */}
        <div className="w-full md:w-3/5 md:pr-6 space-y-4">
          <div>
            <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl lg:text-4xl mb-2">
              We Don't Just Teach
            </h2>
            <h3 className="font-serif italic text-3xl md:text-4xl lg:text-4xl font-bold mb-4">
              We Transform!
            </h3>
          </div>

          <p className="text-gray-300 text-base md:text-lg mb-6 max-w-lg">
            At Prep Academy, we go beyond traditional teaching methods we ignite curiosity, 
            inspire excellence, and empower students to achieve their full potential. Our goal isn't 
            just to help students pass exams but to transform their learning experience, sharpen their problem-solving skills, 
            and equip them with the confidence to excel in competitive exams like 
            CAT, CLAT, CUET, IPM, XAT, MAT, CMAT, KMAT, KLEE, NID, NIFT, NATA, NDA, SAT, GRE, and GMAT etc…
          </p>

          <ul className="space-y-2">
            {[
              "No Boring Lectures",
              "No One-Size-Fits-All Learning", 
              "No More Guesswork"
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full flex-shrink-0 mr-3"
                  style={{
                    backgroundImage: "url('/aboutusverified.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <span className="text-sm md:text-base text-gray-200">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="w-full flex justify-start mt-4  md:mt-16 z-10">
            <div className="w-full max-w-sm bg-gradient-to-r gradient-to-r from-[#2A1810] to-[#3A2820] 
              bg-opacity-90 text-center border-l-4 border-[#FF6B45] 
              rounded-lg overflow-hidden shadow-lg px-4 py-3">
              <p className="relative z-10">
                <span className="block text-[#FF6B45] font-bold text-xs md:text-base mb-1">
                  At Prep Academy, We Turn Preparation Into An Adventure.
                </span>
                <span className="inline-block text-amber-300 font-extrabold text-sm md:text-lg mt-1 animate-pulse">
                  Are You Ready?
                </span>
              </p>
              {/* <div className="absolute top-0 right-0 w-16 h-16 bg-[#FF6B45] opacity-10 rounded-full -mr-8 -mt-8"></div> */}
              {/* <div className="absolute bottom-0 left-0 w-12 h-12 bg-amber-300 opacity-10 rounded-full -ml-6 -mb-6"></div> */}
            </div>
          </div>
        </div>

        {/* Mascot Image Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center relative">
          <div 
            className="relative w-72 h-[24rem] md:w-[28rem] md:h-[32rem] lg:w-[30rem] lg:h-[34rem] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/bannerround.png')"
            }}
          >
            <Image
              src="/prepbannerlogo.png"
              alt="Prep Academy Mascot"
              layout="fill"
              objectFit="contain"
              priority
              className="mt-12 md:mt-16 lg:mt-20"
            />
          </div>

          {/* Text Overlay */}
       
        </div>
      </div>
    </section>
      {/* Gladiators Section */}
      <section className="w-full bg-gradient-to-b from-[#1a0e0e] to-[#241010] py-20 px-4 md:px-8 relative">
  {/* Section Header - Updated for Responsive Layout */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8 px-4 md:px-8">
    {/* Left Side - Title & Subtitle */}
    <div className="flex items-center mb-6 md:mb-0">
      <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl md:mr-3">
        Meet Your Exam <br />
        <span className="text-3xl md:text-5xl font-bold text-white">Gladiators</span>
      </h2>
    </div>

    {/* Right Side - Description */}
    <h4 className='text-gray-300 text-sm md:text-lg max-w-md leading-tight whitespace-pre-line relative px-6'>
      <span className="text-2xl md:text-5xl text-gray-400 absolute -left-2 top-0">&ldquo;</span>
      <span>
        Behind every student&apos;s success are passionate, <br className="hidden md:block" />
        experienced educators who&apos;ve cracked the toughest exams.
      </span>
      <span className="text-2xl md:text-5xl text-gray-400 absolute -right-1 bottom-0">&rdquo;</span>
    </h4>
  </div>

  {/* Main Content Container with Side Controls */}
  <div className="max-w-7xl mx-auto mt-12 md:mt-20 relative">
    {/* Left Navigation Button - Positioned at the left edge, vertically centered */}
    <button
      onClick={() => {
        // Scroll both carousels left
        scrollLeft();
        scrollLeftsecond();
      }}
      className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#FF6B45] text-white rounded-full p-2 md:p-3 shadow-lg hover:bg-[#E55A35] transition flex items-center justify-center"
      aria-label="Scroll both carousels left"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>

    {/* Right Navigation Button - Positioned at the right edge, vertically centered */}
    <button
      onClick={() => {
        // Scroll both carousels right
        scrollRight();
        scrollRightsecond();
      }}
      className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-[#FF6B45] text-white rounded-full p-2 md:p-3 shadow-lg hover:bg-[#E55A35] transition flex items-center justify-center"
      aria-label="Scroll both carousels right"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 md:h-6 md:w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>

    {/* First Gladiators Carousel */}
    <div className="overflow-hidden px-6 md:px-12">
      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300 ease-in-out overflow-x-hidden"
        style={{
          scrollSnapType: "x mandatory",
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {/* Hide scrollbar in WebKit browsers (Chrome, Safari) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Group gladiators based on screen size */}
        {Array.from({ length: Math.ceil(gladiators.length / (isMobile ? 2 : 4)) }).map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="min-w-full flex justify-center px-2 md:px-4 flex-nowrap"
            style={{ scrollSnapAlign: "start" }}
          >
            {/* Display 2 gladiators per slide on mobile, 4 on larger screens */}
            {gladiators.slice(
              groupIndex * (isMobile ? 2 : 4), 
              groupIndex * (isMobile ? 2 : 4) + (isMobile ? 2 : 4)
            ).map((gladiator, index) => (
              <div key={index} className={`${isMobile ? 'w-1/2' : 'w-1/4'} px-2 md:px-3`}>
                <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg w-full">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 relative overflow-hidden rounded-full mb-3 md:mb-4">
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
                          objectPosition: "center"
                        }}
                      />
                    </div>
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-lg text-white text-center">
                    {gladiator.name}
                  </h4>
                  <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>

    {/* Indicators - Centered between carousels */}
    <div className="flex justify-center items-center my-6 md:my-8">
      <div className="flex space-x-2">
        {Array.from({ length: Math.max(
          Math.ceil(gladiators.length / (isMobile ? 2 : 4)),
          Math.ceil(gladiatorssecond.length / (isMobile ? 2 : 4))
        ) }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              // Update active indices
              setActiveIndex(index);
              setActiveIndexsecond(index);
              
              // Scroll both carousels to the same slide index
              if (carouselRef.current) {
                const slideWidth = carouselRef.current.offsetWidth;
                carouselRef.current.scrollTo({
                  left: index * slideWidth,
                  behavior: "smooth",
                });
              }
              
              if (carouselRefsecond.current) {
                const slideWidth = carouselRefsecond.current.offsetWidth;
                carouselRefsecond.current.scrollTo({
                  left: index * slideWidth,
                  behavior: "smooth",
                });
              }
            }}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              (activeIndex === index || activeIndexsecond === index) ? "bg-[#FF6B45]" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>

    {/* Second Gladiators Carousel */}
    <div className="overflow-hidden px-6 md:px-12">
      {/* Carousel Container */}
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
        
        {Array.from({ length: Math.ceil(gladiatorssecond.length / (isMobile ? 2 : 4)) }).map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="min-w-full flex justify-center px-2 md:px-4 flex-nowrap"
            style={{ scrollSnapAlign: "start" }}
          >
            {gladiatorssecond.slice(
              groupIndex * (isMobile ? 2 : 4), 
              groupIndex * (isMobile ? 2 : 4) + (isMobile ? 2 : 4)
            ).map((gladiator, index) => (
              <div key={index} className={`${isMobile ? 'w-1/2' : 'w-1/4'} px-2 md:px-3`}>
                <div className="flex flex-col items-center p-3 md:p-4 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg w-full">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 relative overflow-hidden rounded-full mb-3 md:mb-4">
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
                          objectPosition: "center"
                        }}
                      />
                    </div>
                  </div>
                  <h4 className="font-semibold text-xs sm:text-sm md:text-lg text-white text-center">
                    {gladiator.name}
                  </h4>
                  <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
     

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
    </div>
  );
};

export default PrepAcademyTransform;