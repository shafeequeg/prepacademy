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
  const [activeTab, setActiveTab] = useState(1);

  const courses = [
    'MBA', 'NID', 'NIFT', 'NATA', 'CLAT', 'KLEE', 'CUET', 'SAT', 'NDA'
  ];

  console.log(activeTab);
  
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



  // const features = [
  //   { image: "/aboutusverified.png", text: "Dynamic Live Sessions" },
  //   { image: "/aboutusverified.png", text: "1000+ Targeted Questions" },
  //   { image: "/aboutusverified.png", text: "20 Simulated Mock Tests" },
  //   { image: "/aboutusverified.png", text: "Personalized Learning Path" }
  // ];
  
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
              Know More
              </button>
              </Link>
             {/* <Link href={'/collegecourse'}>
             <button className="px-6 py-2 border border-[#F55D3E] text-[#F55D3E] hover:bg-[#F55D3E] hover:text-white rounded-md transition-colors">
                Know More
              </button>
             </Link> */}
            
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

<section className="bg-[#1A0E0E] py-12 mt-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8 text-white">Notifications</h2>
        
        {/* Tab Navigation */}
        <div className="flex mb-8 overflow-x-auto pb-2 border-b border-gray-800">
          <button 
            className={`px-4 py-3 font-medium text-base sm:text-lg mr-4 focus:outline-none relative ${
              activeTab === 1 
                ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]" 
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Community
          </button>
          <button 
            className={`px-4 py-3 font-medium text-base sm:text-lg mr-4 focus:outline-none relative ${
              activeTab === 2 
                ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]" 
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab(2)}
          >
            Counselling
          </button>
          <button 
            className={`px-4 py-3 font-medium text-base sm:text-lg mr-4 focus:outline-none relative ${
              activeTab === 3 
                ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]" 
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab(3)}
          >
            Resources
          </button>
          <button 
            className={`px-4 py-3 font-medium text-base sm:text-lg focus:outline-none relative ${
              activeTab === 4 
                ? "text-white after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[2px] after:bg-[#F55D3E]" 
                : "text-gray-400 hover:text-gray-300"
            }`}
            onClick={() => setActiveTab(4)}
          >
            Updates
          </button>
        </div>

        {/* Tab Content - Only show content for the active tab */}
        {activeTab === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left column - Community section */}
            <div className="bg-[#140A0A] rounded-lg p-6">
              <h3 className="text-xl font-medium text-white mb-4">Help us building Largest  Communities</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#220F0F] rounded-lg p-4 flex items-center justify-center gap-x-48 col-span-1 sm:col-span-2">
  {/* Left Side - Join Now Button */}
  <a href="https://www.facebook.com/prepacademy.in" className="text-white font-medium hover:text-[#F55D3E]">
    Join Now
  </a>

  {/* Right Side - Icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    fill="currentColor"
    className="w-8 h-8 text-[#C69881]"
  >
    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
  </svg>
</div>



                <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                   
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
                      <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                    </svg>
                  </div>
                  <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
                </div>
                
                <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                    </svg>
                  </div>
                  <a href="https://www.instagram.com/prepacademy.in/" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
                </div>
                
                <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8">
                      <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                    </svg>
                  </div>
                  <a href="https://www.youtube.com/@PrepAcademy" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
                </div>
                
                <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                    </svg>
                  </div>
                  <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
                </div>
                
               
              </div>
            </div>
            
            {/* Right column - Form */}
            <div className="bg-[#140A0A] rounded-lg p-6">
              <h3 className="text-xl font-medium text-white mb-6">Book 1 on 1 Counselling from  Experts</h3>
              
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">NAME</label>
                    <input 
                      type="text" 
                      placeholder="Enter your name" 
                      className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">NUMBER</label>
                    <input 
                      type="text" 
                      placeholder="Enter your number" 
                      className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                    />
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-white text-sm font-medium mb-2">EMAIL</label>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                  />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">COURSE</label>
                    <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                      <option>Select Course</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">TARGET YEAR</label>
                    <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                      <option>Select Target year</option>
                    </select>
                  </div>
                </div>
                
                <div className="mb-6">
                  <label className="block text-white text-sm font-medium mb-2">TIME SLOT</label>
                  <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                    <option>Select Time slot</option>
                  </select>
                </div>
                
                <button type="submit" className="flex items-center justify-between bg-gradient-to-r from-[#F55D3E] to-[#E85D3E] text-white font-medium rounded-md px-5 py-3 hover:opacity-90 transition-opacity w-full">
                  <span>SUBMIT</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>
        )}
        
        {/* Placeholder content for other tabs */}
        {activeTab === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Community section */}
          <div className="bg-[#140A0A] rounded-lg p-6">
            <h3 className="text-xl font-medium text-white mb-4">Counselling</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#220F0F] rounded-lg p-4 flex items-center justify-center gap-x-48 col-span-1 sm:col-span-2">
{/* Left Side - Join Now Button */}
<a href="#" className="text-white font-medium hover:text-[#F55D3E]">
  Join Now
</a>

{/* Right Side - Icon */}
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 320 512"
  fill="currentColor"
  className="w-8 h-8 text-[#C69881]"
>
  <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
</svg>
</div>



              <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                  </svg>
                </div>
                <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
              </div>
              
              <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </div>
                <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
              </div>
              
              <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                </div>
                <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
              </div>
              
              <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
              </div>
              
             
            </div>
          </div>
          
          {/* Right column - Form */}
          <div className="bg-[#140A0A] rounded-lg p-6">
            <h3 className="text-xl font-medium text-white mb-6">Counselling</h3>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">NAME</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">NUMBER</label>
                  <input 
                    type="text" 
                    placeholder="Enter your number" 
                    className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">EMAIL</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">COURSE</label>
                  <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                    <option>Select Course</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">TARGET YEAR</label>
                  <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                    <option>Select Target year</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">TIME SLOT</label>
                <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                  <option>Select Time slot</option>
                </select>
              </div>
              
              <button type="submit" className="flex items-center justify-between bg-gradient-to-r from-[#F55D3E] to-[#E85D3E] text-white font-medium rounded-md px-5 py-3 hover:opacity-90 transition-opacity w-full">
                <span>SUBMIT</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        )}
        
        {activeTab === 3 && (
         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         {/* Left column - Community section */}
         <div className="bg-[#140A0A] rounded-lg p-6">
           <h3 className="text-xl font-medium text-white mb-4">Resources</h3>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
           <div className="bg-[#220F0F] rounded-lg p-4 flex items-center justify-center gap-x-48 col-span-1 sm:col-span-2">
{/* Left Side - Join Now Button */}
<a href="#" className="text-white font-medium hover:text-[#F55D3E]">
 Join Now
</a>

{/* Right Side - Icon */}
<svg
 xmlns="http://www.w3.org/2000/svg"
 viewBox="0 0 320 512"
 fill="currentColor"
 className="w-8 h-8 text-[#C69881]"
>
 <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
</svg>
</div>



             <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
               <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
                   <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                 </svg>
               </div>
               <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
             </div>
             
             <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
               <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                   <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                 </svg>
               </div>
               <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
             </div>
             
             <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
               <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8">
                   <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                 </svg>
               </div>
               <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
             </div>
             
             <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
               <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                   <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                 </svg>
               </div>
               <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
             </div>
             
            
           </div>
         </div>
         
         {/* Right column - Form */}
         <div className="bg-[#140A0A] rounded-lg p-6">
           <h3 className="text-xl font-medium text-white mb-6">Resources</h3>
           
           <form>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
               <div>
                 <label className="block text-white text-sm font-medium mb-2">NAME</label>
                 <input 
                   type="text" 
                   placeholder="Enter your name" 
                   className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                 />
               </div>
               
               <div>
                 <label className="block text-white text-sm font-medium mb-2">NUMBER</label>
                 <input 
                   type="text" 
                   placeholder="Enter your number" 
                   className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                 />
               </div>
             </div>
             
             <div className="mb-4">
               <label className="block text-white text-sm font-medium mb-2">EMAIL</label>
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
               />
             </div>
             
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
               <div>
                 <label className="block text-white text-sm font-medium mb-2">COURSE</label>
                 <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                   <option>Select Course</option>
                 </select>
               </div>
               
               <div>
                 <label className="block text-white text-sm font-medium mb-2">TARGET YEAR</label>
                 <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                   <option>Select Target year</option>
                 </select>
               </div>
             </div>
             
             <div className="mb-6">
               <label className="block text-white text-sm font-medium mb-2">TIME SLOT</label>
               <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                 <option>Select Time slot</option>
               </select>
             </div>
             
             <button type="submit" className="flex items-center justify-between bg-gradient-to-r from-[#F55D3E] to-[#E85D3E] text-white font-medium rounded-md px-5 py-3 hover:opacity-90 transition-opacity w-full">
               <span>SUBMIT</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                 <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
               </svg>
             </button>
           </form>
         </div>
       </div>
        )}
        
        {activeTab === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Community section */}
          <div className="bg-[#140A0A] rounded-lg p-6">
            <h3 className="text-xl font-medium text-white mb-4">Updates</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#220F0F] rounded-lg p-4 flex items-center justify-center gap-x-48 col-span-1 sm:col-span-2">
      {/* Left Side - Join Now Button */}
       <a href="#" className="text-white font-medium hover:text-[#F55D3E]">
         Join Now
       </a>

      {/* Right Side - Icon */}
     <svg
       xmlns="http://www.w3.org/2000/svg"
       viewBox="0 0 320 512"
       fill="currentColor"
       className="w-8 h-8 text-[#C69881]"
     >
       <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
     </svg>
     </div>



              <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8">
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
                  </svg>
                </div>
                <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
              </div>
              
              <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                  </svg>
                </div>
                <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
              </div>
              
              <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" className="w-8 h-8">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                </div>
                <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
              </div>
              
              <div className="bg-[#220F0F] rounded-lg p-5 flex flex-col items-center justify-center">
                <div className="w-12 h-12 flex items-center justify-center text-[#C69881] mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8">
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                  </svg>
                </div>
                <a href="#" className="text-white font-medium hover:text-[#F55D3E]">Join Now</a>
              </div>
              
             
            </div>
          </div>
          
          {/* Right column - Form */}
          <div className="bg-[#140A0A] rounded-lg p-6">
            <h3 className="text-xl font-medium text-white mb-6">Updates</h3>
            
            <form>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">NAME</label>
                  <input 
                    type="text" 
                    placeholder="Enter your name" 
                    className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">NUMBER</label>
                  <input 
                    type="text" 
                    placeholder="Enter your number" 
                    className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-white text-sm font-medium mb-2">EMAIL</label>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#F55D3E]"
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">COURSE</label>
                  <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                    <option>Select Course</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-medium mb-2">TARGET YEAR</label>
                  <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                    <option>Select Target year</option>
                  </select>
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-white text-sm font-medium mb-2">TIME SLOT</label>
                <select className="w-full bg-[#220F0F] border border-gray-800 rounded-md px-4 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-[#F55D3E] appearance-none">
                  <option>Select Time slot</option>
                </select>
              </div>
              
              <button type="submit" className="flex items-center justify-between bg-gradient-to-r from-[#F55D3E] to-[#E85D3E] text-white font-medium rounded-md px-5 py-3 hover:opacity-90 transition-opacity w-full">
                <span>SUBMIT</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-4 h-4">
                  <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                </svg>
              </button>
            </form>
          </div>
        </div>
        )}
      </div>
    </section>

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

export default PopularCourses;
