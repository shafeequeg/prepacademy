"use client";

import React, { useState } from "react";
// import Image from 'next/image';
// import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPlus,
  FaWhatsapp,
} from "react-icons/fa";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";
// import emailjs from 'emailjs-com'; // Import EmailJS
import { toast } from "react-toastify";
import AxiosInstance from "../apiconfig/axios";
import { API_URLS } from "../apiconfig/api_urls";
import Link from "next/link";
import Image from "next/image";

type Location = {
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
};

export default function ContactPage() {
  const [faqOpen, setFaqOpen] = useState<boolean[]>(Array(4).fill(false));
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLocation, setSelectedLocation] =
    useState("Thiruvalla, Kerala");
  // const [contactNumber, setContactNumber] = useState("+91 9221911394"); // Default contact number

  const [mapUrl, setMapUrl] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.241518748576!2d78.12345678901234!3d26.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzI0LjQiTiA3OMKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
  );
  const toggleFaq = (index: number) => {
    const newFaqOpen = [...faqOpen];
    newFaqOpen[index] = !newFaqOpen[index];
    setFaqOpen(newFaqOpen);
  };

  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    email: "",
    message: "",
  });

  const locations: Location[] = [
    {
      name: "Jhansi",
      address:
        "Ground Floor, Green Park Colony, Adjacent to GST Office, Jhansi - 284002",
      phone: "9235792300",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7205.592079671734!2d78.56561989063484!3d25.445081560208322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977770076d81037%3A0x9fcc350aef759710!2sGST%2C%20department%2C%20Jhansi!5e0!3m2!1sen!2sin!4v1740824979135!5m2!1sen!2sin",
    },
    {
      name: "Kanpur Mall Road Branch",
      address: "2nd floor, Regal Building 129 Mall Road - Kanpur, 208 004",
      phone: "82994 70392",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8304541982297!2d80.35731527487079!3d26.461193576919218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4709d7e02711%3A0xc19db3c0f1893401!2sIPM%20Careers%20%7C%20BEST%20IPMAT%20COACHING%20IN%20KANPUR%7C%20AIR%202%2C4%2C6%2C8%20IN%20IPMAT%202021!5e0!3m2!1sen!2sin!4v1740825402062!5m2!1sen!2sin",
    },
    {
      name: "Gomti Nagar | Lucknow Branch",
      address:
        "B4, 225, Vishal Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010",
      phone: "84237 33923",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28476.04737357729!2d80.9812751992023!3d26.855662807561128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGomti%20Nagar%20%7C%20Lucknow%20Branch%20B4%2C%20225%2C%20Vishal%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20-%20226010!5e0!3m2!1sen!2sin!4v1740825138956!5m2!1sen!2sin",
    },
    {
      name: "IPM Careers Mall Road Branch",
      address: "2nd floor Regal building 129 Mall road, Kanpur",
      phone: "9446056789",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8304541982284!2d80.35731527487076!3d26.46119357691926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4709d7e02711%3A0xc19db3c0f1893401!2sIPM%20Careers%20%7C%20BEST%20IPMAT%20COACHING%20IN%20KANPUR%7C%20AIR%202%2C4%2C6%2C8%20IN%20IPMAT%202021!5e0!3m2!1sen!2sin!4v1740824792919!5m2!1sen!2sin",
    },
    {
      name: "Thiruvalla, Kerala",
      address:
        "3rd floor Alamparabil Building, TK Road, Thiruvalla, Kerala 689101",
      phone: "9446056789",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745.891686137547!2d76.56364743377378!3d9.379822803411672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06257ceb61ebf7%3A0xd527a0512c4a2401!2sPrep%20Academy%20-%20CLAT%2C%20CUET%2C%20IPM%2C%20SLAT%2C%20AILET%2C%20SAT%2C%20CAT%2C%20CMAT%2C%20MAT%2C%20GMAT%2CGRE%2C%20CRT%20Coaching!5e0!3m2!1sen!2sin!4v1740825588734!5m2!1sen!2sin",
    },
    {
      name: "Kochi Palarivattom",
      address:
        "Prep Academy, Pukalakkat Complex, Mahakavi Vailoppilli Road, Opp Pandal cake Shop, Palarivattam, Kochi - 682025",
      phone: "9446056789",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31433.7274007533!2d76.26947127431639!3d9.999015000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d000540f32b%3A0xe06e1340e2956cb!2sPandhal%20cake%20shop%20Palarivattom!5e0!3m2!1sen!2sin!4v1747908324505!5m2!1sen!2sin",
    },

    {
      name: "Jajmau, Kanpur",
      address:
        "188 B, Shop No:2, Lower Ground Floor, Sai Complex, Pardevanpur Defence Colony, Jajmau, Kanpur Nagar - 208007, Uttar Pradesh",
      phone: "9446056789",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228593.24698602836!2d80.18844074051621!3d26.46315844806217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c411e0903162b%3A0x7bcfc7979f414d59!2sKannattu%20Fingold!5e0!3m2!1sen!2sin!4v1750251804661!5m2!1sen!2sin",
    },

    {
      name: "Farrukhabad Railway Road",
      address:
        "Saurabh Pandey 5/3 railway Road, In front Dr Ravindra Dubey Hospital, Farrukhabad",
      phone: "9446056789",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21037294.562456273!2d52.65757413579002!3d10.594940388966338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd4f11494e6d%3A0x567aff91fe6a0d58!2sKANNATTU%20FINGOLD%20FINANCE%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1750252347697!5m2!1sen!2sin",
    },
    {
      name: "Ram Bagh, Kanpur",
      address: "104A/351 P Road, Ram Bagh, 80 ft Road, Kanpur",
      phone: "9446056789",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228593.24698602836!2d80.18844074051621!3d26.46315844806217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c47286556181b%3A0x63a8100b099ec08e!2sKannattu%20Fingold%20Finance%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1750252085202!5m2!1sen!2sin",
    },
    {
      name: "Adambakkam, Chennai",
      address:
        "No: 7, Ground Floor, Karuneegar Street, Adambakkam, Chennai - 600088 (Near: St Thomas Mount Railway Station)",
      phone: "9446056789",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6448506549805!2d80.19876317484179!3d12.994552487322906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d45ae037a21%3A0xb435928e203faa98!2sKANNATTU%20FINGOLD!5e0!3m2!1sen!2sin!4v1750252463754!5m2!1sen!2sin",
    },
    {
      name: "Kovilambakkam, Chennai",
      address:
        "No 8, Muthiaya Nagar, Medavakkam Main Road, Kovilambakkam, Chennai – 600129",
      phone: "9446056789",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6448506549805!2d80.19876317484179!3d12.994552487322906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d45ae037a21%3A0xb435928e203faa98!2sKANNATTU%20FINGOLD!5e0!3m2!1sen!2sin!4v1750252463754!5m2!1sen!2sin",
    },
    {
      name: "Ekkattuthangal, Chennai",
      address:
        "Door No. 2/2, Gandhi Nagar Main Road, Ekkattuthangal, Chennai – 600032",
      phone: "9446056789",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6448506549805!2d80.19876317484179!3d12.994552487322906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d45ae037a21%3A0xb435928e203faa98!2sKANNATTU%20FINGOLD!5e0!3m2!1sen!2sin!4v1750252463754!5m2!1sen!2sin",
    },
    {
      name: "West Mambalam, Chennai",
      address:
        "No. 16 A, First Floor, Govinda Road, West Mambalam, Chennai - 600033",
      phone: "9446056789",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6448506549805!2d80.19876317484179!3d12.994552487322906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d45ae037a21%3A0xb435928e203faa98!2sKANNATTU%20FINGOLD!5e0!3m2!1sen!2sin!4v1750252463754!5m2!1sen!2sin",
    },
    {
      name: "Tharamani, Chennai",
      address:
        "No. 3, Kennadi Street, Thanthai Periyar Nagar, Tharamani, Chennai - 600017",
      phone: "9446056789",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6448506549805!2d80.19876317484179!3d12.994552487322906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d45ae037a21%3A0xb435928e203faa98!2sKANNATTU%20FINGOLD!5e0!3m2!1sen!2sin!4v1750252463754!5m2!1sen!2sin",
    },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location.name);
    setMapUrl(location.mapUrl); // Update map URL
    setIsOpen(false);
  };

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     // Replace with your EmailJS service ID, template ID, and user ID
  //     const serviceID = 'service_eb5cvhl';
  //     const templateID = 'template_lqeg482';
  //     const userID = 'nk7-kQzPEcwr5RxjW';

  //     // Send the form data via EmailJS
  //     emailjs.send(serviceID, templateID, formData, userID)
  //       .then((response) => {
  //         console.log('Email sent successfully!', response.status, response.text);
  //         toast.success('Your message has been sent successfully!');
  //         // Reset the form
  //         setFormData({
  //           fullname: '',
  //           phone: '',
  //           email: '',
  //           message: '',
  //         });
  //       })
  //       .catch((error) => {
  //         console.error('Failed to send email:', error);
  //         toast.error('Failed to send the message. Please try again.');
  //       });
  //   };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await AxiosInstance.post(
        API_URLS.CONTACT.POST_CONTACT,
        formData
      );

      // Check if the response status is in the range 200-299
      if (response.status >= 200 && response.status < 300) {
        console.log("Message sent successfully!", response.data);
        toast.success("Your message has been sent successfully!");

        // Reset form fields
        setFormData({
          full_name: "",
          phone_number: "",
          email: "",
          message: "",
        });
      } else {
        // Handle other status codes
        console.error("Unexpected status code:", response.status);
        toast.error("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen ">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 ">
        <h2 className="text-4xl font-bold mt-28">
          <span className="text-[#F55D3E] font-serif italic  font-bold">
            Contact
          </span>{" "}
          Us
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
                <span className="text-[#F55D3E] font-serif italic font-bold mr-2">
                  Lets
                </span>
                <span className="text-white font-bold">Talk</span>
              </h2>

              <p className="text-gray-300 text-base md:text-lg pb-2">
                We are here to assist and answer your queries. Feel free to
                contact us.
              </p>

              {/* Email Input */}
              <div className="relative">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <IoMailOutline className="text-white" />
                </div>
                <input
                  type="email"
                  value="info@prepacademy.in"
                  className="w-full bg-[#2B1615] border border-gray-800 rounded-md py-2.5 pl-10 pr-3 text-base md:text-lg text-white focus:outline-none"
                  readOnly
                />
              </div>

              {/* Contact Number Input */}
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
                <div
                  className="flex justify-between items-center w-full bg-[#2B1615] border border-gray-800 rounded-md py-2.5 px-3 text-sm cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div className="flex items-center space-x-2">
                    <FaMapMarkerAlt className="text-gray-400" />
                    <span className="text-gray-300 text-base md:text-lg">
                      {selectedLocation}
                    </span>
                  </div>
                  <svg
                    className={`w-4 h-4 text-gray-400 transform transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
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

                {isOpen && (
                  <div className="absolute w-full bg-[#2B1615] border border-gray-800 rounded-md mt-1 z-10 max-h-56 overflow-y-auto">
                    {locations.map((location, index) => (
                      <div
                        key={index}
                        className="p-3 hover:bg-[#3A1E1D] cursor-pointer"
                        onClick={() => handleLocationSelect(location)}
                      >
                        <div className="flex items-start space-x-2">
                          <FaMapMarkerAlt className="text-gray-400 mt-1" />
                          <div>
                            <p className="text-gray-300 text-base md:text-lg font-medium">
                              {location.name}
                            </p>
                            <p className="text-gray-400 text-base md:text-lg mt-1">
                              {location.address}
                              <br />
                              Phone: {location.phone}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center space-x-6 py-2 bg-[#2B1615] p-3 rounded-md mt-4">
                <a
                  href="https://wa.me/9446056789"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
                >
                  <FaWhatsapp className="text-white text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/prepacademy.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
                >
                  <FaFacebookF className="text-white text-2xl" />
                </a>
                <a
                  href="https://www.instagram.com/prepacademy.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
                >
                  <FaInstagram className="text-white text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/company/prep-academy-india/?viewAsMember=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-transparent flex items-center justify-center"
                >
                  <FaLinkedinIn className="text-white text-2xl" />
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="bg-[#1F1F21] border border-gray-800 rounded-md p-5">
              <div className="mb-4">
                <h3 className="text-[#F55D3E] text-xl font-medium">
                  GET IN TOUCH
                </h3>
                <p className="text-gray-300 text-base md:text-lg">
                  Enter your queries and get in touch.
                </p>
              </div>

              <form className="space-y-3" onSubmit={handleSubmit}>
                <div>
                  <input
                    type="text"
                    name="full_name"
                    placeholder="Enter your fullname"
                    value={formData.full_name}
                    onChange={handleInputChange}
                    className="w-full bg-[#2B1615] border border-gray-800 rounded-md p-2.5 text-base md:text-lg text-white"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number"
                    value={formData.phone_number}
                    onChange={handleInputChange}
                    className="w-full bg-[#2B1615] border border-gray-800 rounded-md p-2.5 text-base md:text-lg text-white"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-[#2B1615] border border-gray-800 rounded-md p-2.5 text-base md:text-lg text-white"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full bg-[#2B1615] border border-gray-800 rounded-md p-2.5 text-base md:text-lg text-white"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#F55D3E] text-white py-2.5 rounded-md text-base md:text-lg font-medium"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
          <div className="bg-[#1F1F21] border border-gray-800 rounded-xl p-6 h-80 md:h-96">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
              {/* Left side - Dynamic Map */}
              <div className="h-full rounded-lg overflow-hidden">
                <iframe
                  src={mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* Right side - Image */}
              <div className="h-full rounded-lg overflow-hidden">
                <Image
                  src="/contactmap.png"
                  alt="Location Map"
                  width={500}
                  height={400}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Do More With PrepAcademy */}
      <div className="bg-[#1E1615] px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-center text-4xl font-semibold mb-8">
          <span className="text-[#E25B41] font-serif italic font-bold">
            Do More With
          </span>
          <span className="text-[#ED1C24] ml-2">Prep</span>
          <span className="text-[#15938F]">Academy</span>?
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#231917] p-6 rounded-md border-l-4 border-[#F55D3E] flex flex-col">
            <h3 className="text-[#E25B41] text-xl font-medium mb-2">
              Become A Franchise
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed flex-grow">
              Partnering with Prep Academy as a franchisee offers a unique
              opportunity to contribute to educational excellence while
              fostering community development.
            </p>
            <Link
              href="/becomeafranchise"
              className="text-[#F55D3E] text-base md:text-lg inline-flex items-center self-start"
            >
              Lets Go <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="bg-[#231917] p-6 rounded-md border-l-4 border-[#F55D3E] flex flex-col">
            <h3 className="text-[#F55D3E] text-xl font-medium mb-2">
              Find A Centre
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed flex-grow">
              Our career guidance experts help students discover and achieve
              their true potential.
            </p>
            <Link
              href="/findacenter"
              className="text-[#F55D3E] text-base md:text-lg inline-flex items-center self-start"
            >
              Lets Go <span className="ml-1">→</span>
            </Link>
          </div>

          <div className="bg-[#231917] p-6 rounded-md border-l-4 border-[#F55D3E] flex flex-col">
            <h3 className="text-[#E25B41] text-xl font-medium mb-2">
              Become an Employee
            </h3>
            <p className="text-gray-300 text-base md:text-lg mb-4 leading-relaxed flex-grow">
              Partnering with Prep Academy as a franchisee offers a unique
              opportunity to contribute to educational excellence while
              fostering community development.
            </p>
            <Link
              href="/becomeanemployee"
              className="text-[#E25B41] text-base md:text-lg inline-flex items-center self-start"
            >
              Lets Go <span className="ml-1">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Talk To Our Mentors */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r bg-[#2B1615] rounded-lg overflow-hidden relative min-h-[16rem]">
          <div className="md:p-10 flex flex-col md:flex-row items-center justify-center md:mr-40 h-full">
            {/* Text Content */}
            <div className="md:w-2/3 space-y-4 z-10 text-center md:text-left px-4 md:px-0">
              <h3 className="text-2xl md:text-4xl text-[#F55D3E] font-bold font-serif italic">
                Talk To Our Mentors
              </h3>
              <p className="text-2xl md:text-4xl font-bold text-white font-serif italic">
                For Free Counselling
              </p>
              <Link
                href="/careercounseling"
                className="inline-block mt-4 md:mt-6 bg-[#F55D3E] hover:bg-[#F55D3E] text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg font-medium"
              >
                Let&apos;s Talk →
              </Link>
            </div>

            {/* Image Container for Desktop */}
            <div className="hidden md:block md:absolute md:right-6 md:bottom-0 w-80 h-64">
              <div
                className="w-full h-full bg-contain bg-bottom bg-no-repeat"
                style={{ backgroundImage: "url('/contactgroupphoto.png')" }}
              ></div>
            </div>

            {/* Image Container for Mobile */}
            <div className="md:hidden w-full mt-6 flex justify-center">
              <div
                className="w-64 h-48 bg-contain bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/contactgroupphoto.png')" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      {/* Ellipse */}
      {/* FAQs Section */}
      <div className="max-w-7xl mx-auto px-4   sm:px-6 lg:px-8 py-8">
        <h2 className="text-center text-[#F55D3E] text-4xl font-semibold font-serif italic mb-6">
          FAQs
        </h2>

        <div className="space-y-2">
          {[
            {
              question: "Where is your learning center located?",
              answer:
                "You can find our location, along with a map, on the Contact page. If we are an online-only platform, we’ll specify that all support is provided digitally.",
            },
            {
              question: "Can I request a callback or speak with an advisor?",
              answer:
                " Yes,  simply fill out the contact form and select Request a Callback. One of our advisors will reach out to you within 24 hours.",
            },
            {
              question:
                "How do I report a technical issue with the website or course videos?",
              answer:
                " For technical issues, please use the contact form and select “Technical Support” as the subject, or email prepacademy@gmail.com directly.",
            },
            {
              question:
                "what  should I do if I made a mistake in my course registration?",
              answer:
                "Please reach out through the Contact page as soon as possible. Our team can help you correct any errors in your registration  details.",
            },
          ].map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-800 bg-gradient-to-b from-[#3A1E1D] to-[#2B1615] p-2 rounded-lg"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="flex justify-between items-center w-full py-3 text-left"
              >
                <span className="text-base md:text-lg text-white">
                  {faq.question}
                </span>
                <FaPlus
                  className={`transform transition-transform text-white ${
                    faqOpen[index] ? "rotate-45" : ""
                  }`}
                />
              </button>
              {faqOpen[index] && (
                <div className="py-3 text-base md:text-lg text-gray-400 pr-8">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

