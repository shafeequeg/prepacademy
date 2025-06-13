"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import RegisterForm from "@/app/components/login/Register";
import LoginForm from "@/app/components/login/Login";

const Footer = () => {
  const [RegisterModal, SetRegisterModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  const toggleregistermodal = (value: boolean) => {
    SetRegisterModal(value);
  };

  const toggleLoginModal = (value: boolean) => {
    setLoginModal(value);
  };

  return (
    <footer className="bg-[#0B1117] w-full py-12">
      <div className="px-4 md:px-8 max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="mb-6">
              <div className="flex items-center">
                <Image
                  src="/Headerlogo.png"
                  alt="Prep Academy Logo"
                  width={150}
                  height={44}
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-medium text-lg mb-4">
              STUDY WITH US
            </h3>
            <ul className="space-y-3">
              {[
                { text: "School Courses", link: "/schoolcourse" },
                { text: "College Courses", link: "/collegecourse" },
                { text: "Study Abroad", link: "/studyabroad" },
                { text: "Career Counseling", link: "/careercounseling" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-white font-medium text-lg mb-4">
              ABOUT PREPACADEMY
            </h3>
            <ul className="space-y-3">
              {[
                { text: "About me", link: "/aboutus" },
                { text: "Team", link: "/aboutus" },
                { text: "Blog", link: "/blogs" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <div className="mb-8 text-center md:text-left">
              <h3 className="text-white font-medium text-lg mb-4">
                GET IN TOUCH
              </h3>
              <ul className="space-y-3">
                {[
                  { text: "Contact us", link: "/contact" },
                  { text: "Find a Centre", link: "/findacenter" },
                  { text: "Become a Franchise", link: "/becomeafranchise" },
                  { text: "Become an Employee", link: "/becomeanemployee" },
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.link}
                      className="text-gray-300 hover:text-white text-sm"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="flex space-x-4 mt-4 justify-center md:justify-start">
                <a
                  href="https://wa.me/9446056789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  <FaWhatsapp className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/prepacademy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/prepacademy.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  <FaInstagram className="w-6 h-6" />
                </a>
                <a
                  href="https://www.linkedin.com/company/prep-academy-india/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-gray-300"
                >
                  <FaLinkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div className="text-center md:text-left flex flex-col items-center md:items-start">
              <h3 className="text-white font-medium text-lg mb-4">
                ENROLL NOW
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                <button
                  className="bg-[#F1291F] text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-sm"
                  onClick={() => toggleLoginModal(true)}
                >
                  Login
                </button>
                <button
                  className="bg-transparent text-white border border-white px-4 py-2 rounded hover:bg-gray-800 transition-colors text-sm"
                  onClick={() => toggleregistermodal(true)}
                >
                  Signup
                </button>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left ">
            <h3 className="text-white font-medium text-lg mb-4">LEGAL HELP</h3>
            <ul className="space-y-3">
              {/* {["Terms and Condition", "Privacy Policy", "Refund Policy"].map((text, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white text-sm">
                    {text}
                  </a>
                </li>
              ))} */}
              {[
                { text: "Terms and Condition", link: "/terms-and-conditions" },
                { text: "Privacy Policy", link: "/privacypolicy" },
                { text: "Refund Policy", link: "/refundpolicy" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-white text-sm"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:mt-5 md:mb-2 mb-10 mt-3 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} KANNATTUSERVICESLLP. All rights
            reserved.
          </p>
        </div>
      </div>
      {RegisterModal && (
        <RegisterForm closeModal={() => toggleregistermodal(false)} />
      )}

{loginModal && (
  <LoginForm 
    closeModal={() => toggleLoginModal(false)}
    onSuccess={() => {}}
    source="chatbot" // or "percentage-calculator" depending on your needs
  />
)}
    </footer>
  );
};

export default Footer;
