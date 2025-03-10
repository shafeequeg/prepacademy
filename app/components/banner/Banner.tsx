"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from 'emailjs-com'; // Import EmailJS
import { toast } from "react-toastify";


export default function Banner() {
  const [showIcons, setShowIcons] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    class: '',
    school: '',
  });


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(`Input changed: ${name} = ${value}`); // Debugging log
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_eb5cvhl';
    const templateID = 'template_lqeg482';
    const userID = 'nk7-kQzPEcwr5RxjW';

    // Send the form data via EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success('Your message has been sent successfully!');
        // Reset the form
        setFormData({
          fullname: '',
          phone: '',
          email: '',
          class: '',
          school: '',
        });
        closeModal(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast.error('Failed to send the message. Please try again.');
      });
  };


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

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="w-full h-screen flex flex-col overflow-hidden">
      {/* Fixed Contact Icons */}
      <div
  className={`fixed right-5 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50
    ${showIcons ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
    transition-all duration-500 ease-in-out`}
>
  {/* Phone Icon with pulse animation */}
  <div className="group relative">
    <div className="absolute inset-0 bg-[#F55D3E]/20 rounded-full animate-ping group-hover:animate-none"></div>
    <div className="relative bg-gradient-to-br from-white to-gray-100 p-3 rounded-full shadow-lg border border-gray-200 backdrop-blur-sm transform transition-transform duration-300 hover:scale-110 hover:rotate-12">
      <a
        href="tel:+1234567890"
        className="text-[#F55D3E] text-2xl flex items-center justify-center"
        aria-label="Call us"
      >
        <FaPhoneAlt />
      </a>
    </div>
  </div>

  {/* WhatsApp Icon with floating animation */}
  <div className="group relative animate-bounce animation-delay-300">
    <div className="relative bg-gradient-to-br from-white to-gray-100 p-3 rounded-full shadow-lg border border-gray-200 backdrop-blur-sm transform transition-transform duration-300 hover:scale-110 hover:-rotate-12">
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        className="text-green-600 text-2xl flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp />
      </a>
    </div>
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
      <button
                onClick={openModal}
                className="bg-[#F55D3E] text-black px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg font-semibold hover:bg-[#a52a1a] transition"
              >
                FREE Career Counseling
              </button>
        <Link href="/collegecourse" className="border-2 border-[#F55D3E] text-[#F55D3E] px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg font-semibold hover:bg-[#F55D3E] hover:text-white transition">
          KNOW MORE
        </Link>


      </div>

      <div className="mt-4 w-full bg-[#130808] rounded-lg overflow-hidden">
        <style jsx>{`
          @keyframes marquee { 
            0% { transform: translateX(0); } 
            100% { transform: translateX(-100%); } 
          } 
          
          @keyframes marquee2 { 
            0% { transform: translateX(100%); } 
            100% { transform: translateX(0); } 
          } 
          
          .animate-marquee { 
            animation: marquee 15s linear infinite; 
          } 
          
          .animate-marquee2 { 
            animation: marquee2 15s linear infinite; 
          }
        `}</style>
        <div className="relative py-2 whitespace-nowrap">
          <div className="animate-marquee inline-block">
            <span className="mx-4 text-sm text-white font-medium">🔔 New Batch Starting Soon!</span>
            <span className="mx-4 text-sm  text-white  font-medium">📚 50% Off on Study Materials</span>
            <span className="mx-4 text-sm text-white  font-medium">🎓 Scholarship Test on 15th March</span>
            <span className="mx-4 text-sm  text-white font-medium">⭐ 95% Success Rate in Last Exams</span>
          </div>
          
          <div className="absolute top-2  animate-marquee2 inline-block">
            <span className="mx-4 text-sm  text-white font-medium">🔔 New Batch Starting Soon!</span>
            <span className="mx-4 text-sm  text-white font-medium">📚 50% Off on Study Materials</span>
            <span className="mx-4 text-sm  text-white font-medium">🎓 Scholarship Test on 15th March</span>
            <span className="mx-4 text-sm  text-white font-medium">⭐ 95% Success Rate in Last Exams</span>
          </div>
        </div>
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

      <div className="relative z-10 h-full sm:h-32  flex items-center justify-center">
        <Image
          src="/prepbannerlogo.png"
          alt="Foreground"
          width={300}
          height={140}
          className="object-contain relative mb-20 md:mt-40"
          style={{ 
            maxWidth: "60%", 
            
            transform: "translateY(15%)"
          }}
        />
      </div>
    </div>
  </div>
</section>
      {/* Cards Section - reduced padding and size */}
   {/* Cards Section - reduced padding and size */}
<section className="bg-[#130808] py-3 px-3 md:py-4 z-10  md:px-4 rounded-md mt-auto">
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


{isModalOpen && (
       <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
       <div className="bg-white rounded-lg w-11/12 md:w-3/4 max-w-lg relative">
         {/* Close button */}
         <button 
           onClick={closeModal} 
           className="absolute top-4 right-4 text-gray-700 hover:text-black"
           aria-label="Close"
         >
           <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
             <path d="M18 6L6 18M6 6l12 12" />
           </svg>
         </button>
         
         <div className="p-6 pt-5">
           <h2 className="text-center text-2xl font-bold mb-6">Fast Track Your Trial Class</h2>
           
           <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First row */}
                  <div>
                    <input 
                      type="text" 
                      name="fullname"
                      placeholder="Name" 
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Mobile" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    />
                  </div>
                  
                  {/* Second row */}
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="class"
                      placeholder="Class" 
                      value={formData.class}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                      required
                    />
                  </div>
                </div>
                
                {/* School/Institute - full width */}
                <div>
                  <input 
                    type="text" 
                    name="school"
                    placeholder="School/Institute" 
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
                    required
                  />
                </div>
                
                {/* reCAPTCHA */}
                <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between bg-gray-50">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="recaptcha" 
                      className="h-5 w-5 border-gray-300 mr-2 focus:ring-0 cursor-pointer"
                      required
                    />
                    <label htmlFor="recaptcha" className="text-sm text-gray-700">I&apos;m not a robot</label>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="w-12 h-12">
                      <img 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                        alt="reCAPTCHA logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Privacy - Terms</div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Submit
                </button>
              </form>
         </div>
       </div>
     </div>
      )}
    </div>
  );
}