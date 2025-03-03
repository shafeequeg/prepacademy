"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export default function Banner() {
  const [showIcons, setShowIcons] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowIcons(true);
      } else if (window.scrollY > 100) {
        setShowIcons(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      {/* Fixed Contact Icons */}
      <div
        className={`fixed top-1/4 right-5 flex items-center gap-3 shadow-lg p-2 rounded-xl z-50
          ${showIcons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          transition-opacity transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-center bg-gray-100/80 p-2 rounded-md">
          <a
            href="tel:+1234567890"
            className="text-[#F55D3E] text-2xl hover:text-[#F55D3E] transition-transform transform hover:scale-110"
          >
            <FaPhoneAlt />
          </a>
        </div>
        <div className="flex justify-center bg-gray-100/80 rounded-md p-2">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            className="text-green-600 text-2xl hover:text-[#4EBBB5] transition-transform transform hover:scale-110"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>

      {/* Banner Section - reduced padding */}
      <section className="flex-grow bg-gradient-to-r text-white py-4 flex items-center mt-14">
  <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8">
    {/* Left Section - reduced text size and spacing */}
    <div className="max-w-xl text-center md:text-left md:w-2/5 mb-6 md:mb-0">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
        <span className="bg-none text-[#F55D3E]">Your Mentor <br /> And Guide <br /></span> For Brighter Future
      </h1>
      <p className="text-sm md:text-base lg:text-lg mb-3">
        Empowering students with knowledge and skills for a brighter future through exceptional education and unwavering support.
      </p>

      <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-3">
        <Link href="#" className="bg-[#F55D3E] text-black px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg font-semibold hover:bg-[#a52a1a] transition">
          FREE Career Counseling
        </Link>
        <Link href="#" className="border-2 border-[#F55D3E] text-[#F55D3E] px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg font-semibold hover:bg-[#F55D3E] hover:text-white transition">
          KNOW MORE
        </Link>
      </div>
    </div>

    {/* Right Section - more responsive sizing */}
    <div className="relative md:w-2/5 h-32 sm:h-36 md:h-48 lg:h-60 md:mt-20">
      <div 
        className="absolute inset-0 bg-center z-0"
        style={{
          backgroundImage: "url('/bannerround.png')",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          height: "140%",
          width: "90%",
          marginLeft: "5%"
        }}
      ></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <Image
          src="/prepbannerlogo.png"
          alt="Foreground"
          width={300}
          height={140}
          className="object-contain relative"
          style={{ 
            maxWidth: "60%", 
            marginBottom: "28px",
            transform: "translateY(15%)"
          }}
        />
      </div>
    </div>
  </div>
</section>
      {/* Cards Section - reduced padding and size */}
   {/* Cards Section - reduced padding and size */}
<section className="bg-[#130808] py-3 px-3 md:py-4 md:px-4 rounded-md mt-auto">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
      {[
        { 
          image: "/bannerbook.png",
          title: "School",
          color: "#F55D3E",
          description: "Foundational learning for all ages."
        },
        { 
          image: "/bannerbank.png", 
          title: "College",
          color: "#F55D3E",
          description: "Higher education, diverse disciplines."
        },
        { 
          image: "/bannerglobal.png",
          title: "Study Abroad",
          color: "#F55D3E",
          description: "Global opportunities, endless horizons."
        },
      ].map((item, index) => (
        <div 
          key={index} 
          className="bg-[#1A0E0D] border-l-2 border-[#F55D3E] rounded-md px-3 py-3 md:px-4 md:py-4"
        >
          <div className="flex flex-col items-center">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-2 object-contain"
            />
            
            <h2 className="text-[#F55D3E] text-xl md:text-xl lg:text-2xl font-bold mb-2">{item.title}</h2>
            <p className="text-white text-base md:text-lg ">{item.description}</p> 
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

    </div>
  );
}