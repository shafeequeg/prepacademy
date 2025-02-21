"use client";
import Image from "next/image";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for the dropdown

  return (
    <header className="w-[100%] bg-gradient-to-r mt-4 from-white via-[#F55D3E] to-[#a52a1a] shadow-lg py-6 px-4 md:px-12 rounded-xl">
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
          <a href="/" className="text-gray-800 hover:text-white text-sm font-semibold">
            Home
          </a>
          <Link href="/about" className="text-gray-800 hover:text-white text-sm font-semibold">
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
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                <a href="#" className="block text-gray-800 hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Web Development
                </a>
                <a href="#" className="block text-gray-800 hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Data Science
                </a>
                <a href="#" className="block text-gray-800 hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Digital Marketing
                </a>
              </div>
            )}
          </div>
         
          <a href="#" className="text-gray-800 hover:text-white text-sm font-semibold">
            Blogs
          </a>
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
          <a href="#" className="text-gray-800 hover:text-[#F55D3E] text-sm font-semibold">
            Home
          </a>
          <a href="#" className="text-gray-800 hover:text-[#F55D3E] text-sm font-semibold">
            About Us
          </a>
  
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
              <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-48">
                <a href="#" className="block text-gray-800 hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Web Development
                </a>
                <a href="#" className="block text-gray-800 hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Data Science
                </a>
                <a href="#" className="block text-gray-800 hover:text-[#F55D3E] px-4 py-2 text-sm">
                  Digital Marketing
                </a>
              </div>
            )}
          </div>
  
          <a href="#" className="bg-[#F55D3E] text-white px-6 py-2 rounded-lg text-sm font-semibold">
            Take A Quick Test
          </a>
        </nav>
      )}
    </div>
  </header>
  
  );
}
