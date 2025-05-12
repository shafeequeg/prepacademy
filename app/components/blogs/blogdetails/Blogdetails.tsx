"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
// import blogContent from "@/app/components/blogs/blogdetails/blogdata.json";
import axiosInstance from "../../apiconfig/axios";
import { API_URLS } from "../../apiconfig/api_urls";

// interface CriteriaItem {
//   heading: string;
//   description: string;
//   Mainheading: string;
//   Maindescription: string;
// }

// interface BlogContent {
//   id: number;
//   criteria: CriteriaItem[];
// }

interface BlogDetailsProps {
  id: string;
}

interface Blog {
  id: number;
  title: string;
  category: number;
  category_name: string;
  description: string;
  image: string;
  alt_img_text: string;
  
}

// Helper function to safely render HTML content
const createMarkup = (htmlContent: string) => {
  return { __html: htmlContent };
};

export default function BlogDetails({ id }: BlogDetailsProps) {
  // Add CSS for responsive tables to handle overflow issues
  // Replace the .blog-content and table CSS in your useEffect style block with this:

  // Replace the .blog-content and table CSS in your useEffect style block with this:

  useEffect(() => {
    // Add custom CSS to make tables responsive and style blog content
    const style = document.createElement("style");
    style.textContent = `
  .blog-content {
    color: #d1d5db; /* text-gray-300 */
    font-size: 0.75rem; /* text-xs */
    background-color: #1f2937; /* bg-gray-800 */
    padding: 0.75rem; /* p-3 */
    border-radius: 0.5rem; /* rounded-lg */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
    transition: box-shadow 0.3s ease; /* transition-shadow duration-300 */
    border-left: 4px solid #ea580c; /* border-l-4 border-orange-600 */
    max-width: 100%;
    overflow-x: hidden;
  }

  .blog-content:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
  }

  @media (min-width: 768px) {
    .blog-content {
      font-size: 0.875rem; 
      padding: 1.5rem;
    }
  }

  .blog-content table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    font-size: 0.9rem;
    display: block;
    overflow-x: auto;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
  }

  .blog-content table td,
  .blog-content table th {
    border: 1px solid #4b5563;
    padding: 0.5rem;
    min-width: 100px;
  }
  
  .blog-content table th {
    background-color: #374151;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  
  @media (max-width: 640px) {
    .blog-content table {
      font-size: 0.7rem;
      max-width: 100%;
      /* Remove transform that was shifting alignment */
      /* transform: scale(0.85); */
      /* transform-origin: left top; */
      /* margin-right: -15%; */
      
      /* Center the table container */
      margin-left: auto;
      margin-right: auto;
      text-align: center;
    }
    
    /* Make the table scrollable horizontally and centered */
    .blog-content table {
      display: block;
      overflow-x: auto;
      white-space: nowrap;
      margin-left: auto;
      margin-right: auto;
    }
    
    .blog-content table td,
    .blog-content table th {
      padding: 0.25rem;
      min-width: 70px;
    }
  }

  .blog-content p {
    margin-bottom: 1rem;
  }

  .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 {
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #f9fafb;
  }

  .blog-content h1 {
    font-size: 1.5rem;
  }

  .blog-content h2 {
    font-size: 1.25rem;
  }

  .blog-content h3 {
    font-size: 1.125rem;
  }

  .blog-content ul, .blog-content ol {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
  }

  .blog-content ul {
    list-style-type: disc;
  }

  .blog-content ol {
    list-style-type: decimal;
  }

  .blog-content a {
    color: #3b82f6;
    text-decoration: underline;
  }
  `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [allBlog, setAllBlog] = useState<Blog[]>([]);

  const blogsdetails = [
    {
      id: 1,
      title: "Best IPM BBA Coaching & Exam Preparation Institute in India",
      description: "Your Path to Success",
      image: "/blogs/blog1.png",
      alt_img_text: "",
    },
    {
      id: 2,
      title: "CAT Exam Preparation: Ace the CAT ",
      description: "Essential Tips and Resources for Exam Preparation",
      image: "/blogs/blog2.png",
      alt_img_text: "",
    },
    {
      id: 3,
      title: "Important Study Hacks for CAT 2025 Students",
      description: "Important Study Hacks for CAT 2025 Students",
      image: "/blogs/blog3.png",
      alt_img_text: "",
    },
    {
      id: 4,
      title: "CAT 2025 Course",
      description: "CAT 2025 Courses: Which One is Right for You?",
      image: "/blogs/blog4.png",
      alt_img_text: "",
    },
    {
      id: 5,
      title: "CAT 2025 Exam Preparation",
      description: "From Zero to Hero: Comprehensive CAT 2025 Exam Preparation",
      image: "/blogs/blog5.png",
      alt_img_text: "",
    },
    {
      id: 6,
      title: "Prep Academy Blog - Strategy for CAT 2025 Mastering the CAT: ",
      description: "Mastering the CAT: A Comprehensive Strategy for CAT 2025",
      image: "/blogs/blog6.png",
      alt_img_text: "",
    },
    {
      id: 7,
      title: "Unlock Your Potential",
      description: "The Best CAT 2025 Classes to Join",
      image: "/blogs/blog7.png",
      alt_img_text: "",
    },
    {
      id: 8,
      title: "CAT 2025",
      description: "The Ultimate Guide to Preparing and Succeeding",
      image: "/blogs/blog8.png",
      alt_img_text: "",
    },
    {
      id: 9,
      image: "/aboutusnews/aboutusnews1.jpeg",
      title: "Registration and examination date announced 'NMMIMS NPAT 2025'",
      description:
        "The Narsee Monjee Institute of Management Studies (NMIMS) has announced the registration and examination dates for the NPAT 2025. The registration process commenced in mid-December 2024 and will continue until April 2025. The examination is scheduled to be held from March 1 to May 31, 2025. ",
      alt_img_text: "",
    },
    {
      id: 10,
      title:
        "NTA CUET 2025: UG Registration, Exam Dates, Notification, Eligibility, Pattern (Revised), Syllabus",
      description:
        "The National Testing Agency (NTA) is set to commence the registration process for the Common University Entrance Test (CUET) 2025 for undergraduate (UG) programs. The registration is expected to begin in the first week of February 2025 and will conclude in the first week of April 2025. Prospective candidates can apply online through the official CUET website: cuet.nta.nic.in. ",
      image: "/aboutusnews/aboutusnews2.jpeg",
      alt_img_text: "",
    },
    {
      id: 11,
      image: "/news3.png",
      title: "How to Crack CAT?",
      description:
        "Cracking the Common Admission Test (CAT) 2025 requires a strategic and disciplined approach. Here's a comprehensive guide to help you prepare effectively:",
      alt_img_text: "",
    },
  ];

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
      console.log(response);
      setAllBlog(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  console.log(allBlog);

  const blog =
    allBlog.length > 0
      ? allBlog.find((b) => b.id == Number(id))
      : blogsdetails.find((b) => b.id === Number(id));

  // const content = blogContent.find((c) => c.id === Number(id)) as
  //   | BlogContent
  //   | undefined;

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white h-fit mt-16 md:mt-32">
      <div className="">
        <div className="relative">
       <div className="relative w-full aspect-[21/9] md:aspect-[16/6]">
  <Image
    src={blog.image}
    alt={blog.alt_img_text || "Blog Image"}
    fill
    className="object-cover opacity-50"
    priority
  />
</div>

          <div className="container mx-auto px-4 md:px-8 absolute top-0 left-0 right-0 pt-4 md:pt-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-2 md:mb-4">
                {/* <span className="bg-orange-600 text-white px-2 py-1 text-xs uppercase font-medium">
                  CAT2025
                </span> */}
              </div>

              <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-2 px-2">
                {blog.title}
              </h1>

              {/* <div className="text-gray-300 text-sm mb-4">
                Posted on 10 February 2025 | 2:05 PM
                <br />
                By: Ashwani Nair
              </div> */}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-8 py-4 md:py-8">
          <div className="flex flex-col md:flex-row gap-4 md:gap-8 max-w-4xl mx-auto">
            {/* Sidebar - Only visible on md screens and up */}
            <div className="hidden md:block w-52 md:flex-shrink-0">
              <div className="border-l-2 border-orange-600 pl-4 mb-6">
                <h3 className="text-lg font-medium text-orange-600 mb-2">
                  Online Class
                </h3>
                <Link
                  href="#"
                  className="block text-gray-300 text-base mb-2 hover:text-white font-semibold"
                >
                  What&apos;s on 2025
                </Link>
                <Link
                  href="#"
                  className="block text-gray-300 text-base mb-2 hover:text-white font-semibold"
                >
                  Special Classes
                </Link>
                <Link
                  href="#"
                  className="block text-gray-300 text-base mb-2 hover:text-white font-semibold"
                >
                  Session Timings
                </Link>
              </div>

              <div className="mb-6">
                <p className="text-sm mb-2">Share this on</p>
                <div className="flex gap-2">
                  <Link
                    href="#"
                    className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-400 p-2 rounded-full hover:bg-blue-500"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-600 p-2 rounded-full hover:bg-blue-500"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>

            {/* Mobile Sidebar - Only visible on small screens */}
            <div className="md:hidden w-full mb-4">
              <div className="flex justify-between items-center mb-3">
                <div className="border-l-2 border-orange-600 pl-2">
                  <h3 className="text-sm font-medium text-orange-600">
                    Online Class
                  </h3>
                </div>
                <div className="flex space-x-2">
                  <Link
                    href="#"
                    className="bg-blue-800 p-1 rounded-full hover:bg-blue-700 text-sm"
                    aria-label="Share on Facebook"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-400 p-1 rounded-full hover:bg-blue-500 text-sm"
                    aria-label="Share on Twitter"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="#"
                    className="bg-blue-600 p-1 rounded-full hover:bg-blue-500 text-sm"
                    aria-label="Share on LinkedIn"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
              <div className="flex justify-between text-xs text-gray-300">
                <Link href="#" className="hover:text-white">
                  What&apos;s on 2025
                </Link>
                <Link href="#" className="hover:text-white">
                  Special Classes
                </Link>
                <Link href="#" className="hover:text-white">
                  Session Timings
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Section for Exams and Criteria */}
              <div className="mb-6 md:mb-8">
                {/* <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-blue-500">
                  Exams and Criteria
                </h2> */}
                {/* <div className="space-y-4 md:space-y-6">
                  {content?.criteria.map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 p-3 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-600"
                    >
                      
                      {item.Mainheading && (
                        <h2 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">
                          {item.Mainheading}
                        </h2>
                      )}

                     
                      {item.Maindescription && (
                        <p className="text-gray-300 text-sm md:text-base font-bold leading-relaxed">
                          {item.Maindescription}
                        </p>
                      )}

                     
                      {item.heading && (
                        <h3 className="text-base md:text-lg font-semibold text-white mb-2 md:mb-3 mt-2">
                          {item.heading}
                        </h3>
                      )}
                      
                     
                      {item.description && (
                        <p className="text-gray-300 text-xs md:text-sm leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div> */}
              </div>

              {/* Blog Description with HTML Rendering */}
              {blog?.description && (
                <div className="mb-6 md:mb-8">
                  <h2 className="text-lg md:text-xl font-bold mb-3 md:mb-4 text-orange-600">
                    Based On Past Trends
                  </h2>
                  <div className="">
                    <div
                      className="blog-content"
                      dangerouslySetInnerHTML={createMarkup(blog.description)}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Other Blogs Section */}
        {/* <div className="bg-gray-950 py-6 md:py-8">
  <div className="container mx-auto px-4 md:px-8">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6">
        <span className="text-white">Other</span>
        <span className="text-orange-600">Blogs</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {(allBlog.length > 0 
          ? allBlog.filter(b => b.id !== Number(id)) 
          : blogsdetails.filter(b => b.id !== Number(id))
        ).slice(0, 3).map(blog => (
          <div key={blog.id} className="bg-gray-900 rounded overflow-hidden">
            <div className="relative h-32 md:h-40">
              <Image
                src={blog.image || "/blogcommonimage.png"}
                alt={blog.alt_img_text || "Blog Thumbnail"}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3 md:p-4">
              <h3 className="font-medium text-xs md:text-sm mb-1 md:mb-2 line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-gray-400 text-xs mb-2 md:mb-3 line-clamp-2">
                {typeof blog.description === 'string' 
                  ? blog.description.replace(/<[^>]*>?/gm, '').substring(0, 100) + '...'
                  : 'Blog description...'}
              </p>
              <Link
                href={`/blogs/${blog.id}`}
                className="text-orange-600 text-xs hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 md:mt-6 text-center">
        <Link
          href="/blogs"
          className="text-gray-300 hover:text-white inline-flex items-center gap-1"
        >
          View More <span className="text-xs">→</span>
        </Link>
      </div>
    </div>
  </div>
</div> */}
      </div>
    </div>
  );
}
