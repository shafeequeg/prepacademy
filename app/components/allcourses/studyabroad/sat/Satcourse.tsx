// CatExamApplySection.tsx

"use client"

import React, { useEffect } from 'react';
// import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight  } from 'lucide-react';
import { useState } from "react";
import { toast } from 'react-toastify';
// import emailjs from 'emailjs-com'; // Import EmailJS
import { API_URLS } from '@/app/components/apiconfig/api_urls';
import axiosInstance from '@/app/components/apiconfig/axios';


// interface VideoCardProps {
//   title: string;
//   thumbnail: string;
// }

interface DemoVideoCardProps {
  title: string;
  videoId: string;
}

interface Program {
  id: string;
  name: string;
}

// const VideoCard: React.FC<VideoCardProps> = ({ title, thumbnail }) => {
//   return (
//     <div className="relative group overflow-hidden rounded-lg w-full">
//       <div className="relative w-full h-56 md:h-64 lg:h-72">
//         <Image
//           src={thumbnail}
//           alt={title}
//           fill
//           className="object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
//         />
//         {/* Play button overlay */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           <div className="bg-black bg-opacity-30 rounded-full p-3 flex items-center justify-center">
//             <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
//           </div>
//         </div>
//       </div>
//       <p className="text-lg md:text-xl text-gray-300 mb-6">
//       {title}</p>
//     </div>
//   );
// };

const DemoVideoCard: React.FC<DemoVideoCardProps> = ({ title, videoId }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="relative w-full h-56 md:h-64 lg:h-72">
        {/* YouTube Embed */}
        <iframe 
          className="w-full h-full rounded-lg"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* <p className="text-lg md:text-xl text-gray-300 mt-3">{title}</p> */}
    </div>
  );
};


const offeringTypes = [
  { id: "online", label: "Online Class" },
  { id: "Classroom", label: "Classroom" },
  { id: "test", label: "Test Series" },
  { id: "Bookmaterials", label: "Book Materials" },
  { id: "SelfBased", label: "Self Based" },

];

const courseCards = [
  {
    id: "cat-online-1",
    title: "Daily Class ",
    image: "/catdailyclass.jpeg",
    type: "online",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },
  {
    id: "cat-online-2",
    title: "Night Class",
    image: "/catnightclass.jpeg",
    type: "online",
    features: [
      "Live doubt-solving sessions",
      "Advanced problem-solving techniques",
      "Mock test series with AI analysis",
      "Best for repeat CAT takers",
    ],
  },
  {
    id: "cat-online-3",
    title: "Weekend Class",
    image: "/catweekendclass.jpeg",
    type: "online",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },
  {
    id: "cat-Classroom-1",
    title: " Day Classes",
    image: "/news1.png",
    type: "Classroom",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Authentic Learning Experiences",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },
  {
    id: "cat-Classroom-2",
    title: " Night Classes",
    image: "/news1.png",
    type: "Classroom",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Authentic Learning Experiences",
      "Live & interactive sessions",
      "Live doubt-solving sessions",
    ],
  },

  {
    id: "cat-Classroom-3",
    title: " Weekend Classes",
    image: "/news1.png",
    type: "Classroom",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Authentic Learning Experiences",
      "Live & interactive sessions",
      "Live doubt-solving sessions"
    ],
  },

  {
    id: "cat-test-1",
    title: " Mock Test Only ",
    image: "/news1.png",
    type: "test",
    features: [
      "enhance exam preparation skill",
      "10 Mocks test available",
      "Personal mentoring",
      "GDPI assistance",
    ],
  },

  {
    id: "cat-test-2",
    title: " Test Series+ Mock:",
    image: "/news1.png",
    type: "test",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Test Series",
      "Mock Test",
    ],
  },

  {
    id: "cat-test-3",
    title: " Mock +Test Series + Book Materials)",
    image: "/news1.png",
    type: "test",
    features: [
      "Personal mentoring",
      "GDPI assistance",
      "Test Series",
      "Mock Test",
      "Book Materials "
    ],
  },

  {
    id: "cat-Bookmaterials-1",
    title: " Book Materials Only ",
    image: "/news1.png",
    type: "Bookmaterials",
    features: [
      "Complete Book Materils",
     
    ],
  },

  {
    id: "cat-Bookmaterials-2",
    title: " Test Series+ Mock Test + Book materials",
    image: "/news1.png",
    type: "Bookmaterials",
    features: [
      "Complete Book Materils",
      "Mock Tests",
      "Test Series",
    ],
  },

  {
    id: "cat-SelfBased-1",
    title: " Self Based",
    image: "/news1.png",
    type: "SelfBased",
    features: [
      "Video lectures",
      "Mock Test",
      "Book Materials",
    ],
  },

];






const CatExamApplySection: React.FC = () => {


//   const [showIcons, setShowIcons] = useState(true);
// const [lastScrollY, setLastScrollY] = useState(0);
// const [isModalOpen, setIsModalOpen] = useState(false);
  
const [formData, setFormData] = useState({
  full_name: '',
  mobile_number: '',
  email: '',
  college_studied:'',
  preferred_program: '',
  submitted_at:'',
});

const [programs, setPrograms] = useState<Program[]>([]); // State to store fetched programs

const handleInputChange = (
e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const fetchPrograms = async () => {
try {
const response = await axiosInstance.get(API_URLS.ALLCOURSE.GET_COURSE); // Replace with your API endpoint
setPrograms(response.data); // Assuming the response is an array of programs
} catch (error) {
console.error("Failed to fetch programs:", error);
// toast.error("Failed to fetch programs. Please try again.");
}
};

useEffect(() => {
fetchPrograms();
}, []);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
e.preventDefault();

try {
const response = await axiosInstance.post(API_URLS.ALLCOURSE.POST_COURSE, {
...formData,
preferred_program: formData.preferred_program, // Ensure this is the ID of the selected program
});

if (response.status >= 200 && response.status < 300) {
console.log("Message sent successfully!", response.data);
toast.success("Your message has been sent successfully!");

// Reset form fields
setFormData({
full_name: "",
mobile_number: "",
email: "",
college_studied: "",
preferred_program: "",
submitted_at: "",
});
} else {
console.error("Unexpected status code:", response.status);
toast.error("Failed to send the message. Please try again.");
}
} catch (error) {
console.error("Failed to send message:", error);
toast.error("Failed to send the message. Please try again.");
}
};
    // const openModal = () => setIsModalOpen(true);
    // const closeModal = () => setIsModalOpen(false);

  // const videoCards = [
  //   {
  //     title: "Explore About Courses",
  //     thumbnail: "/news1.png",
  //   },
  //   {
  //     title: "Explore About Courses",
  //     thumbnail: "/new2.png",
  //   },
  //   {
  //     title: "Explore About Courses",
  //     thumbnail: "/news3.png",
  //   },
  // ];


 

  const relatedVideos = [
    {
      title: "Preparing for the SAT 2025",
      videoId: "JNJOTlz8C2Y", // Remove "&t=2s"
    },
    {
      title: "Strategies for SAT 2025",
      videoId: "Kjjeb1v50C0", // Remove "&t=11s"
    },
    {
      title: "Best Coaching Centers",
      videoId: "4g7cyj774_M", // Remove "&t=26s"
    }
  ];

  
  const demoVideos = [
    {
      title: "Preparing for the SAT 2025",
      videoId: "XhXxA_AA3IQ", // Remove "&t=2s"
    },
    {
      title: "Strategies for SAT 2025",
      videoId: "b2y5qz04RKk", // Remove "&t=11s"
    },
    {
      title: "Best Coaching Centers",
      videoId: "WaYzGw6qnQ8", // Remove "&t=26s"
    }
  ];
  
  

  const [activeTab, setActiveTab] = useState("online");

  const filteredCourses = courseCards.filter((course) => course.type === activeTab);

  return (
    <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
  {/* Background Image Between Sections */}
  {/* Main Content */}
  <div className="relative w-full z-10">
    {/* Apply Section with Mascot */}
    <div 
      className="relative w-full bg-gradient-to-r p- from-[#0A1015] to-[#121820] text-white py-12 bg-center bg-no-repeat bg-cover "
    >
      <div className="w-full px-4 mt-24">
        <div className="flex flex-col lg:flex-row gap-16 relative max-w-7xl mx-auto">
          {/* Left Content */}
          <div className="lg:w-[35%]">
            <div className="mb-6">
              {/* <p className="text-[#FF6B3D] text-sm font-medium px-3 py-1 bg-[#1A2836] inline-block rounded-md mb-4">
                Learn from the Experts
              </p> */}
              <h2 className="text-[#FF6B3D] text-4xl font-bold mb-4">Crack SAT 2025 with
                 {/* Prep Academy  */}
                 <span className='text-[#ED1C24] ml-2'>Prep</span><span className='text-[#15938F]'>Academy</span>
                 </h2>
              <p className="text-gray-300 mb-8">
              The SAT is a standardized test widely used for college admissions in the United States. SAT is conducted multiple times each year, providing students with several opportunities to take the test.                          </p>
            </div>

            {/* Progress Items */}
            <div className="space-y-3 mb-8">
  <div className="flex items-center">
    <img 
      src="/aboutusverified.png" 
      alt="Check Icon" 
      className="w-5 h-5 mr-3"
    />
    <p className="text-white">	Expert Faculty & Personalized Mentorship </p>
  </div>
  <div className="flex items-center">
    <img 
      src="/aboutusverified.png" 
      alt="Check Icon" 
      className="w-5 h-5 mr-3"
    />
    <p className="text-white">Comprehensive SAT Online /Offline Course </p>
  </div>
</div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md font-medium transition-colors">
                Enroll Now
              </button>
              <button className="border border-[#FF6B3D] text-[#FF6B3D] py-3 px-6 rounded-md font-medium hover:bg-[#FF6B3D] hover:text-white transition-colors">
                Get a FREE Trial
              </button>
            </div>

            {/* Telegram Link with Underline */}
            <div className="mt-4">
  <a 
    href="#" 
    className="flex items-center text-gray-300 hover:text-[#FF6B3D] text-sm border-b border-transparent hover:border-[#FF6B3D] transition duration-300"
      >
        <img 
          src="/catexamtelegram.png" 
          alt="Telegram Icon" 
          className="w-5 h-5 mr-2"
        />
        Join Our Telegram Channel
      </a>
    </div>

          </div>

          {/* Middle section with character background */}
          <div className="hidden lg:block lg:w-[20%] relative">
            <div 
              className="absolute inset-0 bg-contain bg-no-repeat bg-center"
              style={{ backgroundImage: "url('/charater2.png')" }}
            ></div>
          </div>

          {/* Right Content - Form */}
          <div className="lg:w-[45%] flex flex-col">
            <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
              <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">NEED ASSISTANCE?</h3>
              <p className="text-white mb-6">Get guidance and clear your doubts</p>
              
              {/* Form Fields */}
              <form onSubmit={handleSubmit}>
      <div className="space-y-4 mb-6">
        <input
          type="text"
          name="full_name"
          placeholder="Enter your Full Name"
          value={formData.full_name}
          onChange={handleInputChange}
          className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
          required
        />
        <input
          type="tel"
          name="mobile_number"
          placeholder="Mobile Number"
          value={formData.mobile_number}
          onChange={handleInputChange}
          className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleInputChange}
          className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
          required
        />
        <input
          type="text"
          name="college_studied"
          placeholder="College Studied"
          value={formData.college_studied}
          onChange={handleInputChange}
          className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
          required
        />
        <div className="relative">
          <select
            name="preferred_program"
            value={formData.preferred_program}
            onChange={handleInputChange}
            className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white appearance-none"
            required
          >
            <option value="" disabled>
              Preferred Online Program
            </option>
            {programs.map((program) => (
              <option key={program.id} value={program.id}>
                {program.name}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg
              width="14"
              height="8"
              viewBox="0 0 14 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L13 1"
                stroke="#FF6B3D"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md w-full font-medium transition-colors"
      >
        Submit
      </button>
    </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Related Videos Section */}
    <div className="bg-black text-white flex justify-center">
  {/* Related Videos Section */}
  <div className="px-6 py-10 max-w-7xl w-full">
    <h2 className="text-4xl font-semibold text-left mb-6 ml-2">
      <span className="font-serif italic font-normal">Related</span>{" "}
      <span className="text-[#F55D3E] font-semibold">Videos</span>
    </h2>

    {/* Make videos full width */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {relatedVideos.map((video, index) => (
      <DemoVideoCard key={index} title={video.title} videoId={video.videoId} />
    ))}
  </div>

  <div className="flex justify-center">
    <Link href="https://www.youtube.com/@PrepAcademy" target="_blank" rel="noopener noreferrer" className="text-[#F55D3E] flex items-center hover:underline">
      <span className='text-lg md:text-xl text-[#F55D3E]'>View More</span>
      <ChevronRight size={16} />
    </Link>
  </div>
  </div>
</div>


  </div>

  <div className="relative w-full bg-gradient-to-r from-[#121010] to-[#1A1311] text-white">
    {/* Offerings Section */}
    <div className="bg-[#1A0E0E] py-16">
  <div className="max-w-6xl mx-auto px-4">
    {/* Section Title */}
    <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
      <span className="text-[#F55D3E] font-serif italic">Our</span>{" "}
      <span className="text-white">Offerings</span>
    </h2>

    {/* Tab Navigation - Made responsive */}
    <div className="flex justify-center mb-12 overflow-x-auto pb-2 w-full">
      <div className="inline-flex border-b border-[#2A1A1A] flex-nowrap min-w-0">
        {offeringTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setActiveTab(type.id)}
            className={`px-3 sm:px-5 md:px-8 py-2 text-base sm:text-lg md:text-xl whitespace-nowrap transition-colors relative ${
              activeTab === type.id
                ? "text-[#F55D3E] border-b-2 border-[#F55D3E]"
                : "text-gray-500 hover:text-gray-400"
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>
    </div>

    {/* Course Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((card) => (
          <div key={card.id} className="bg-[#220F0F] rounded-lg overflow-hidden">
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-white text-lg font-medium mb-4">{card.title}</h3>
              <ul className="space-y-2 mb-6">
                {card.features.map((feature, idx) => (
                  <li key={idx} className="flex text-gray-300 text-sm">
                    <span className="text-[#F55D3E] mr-2">•</span>
                    <span className="text-base md:text-lg text-gray-300 mb-6">{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex items-center text-[#F55D3E] text-lg hover:underline">
                Enroll Now <ChevronRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-400 col-span-full">No courses available for this category.</p>
      )}
    </div>
  </div>
</div>

    {/* Mascot Banner Section */}
    <div className="bg-black py-8">
  <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-5 gap-4">
    {/* First CTA Section (Compact Width) */}
    <div className="lg:col-span-4 rounded-lg overflow-hidden bg-[#1D1514] relative flex flex-col justify-center items-center p-6 md:p-10 ml-24"> 
      <div 
        className="absolute top-0 left-0 right-0 h-1" 
        style={{
          background: 'linear-gradient(90deg, #F55D3E 0%, #F55D3E 50%, transparent 100%)'
        }}
      ></div>
      
      <div className="flex flex-col md:flex-row items-center justify-center w-full">
        <div className="relative z-10 text-center md:text-left">
          <h1 className="text-[#F55D3E] font-serif italic text-2xl md:text-3xl lg:text-4xl mb-2">
            Serious About Your Exam?
          </h1>
          <h2 className="text-white text-2xl md:text-3xl font-medium mb-6">
            Let&apos;s Make It Happen
          </h2>
          <a 
            href="#" 
            className="inline-block bg-[#F55D3E] text-white text-sm py-2 px-6 rounded hover:bg-opacity-90 transition-colors"
          >
            Apply for DEMO Class →
          </a>
        </div>

        <div className="mx-auto my-auto">
          <img
            src="/charater2.png"
            alt="Prep Mascot"
            className="h-40 md:h-48"
          />
        </div>
      </div>
    </div>

    {/* Second CTA Section (Slightly Wider) */}
    <div className="lg:col-span-1.5 rounded-lg overflow-hidden bg-[#1F1414] relative flex flex-col justify-center items-center">
      <div 
        className="absolute top-0 left-0 right-0 h-1" 
        style={{
          background: 'linear-gradient(90deg, #F55D3E 0%, #F55D3E 50%, transparent 100%)'
        }}
      ></div>
      
      <div className="p-8 flex flex-col items-center justify-center h-full">
        <div className="flex items-center justify-center mb-4 text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <h3 className="text-white text-center text-lg font-medium mb-5">CAT Master Class</h3>
        <a 
          href="#" 
          className="inline-block bg-[#F55D3E] text-white text-sm py-2 px-6 rounded hover:bg-[#F55D3E] hover:text-white transition-colors"
        >
          Book Free TRIAL
        </a>
      </div>
    </div>
  </div>
</div>



    {/* Demo Videos Section */}
    <div className="container mx-auto px-4 py-10">
  <div className="flex justify-between items-center mb-8">
    <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
      <span className="text-white font-serif italic">Demo</span> 
      <span className="text-[#F55D3E]"> Videos</span>
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
    {demoVideos.map((video, index) => (
      <DemoVideoCard key={index} title={video.title} videoId={video.videoId} />
    ))}
  </div>

  <div className="flex justify-center">
    <Link href="https://www.youtube.com/@PrepAcademy" target="_blank" rel="noopener noreferrer" className="text-[#F55D3E] flex items-center hover:underline">
      <span className='text-lg md:text-xl text-[#F55D3E]'>View More</span>
      <ChevronRight size={16} />
    </Link>
  </div>
</div>
  </div>
</div>
  );
};

export default CatExamApplySection;