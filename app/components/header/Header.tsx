"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import { useRouter } from "next/navigation";
import {
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";
import LoginModal from "../login/Login";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100]">
      <div className="loader"></div>
    </div>
  );
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);  
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);  
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  // const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginSource, setLoginSource] = useState<'chatbot' | 'percentage-calculator' | null>(null);

  console.log(isOpen);

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      .loader {
        width: 64px;
        height: 48px;
        position: relative;
        animation: split 1s ease-in infinite alternate;
      }
      
      .loader::before,
      .loader::after {
        content: '';
        position: absolute;
        height: 48px;
        width: 48px;
        border-radius: 50%;
        left: 0;
        top: 0;
        transform: translateX(-10px);
        background: #FF3D00;
        opacity: 0.75;
        backdrop-filter: blur(20px);
      }
      
      .loader::after {
        left: auto;
        right: 0;
        background: #FFF;
        transform: translateX(10px);
      }
      
      @keyframes split {
        0%, 25% {
          width: 64px;
        }
        100% {
          width: 148px;
        }
      }

      .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #333;
        font-size: 0.7rem;
      }

      .nav-icon {
        font-size: 1.5rem;
        margin-bottom: 4px;
      }

      


      .sidebar-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        border-bottom: 1px solid #333;
      }

      .sidebar-item {
        padding: 15px 20px;
        border-bottom: 1px solid #333;
        color: white;
        display: flex;
        align-items: center;
      }

      .sidebar-item:hover {
        background-color: #333;
      }

      .sidebar-footer {
        padding: 20px;
        color: #aaa;
      }

      .social-icons {
        display: flex;
        gap: 15px;
        margin-top: 10px;
      }

      /* Split dropdown styles */
      .split-dropdown {
        position: relative;
        display: inline-flex;
      }
      
    
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
        setToolsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigation = (path: string) => {
    setIsLoading(true);
    setIsOpen(false);
    setIsDropdownOpen(false);
    setToolsDropdownOpen(false);
    setIsSidebarOpen(false);

    setTimeout(() => {
      router.push(path);

      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    }, 200);
  };

  const toggleDropdown = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {isLoading && <Loader />}

      {/* Main header - visible on all screens */}
      <header
        className={`w-[95%] fixed top-0 left-1/2 transform -translate-x-1/2 mx-auto text-center 
        bg-gradient-to-r mt-4 from-white via-[#F55D3E] to-[#a52a1a] shadow-lg py-6 px-4 md:px-12 rounded-xl z-50 
        transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div
                onClick={() => handleNavigation("/")}
                className="cursor-pointer"
              >
                <Image
                  src="/Headerlogo.png"
                  alt="Prep Academy Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                  priority
                  quality={75}
                  loading="eager"
                  onLoadingComplete={() =>
                    console.log("Logo loaded successfully")
                  }
                  onError={(e) => console.error("Logo failed to load", e)}
                />
              </div>
            </div>

            {/* Desktop Navigation - Hidden on smaller screens, visible on large screens */}
            <nav className="hidden lg:flex space-x-8 items-center">
              <div
                onClick={() => handleNavigation("/")}
                className="text-white hover:text-white text-xl font-semibold cursor-pointer"
              >
                Home
              </div>
              <div
                onClick={() => handleNavigation("/aboutus")}
                className="text-white hover:text-white text-xl font-semibold cursor-pointer"
              >
                About Us
              </div>

              {/* Split Dropdown Implementation */}
              <div ref={dropdownRef} className="split-dropdown relative">
                <div className="flex">
                  <button
                    onClick={() => handleNavigation("/allcourses")}
                    className="split-btn bg-transparent text-white hover:text-white text-xl font-semibold py-2 px-4 cursor-pointer flex items-center"
                  >
                    All Courses
                  </button>

                  <button
                    onClick={toggleDropdown}
                    className="split-toggle bg-transparent mt-2 text-white hover:text-white text-xl font-semibold py-2 cursor-pointer flex items-center"
                  >
                    <FiChevronDown size={18} />
                  </button>
                </div>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-14 bg-black shadow-lg rounded-lg w-48 z-50">
                    <div
                      onClick={() => handleNavigation("/schoolcourse")}
                      className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm cursor-pointer"
                    >
                      School Courses
                    </div>
                    <div
                      onClick={() => handleNavigation("/collegecourse")}
                      className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm cursor-pointer"
                    >
                      College Courses
                    </div>
                    <div
                      onClick={() => handleNavigation("/studyabroad")}
                      className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm cursor-pointer"
                    >
                      Study Abroad
                    </div>
                    <div
                      onClick={() => handleNavigation("/careercounseling")}
                      className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm cursor-pointer"
                    >
                      Career Counseling
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onClick={() => setToolsDropdownOpen(!toolsDropdownOpen)}
                  className="text-white hover:text-white text-xl font-semibold cursor-pointer flex items-center"
                >
                  Tools
                  <FiChevronDown className="mt-2 ms-3" size={18} />
                </button>
                {toolsDropdownOpen && (
                  <div className="absolute -left-14 mt-4 bg-black shadow-lg rounded-lg w-48 z-50">
                    <div
                      onClick={() => { setShowLoginModal(true); setLoginSource('chatbot'); }}
                      className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm cursor-pointer"
                    >
                      Chatbot
                    </div>
                    <div
                      onClick={() => { setShowLoginModal(true); setLoginSource('percentage-calculator'); }}
                      className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm cursor-pointer"
                    >
                      Percentage Calculator
                    </div>
                  </div>
                )}
              </div>

              

              <div
                onClick={() => handleNavigation("/blogs")}
                className="text-white hover:text-white text-xl font-semibold cursor-pointer"
              >
                Blogs
              </div>
              <div
                onClick={() => handleNavigation("/contact")}
                className="text-white hover:text-white text-xl font-semibold cursor-pointer"
              >
                Contact
              </div>
              <a
                href="https://test.prepacademy.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#F55D3E] text-white px-6 py-2 rounded-lg text-xl font-semibold"
              >
                Take A Quick Test
              </a>
            </nav>

            {/* Mobile and Specific Tablet Menu Button (only for smaller screens and tab screens, hidden on desktop) */}
            {/* <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden block text-gray-800"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button> */}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (visible only on small screens) */}
      <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-gradient-to-r from-[#F55D3E] to-[#a52a1a]  flex justify-around items-center py-2 px-1 shadow-lg z-50 bg-opacity-95 backdrop-blur-md">
        <div
          className="nav-item relative group flex flex-col items-center"
          onClick={() => handleNavigation("/")}
        >
          <div className="p-2 rounded-full bg-orange-50 bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </div>
          <span className="text-xs text-white font-medium mt-1">Home</span>
        </div>

        <div
          className="nav-item relative group flex flex-col items-center"
          onClick={() => handleNavigation("/allcourses")}
        >
          <div className="p-2 rounded-full bg-orange-50 bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <span className="text-xs text-white font-medium mt-1">Courses</span>
        </div>

        <div
          className="nav-item relative group flex flex-col items-center"
          onClick={() => handleNavigation("/blogs")}
        >
          <div className="p-2 rounded-full bg-orange-50 bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 8h10M7 12h6m-4 8h8a2 2 0 002-2V6a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-xs text-white font-medium mt-1">Blogs</span>
        </div>

        <div
          className="nav-item relative group flex flex-col items-center"
          onClick={() => window.open("https://test.prepacademy.in/", "_blank")}
        >
          <div className="p-2 rounded-full bg-orange-50 bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
              />
            </svg>
          </div>
          <span className="text-xs text-white font-medium mt-1">Take Test</span>
        </div>

        <div
          className="nav-item relative group flex flex-col items-center"
          onClick={toggleSidebar}
        >
          <div className="p-2 rounded-full bg-orange-50 bg-opacity-20 hover:bg-opacity-40 transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <span className="text-xs text-white font-medium mt-1">More</span>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[99] ${
          isSidebarOpen ? "block" : "hidden"
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-[80%] max-w-[320px] bg-gradient-to-br from-[#a52a1a] to-[#5D1A0F] z-[100] transform transition-transform duration-500 ease-in-out overflow-y-auto shadow-xl ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Elegant Header with Serif Font */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#F55D3E]/30">
          <div className="text-[#FFE4B5] text-2xl font-serif italic font-bold tracking-wider">
            <span className="text-[#F55D3E] ml-2">Prep</span>
            <span className="text-[#15938F]">Academy</span>
          </div>
          <button
            onClick={toggleSidebar}
            className="text-[#FFE4B5] hover:text-white transition-colors"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* Main Navigation Links with Decorative Elements */}
        <div className="mt-4">
          {[
            { label: "Home", path: "/", icon: "✦" },
            { label: "About Us", path: "/aboutus", icon: "✦" },
            { label: "Blogs", path: "/blogs", icon: "✦" },
            // { label: "Careers", path: "/careers", icon: "✦" },
            // { label: "Contact Us", path: "/contact", icon: "✦" },
            { label: "All Courses", path: "/allcourses", icon: "✦" },
            // { label: "Franchises", path: "/franchises", icon: "✦" }
          ].map(({ label, path, icon }) => (
            <div
              key={path}
              className="px-6 py-3 border-b border-[#F55D3E]/20 text-[#FFE4B5] font-serif italic flex items-center hover:bg-[#F55D3E]/20 cursor-pointer transition-all duration-300"
              onClick={() => handleNavigation(path)}
            >
              <span className="mr-3 text-[#F55D3E]">{icon}</span>
              <span className="text-lg">{label}</span>
            </div>
          ))}
        </div>

        <div className="mt-6 relative">
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F55D3E] to-transparent"></div>
          <div className="px-6 py-3 text-[#FFE4B5] text-base font-serif italic font-bold tracking-wide">
            ALL COURSES
          </div>
        </div>

        {[
          { label: "School Courses", path: "/schoolcourse" },
          { label: "College Courses", path: "/collegecourse" },
          { label: "Study Abroad", path: "/studyabroad" },
          { label: "Career Counseling", path: "/careercounseling" },
        ].map(({ label, path }) => (
          <div
            key={path}
            className="px-6 py-2 text-[#FFE4B5]/80 text-sm font-serif italic flex items-center hover:bg-[#F55D3E]/20 hover:text-[#FFE4B5] cursor-pointer transition-all duration-300"
            onClick={() => handleNavigation(path)}
          >
            <span className="ml-4">{label}</span>
          </div>
        ))}

        <div className="mt-6 relative">
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F55D3E] to-transparent"></div>
          <div className="px-6 py-3 text-[#FFE4B5] text-base font-serif italic font-bold tracking-wide">
            Get in Touch
          </div>
        </div>

        {[
          { label: "Contact Us", path: "/contact" },
          { label: "Find a Center", path: "/findcenter" },
          { label: "Become a Franchise", path: "/refund" },
          { label: "Become a Employee", path: "/employee" },
        ].map(({ label, path }) => (
          <div
            key={path}
            className="px-6 py-2 text-[#FFE4B5]/80 text-sm font-serif italic flex items-center hover:bg-[#F55D3E]/20 hover:text-[#FFE4B5] cursor-pointer transition-all duration-300"
            onClick={() => handleNavigation(path)}
          >
            <span className="ml-4">{label}</span>
          </div>
        ))}

        {/* Terms Section with Decorative Divider */}
        <div className="mt-6 relative">
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F55D3E] to-transparent"></div>
          <div className="px-6 py-3 text-[#FFE4B5] text-base font-serif italic font-bold tracking-wide">
            LEGAL HELP
          </div>
        </div>

        {[
          { label: "Terms & Conditions", path: "/terms-and-conditions" },
          { label: "Privacy Policy", path: "/privacypolicy" },
          { label: "Refund Policy", path: "/refundpolicy" },
        ].map(({ label, path }) => (
          <div
            key={path}
            className="px-6 py-2 text-[#FFE4B5]/80 text-sm font-serif italic flex items-center hover:bg-[#F55D3E]/20 hover:text-[#FFE4B5] cursor-pointer transition-all duration-300"
            onClick={() => handleNavigation(path)}
          >
            <span className="ml-4">{label}</span>
          </div>
        ))}

        {/* Contact Section with Ornate Design */}
        <div className="mt-6 relative">
          <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#F55D3E] to-transparent"></div>
          <div className="px-6 py-3 text-[#FFE4B5] text-base font-serif italic font-bold tracking-wide">
            REACH OUT TO US
          </div>
        </div>

        <div className="px-6 py-2 text-[#FFE4B5]/70 text-sm font-serif italic">
          Get your questions answered about learning with Prep Academy
        </div>

        <div className="px-6 py-3 my-2 mx-4 bg-[#F55D3E]/10 rounded-lg border border-[#F55D3E]/30 text-[#FFE4B5] text-sm   flex items-center">
          <svg
            className="w-4 h-4 mr-3 text-[#F55D3E]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Call: 9446056789
        </div>

        <div className="px-6 py-3 text-[#FFE4B5]/70 text-sm font-serif italic leading-relaxed">
          3rd floor Alamparabil Building, <br />
          TK Road, Thiruvalla, Kerala 689101
        </div>

        {/* Social Media with Stylized Icons */}
        <div className="px-6 py-4 mt-4 text-[#FFE4B5] text-sm font-serif italic">
          Follow us at:
          <div className="flex gap-6 mt-3 justify-center">
            <a
              href="https://www.linkedin.com/company/prep-academy-india"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#F55D3E]/30 flex items-center justify-center hover:bg-[#F55D3E] cursor-pointer transition-all duration-300 border border-[#F55D3E]/50"
            >
              <FaLinkedinIn className="text-white text-lg" />
            </a>

            <a
              href="https://www.youtube.com/@PrepAcademy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#F55D3E]/30 flex items-center justify-center hover:bg-[#F55D3E] cursor-pointer transition-all duration-300 border border-[#F55D3E]/50"
            >
              <FaYoutube className="text-white text-lg" />
            </a>

            <a
              href="https://www.instagram.com/prepacademy.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#F55D3E]/30 flex items-center justify-center hover:bg-[#F55D3E] cursor-pointer transition-all duration-300 border border-[#F55D3E]/50"
            >
              <FaInstagram className="text-white text-lg" />
            </a>

            <a
              href="https://www.facebook.com/prepacademy.in"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-[#F55D3E]/30 flex items-center justify-center hover:bg-[#F55D3E] cursor-pointer transition-all duration-300 border border-[#F55D3E]/50"
            >
              <FaFacebookF className="text-white text-lg" />
            </a>
          </div>
        </div>

        {/* Decorative Footer Element */}
        <div className="mt-6 mb-4 px-6 py-2 flex justify-center">
          <div className="h-[2px] w-16 bg-gradient-to-r from-transparent via-[#F55D3E] to-transparent"></div>
        </div>
      </div>

      {showLoginModal && loginSource && (
        <LoginModal
          closeModal={() => { setShowLoginModal(false); setLoginSource(null); }}
          source={loginSource}
          onSuccess={() => {
            setShowLoginModal(false);
            setLoginSource(null);
            if (loginSource === 'chatbot') {
              router.push('/chatBot');
            } else if (loginSource === 'percentage-calculator') {
              router.push('/percentage-calculator');
            }
          }}
        />
      )}
    </>
  );
}
