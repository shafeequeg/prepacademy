"use client";

import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { IoMailOutline, IoCallOutline } from "react-icons/io5";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";

interface FormData {
  full_name: string;
  phone_number: string;
  email: string;
  city: string;
  message: string;
}

const FranchisePage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    phone_number: "",
    email: "",
    city: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  try {
    const serviceID = "YOUR_SERVICE_ID";
    const templateID = "YOUR_TEMPLATE_ID";
    const publicKey = "YOUR_PUBLIC_KEY";

    // Convert formData to Record<string, unknown>
    const templateParams = {
      full_name: formData.full_name,
      phone_number: formData.phone_number,
      email: formData.email,
      city: formData.city,
      message: formData.message,
    };

    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,  // Use the converted object here
      publicKey
    );

    console.log("Email sent successfully!", response);
    toast.success("Your franchise inquiry has been sent successfully!");
    setFormData({
      full_name: "",
      phone_number: "",
      email: "",
      city: "",
      message: "",
    });
  } catch (error) {
    console.error("Failed to send inquiry:", error);
    toast.error("Failed to send the inquiry. Please try again.");
  }
};

  return (
    <div className="bg-black text-white min-h-screen mt-14">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          <span className="text-[#F55D3E] font-serif italic">Become a</span> Franchise
        </h1>
        <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Partner with Prep Academy to deliver world-class e-learning and empower students in your community.
        </p>
      </header>

      {/* Hero Section */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Join <span className="text-[#ED1C24]">Prep</span>
              <span className="text-[#15938F]">Academy</span>
            </h2>
            <p className="text-gray-300 text-lg mt-4">
              Build a rewarding business by bringing Prep Academy’s proven e-learning solutions to your region. Our trusted brand and comprehensive support help you succeed.
            </p>
            <a
              href="#franchise-form"
              className="inline-block mt-6 bg-[#F55D3E] hover:bg-[#E25B41] text-white px-6 py-3 rounded-lg text-lg font-medium"
            >
              Apply Now
            </a>
          </div>
          <div className="hidden md:block">
            <div
              className="w-full h-80 bg-contain bg-center bg-no-repeat rounded-lg"
              style={{ backgroundImage: "url('/franchise-hero.png')" }}
            ></div>
          </div>
        </div>
      </section> */}

      {/* Why Prep Academy */}
      <section className="bg-[#1E1615] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why <span className="text-[#ED1C24]">Prep</span>
            <span className="text-[#15938F]">Academy</span>?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Proven Success",
                description:
                  "Our curriculum has empowered thousands to excel in exams like CLAT, CUET, and IPM.",
              },
              {
                title: "Full Support",
                description:
                  "From training to marketing, we provide everything you need to thrive.",
              },
              {
                title: "Trusted Brand",
                description:
                  "Leverage our reputation to attract students and build trust.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#231917] p-6 rounded-lg border-l-4 border-[#F55D3E]"
              >
                <h3 className="text-[#F55D3E] text-xl font-semibold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise Form */}
      <section id="franchise-form" className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-[#1F1F21] rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-[#F55D3E] mb-4">
            Start Your Franchise Journey
          </h2>
          <p className="text-gray-300 mb-6">
            Fill out the form to connect with our team and explore the opportunity.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                value={formData.full_name}
                onChange={handleInputChange}
                className="w-full bg-[#2B1615] border border-gray-800 rounded-lg p-3 text-white"
                required
              />
              <input
                type="tel"
                name="phone_number"
                placeholder="Phone Number"
                value={formData.phone_number}
                onChange={handleInputChange}
                className="w-full bg-[#2B1615] border border-gray-800 rounded-lg p-3 text-white"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-[#2B1615] border border-gray-800 rounded-lg p-3 text-white"
                required
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full bg-[#2B1615] border border-gray-800 rounded-lg p-3 text-white"
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Why do you want to become a franchisee?"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-[#2B1615] border border-gray-800 rounded-lg p-3 text-white"
              required
            />
            <button
              type="submit"
              className="w-full bg-[#F55D3E] hover:bg-[#E25B41] text-white py-3 rounded-lg font-medium"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      {/* <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          <span className="text-[#F55D3E] font-serif italic">Get in</span> Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="flex items-center bg-[#2B1615] rounded-lg p-3">
              <IoMailOutline className="text-white mr-3" />
              <span className="text-gray-300">info@prepacademy.in</span>
            </div>
            <div className="flex items-center bg-[#2B1615] rounded-lg p-3">
              <IoCallOutline className="text-white mr-3" />
              <span className="text-gray-300">+91 9446056789</span>
            </div>
            <div className="flex justify-center space-x-4 bg-[#2B1615] p-4 rounded-lg">
              {[
                { Icon: FaWhatsapp, href: "https://wa.me/9446056789" },
                { Icon: FaFacebookF, href: "https://www.facebook.com/prepacademy.in" },
                { Icon: FaInstagram, href: "https://www.instagram.com/prepacademy.in/" },
                { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/prep-academy-india/" },
              ].map(({ Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#F55D3E]"
                >
                  <Icon className="text-2xl" />
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <p className="text-gray-300 text-lg">
              Contact us to learn how you can partner with Prep Academy and transform education in your community.
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default FranchisePage;