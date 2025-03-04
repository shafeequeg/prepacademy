"use client"

import Link from 'next/link';
import React, { useState , ChangeEvent } from 'react';
import emailjs from 'emailjs-com'; // Import EmailJS
import { toast } from "react-toastify";

interface CourseDataType {
  [key: string]: string;
}


const PopularCourses = () => {
  const [activeCourse, setActiveCourse] = useState('MBA');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const courses = [
    'MBA', 'NID', 'NIFT', 'NATA', 'CLAT', 'KLEE', 'CUET', 'SAT', 'NDA'
  ];

  const courseData: CourseDataType = {
    MBA: `The Master of Business Administration (MBA) is a highly sought-after qualification, with entrance exams in India being extremely competitive. These exams serve as gateways to prestigious B-Schools across the country and internationally. Popular exams include CAT, XAT, CMAT,
     and GMAT, with the CAT being especially challenging due to limited seats and a vast pool of applicants.`,
    NID: "The National Institute of Design (NID) entrance exam is a crucial step for students aspiring for a career in design. The exam tests creativity, problem-solving, and design aptitude.",
    NIFT: "The National Institute of Fashion Technology (NIFT) entrance exam assesses students' aptitude in design, creativity, and fashion-related skills for admission to top fashion institutes.",
    NATA: "The National Aptitude Test in Architecture (NATA) is an entrance exam for students seeking admission to architecture programs in India, testing drawing and observation skills.",
    CLAT: "The Common Law Admission Test (CLAT) is the gateway to prestigious law universities in India. It assesses logical reasoning, legal aptitude, and English proficiency.",
    KLEE: "The Kerala Law Entrance Exam (KLEE) is conducted for admission to law colleges in Kerala, testing candidates' knowledge in legal aptitude, general English, and general knowledge.",
    CUET: "The Common University Entrance Test (CUET) is conducted for undergraduate admissions in central universities, covering subjects like mathematics, science, and general knowledge.",
    SAT: "The Scholastic Assessment Test (SAT) is a standardized test widely used for college admissions in the United States, assessing reading, writing, and mathematical skills.",
    NDA: "The National Defence Academy (NDA) entrance exam is conducted for candidates aspiring to join the Indian Army, Navy, and Air Force, testing mathematics, general knowledge, and aptitude."
  };

  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    class: '',
    school: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
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



console.log(formData);



  const features = [
    { image: "/aboutusverified.png", text: "Dynamic Live Sessions" },
    { image: "/aboutusverified.png", text: "1000+ Targeted Questions" },
    { image: "/aboutusverified.png", text: "20 Simulated Mock Tests" },
    { image: "/aboutusverified.png", text: "Personalized Learning Path" }
  ];
  
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 text-white">
      {/* Popular Courses Header */}
      {/* Popular Courses Header */}
      <div className="w-full bg-[#2B1615] px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-4xl font-bold mb-8">
          <span className="text-[#F55D3E] font-dmserif italic">Our Popular</span> Courses
        </h2>

        {/* Course Navigation */}
        <div className="flex flex-wrap gap-4 mb-8">
          {courses.map((course) => (
            <button
              key={course}
              className={`px-4 py-2 transition-colors ${activeCourse === course ? 'text-[#F55D3E] border-b-2 border-[#F55D3E]' : 'text-white hover:text-[#F55D3E]'}`}
              onClick={() => setActiveCourse(course)}
            >
              {course}
            </button>
          ))}
        </div>

        {/* Course Info Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-gray-300">{courseData[activeCourse]}</p>
            <div className="flex gap-4">
              <Link href={'/collegecourse'} >

              <button className="px-6 py-2 bg-[#F55D3E] hover:bg-[#a52a1a] rounded-md transition-colors">
                Apply Now
              </button>
              </Link>
             <Link href={'/collegecourse'}>
             <button className="px-6 py-2 border border-[#F55D3E] text-[#F55D3E] hover:bg-[#F55D3E] hover:text-white rounded-md transition-colors">
                Know More
              </button>
             </Link>
            
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-[#F55D3E] text-xl font-semibold">Exams and Criteria</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• The entrance exams vary depending on the course, with some being highly competitive.</li>
              <li>• Candidates must meet the eligibility criteria, such as educational qualifications and minimum scores.</li>
              <li>• Registration deadlines must be followed strictly to avoid disqualification.</li>
              <li>• Proper preparation with mock tests and study materials increases the chances of success.</li>
            </ul>
          </div>
        </div>

      {/* Team Section */}
      <div className="bg-gradient-to-r  rounded-lg mt-12 p-5 md:p-6 lg:p-8 relative flex justify-center items-center">
  
  {/* Single Image */}
  <img 
    src="/popularcourseteambanner.png"  // Replace with your actual image path
    alt="Expert Educators" 
    className="w-full h-auto max-w-full object-contain rounded-lg"
  />

</div>

</div>



<div className="w-3/4 mx-auto mt-12 grid md:grid-cols-[2fr_1fr]  rounded-lg overflow-hidden">
        {/* Left Section */}
        
        <div className="p-8 space-y-4 relative bg-[#2B1615] rounded-md">
          <button className="px-4 py-1 bg-[#3A1F1D] text-[#F55D3E] rounded-full text-sm">
            Get Early Access
          </button>
          <div className="space-y-2">
            <h2 className="text-4xl font-bold font-dmserif italic">
              <span className="text-[#F55D3E]">Looking For The Best</span>
              <br />Educational Academy
              <br />Near You?
            </h2>
          </div>
          {/* Add right border with gap effect */}
          <div className="absolute right-0 top-0 h-full w-[1px] bg-[#3A1F1D]"></div>
        </div>

        {/* Right Section - with gap */}
        <div className="bg-[#F55D3E] p-6 flex flex-col items-center justify-center rounded-md text-center relative ml-4">
          <h3 className="text-2xl font-bold mb-4 font-dmserif italic text-white">
            Join the
            <br />Summer
            <br />Bootcamp
          </h3>
          <div className="w-24 h-24 mb-4">
            <img
              src="/charater2.png"
              alt="Prep Academy Mascot"
              className="w-full h-full object-contain"
            />
          </div>
          <button onClick={openModal} className="px-6 py-2 bg-white text-[#F55D3E] rounded-full font-semibold hover:bg-gray-100 transition-colors flex items-center gap-2">
            JOIN NOW
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
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
                    <label htmlFor="recaptcha" className="text-sm text-gray-700">I'm not a robot</label>
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

export default PopularCourses;
