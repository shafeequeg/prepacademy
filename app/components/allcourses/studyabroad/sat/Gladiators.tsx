"use client"

import React, {  useRef, useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const ExamPrepHomepage: React.FC = () => {
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

  const gladiatorssecond = [
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
      title: 'Mentor',
      image: '/gladiators/DrSwatiAMishra.png'
    },
    {
      name: 'Taruna B. Khanna ',
      title: 'Mentor',
      image: '/gladiators/TarunaBKhann.png'
    },
    {
      name: 'Kavya Narayani ',
      title: 'Mentor',
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
 
   // Active indices for both carousels
   const [activeIndex, setActiveIndex] = useState(0);
   const [activeIndexsecond, setActiveIndexsecond] = useState(0);
 
   // Total slides for both carousels
   const totalSlides = Math.ceil(gladiators.length / 4);
   const totalSlidessecond = Math.ceil(gladiatorssecond.length / 4);

   console.log(activeIndexsecond);
   console.log(totalSlidessecond);

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
    //   }, 3000); // Change slide every 3 seconds
    
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
  
    // const scrollLeftsecond = () => {
    //   if (carouselRefsecond.current) {
    //     const newIndex = (activeIndexsecond - 1 + totalSlidessecond) % totalSlidessecond;
    //     setActiveIndexsecond(newIndex);
    //     const slideWidth = carouselRefsecond.current.offsetWidth;
    //     carouselRefsecond.current.scrollTo({
    //       left: newIndex * slideWidth,
    //       behavior: "smooth",
    //     });
    //   }
    // };
  
    // // Scroll right for the second carousel
    // const scrollRightsecond = () => {
    //   if (carouselRefsecond.current) {
    //     const newIndex = (activeIndexsecond + 1) % totalSlidessecond;
    //     setActiveIndexsecond(newIndex);
    //     const slideWidth = carouselRefsecond.current.offsetWidth;
    //     carouselRefsecond.current.scrollTo({
    //       left: newIndex * slideWidth,
    //       behavior: "smooth",
    //     });
    //   }
    // };
    

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
                       Meet Your Exam <br />
                       <span className="text-3xl md:text-5xl font-bold text-white">Gladiators</span>
                     </h2>
                   </div>
               
                   {/* Right Side - Description */}
                   {/* <h4 className="text-gray-300 text-sm md:text-lg max-w-md md:max-w-lg md:text-right mt-4 md:mt-0 leading-tight whitespace-pre-line">
                     Behind every student&apos;s success are  passionate,  experienced educators who&apos;ve cracked the toughest exams.
                     Behind every student&apos;s success are  passionate,  experienced educators who&apos;ve cracked the toughest exams.
                     Behind every student&apos;s success are  passionate,  experienced educators who&apos;ve cracked the toughest exams.
          
                   </h4> */}
                <h4 className='text-gray-300 text-sm md:text-lg max-w-md leading-tight whitespace-pre-line relative px-6'>
  <span className="text-2xl md:text-5xl text-gray-400 absolute -left-2 top-0">&ldquo;</span>
  <span>
    Behind every student&apos;s success are passionate, <br />
    experienced educators who&apos;ve cracked the toughest exams.
  </span>
  <span className="text-2xl md:text-5xl text-gray-400 absolute -right-1 bottom-0">&rdquo;</span>
</h4>

                 </div>
               
                 {/* Gladiators Carousel - Updated to show 4 in a row */}
                 <div className="max-w-7xl mx-auto mt-20 overflow-hidden relative px-12">
                   {/* Left Scroll Button */}
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
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                     </svg>
                   </button>
               
                   {/* Carousel Container */}
                   <div
            ref={carouselRef}
            className="flex transition-transform duration-300 ease-in-out overflow-x-hidden"
            style={{
              scrollSnapType: "x mandatory",
              msOverflowStyle: "none", // Hide scrollbar in IE/Edge
              scrollbarWidth: "none", // Hide scrollbar in Firefox
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
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Display 4 gladiators per slide */}
               {/* First Carousel - Update this code */}
          {gladiators.slice(groupIndex * 4, groupIndex * 4 + 4).map((gladiator, index) => (
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
                        objectPosition: "center"
                      }}
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-sm md:text-lg text-white text-center">
                  {gladiator.name}
                </h4>
                <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
              </div>
            </div>
          ))}
              </div>
            ))}
          </div>
               
                   {/* Right Scroll Button */}
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
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                     </svg>
                   </button>
                 </div>
          
                 {/* <div className="max-w-7xl mx-auto mt-20 overflow-hidden relative px-12">
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
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
                      {Array.from({ length: Math.ceil(gladiatorssecond.length / 4) }).map((_, groupIndex) => (
                        <div
                          key={groupIndex}
                          className="min-w-full flex justify-center px-4 flex-nowrap"
                          style={{ scrollSnapAlign: "start" }}
                        >
                         {gladiatorssecond.slice(groupIndex * 4, groupIndex * 4 + 4).map((gladiator, index) => (
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
                        objectPosition: "center"
                      }}
                    />
                  </div>
                </div>
                <h4 className="font-semibold text-sm md:text-lg text-white text-center">
                  {gladiator.name}
                </h4>
                <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
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
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div> */}
          
                  { /* Carousel Indicators */ }
                 {/* Remove this duplicate section */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.ceil(gladiatorssecond.length / 4) }).map((_, index) => (
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
                // className={`w-3 h-3 rounded-full ${
                //   activeIndexsecond === index ? "bg-[#FF6B45]" : "bg-gray-500"
                // }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
               
                 {/* Carousel Indicators - Updated for groups of 4 */}
                 <div className="flex justify-center mt-8 space-x-2">
                   {Array.from({ length: Math.ceil(gladiatorssecond.length / 4) }).map((_, index) => (
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
                      //  className={`w-3 h-3 rounded-full ${
                      //   activeIndexsecond === index ? "bg-[#FF6B45]" : "bg-gray-500"
                      //  }`}
                       aria-label={`Go to slide ${index + 1}`}
                     />
                   ))}
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
    <Image 
  src="/allcoursecollegemaster.png" 
  alt="Mascot" 
  width={144} // w-36 = 144px
  height={144} // h-36 = 144px
  className="md:w-48 md:h-52 relative top-8 object-cover"
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
          Latest Notification            </div>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              Registration for the SAT is currently open. To register, visit the College Board&apos;s official SAT registration page.                          </p>
          </div>

          {/* Second Notification */}
          <div className="mb-4  pb-4">
          <div className="text-white bg-[#FF6347] text-sm inline-block px-2 py-1 rounded mb-3">
          Latest Notification
                      </div>
            <p className="text-gray-300 text-base md:text-lg  flex">
              <span className="text-[#FF6347] mr-2">•</span>
              	Students who need to borrow a device from College Board will need to register and request their device earlier than the registration deadline—at least 30 days before test day.                     </p>
           
          </div>

          {/* Third Notification */}
          {/* <div>
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
          </div> */}
        </div>
      </div>
    

      {/* Blogs Section */}
      <section className="p-6 bg-gray-900">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-medium  text-center md:text-left">
           <span className="font-dmserif italic"> Know More With</span> <span className="text-[#F55D3E] font-bold not-italic">Blogs</span>
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
  {blogs.map((blog) => (
    <div
      key={blog.id}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      {/* Blog Image */}
      <div className="relative w-full aspect-video">
      <Image
  src={blog.image}
  alt={blog.title}
  fill
  className="absolute inset-0 w-full h-full object-cover"
/>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3 className="text-xl font-bold mb-3 text-white">{blog.title}</h3>

        {/* Description */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">
          {blog.description}
        </p>

        {/* Read Full Button */}
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


        {/* View More Button */}
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