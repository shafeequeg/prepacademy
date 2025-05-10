"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import axiosInstance from "../../apiconfig/axios";
import { API_URLS } from "../../apiconfig/api_urls";

const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-gray-400"
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

// interface Blog {
//   id: number;
//   title: string;
//   description: string;
//   image: string;
// }

interface Blogcategory {
  id: number;
  category: string;
}

interface Blogs {
  id: number;
  title: string;
  category: number;
  category_name: string;
  description: string;
  image: string;
  alt_img_text: string;
}

const stripHtmlAndTruncate = (
  html: string | null | undefined,
  maxLength: number = 120
): string => {
  if (!html) return "No description available";

  // Create a temporary div element to parse the HTML
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  // Get the text content and trim whitespace
  const text = tempDiv.textContent || tempDiv.innerText || "";
  const cleanedText = text.trim();

  // Truncate if needed
  return cleanedText.length > maxLength
    ? `${cleanedText.substring(0, maxLength)}...`
    : cleanedText;
};

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState("");
  const [allBlog, setAllBlog] = useState<Blogs[]>([]);
  const [Blogcategory, setAllBlogcategory] = useState<Blogcategory[]>([]);
  const [error, setError] = useState<string | null>(null);

  console.log(error);

  // const tabs = [
  //   "Success Stories",
  //   "Exam Strategies",
  //   "Popular Articles",
  //   "Latest Updates & Notification",
  //   "Study Plans & Tips",
  //   "Entrance Exams",
  // ];

  // const defaultBlogs: Blog[] = [
  //   {
  //     id: 1,
  //     title: "Best IPM BBA Coaching & Exam Preparation Institute in India",
  //     description: "Your Path to Success",
  //     image: "/blogs/blog1.png",
  //   },
  //   {
  //     id: 2,
  //     title: "CAT Exam Preparation: Ace the CAT ",
  //     description: "Essential Tips and Resources for Exam Preparation",
  //     image: "/blogs/blog2.png",
  //   },
  //   {
  //     id: 3,
  //     title: "Important Study Hacks for CAT 2025 Students",
  //     description: "Important Study Hacks for CAT 2025 Students",
  //     image: "/blogs/blog3.png",
  //   },
  //   {
  //     id: 4,
  //     title: "CAT 2025 Course",
  //     description: "CAT 2025 Courses: Which One is Right for You?",
  //     image: "/blogs/blog4.png",
  //   },
  //   {
  //     id: 5,
  //     title: "CAT 2025 Exam Preparation",
  //     description: "From Zero to Hero: Comprehensive CAT 2025 Exam Preparation",
  //     image: "/blogs/blog5.png",
  //   },
  //   {
  //     id: 6,
  //     title: "Prep Academy Blog - Strategy for CAT 2025 Mastering the CAT: ",
  //     description: "Mastering the CAT: A Comprehensive Strategy for CAT 2025",
  //     image: "/blogs/blog6.png",
  //   },
  //   {
  //     id: 7,
  //     title: "Unlock Your Potential",
  //     description: "The Best CAT 2025 Classes to Join",
  //     image: "/blogs/blog7.png",
  //   },
  //   {
  //     id: 8,
  //     title: "CAT 2025",
  //     description: "The Ultimate Guide to Preparing and Succeeding",
  //     image: "/blogs/blog8.png",
  //   },

  //   {
  //     id: 9,
  //     image: "/aboutusnews/aboutusnews1.jpeg",
  //     title: "Registration and examination date announced “NMMIMS NPAT 2025”",
  //     description:
  //       "The Narsee Monjee Institute of Management Studies (NMIMS) has announced the registration and examination dates for the NPAT 2025. The registration process commenced in mid-December 2024 and will continue until April 2025. The examination is scheduled to be held from March 1 to May 31, 2025. ",
  //   },
  //   {
  //     id: 10,
  //     title:
  //       "NTA CUET 2025: UG Registration, Exam Dates, Notification, Eligibility, Pattern (Revised), Syllabus",
  //     description:
  //       "The National Testing Agency (NTA) is set to commence the registration process for the Common University Entrance Test (CUET) 2025 for undergraduate (UG) programs. The registration is expected to begin in the first week of February 2025 and will conclude in the first week of April 2025. Prospective candidates can apply online through the official CUET website: cuet.nta.nic.in. ",
  //     image: "/aboutusnews/aboutusnews2.jpeg",
  //   },

  //   {
  //     id: 11,
  //     image: "/news3.png",
  //     title: "How to Crack CAT?",
  //     description:
  //       "Cracking the Common Admission Test (CAT) 2025 requires a strategic and disciplined approach. Here's a comprehensive guide to help you prepare effectively:",
  //   },
  // ];

  // const blogData: { [key: string]: Blog[] } = {
  //   "Success Stories": [
  //     {
  //       id: 1,
  //       title: "John's Journey to IIT",
  //       description: "How John overcame obstacles to achieve his IIT dream.",
  //       image: "",
  //     },
  //     {
  //       id: 2,
  //       title: "MBA Success: Real Stories",
  //       description: "Inspirational stories from top B-School graduates.",
  //       image: "",
  //     },
  //     {
  //       id: 3,
  //       title: "From Average to AIR 5: My CAT Success Story",
  //       description: "A motivational journey of persistence and smart work.",
  //       image: "",
  //     },
  //     {
  //       id: 4,
  //       title: "Breaking Barriers: First Generation College Graduate",
  //       description: "How determination led to success against all odds.",
  //       image: "",
  //     },
  //     {
  //       id: 5,
  //       title: "My Path to IIM Ahmedabad",
  //       description:
  //         "A detailed account of preparation strategies that worked.",
  //       image: "",
  //     },
  //     {
  //       id: 6,
  //       title: "From Failed Attempts to Top Percentile",
  //       description:
  //         "How changing your approach can lead to breakthrough results.",
  //       image: "",
  //     },
  //   ],
  //   "Exam Strategies": [
  //     {
  //       id: 1,
  //       title: "Time Management for JEE",
  //       description:
  //         "A complete guide on managing time effectively for JEE exams.",
  //       image: "",
  //     },
  //     {
  //       id: 2,
  //       title: "NEET Last-Minute Tips",
  //       description:
  //         "What to focus on in the final 30 days before the NEET exam.",
  //       image: "",
  //     },
  //     {
  //       id: 3,
  //       title: "CAT VARC: Mastering Reading Comprehension",
  //       description:
  //         "Techniques to improve your verbal ability and reading comprehension score.",
  //       image: "",
  //     },
  //     {
  //       id: 4,
  //       title: "Data Interpretation Shortcuts for CAT",
  //       description: "Quick calculation methods to solve DI problems faster.",
  //       image: "",
  //     },
  //     {
  //       id: 5,
  //       title: "Logical Reasoning Frameworks",
  //       description:
  //         "Systematic approaches to tackle any logical reasoning problem.",
  //       image: "",
  //     },
  //     {
  //       id: 6,
  //       title: "Mock Test Strategies: How to Maximize Learning",
  //       description:
  //         "Getting the most value from your practice tests and analysis.",
  //       image: "",
  //     },
  //   ],
  //   "Popular Articles": [
  //     {
  //       id: 1,
  //       title: "Top 10 Study Hacks",
  //       description:
  //         "A list of 10 scientifically proven study hacks to improve retention.",
  //       image: "",
  //     },
  //     {
  //       id: 2,
  //       title: "Mistakes to Avoid in Exams",
  //       description: "Common exam mistakes and how to avoid them.",
  //       image: "",
  //     },
  //     {
  //       id: 3,
  //       title: "How to Build Mental Resilience for Competitive Exams",
  //       description:
  //         "Psychological techniques to stay motivated during long preparation.",
  //       image: "",
  //     },
  //     {
  //       id: 4,
  //       title: "The Pomodoro Technique for Exam Preparation",
  //       description:
  //         "Using time-blocking to enhance productivity and reduce burnout.",
  //       image: "",
  //     },
  //     {
  //       id: 5,
  //       title: "Memory Techniques for Quantitative Formulas",
  //       description:
  //         "Mnemonic devices to remember complex mathematical concepts.",
  //       image: "",
  //     },
  //     {
  //       id: 6,
  //       title: "Digital vs. Physical Study Materials: What Works Best?",
  //       description:
  //         "A comparison of different study mediums and their effectiveness.",
  //       image: "",
  //     },
  //   ],
  //   "Latest Updates & Notification": [
  //     {
  //       id: 1,
  //       title: "JEE 2025 Exam Dates Announced",
  //       description:
  //         "Check out the official dates for JEE 2025 and key deadlines.",
  //       image: "",
  //     },
  //     {
  //       id: 2,
  //       title: "NEET 2025 Registration Opens",
  //       description:
  //         "Important information about the NEET 2025 registration process.",
  //       image: "",
  //     },
  //     {
  //       id: 3,
  //       title: "CAT 2025 Pattern Changes Explained",
  //       description:
  //         "Detailed analysis of the new exam pattern and what it means for aspirants.",
  //       image: "",
  //     },
  //     {
  //       id: 4,
  //       title: "IIM Shortlist Criteria for 2025 Admissions",
  //       description:
  //         "Updated selection parameters announced by different IIMs.",
  //       image: "",
  //     },
  //     {
  //       id: 5,
  //       title: "UPSC 2025 Calendar Released",
  //       description:
  //         "Important dates for all UPSC examinations in the coming year.",
  //       image: "",
  //     },
  //     {
  //       id: 6,
  //       title: "New Digital Initiatives for Online Exam Preparation",
  //       description:
  //         "Government launches new resources for competitive exam aspirants.",
  //       image: "",
  //     },
  //   ],
  //   "Study Plans & Tips": [
  //     {
  //       id: 11,
  //       image: "/news3.png",
  //       title: "How to Crack CAT?",
  //       description:
  //         "Cracking the Common Admission Test (CAT) 2025 requires a strategic and disciplined approach. Here's a comprehensive guide to help you prepare effectively:",
  //     },
  //   ],
  //   "Entrance Exams": [
  //     {
  //       id: 1,
  //       image: "/aboutusnews/aboutusnews1.jpeg",
  //       title: "Registration and examination date announced “NMMIMS NPAT 2025”",
  //       description:
  //         "The Narsee Monjee Institute of Management Studies (NMIMS) has announced the registration and examination dates for the NPAT 2025. The registration process commenced in mid-December 2024 and will continue until April 2025. The examination is scheduled to be held from March 1 to May 31, 2025. ",
  //     },
  //     {
  //       id: 2,
  //       title:
  //         "NTA CUET 2025: UG Registration, Exam Dates, Notification, Eligibility, Pattern (Revised), Syllabus",
  //       description:
  //         "The National Testing Agency (NTA) is set to commence the registration process for the Common University Entrance Test (CUET) 2025 for undergraduate (UG) programs. The registration is expected to begin in the first week of February 2025 and will conclude in the first week of April 2025. Prospective candidates can apply online through the official CUET website: cuet.nta.nic.in. ",
  //       image: "/aboutusnews/aboutusnews2.jpeg",
  //     },
  //   ],
  // };

  // const displayBlogs =
  //   activeTab === "" && defaultBlogs.length > 0
  //     ? defaultBlogs
  //     : blogData[activeTab] || [];

  console.log(API_URLS.BLOG_CATEGORY.GET_BLOG_CATEGORY);

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
      console.log(response);

      // const matchedBlog = response.data.find((blog:any) => blog.id == id )
      setAllBlog(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  console.log(allBlog);

  const fetchBlogsCategories = async () => {
    try {
      const response = await axiosInstance.get(
        API_URLS.BLOG_CATEGORY.GET_BLOG_CATEGORY
      );

      console.log("Full API response:", response);

      console.log("Response data:", response.data);
      console.log("Response status:", response.status);

      setAllBlogcategory(response.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
        console.error("Error fetching categories:", err);
      } else {
        setError("Failed to fetch categories");
        console.error("Unknown error fetching categories:", err);
      }
    }
  };

  console.log(Blogcategory);

  // const displayBlogs = allBlog.length > 0 ? allBlog.find((b) => b.id === Number(id)) : blogsdetails.find((b) => b.id === Number(id));

  // Replace your current tab click handler and display logic with this:

  const displayBlogs =
    activeTab === ""
      ? allBlog
      : allBlog.filter((blog) => {
          const category = Blogcategory.find((cat) => cat.id === blog.category);
          return category?.category === activeTab;
        });

  useEffect(() => {
    fetchBlogs();
    fetchBlogsCategories();
  }, []);

  return (
    <div className="w-full bg-[#1A1A1A] min-h-screen mt-28 p-6 md:p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-white text-2xl font-semibold ">
          <span className="font-dmserif italic">Recent</span>{" "}
          <span className="text-[#FF5733]">Blogs</span>
          <i className="fa-solid fa-arrows-rotate"></i>
        </h2>
      </div>

      {/* Search and Categories */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search Blogs"
              className="w-full bg-[#F55D3E1A] text-white rounded-md py-2 pl-4 pr-10"
            />
            <div className="absolute right-3 top-2.5">
              <SearchIcon />
            </div>
          </div>

          {/* Categories Dropdowns */}
          <div className="flex gap-4 w-full md:w-auto">
            <select className="w-full md:w-auto bg-[#F55D3E1A] text-white rounded-md py-2 px-4">
              <option className="">Categories</option>
            </select>
          </div>
        </div>

        {/* Tabs */}
        <div role="tablist" className="flex flex-wrap gap-3 w-full">
          {Blogcategory.map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeTab === tab.category}
              onClick={() => setActiveTab(tab.category)}
              className={`w-full md:w-auto min-w-[200px] px-6 py-3 font-bold rounded-md text-base text-center transition-colors ${
                activeTab === tab.category
                  ? "bg-[#F55D3E] text-white"
                  : "bg-[#F55D3E1A] text-[#F55D3E] hover:bg-[#F55D3E33]"
              }`}
            >
              {tab.category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Grid - Will show default blogs initially, then tab-specific blogs when clicked */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {(displayBlogs.length > 0 ? displayBlogs : allBlog).map(
          (blog: Blogs) => (
            <div
              key={blog.id}
              className="bg-[#2A2A2A] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col h-full"
            >
              <div className="w-full h-48">
                {" "}
                {/* Fixed image height */}
                <div className="relative w-full h-full">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2">
                  {blog.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                    {stripHtmlAndTruncate(blog.description)}
                  </p>
                </p>
                <div className="mt-auto pt-2 ">
                  <Link href={`/blogdetails/${blog.id}`} passHref>
                    <button className="text-[#FF5733] text-sm flex items-center gap-2 hover:text-[#FF4522] transition-colors">
                      Read More <span>→</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>

      {/* Counselling CTA Section */}
      <div className="relative w-full rounded-xl overflow-hidden bg-gradient-to-r from-[#2A1810] to-[#3A2820] p-8 md:p-12 mt-4">
        {/* Content Container */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="z-10 max-w-xl">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              <span className="text-[#FF5733] font-serif italic">
                Talk To Our Mentors
              </span>
              <br />
              <span className="text-white font-serif italic">
                For Free Counselling
              </span>
            </h2>
            <button className="bg-[#FF5733] text-white px-6 py-2 rounded flex items-center gap-2 hover:bg-[#E64A2E] transition-colors mt-4">
              Lets Talk
              <span className="text-lg">→</span>
            </button>
          </div>

          {/* Image Group */}
          <div className="relative mt-8 md:mt-0">
            <Image
              src="/groupphotopopularcourse.png"
              alt="Our Mentors"
              width={500} // Adjust as needed
              height={300} // Adjust as needed
              className="w-full md:w-[500px] h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
