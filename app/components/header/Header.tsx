"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const router = useRouter();
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false); // For mobile


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

  const toggleDropdown = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isDropdownOpen) {
      router.push("/allcourses");
      setIsDropdownOpen(prev => !prev);

    } else {
      setIsDropdownOpen(prev => !prev);
    }
  };

  return (
    <header
      className={`w-[95%] fixed top-0 left-1/2 transform -translate-x-1/2 mx-auto text-center 
      bg-gradient-to-r mt-4 from-white via-[#F55D3E] to-[#a52a1a] shadow-lg py-6 px-4 md:px-12 rounded-xl z-50 
      transition-transform duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={"/"}>
              <Image
                src="/Headerlogo.png"
                alt="Prep Academy Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on specific tablet sizes */}
          <nav className="hidden lg:flex space-x-8 items-center">
            <Link href="/" className="text-white hover:text-white text-xl font-semibold">
              Home
            </Link>
            <Link href="/aboutus" className="text-white hover:text-white text-xl font-semibold">
              About Us
            </Link>

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
                  <Link 
                    href="/schoolcourse" 
                    className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    School Courses
                  </Link>
                  <Link 
                    href="/collegecourse" 
                    className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    College Courses
                  </Link>
                  <Link 
                    href="/studyabroad" 
                    className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Study Abroad
                  </Link>
                  <Link 
                    href="/careercounseling" 
                    className="block text-white hover:text-[#F55D3E] hover:bg-gray-900 px-4 py-2 text-sm"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Career Counseling
                  </Link>
                </div>
              )}
            </div>
            <Link href="/blogs" className="text-white hover:text-white text-xl font-semibold">
              Blogs
            </Link>
            <a href="/contact" className="text-white hover:text-white text-xl font-semibold">
              Contact
            </a>
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
    <div className="flex flex-col  space-y-2">
      <Link 
        href="/" 
        className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full  pb-2"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link 
        href="/aboutus" 
        className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full  pb-2"
        onClick={() => setIsOpen(false)}
      >
        About Us
      </Link>

      <div className="relative w-full">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/allcourses");
                    setIsMobileDropdownOpen((prev) => !prev);
                  }}
                  className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full border-b"
                >
                  All Courses {isMobileDropdownOpen ? "▲" : "▼"}
                </button>

                {isMobileDropdownOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    <Link href="/schoolcourse" className="block text-gray-700 hover:text-[#F55D3E] text-base font-medium py-1" onClick={() => setIsOpen(false)}>
                      School Courses
                    </Link>
                    <Link href="/collegecourse" className="block text-gray-700 hover:text-[#F55D3E] text-base font-medium py-1" onClick={() => setIsOpen(false)}>
                      College Courses
                    </Link>
                    <Link href="/studyabroad" className="block text-gray-700 hover:text-[#F55D3E] text-base font-medium py-1" onClick={() => setIsOpen(false)}>
                      Study Abroad
                    </Link>
                    <Link href="/careercounseling" className="block text-gray-700 hover:text-[#F55D3E] text-base font-medium py-1" onClick={() => setIsOpen(false)}>
                      Career Counseling
                    </Link>
                  </div>
                )}
              </div>

      <Link 
        href="/blogs" 
        className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full  pb-2"
        onClick={() => setIsOpen(false)}
      >
        Blogs
      </Link>
      <Link 
        href="/contact" 
        className="text-gray-800 hover:text-[#F55D3E] text-base font-medium w-full  pb-2"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>

      <a 
        href="https://test.prepacademy.in/" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="bg-[#F55D3E] text-white px-6 py-2 rounded-lg text-base font-semibold "
      >
        Take A Quick Test
      </a>
    </div>
  </nav>
)}
      </div>
    </header>
  );
}