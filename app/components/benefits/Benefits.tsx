"use client"

import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import emailjs from 'emailjs-com';
import { toast } from "react-toastify";
import Image from "next/image";


const Benefits = () => {
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const targetElement = statsRef.current; // Store the current value of the ref
  
    if (!targetElement) return; // Ensure it's not null
  
    const observer = new IntersectionObserver(
      (entries) => {
        setIsStatsVisible(entries[0].isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of the element is visible
    );
  
    observer.observe(targetElement);
  
    // Cleanup function using the stored reference
    return () => {
      observer.unobserve(targetElement);
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
      icon: '/whystudyhybridcoaching.png',
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
  className="rounded-md p-3 sm:p-4 relative mx-auto mb-8 w-[90%] sm:w-[80%] md:w-[70%]"
  style={{
    background: "radial-gradient(circle, #4E211B 0%, #3A1511 50%, #321310 100%)"
  }}
>
  <div className="flex items-center justify-between px-2 w-full mx-auto">
    
    {/* Left Side (Heading & Button) */}
    <div className="flex flex-col items-start text-left w-[65%] sm:w-[60%] py-2">
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold leading-tight">
        <span className="text-[#F55D3E] italic font-medium block sm:inline">Register</span> 
        <span className="text-white block sm:inline"> and Get</span>
        <span className="text-white block sm:inline"> a Free Trial</span>
      </h2>
      <button className="mt-2 px-3 sm:px-4 py-1 sm:py-2 bg-[#F55D3E] text-white rounded text-xs sm:text-sm font-medium hover:bg-[#E04D2E] flex items-center gap-1" 
      onClick={openModal}>
        JOIN NOW
        <svg className="w-3 h-3 sm:w-4 sm:h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>

    {/* Right Side (Mascot Image) */}
    <div className="w-16 h-24 sm:w-20 sm:h-28 md:w-24 md:h-32 lg:w-28 lg:h-36 ml-2 sm:ml-4 mr-[-5px] sm:mr-[-10px] md:mr-[-15px]"> 
    <Image
  src="/charater2.png"
  alt="Prep Academy Mascot"
  width={200}  // Adjust width as needed
  height={200} // Adjust height as needed
  className="object-contain w-full h-full"
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
<Image 
  src={card.icon} 
  alt={card.title} 
  width={48}  // w-12 = 48px
  height={48} // h-12 = 48px
  className="mb-4"
/>

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
      <div className="bg-white rounded-lg w-11/12 md:w-4/5 max-w-4xl relative overflow-hidden">
        {/* Close button */}
        <button 
          onClick={closeModal} 
          className="absolute top-4 right-4 text-gray-700 hover:text-black z-10"
          aria-label="Close"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
        
        {/* Two-column layout */}
        <div className="flex flex-col md:flex-row h-full">
          {/* Left section - Title and Image */}
          <div className="bg-[#2B1615] p-6 md:w-2/5 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Upgrade Your Learning With Us</h2>
            <div className="w-56 md:w-64 lg:w-80 mb-4">
            <Image 
  src="/commonformmascot.png" 
  alt="Learning Mascot" 
  width={300}  // Set width (adjust as needed)
  height={200} // Set height (adjust as needed)
  className="w-full h-auto max-w-full"
/>
  </div>
          </div>
          
          {/* Right section - Form */}
          <div className="p-6 md:w-3/5">
            <h3 className="text-center text-xl font-medium text-gray-800 mb-6">Fast Track Your Trial Class</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name field */}
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input 
                  type="text" 
                  id="fullname"
                  name="fullname"
                  placeholder="Your Name" 
                  value={formData.fullname}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                  required
                />
              </div>
              
              {/* Country field */}
              {/* <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                <select 
                  id="country"
                  name="country"
                  value={formData.country || ""}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                  required
                >
                  <option value="" disabled>-- Select Country --</option>
                  <option value="india">India</option>
                  <option value="usa">USA</option>
                  <option value="uk">UK</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                </select>
              </div> */}
              
              {/* Email field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  placeholder="Enter Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">Class</label>
                <input 
                  type="text" 
                  id="class"
                  name="class"
                  placeholder="Your class" 
                  value={formData.class}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                  required
                />
              </div>

            
              
              {/* Phone Number field with country code */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="flex">
                  <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-md px-3">
                  <Image 
  src="/gladiators/formcommonindia.png" 
  alt="IN" 
  width={16}  // w-4 = 16px
  height={16} // h-4 = 16px
  className="mr-1"
/>

                    <span className="text-gray-700">+91</span>
                  </div>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number" 
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
              </div>
              
              {/* WhatsApp Number field with country code */}
              {/* <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">School/Institute </label>
                <div className="flex">
                  <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-md px-3">
                  </div>
                  <input 
                    type="text" 
                    id="school"
                    name="school"
                    placeholder="Your school" 
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
              </div> */}
                 <div>
                <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-1">School/Institute</label>
                <input 
                  type="text" 
                  id="school"
                  name="school"
                  placeholder="Your School/Institute" 
                  value={formData.class}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                  required
                />
              </div>


              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full bg-[#F55D3E] text-white py-3 px-4 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
              >
                Submit
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
      )}
    </div>
  );
};

export default Benefits;