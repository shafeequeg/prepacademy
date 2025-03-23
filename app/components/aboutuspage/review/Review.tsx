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
           <h2 className="text-center text-2xl font-bold mb-6">Fast Track Your Trial Class</h2>
           
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
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
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
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
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
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
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
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
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
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400"
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
                      <Image 
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

export default TestimonialsAndCTA;