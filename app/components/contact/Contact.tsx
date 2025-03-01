"use client"

import React, { useState } from 'react';
import Image from 'next/image';
// import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaPlus, FaWhatsapp } from 'react-icons/fa';
import { IoCallOutline, IoMailOutline } from "react-icons/io5";


export default function ContactPage() {
  const [faqOpen, setFaqOpen] = useState<boolean[]>(Array(4).fill(false));

  const toggleFaq = (index: number) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  return (
    <div className="bg-black text-white min-h-screen ">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 ">
        <h2 className="text-4xl font-bold mt-28">
          <span className="text-[#F55D3E] font-serif italic  font-bold">Contact</span> Us
        </h2>
      </div>

    {/* Combined Contact and Map Section */}
    <section className="mt-5">
  {/* Contact Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Left Column */}
      <div className="space-y-4">
        <h2 className="text-3xl font-normal flex items-center">
          <span className="text-[#F55D3E] font-serif italic font-bold mr-2">Lets</span> 
          <span className="text-white font-bold">Talk</span>
        </h2>

        <p className="text-gray-300 text-base md:text-lg  pb-2">
          We are here to assist and answer your queries. Feel free to contact us.
        </p>

        {/* Email Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <IoMailOutline className="text-white" />
          </div>
          <input
            type="email"
            value="info@prepacademy.in"
            className="w-full bg-[#2B1615] border border-gray-800 rounded-md py-2.5 pl-10 pr-3 text-base md:text-lg  text-white focus:outline-none"
            readOnly
          />
        </div>

        <div className="relative">
  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
    <IoCallOutline className="text-white" /> {/* Call icon */}
  </div>
  <input
    type="text"
    value="+91 9446056789" // Updated contact number
    className="w-full bg-[#2B1615] border border-gray-800 rounded-md py-2.5 pl-10 pr-3 text-base md:text-lg text-white focus:outline-none"
    readOnly
  />
</div>

        {/* Location Dropdown */}
        <div className="relative">
          <div className="flex justify-between items-center w-full bg-[#2B1615] border border-gray-800 rounded-md py-2.5 px-3 text-sm cursor-pointer">
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-400" />
              <span className="text-gray-300 text-base md:text-lg ">Search Location</span>
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

          <div className="bg-[#2B1615] border border-gray-800 rounded-md p-3">
          <div className="flex items-start space-x-2">
            <FaMapMarkerAlt className="text-gray-400 mt-1" />
            <div>
              <p className="text-gray-300 text-base md:text-lg  font-medium">Jhansi</p>
              <p className="text-gray-400 text-base md:text-lg  mt-1">
                Ground Floor, Green Park Colony,<br />
                Adjacent to GST Office, Jhansi - 284002<br />
                Phone: 9221911390
              </p>
            </div>
          </div>
        </div>

        </div>

        {/* Location Details */}
       

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 py-2 bg-[#2B1615] p-3 rounded-md mt-4">
  <a
    href="#"
    className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
  >
    <FaWhatsapp className="text-white text-2xl" /> {/* Increased size */}
  </a>
  <a
    href="#"
    className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
  >
    <FaFacebookF className="text-white text-2xl" /> {/* Increased size */}
  </a>
  <a
    href="#"
    className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
  >
    <FaInstagram className="text-white text-2xl" /> {/* Increased size */}
  </a>
  <a
    href="#"
    className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
  >
    <FaLinkedinIn className="text-white text-2xl" /> {/* Increased size */}
  </a>
</div>
      </div>

      {/* Right Column - Contact Form */}
      <div className="bg-[#1F1F21] border border-gray-800 rounded-md p-5">
        <div className="mb-4">
          <h3 className="text-[#F55D3E] text-xl font-medium">GET IN TOUCH</h3>
          <p className="text-gray-300 text-base md:text-lg ">Enter your queries and get in touch.</p>
        </div>

        <form className="space-y-3">
          <div>
            <input
              type="text"
              placeholder="Enter your fullname"
              className="w-full bg-[#2B1615] border border-gray-800 rounded-md p-2.5 text-base md:text-lg  text-white"
            />
          </div>
          <div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full bg-[#2B1615] border border-gray-800 rounded-md p-2.5 text-base md:text-lg  text-white"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-[#2B1615] border border-gray-800 rounded-md p-2.5 text-base md:text-lg  text-white"
            />
          </div>
          <div>
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full bg-[#2B1615] border border-gray-800 rounded-md p-2.5 text-base md:text-lg  text-white"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#F55D3E] text-white py-2.5 rounded-md text-base md:text-lg  font-medium"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>

  {/* Map Section */}
  <div className="w-full px-4 sm:px-6 lg:px-8 pb-8">
    <div className="rounded-xl overflow-hidden h-64">
      {/* Replacing with a styled div that looks like the map in the image */}
      <div className="relative w-full h-full">
        <Image
          src="/contactlocation.png" 
          alt="Map"
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-xl"
        />
        {/* If you don't have the actual image, you can use a placeholder */}
        {/* <div className="absolute inset-0 bg-blue-100 rounded-xl">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23e6f2ff'/%3E%3Cpath d='M0 0L100 100ZM100 0L0 100Z' stroke='%23b3d1ff' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}></div>
        </div> */}
      </div>
    </div>
  </div>
</section>

      {/* Do More With PrepAcademy */}
      <div className="bg-[#1E1615] px-4 sm:px-6 lg:px-8 py-12">
  <h2 className="text-center text-4xl font-semibold mb-8">
    <span className="text-[#E25B41] font-serif italic font-bold">Do More With</span>
    <span className="text-white"> PrepAcademy?</span>
  </h2>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-[#231917] p-6 rounded-md border-l-4 border-[#F55D3E]">
      <h3 className="text-[#E25B41] text-xl font-medium mb-2">Become A Franchise</h3>
      <p className="text-gray-300 text-base md:text-lg  mb-4 leading-relaxed">
        We prioritize our students&apos; growth through customized learning experiences.
      </p>
      <a href="#" className="text-[#E25B41] text-base md:text-lg  inline-flex items-center">
        Lets Go <span className="ml-1">→</span>
      </a>
    </div>

    <div className="bg-[#231917] p-6 rounded-md border-l-4 border-[#F55D3E]">
      <h3 className="text-[#E25B41] text-xl font-medium mb-2">Find A Centre</h3>
      <p className="text-gray-300 text-base md:text-lg  mb-4 leading-relaxed">
        Our career guidance experts help students discover and achieve their true potential.
      </p>
      <a href="#" className="text-[#E25B41] text-base md:text-lg  inline-flex items-center">
        Lets Go <span className="ml-1">→</span>
      </a>
    </div>

    <div className="bg-[#231917] p-6 rounded-md border-l-4 border-[#F55D3E]">
      <h3 className="text-[#E25B41] text-xl font-medium mb-2">Become an Employee</h3>
      <p className="text-gray-300 text-base md:text-lg  mb-4 leading-relaxed">
        We use modern tools and methods to make learning engaging and effective.
      </p>
      <a href="#" className="text-[#E25B41] text-base md:text-lg  inline-flex items-center">
        Lets Go <span className="ml-1">→</span>
      </a>
    </div>
  </div>
</div>


      {/* Talk To Our Mentors */}
      <div className="max-w-5xl  mx-auto px-4 sm:px-6 lg:px-8 py-16"> {/* Decreased max-width */}
  <div className="bg-gradient-to-r bg-[#2B1615] rounded-lg overflow-hidden relative h-64"> {/* Increased height */}
    <div className="p-8 md:p-10 flex flex-col md:flex-row items-center justify-center mr-40 h-full"> {/* Centered content */}
      <div className="md:w-2/3 space-y-4 z-10 text-center md:text-left"> {/* Adjusted spacing and alignment */}
        <h3 className="text-3xl md:text-4xl text-orange-500 font-bold font-serif italic ">Talk To Our Mentors</h3>
        <p className="text-3xl md:text-4xl font-bold text-white font-serif italic">For Free Counselling</p>
        <a 
          href="#" 
          className="inline-block mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg font-medium"
        >
          Let&apos;s Talk <span className="ml-2">→</span>
        </a>
      </div>
      <div className="mt-8 md:mt-0 md:absolute md:right-6 md:bottom-0"> {/* Adjusted right position */}
        <div className="w-80 h-96 mt-auto bg-contain bg-bottom bg-no-repeat"
                    style={{ backgroundImage: "url('Ellipse.png')" }}

        > {/* Increased size */}
          <div
            className="w-full h-full bg-contain bg-bottom bg-no-repeat"
            style={{ backgroundImage: "url('contactgroupphoto.png')" }}
          ></div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Ellipse */}
      {/* FAQs Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-center text-orange-500 text-4xl font-semibold font-serif italic mb-6">FAQs</h2>

        <div className="space-y-2 ">
          {[
            "What is the best way for preparing for CAT 2023?",
            "What is the best way for studying for CAT 2024?",
            "What is the best way for studying for CAT 2025?",
            "What is the best way for studying for CAT 2026?"
          ].map((question, index: number) => (
            <div key={index} className="border-b border-gray-800 bg-gradient-to-b from-[#3A1E1D] to-[#2B1615] p-2 rounded-lg">
            <button
              onClick={() => toggleFaq(index)}
              className="flex justify-between items-center w-full py-3 text-left"
            >
              <span className="text-base md:text-lg text-white">{question}</span>
              <FaPlus
                className={`transform transition-transform text-white ${
                  faqOpen[index] ? "rotate-45" : ""
                }`}
              />
            </button>
            {faqOpen[index] && (
              <div className="py-3 text-base md:text-lg text-gray-400 pr-8">
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