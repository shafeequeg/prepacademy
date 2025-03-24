"use client"

import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from 'emailjs-com'; // Import EmailJS
import Image from "next/image";

// Custom SVG components
const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="text-yellow-400"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const SendIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-white"
  >
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const TestimonialsAndCTA = () => {
  const testimonials = [
    {
      name: "Rohit, NDA Topper",
      text: "The study strategy helped me speak areas that were previously I never thought I needed to top my exam. I'm ready to answer any",
      rating: 5
    },
    {
      name: "Aisha, CLAT Achiever",
      text: "My whole test prep uplifted. Revolutionary way to prepare, guide, and acquire mastery",
      rating: 5
    },
    {
      name: "Rohit, NDA Topper",
      text: "The strategy helped me speak areas that I previously never thought I needed to top my exam. I'm ready to answer any",
      rating: 5
    }
  ];

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [showIcons, setShowIcons] = useState(true);
   const [lastScrollY, setLastScrollY] = useState(0);
  
    const [formData, setFormData] = useState({
      fullname: '',
      phone: '',
      email: '',
      class: '',
      school: '',
    });
  console.log(showIcons);
  
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      console.log(`Input changed: ${name} = ${value}`); // Debugging log
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

   useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY < lastScrollY) {
          setShowIcons(true);
        } else if (window.scrollY > 100) {
          setShowIcons(false);
        }
        setLastScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);
  
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

  return (
    <div className="bg-[#0F0F0F] min-h-screen p-8">
      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-[#FF5733] font-dmserif italic">Real Talks</span>{" "}
          <span className="text-white">From Our</span>{" "}
          <span className="text-white block mt-2">Students</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] rounded-lg p-6 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-600 rounded-full" />
                <span className="text-white font-medium">{testimonial.name}</span>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-full mx-auto p-4">
      <div className="bg-[#2A1810] rounded-xl p-4 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section */}
        <div className="w-full md:w-[85%] rounded-xl p-4 lg:p-10 mx-auto" 
     style={{ background: 'linear-gradient(to bottom, rgba(205, 93, 62, 0.5), rgba(143, 54, 36, 0.5))' }}>
  
  <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
    
    {/* Text Content */}
    <div className="w-full max-w-[60%] p-4">
      <h2 className="text-2xl lg:text-3xl font-bold">
        <span className="text-[#FF5733] font-dmserif italic">Serious About Your Exam?</span>
        <span className="text-white block mt-2">Let&apos;s Make It Happen</span>
      </h2>

      <button className="bg-[#FF5733] text-white
       px-4 lg:px-6 py-2 lg:py-3 rounded-lg flex items-center gap-2 hover:bg-[#E64A2E] transition-colors mt-4"
        onClick={openModal}

      >
        Click to start your journey
        <span className="text-lg">→</span>
      </button>
    </div>
    
    {/* Image Container */}
    <div className="w-28 md:w-36 lg:w-48 aspect-square flex-shrink-0">
    <Image 
  src="/charater2.png" 
  alt="Mascot" 
  width={500} // Adjust as needed
  height={500} // Adjust as needed
  className="w-full h-full object-contain"
/>
    </div>

  </div>
</div>


        {/* Right Section */}
        <div className="w-full md:w-[25%] p-2 lg:p-5">
          <div 
            className="p-4 lg:p-8 rounded-lg text-center shadow-lg min-h-[200px] lg:min-h-[270px] flex flex-col justify-center"
            style={{ background: 'linear-gradient(to bottom, rgba(205, 93, 62, 0.5), rgba(143, 54, 36, 0.5))' }}
          >
            <div className="mx-auto mb-3 w-6 lg:w-8 h-6 lg:h-8">
              <SendIcon />
            </div>
            <span className="text-white text-sm block font-semibold">
              Join the Revolution
            </span>
            <button className="mt-3 text-xs bg-[#F55D3E] text-white px-4 lg:px-5 py-2 rounded hover:bg-[#5A473D] transition">
              Join Telegram Group
            </button>
          </div>
        </div>

      </div>
    </div>



     {isModalOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-lg w-11/12 md:w-4/5 max-w-4xl relative overflow-hidden max-h-[90vh] md:max-h-none overflow-y-auto">
          {/* Close button */}
          <button 
            onClick={closeModal} 
            className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-700 hover:text-black z-10"
            aria-label="Close"
          >
            <svg width="16" height="16" className="md:w-5 md:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          
          {/* Responsive layout - stack on mobile, side-by-side on larger screens */}
          <div className="flex flex-col md:flex-row h-full">
            {/* Left section - Title and Image */}
            <div className="bg-[#2B1615] p-3 md:p-6 md:w-2/5 flex flex-col items-center justify-center text-white">
              <h2 className="text-xl md:text-3xl font-bold mb-2 md:mb-6 text-center">Upgrade Your Learning With Us</h2>
              <div className="w-24 h-24 md:w-64 md:h-auto lg:w-80 mb-2 md:mb-4">
                <Image 
                  src="/commonformmascot.png" 
                  alt="Learning Mascot" 
                  width={300}
                  height={200}
                  className="w-full h-full object-contain max-w-full"
                />
              </div>
            </div>
            
            {/* Right section - Form */}
            <div className="p-3 md:p-6 md:w-3/5">
              <h3 className="text-center text-lg md:text-xl font-medium text-gray-800 mb-3 md:mb-6">Fast Track Your Trial Class</h3>
              <form className="space-y-2 md:space-y-4" onSubmit={handleSubmit}>
                {/* Name field */}
                <div>
                  <label htmlFor="fullname" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="fullname"
                    name="fullname"
                    placeholder="Your Name" 
                    value={formData.fullname}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
                
                {/* Email field */}
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    placeholder="Enter Your Email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="class" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Class</label>
                  <input 
                    type="text" 
                    id="class"
                    name="class"
                    placeholder="Your class" 
                    value={formData.class}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
                
                {/* Phone Number field with country code */}
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <div className="flex">
                    <div className="flex items-center bg-gray-100 border border-gray-300 rounded-l-md px-2 md:px-3">
                      <Image 
                        src="/gladiators/formcommonindia.png" 
                        alt="IN" 
                        width={12}
                        height={12}
                        className="mr-1 md:w-4 md:h-4"
                      />
                      <span className="text-xs md:text-sm text-gray-700">+91</span>
                    </div>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      placeholder="Your Phone Number" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full p-2 md:p-3 border border-gray-300 border-l-0 rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="school" className="block text-xs md:text-sm font-medium text-gray-700 mb-1">School/Institute</label>
                  <input 
                    type="text" 
                    id="school"
                    name="school"
                    placeholder="Your School/Institute" 
                    value={formData.school}
                    onChange={handleInputChange}
                    className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F55D3E] focus:border-transparent text-black bg-white"
                    required
                  />
                </div>
    
                {/* Submit Button */}
                <button 
                  type="submit" 
                  className="w-full bg-[#F55D3E] text-white py-2 md:py-3 px-4 rounded-md font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center"
                >
                  Submit
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
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

export default TestimonialsAndCTA;