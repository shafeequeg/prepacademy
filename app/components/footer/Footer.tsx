"use client";

import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0B1117] w-full py-12">
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Social Icons */}
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <div className="flex items-center">
                <img 
                  src="/Headerlogo.png" 
                  alt="Prep Academy Logo" 
                  className="h-11 w-auto" 
                />
              </div>
            </div>
           
          </div>

          {/* STUDY WITH US */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium text-lg mb-4">STUDY WITH US</h3>
            <ul className="space-y-3">
              {["School Courses", "College Courses", "Study Abroad", "Career Counseling"].map((text, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ABOUT PREPACADEMY */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium text-lg mb-4">ABOUT PREPACADEMY</h3>
            <ul className="space-y-3">
              {[{text : "About me", link :"/aboutus"}, {text : "Team", link :"/team"}, {text : "Blog", link :"/blogs"}].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-gray-300 hover:text-white text-sm">
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* GET IN TOUCH & ENROLL NOW */}
          <div className="flex flex-col">
            <div className="mb-8 text-center md:text-left">
              <h3 className="text-white font-medium text-lg mb-4">GET IN TOUCH</h3>
              <ul className="space-y-3">
              {[{text : "Contact us", link :"/contact"}, {text : "Find a Centre", link :"/findcenter"}, {text : "Become a Franchise", link :"/franchise"}, {text :"Become an Employee", link :"/employee"}].map((item, index) => (
                <li key={index}>
                  <a href={item.link} className="text-gray-300 hover:text-white text-sm">
                    {item.text}
                  </a>
                </li>

              ))}
              </ul>
              <div className="flex space-x-4 mt-4    ">
              <a href="https://wa.me/9446056789" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/prepacademy.in" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaFacebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/prepacademy.in/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/prep-academy-india/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <FaLinkedin className="w-6 h-6" />
              </a>
            </div>
            </div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-white font-medium text-lg mb-4">ENROLL NOW</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <button className="bg-[#F1291F] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm">Login</button>
                <button className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-gray-800 transition-colors text-sm">Signup</button>
              </div>
            </div>
          </div>

          {/* LEGAL HELP */}
          <div className="text-center md:text-left">
            <h3 className="text-white font-medium text-lg mb-4">LEGAL HELP</h3>
            <ul className="space-y-3">
              {["Terms and Condition", "Refund Policy", "Return Policy"].map((text, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
