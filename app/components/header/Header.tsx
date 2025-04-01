"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
// import Link from "next/link";
import { useRouter } from "next/navigation";

// Create a Loader component with splitting circles animation
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
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // For mobile
  const [isLoading, setIsLoading] = useState(false); // Loading state

  // Add custom animations to tailwind config
  useEffect(() => {
    // This adds the custom animations to the CSS
    const style = document.createElement('style');
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
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
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

  // Navigation handler function with loading state
  const handleNavigation = (path: string) => {
    setIsLoading(true);
    setIsOpen(false);
    setIsDropdownOpen(false);
    
    // Add a slight delay before navigation to ensure loader is visible
    setTimeout(() => {
      router.push(path);
      
      // Add another timeout to hide loader after navigation
      // This simulates the page load completion
      setTimeout(() => {
        setIsLoading(false);
      }, 1200);
    }, 200);
  };

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isDropdownOpen) {
      handleNavigation("/allcourses");
    } else {
      setIsDropdownOpen(prev => !prev);
    }
  };

  return (
    <>
      {/* Show loader when loading state is true */}
      {isLoading && <Loader />}
      
      <header
        className={`w-[95%] fixed top-0 left-1/2 transform -translate-x-1/2 mx-auto text-center 
        bg-gradient-to-r mt-4 from-white via-[#F55D3E] to-[#a52a1a] shadow-lg py-6 px-4 md:px-12 rounded-xl z-50 
        transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div onClick={() => handleNavigation("/")} className="cursor-pointer">
                <Image
                  src="/Headerlogo.png"
                  alt="Prep Academy Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto"
                />
              </div>
            </div>

            {/* Desktop Navigation - Hidden on specific tablet sizes */}
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

              <div 
                ref={dropdownRef}
                className="relative group"
              >
                <button
                  onClick={toggleDropdown}
                  className="text-white hover:text-white text-xl font-semibold flex items-center cursor-pointer"
                >
                  All Courses {isDropdownOpen ? '▲' : '▼'}
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div className="absolute left-0 mt-2 bg-black shadow-lg rounded-lg w-48 z-50">
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

            {/* Mobile and Specific Tablet Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-gray-800"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Mobile and Specific Tablet Menu */}
          {isOpen && (
            <nav className="lg:hidden fixed left-0 top-20 w-full bg-white shadow-lg py-4 px-6 space-y-4 z-50">
              <div className="flex flex-col space-y-2">
                <div 
                  onClick={() => handleNavigation("/")} 
                  className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full pb-2 cursor-pointer"
                >
                  Home
                </div>
                <div 
                  onClick={() => handleNavigation("/aboutus")} 
                  className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full pb-2 cursor-pointer"
                >
                  About Us
                </div>

                <div className="relative w-full">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigation("/allcourses");
                      setIsMobileDropdownOpen((prev) => !prev);
                    }}
                    className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full"
                  >
                    All Courses {isMobileDropdownOpen ? "▲" : "▼"}
                  </button>

                  {isMobileDropdownOpen && (
                    <div className="mt-2 space-y-2 pl-4">
                      <div 
                        onClick={() => handleNavigation("/schoolcourse")} 
                        className="block text-gray-700 hover:text-[#F55D3E] text-base font-medium py-1 cursor-pointer"
                      >
                        School Courses
                      </div>
                      <div 
                        onClick={() => handleNavigation("/collegecourse")} 
                        className="block text-gray-700 hover:text-[#F55D3E] text-base font-medium py-1 cursor-pointer"
                      >
                        College Courses
                      </div>
                      <div 
                        onClick={() => handleNavigation("/studyabroad")} 
                        className="block text-gray-700 hover:text-[#F55D3E] text-base font-medium py-1 cursor-pointer"
                      >
                        Study Abroad
                      </div>
                      <div 
                        onClick={() => handleNavigation("/careercounseling")} 
                        className="block text-gray-700 hover:text-[#F55D3E] text-base font-medium py-1 cursor-pointer"
                      >
                        Career Counseling
                      </div>
                    </div>
                  )}
                </div>

                <div 
                  onClick={() => handleNavigation("/blogs")} 
                  className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full pb-2 cursor-pointer"
                >
                  Blogs
                </div>
                <div 
                  onClick={() => handleNavigation("/contact")} 
                  className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full pb-2 cursor-pointer"
                >
                  Contact
                </div>

                <a 
                  href="https://test.prepacademy.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-[#F55D3E] text-white px-6 py-2 rounded-lg text-base font-semibold"
                >
                  Take A Quick Test
                </a>
              </div>
            </nav>
          )}
        </div>
      </header>
    </>
  );
}