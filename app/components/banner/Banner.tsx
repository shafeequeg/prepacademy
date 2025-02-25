"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


export default function Banner() {

  const [showIcons, setShowIcons] = useState(true); // Initially visible
  const [lastScrollY, setLastScrollY] = useState  (0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < lastScrollY) {
        setShowIcons(true); // Show when scrolling up
      } else if (window.scrollY > 100) {
        setShowIcons(false); // Hide when scrolling down
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="w-[95%] mx-auto mt-5"> {/* Increased width slightly */}
      {/* Banner Section */}
      <section className="relative bg-gradient-to-r text-white py-16 md:py-14 mt-20 md:mt-0">
      <div
        className={`fixed top-1/4 right-5 flex items-center gap-3 shadow-lg p-4 rounded-xl transition duration-300
          hover:shadow-2xl
          ${showIcons ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          transition-opacity transition-transform duration-300 ease-in-out`}
      >
          <div className="flex justify-center bg-gray-100/80 p-2 rounded-md">
    <a href="tel:+1234567890" 
       className="text-blue-900 text-3xl hover:text-[#F55D3E] transition-transform transform hover:scale-110">
      <FaPhoneAlt />
    </a>
  </div>
  <div className="flex justify-center bg-gray-100/80 rounded-md p-2">
    <a href="https://wa.me/1234567890" 
       target="_blank" 
       className="text-green-600 text-3xl hover:text-[#4EBBB5] transition-transform transform hover:scale-110">
      <FaWhatsapp />
    </a>
  </div>
</div>



        
        <div className="container mx-auto px-6 md:px-8 flex flex-col md:flex-row items-center justify-center md:justify-around">
          {/* Left Section */}
          <div className="max-w-xl text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-none text-[#F55D3E]">Your Mentor <br /> And Guide <br /></span> For Brighter Future
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Empowering students with knowledge and skills for a brighter future through exceptional education and unwavering support.
            </p>

            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-4 md:space-y-0 md:space-x-5">
              <Link href="#" className="bg-[#F55D3E] text-black px-6 py-3 text-lg rounded-lg font-semibold hover:bg-[#a52a1a] transition">
                FREE Career Counseling
              </Link>
              <Link href="#" className="border-2 border-[#F55D3E] text-[#F55D3E] px-6 py-3 text-lg rounded-lg font-semibold hover:bg-[#F55D3E] hover:text-white transition">
                KNOW MORE
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative mt-6 md:mt-0 md:w-5/12"> {/* Adjusted margin */}     

  <div 
    className="absolute inset-0 bg-cover bg-center" 
    style={{
      backgroundImage: "url('/bannerround.png')",
      backgroundSize: "105%", // Slightly reduced size for compactness
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      marginTop:"80px",
    }}
  ></div>

<Image
  src="/prepbannerlogo.png"
  alt="Foreground"
  layout="responsive"
  width={450} // Decreased from 480 to 450
  height={300} // Decreased from 320 to 300
  className="relative object-cover rounded-lg"
  style={{ top: "55px", maxWidth: "95%" }} // Adjusted top positioning and max-width
/>

</div>

        </div>
      </section>

      {/* Cards Section */}
      <section className="w-full bg-[#130808] py-10 p-6 rounded-md"> {/* Dark background matching image */}
      <div className="container mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[
      { 
        image: "/bannerbook.png",  // Update with actual image path
        title: "School",
        color: "#F55D3E" 
      },
      { 
        image: "/bannerbank.png",  // Update with actual image path
        title: "College",
        color: "#F55D3E"  
      },
      { 
        image: "/bannerglobal.png",  // Update with actual image path
        title: "Study Abroad",
        color: "#F55D3E"  
      },
    ].map((item, index) => (
      <div 
        key={index} 
        className="bg-[#1A0E0D] border-l-2 border-[#F55D3E] rounded-md px-6 py-8"
      >
        <div className="flex flex-col items-center">
          {/* Image Replacing Icon */}
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-16 h-16 mb-3 object-contain"
          />
          
          <h2 className="text-[#F55D3E] text-xl font-medium mb-1">{item.title}</h2>
          <p className="text-white text-sm mb-1">Foundational Learning</p>
          <p className="text-gray-400 text-sm">For All Ages</p>
        </div>
      </div>
    ))}
  </div>
</div>

</section>
    </div>
  );
}

