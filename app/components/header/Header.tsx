"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown

  return (
    <header className="w-[95%] mx-auto text-center bg-gradient-to-r mt-4 from-white via-[#F55D3E] to-[#a52a1a] shadow-lg py-6 px-4 md:px-12 rounded-xl">
    <div className="container mx-auto">
      <div className="flex items-center justify-between">
        {/* Logo */}
        
        <div className="flex items-center">

          <Image
            src="/Headerlogo.png"
            alt="Prep Academy Logo"
            width={150}
            height={50}
            className="h-12 w-auto"
          />
        </div>
  
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-gray-800 hover:text-white text-sm font-semibold">
            Home
          </Link>
          <Link href="/aboutus" className="text-gray-800 hover:text-white text-sm font-semibold">
            About Us
          </Link>
  
          {/* All Courses Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 hover:text-white text-sm font-semibold flex items-center"
            >
              All Courses ▼
            </button>
  
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-black shadow-lg rounded-lg w-48">
                <a href="#" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                 School Courses
                </a>
                <a href="#" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                College Courses
                </a>
                <a href="#" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Study Abroad
                </a>
              </div>
            )}
          </div>
         
          <Link href="/blogs" className="text-gray-800 hover:text-white text-sm font-semibold">
            Blogs
          </Link>
          <a href="#" className="text-gray-800 hover:text-white text-sm font-semibold">
            Contact
          </a>
          <a href="#" className="bg-[#F55D3E] text-white px-6 py-2 rounded-lg text-sm font-semibold">
            Take A Quick Test
          </a>
        </nav>
  
        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
  
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col items-center bg-gray-100 py-4 px-6 space-y-4">
          <Link href="/" className="text-gray-800 hover:text-[#F55D3E] text-sm font-semibold">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-[#F55D3E] text-sm font-semibold">
            About Us
          </Link>
  
          {/* Mobile Dropdown for All Courses */}
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-gray-800 hover:text-[#F55D3E] text-sm font-semibold"
            >
              All Courses ▼
            </button>
  
            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 bg-black shadow-lg rounded-lg w-48">
                <a href="#" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Web Development
                </a>
                <a href="#" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Data Science
                </a>
                <a href="#" className="block text-white hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Digital Marketing
                </a>
              </div>
            )}
          </div>
         <Link href="/blogs" className="text-gray-800 hover:text-white text-sm font-semibold">
            Blogs
          </Link>
  <a href="#" className="text-gray-800 hover:text-white text-sm font-semibold">
            Contact
          </a>
          <a href="#" className="bg-[#F55D3E] text-white px-6 py-2 rounded-lg text-sm font-semibold">
            Take A Quick Test
          </a>
        </nav>
      )}
    </div>
  </header>
  
  );
}
