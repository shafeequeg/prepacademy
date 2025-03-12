"use client"

import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";

const Benefits = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    // Create an Intersection Observer to detect when stats section is visible
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsStatsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );
  
    // Start observing the stats section
    if (statsRef.current) {
      observer.observe(statsRef.current);
    }
  
    // Cleanup observer on component unmount
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);
  
  // Function to format numbers (e.g., 80000000 → 8Cr+)
  const formatNumber = (number : number) : string => {
    if (number >= 10000000) {
      return `${(number / 10000000).toFixed(0)}Cr+`;
    } else if (number >= 100000) {
      return `${(number / 100000).toFixed(0)}Lakh+`;
    } else if (number >= 1000) {
      return `${(number / 1000).toFixed(0)}K+`;
    }
    return number.toString();
  };
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const benefitCards = [
    {
      title: 'Innovative Live Platform',
      icon: '/whystudywithus1.png', // Replace with your image path
    },
    {
      title: 'State of The Operating System',
      icon: '/whystudywithus2.png',
    },
    {
      title: 'Hybrid Model Coaching Program',
      icon: '/whystudywithus3.png',
    },
    {
      title: 'Expert Educators',
      icon: '/whystudywithus3.png',
    }
  ];

  const stats = [
    {
      number: 80000000, // 8Cr+
      label: 'Questions Taken'
    },
    {
      number: 30000000, // 3Cr+
      label: 'Tests Taken'
    },
    {
      number: 42000, // 42K+
      label: 'Doubts Solved'
    }
  ];

  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    class: '',
    school: '',
  });
 
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Replace with your EmailJS service ID, template ID, and user ID
    const serviceID = 'service_eb5cvhl';
    const templateID = 'template_lqeg482';
    const userID = 'nk7-kQzPEcwr5RxjW';

    // Send the form data via EmailJS
    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        toast.success('Your message has been sent successfully!');
        // Reset the form
        setFormData({
          fullname: '',
          phone: '',
          email: '',
          class: '',
          school: '',
        });
        closeModal(); // Close the modal after successful submission
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        toast.error('Failed to send the message. Please try again.');
      });
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 text-white ">
      {/* Header Section */}
      <div className="w-full bg-[#2B1615] px-4 md:px-8 lg:px-16 py-12 rounded-md">
        <div 
          className="rounded-md p-6 relative mx-auto mb-12 w-[80%] md:w-[70%]"
          style={{
            background: "radial-gradient(circle, #4E211B 0%, #3A1511 50%, #321310 100%)"
          }}
        >
          <div className="flex items-center justify-between h-[100px] md:h-[130px] px-6 md:px-2 w-[90%] md:w-[80%] mx-auto">
            
            {/* Left Side (Heading & Button) */}
            <div className="flex flex-col items-start text-left w-[60%]">
              <h2 className="text-2xl md:text-2xl font-bold ">
                <span className="text-[#F55D3E] italic font-medium">Register</span> 
                <span className="text-white"> and Get a Free Trial</span>
              </h2>
              <button className="mt-3 px-4 py-2 bg-[#F55D3E] text-white rounded text-sm font-medium hover:bg-[#E04D2E] flex items-center gap-1" onClick={openModal}>
                JOIN NOW
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Right Side (Mascot Image) */}
            <div className="w-28 h-40 md:w-32 md:h-48 ml-4 mr-[-10px] md:mr-[-20px] mt-9"> 
              <img
                src="/charater2.png"
                alt="Prep Academy Mascot"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-4xl font-bold">
              <span className="text-[#F55D3E] font-dmserif italic">Why Study with</span>
              <br /> <span className='text-[#ED1C24]'>Prep</span> <span className='text-[#15938F]'>Academy</span>?
            </h2>
          </div>
          <div>
            {/* <p className="text-gray-300 ">
            Are you ready to conquer the world?
            Choosing to study with PrepAcademy offers students a comprehensive and 
            tailored educational experience designed to prepare them for higher education and future success.
            </p> */}
          </div>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
  {benefitCards.map((card, index) => (
    <div 
      key={index}
      className="bg-gradient-to-b from-[#2B1615] to-[#1A0F0E] rounded-lg p-6 hover:from-[#3A1F1D] hover:to-[#2B1615] transition-all duration-300 flex flex-col items-center text-center"
    >
      <img src={card.icon} alt={card.title} className="w-12 h-12 mb-4" /> 
      <h3 className="text-[#F55D3E] text-xl font-semibold mb-4">{card.title}</h3>
    </div>
  ))}
</div>
      </div>

      {/* Statistics Section - Using Intersection Observer */}
      <div 
         ref={statsRef} 
         className="grid grid-cols-1 mt-10 md:grid-cols-3 gap-8 mb-12"
       >
  {stats.map((stat, index) => (
    <div 
      key={index} 
      className="flex flex-col  items-center justify-center text-center border-l-4 border-[#F55D3E] pl-4 rounded-l-md"
    >
      <span className="text-[#F55D3E] text-5xl font-bold mb-2 ">
        {isStatsVisible && (
          <CountUp 
            start={0} 
            end={stat.number} 
            duration={8.5} 
            separator="," 
            useEasing={true}
            redraw={false}
            formattingFn={formatNumber} // Apply formatting here
          />

        )}
      </span>
      <span className="text-gray-300 text-lg">{stat.label}</span>
    </div>
  ))}
</div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg w-11/12 md:w-3/4 max-w-lg relative">
            {/* Close button */}
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 text-gray-700 hover:text-black"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            
            <div className="p-6 pt-5">
              <h2 className="text-center text-2xl font-bold text-black mb-6">Fast Track Your Trial Class</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* First row */}
                  <div>
                    <input 
                      type="text" 
                      name="fullname"
                      placeholder="Name" 
                      value={formData.fullname}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-black bg-white"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      name="phone"
                      placeholder="Mobile" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-black bg-white"
                      required
                    />
                  </div>
                  
                  {/* Second row */}
                  <div>
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-black bg-white"
                      required
                    />
                  </div>
                  <div>
                    <input 
                      type="text" 
                      name="class"
                      placeholder="Class" 
                      value={formData.class}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-black bg-white"
                      required
                    />
                  </div>
                </div>
                
                {/* School/Institute - full width */}
                <div>
                  <input 
                    type="text" 
                    name="school"
                    placeholder="School/Institute" 
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-black bg-white"
                    required
                  />
                </div>
                
                {/* reCAPTCHA */}
                <div className="border border-gray-300 rounded-md p-4 flex items-center justify-between bg-gray-50">
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="recaptcha" 
                      className="h-5 w-5 border-gray-300 mr-2 focus:ring-0 cursor-pointer"
                      required
                    />
                    <label htmlFor="recaptcha" className="text-sm text-gray-700">I&apos;m not a robot</label>
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="w-12 h-12">
                      <img 
                        src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                        alt="reCAPTCHA logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">Privacy - Terms</div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-red-600 text-white py-3 px-4 rounded-md font-medium hover:bg-red-700 transition-colors"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Benefits;