"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import axiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";

export default function Banner() {
  const [showIcons, setShowIcons] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    class: "",
    school: "",
  });

  const [seo, setSeo] = useState();
  // console.log(activeIndex);

  const fetchSeoData = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.SEO.HOMEMETA);
      console.log(response);
      setSeo(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(activeIndex);
  console.log(seo);
  

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
    const serviceID = "service_eb5cvhl";
    const templateID = "template_lqeg482";
    const userID = "nk7-kQzPEcwr5RxjW";

    // Send the form data via EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        toast.success("Your message has been sent successfully!");
        // Reset the form
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          class: "",
          school: "",
        });
        closeModal(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
        toast.error("Failed to send the message. Please try again.");
      });
  };

  useEffect(() => {
    fetchSeoData();
  }, []);

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

  const allcoursescard = [
    {
      image: "/bannerbook.png",
      title: "School",
      color: "#F55D3E",
      description: "Foundational learning for all ages.",
      path: "/schoolcourse",
    },
    {
      image: "/bannerbank.png",
      title: "College",
      color: "#F55D3E",
      description: "Higher education, diverse disciplines.",
      path: "/collegecourse",
    },
    {
      image: "/bannerglobal.png",
      title: "Study Abroad",
      color: "#F55D3E",
      description: "Global opportunities, endless horizons.",
      path: "/studyabroad",
    },
  ];

  return (
    <div
      className="w-full h-screen flex flex-col overflow-hidden
     lg:h-auto lg:max-h-[800px] w912:h-auto
     w912:max-h-[600px] w820:h-auto w820:max-h-[700px] w768:h-auto w768:max-h-[800px] w768:mt-9"
    >
          
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
              href="tel:+91-9446056789"
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
              href="https://wa.me/9446056789"
              target="_blank"
              className="text-green-600 text-2xl flex items-center justify-center"
              aria-label="Chat on WhatsApp"
            >
              {" "}
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Banner Section - reduced padding */}
      <section className="flex-grow bg-gradient-to-r text-white py-4 flex items-center mt-24  custom-section ">
        <div className="container mx-auto px-4 flex flex-col  md:flex-row items-center justify-center gap-8">
          {/* Left Section - reduced text size and spacing */}
          <div className="max-w-xl text-center w-3/4  md:text-left md:w-2/5 mb-6 md:mb-0 custom-mt">
            <h1 className="text-2xl md:text-3xl md:mt-12 lg:text-4xl  font-bold mb-2 custom-title">
              <span className="bg-none text-[#F55D3E]">
                Your Mentor <br /> And Guide <br />
              </span>{" "}
              For Brighter Future
            </h1>
            <p className="text-sm md:text-base lg:text-lg mb-3">
              Empowering students with knowledge and skills for a brighter
              future through exceptional education and unwavering support.
            </p>

            <div className="flex flex-col md:flex-row justify-center md:justify-start space-y-2 md:space-y-0 md:space-x-3">
              <button
                onClick={openModal}
                className="bg-[#F55D3E] text-black px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg font-semibold hover:bg-[#a52a1a] transition"
              >
                FREE Career Counseling
              </button>
              <Link
                href="/careercounseling"
                className="border-2 border-[#F55D3E] text-[#F55D3E] px-3 py-1 md:px-4 md:py-2 text-sm md:text-base rounded-lg font-semibold hover:bg-[#F55D3E] hover:text-white transition"
              >
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
            animation: marquee 35s linear infinite; 
          } 
          
          .animate-marquee2 { 
            animation: marquee 35s linear infinite; 
          }
          }
        `}</style>
              <div className="relative py-2 whitespace-nowrap">
                <div className="animate-marquee inline-block">
                  <span className="mx-4 text-sm text-white font-medium">
                    {" "}
                    <span className="m-2">•</span> CAT 2025 will likely be
                    conducted on November 30, 2025
                  </span>
                  <span className="mx-4 text-sm  text-white  font-medium">
                    <span className="m-2">•</span> JIPMAT (2025) Registration
                    Window is Extended till 17th March 11:50 PM
                  </span>
                  {/* <span className="mx-4 text-sm text-white  font-medium">🎓 Scholarship Test on 15th March</span>
            <span className="mx-4 text-sm  text-white font-medium">⭐ 95% Success Rate in Last Exams</span> */}
                </div>

                <div className="absolute top-2  animate-marquee2 inline-block">
                  <span className="mx-4 text-sm  text-white font-medium">
                    <span className="m-2">•</span> CAT 2025 will likely be
                    conducted on November 30, 2025
                  </span>
                  <span className="mx-4 text-sm  text-white font-medium">
                    <span className="m-2">•</span> JIPMAT (2025) Registration
                    Window is Extended till 17th March 11:50 PM
                  </span>
                  {/* <span className="mx-4 text-sm  text-white font-medium">🎓 Scholarship Test on 15th March</span>
            <span className="mx-4 text-sm  text-white font-medium">⭐ 95% Success Rate in Last Exams</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - more responsive sizing */}
          <div className="relative md:w-2/5 h-32 sm:h-36 md:h-48 lg:h-60 md:mt-20 w768:mt-5">
            <div
              className="absolute inset-0 bg-center z-0"
              style={{
                backgroundImage: "url('/bannerround.png')",
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "140%",
                width: "90%",
                marginLeft: "5%",
              }}
            ></div>

            <div className="relative z-10 h-full sm:h-32  flex items-center justify-center">
              <Image
                src="/prepbannerlogo.png"
                alt={"Prep-Banner"}
                width={300}
                height={140}
                className="object-contain relative mb-20 md:mt-40"
                style={{
                  maxWidth: "60%",
                  transform: "translateY(15%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

     
      <section
        className="bg-[#130808] py-3 px-3  md:py-4 md:px-4 rounded-md  z-10  "
        style={{ overflowY: "scroll"}}
      >
        <div className="container mx-auto ">
          <div className="grid grid-cols-1 md:grid-cols-3  gap-2 md:gap-3">
            {allcoursescard.map((item, index) => (
              <Link
                href={item.path}
                key={index}
                onClick={() => setActiveIndex(index)}
                className="transition-transform duration-200 ease-in-out"
              >
                <div
                  className={`bg-[#1A0E0D] border-l-2 border-[#F55D3E] rounded-md 
              `}
                >
                  <div className="flex flex-col items-center h-full ">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={40} // w-10 = 40px
                      height={40} // h-10 = 40px
                      className="md:w-12 md:h-12 mb-1 md:mb-2 object-contain"
                    />

                    <h2 className="text-[#F55D3E] text-xl md:text-xl lg:text-2xl font-bold  ">
                      {item.title}
                    </h2>
                    <p className="text-white text-base md:text-lg mb-3 md:mb-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-[#130808] py-3 px-3 md:py-4 md:px-4 rounded-md relative z-10">
  <div className="container mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-3">
      {allcoursescard.map((item, index) => (
        <Link 
          href={item.path} 
          key={index}
          onClick={() => setActiveIndex(index)}
          className="transition-transform duration-200 ease-in-out"
        >
          <div 
            className={`bg-[#1A0E0D] border-l-2 border-[#F55D3E] rounded-md px-3 py-3 md:px-4 md:py-4 transform ${
              activeIndex === index ? "scale-105 shadow-lg shadow-[#F55D3E]" : "hover:scale-105"
            } transition-all duration-300`}
          >
            <div className="flex flex-col items-center">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-10 h-10 md:w-12 md:h-12 mb-1 md:mb-2 object-contain"
              />
              
              <h2 className="text-[#F55D3E] text-xl md:text-xl lg:text-2xl font-bold mb-2">{item.title}</h2>
              <p className="text-white text-base md:text-lg">{item.description}</p> 
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</section> */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 md:w-4/5 max-w-4xl relative overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-700 hover:text-black z-10"
              aria-label="Close"
            >
              <svg
                width="16"
                height="16"
                className="md:w-5 md:h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Responsive layout - stack on mobile, side-by-side on larger screens */}
            <div className="flex flex-col md:flex-row h-full">
              {/* Left section - Title and Image */}
              <div className="bg-[#2B1615] p-3 md:p-6 md:w-2/5 flex flex-col items-center justify-center text-white">
                <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-6 text-center">
                  Upgrade Your Learning With Us
                </h2>
                <div className="w-24 h-24 md:w-64 md:h-auto lg:w-80 mb-2 md:mb-4">
                  <Image
                    src="/commonformmascot.png"
                    alt="Learning Mascot"
                    width={300}
                    height={200}
                    className="w-full h-full object-contain max-w-full"
                  />
                </div>
              </div>

              {/* Right section - Form */}
              <div className="p-3 md:p-6 md:w-3/5">
                <h3 className="text-center text-lg md:text-xl font-medium text-gray-800 mb-3 md:mb-6">
                  Fast Track Your Trial Class
                </h3>
                <form
                  className="space-y-2 md:space-y-4"
                  onSubmit={handleSubmit}
                >
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      placeholder="Your Name"
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                      required
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                      required
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="class"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Class
                    </label>
                    <input
                      type="text"
                      id="class"
                      name="class"
                      placeholder="Your class"
                      value={formData.class}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                      required
                    />
                  </div>

                  {/* Phone Number field with country code */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone Number
                    </label>
                    <div className="flex">
                      <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-md px-2 md:px-3">
                        <Image
                          src="/gladiators/formcommonindia.png"
                          alt="IN"
                          width={12}
                          height={12}
                          className="mr-1 md:w-4 md:h-4"
                        />
                        <span className="text-xs md:text-sm text-gray-700">
                          +91
                        </span>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full p-2 md:p-3 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="school"
                      className="block text-xs md:text-sm font-medium text-gray-700 mb-1"
                    >
                      School/Institute
                    </label>
                    <input
                      type="text"
                      id="school"
                      name="school"
                      placeholder="Your School/Institute"
                      value={formData.school}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-[#F55D3E] text-white py-2 md:py-3 px-4 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
                  >
                    Submit
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 md:h-5 md:w-5 ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
