"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPlus, FaWhatsapp } from 'react-icons/fa';
import { IoCallOutline, IoMailOutline } from "react-icons/io5";


export default function ContactPage() {
  const [faqOpen, setFaqOpen] = useState<boolean[]>(Array(4).fill(false));

  const toggleFaq = (index: number) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen ">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 ">
        <h2 className="text-4xl font-bold mt-28">
          <span className="text-[#F55D3E] font-serif italic font-normal">Contact</span> Us
        </h2>
      </div>

    {/* Combined Contact and Map Section */}
<section className=" mt-5">
  {/* Contact Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="space-y-6">
        <h2 className="text-3xl font-normal">
          <span className="text-[#F55D3E] font-normal italic">Lets</span> Talk
        </h2>

        <p className="text-gray-200 text-sm">
          We are here to assist and answer your queries. Feel free to contact us.
        </p>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <IoMailOutline className="text-gray-400" />
          </div>
          <input
            type="email"
            placeholder="info@prepacademy.in"
            className="w-full bg-[#2B1615] border border-gray-700 rounded-md py-3 pl-10 pr-3 text-sm text-gray-300 focus:outline-none"
            readOnly
          />
        </div>

        {/* Phone Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <IoCallOutline className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="+91 9446056789"
            className="w-full bg-[#2B1615] border border-gray-700 rounded-md py-3 pl-10 pr-3 text-sm text-gray-300 focus:outline-none"
            readOnly
          />
        </div>

        {/* Location Dropdown */}
        <div className="relative">
          <div className="flex justify-between items-center w-full bg-[#2B1615] border border-gray-700 rounded-md py-3 px-3 text-sm cursor-pointer">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <span className="text-gray-300">Search Location</span>
            </div>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Location Details */}
        <div className="bg-[#2B1615] border border-gray-700 rounded-md p-4">
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-gray-400 mt-1" />
            <div>
              <p className="text-gray-300 text-sm font-medium">Jharsai</p>
              <p className="text-gray-400 text-xs mt-1">
                Ground Floor, Green Park Colony,
                <br />
                Adjacent to GST Office, Jharsi - 284002
                <br />
                Phone: +1234567890
              </p>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 pt-2 bg-[#2B1615] p-4 rounded-md">
          <a
            href="#"
            className="w-10 h-10 bg-transparent flex items-center justify-center hover:bg-gray-800 transition"
          >
            <FaWhatsapp className="text-white text-lg" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center hover:bg-gray-800 transition"
          >
            <FaFacebookF className="text-white" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center hover:bg-gray-800 transition"
          >
            <FaInstagram className="text-white" />
          </a>
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-transparent flex items-center justify-center hover:bg-gray-800 transition"
          >
            <FaLinkedinIn className="text-white" />
          </a>
        </div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="bg-gradient-to-r from-[#0A1015] to-[#121820] border border-gray-800 rounded-md p-6">
        <div className="mb-6">
          <h3 className="text-[#F55D3E] text-lg font-medium uppercase">GET IN TOUCH</h3>
          <p className="text-gray-300 text-sm">Enter your queries and get in touch.</p>
        </div>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full bg-[#2B1615] rounded-md p-3 text-white"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#2B1615] rounded-md p-3 text-white"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#2B1615] rounded-md p-3 text-white"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={5}
              className="w-full bg-[#2B1615] rounded-md p-3 text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F55D3E] text-white py-3 rounded-md text-sm font-medium hover:bg-[#e54d30] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>

  {/* Map Section */}
  <div className="w-full p-5">
    <div className="rounded-xl overflow-hidden h-64 md:h-80">
      {/* Placeholder for map image - replace with actual map component */}
      <div className="relative w-full h-full">
        <Image
          src="/contactlocation.png"
          alt="Map"
          fill
          style={{ objectFit: 'cover', filter: 'hue-rotate(210deg) brightness(0.9)' }}
          className="rounded-xl"
        />
      </div>
    </div>
  </div>
</section>

      {/* Do More With PrepAcademy */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-xl mb-8">
          <span className="text-orange-500">Do More With</span> PrepAcademy?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-5 rounded-md">
            <h3 className="text-orange-500 text-sm font-medium mb-2">Become a Premium</h3>
            <p className="text-gray-400 text-xs">
              Unlock all our courses and premium features to accelerate your learning journey.
            </p>
            <Link href="#" className="text-orange-500 text-xs inline-block mt-4">
              Join Us →
            </Link>
          </div>

          <div className="bg-gray-800 p-5 rounded-md">
            <h3 className="text-orange-500 text-sm font-medium mb-2">Find a Career</h3>
            <p className="text-gray-400 text-xs">
              Our career counselors help you find the perfect job aligned with your skills and aspirations.
            </p>
            <Link href="#" className="text-orange-500 text-xs inline-block mt-4">
              Learn More →
            </Link>
          </div>

          <div className="bg-gray-800 p-5 rounded-md">
            <h3 className="text-orange-500 text-sm font-medium mb-2">Become an Instructor</h3>
            <p className="text-gray-400 text-xs">
              Share your knowledge with others and make a difference in their educational journey.
            </p>
            <Link href="#" className="text-orange-500 text-xs inline-block mt-4">
              Apply Now →
            </Link>
          </div>
        </div>
      </div>

      {/* Talk To Our Mentors */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="rounded-md overflow-hidden bg-gradient-to-r from-orange-700 to-orange-500 relative">
          <div className="p-6 flex flex-col md:flex-row justify-between">
            <div className="space-y-2 md:w-2/3">
              <h3 className="text-lg font-light italic">Talk To Our Mentors</h3>
              <p className="text-xl font-bold">For Free Counselling</p>
              <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-md text-sm mt-2">
                Contact Now
              </button>
            </div>
            <div className="mt-6 md:mt-0 md:absolute md:right-10 md:top-1/2 md:-translate-y-1/2">
              <div className="flex -space-x-4">
                <div className="w-12 h-12 bg-gray-400 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-500 rounded-full"></div>
                <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-center text-orange-500 text-xl mb-6">FAQs</h2>

        <div className="space-y-2">
          {[
            "What is the best way for preparing for CAT 2023?",
            "What is the best way for studying for CAT 2024?",
            "What is the best way for studying for CAT 2025?",
            "What is the best way for studying for CAT 2026?"
          ].map((question, index: number) => (
            <div key={index} className="border-b border-gray-800">
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full py-3 text-left"
              >
                <span className="text-sm">{question}</span>
                <FaPlus
                  className={`transform transition-transform ${
                    faqOpen[index] ? "rotate-45" : ""
                  }`}
                />
              </button>
              {faqOpen[index] && (
                <div className="py-3 text-sm text-gray-400 pr-8">
                  The best way to prepare for CAT is to create a structured study plan, focus on your weak areas, take regular mock tests, analyze your performance, and join a coaching program if needed. Consistency is key to success.
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}