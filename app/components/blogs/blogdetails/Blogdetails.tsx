"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import axiosInstance from "../../apiconfig/axios";
import { API_URLS } from "../../apiconfig/api_urls";

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

// Helper function to safely render HTML content and add section dividers
const createMarkup = (htmlContent: string) => {
  // Add image container divs around images for better responsive behavior
  let modifiedHtml = htmlContent
    .replace(/<img/g, '<div class="image-container"><img')
    .replace(/<\/img>/g, "</img></div>");

  // Add table container divs around tables
  modifiedHtml = modifiedHtml
    .replace(/<table/g, '<div class="table-container"><table')
    .replace(/<\/table>/g, "</table></div>");

  // Add section dividers after each heading
  modifiedHtml = modifiedHtml
    .replace(
      /<h1([^>]*)>(.*?)<\/h1>/g,
      '<div class="section-container"><h1$1>$2</h1>'
    )
    .replace(
      /<h2([^>]*)>(.*?)<\/h2>/g,
      '<div class="section-container"><h2$1>$2</h2>'
    )
    .replace(
      /<h3([^>]*)>(.*?)<\/h3>/g,
      '<div class="section-container"><h3$1>$2</h3>'
    );

  // Close section divs
  modifiedHtml = modifiedHtml.replace(
    /(<div class="section-container">.*?)(?=<div class="section-container">|$)/,
    "$1</div>"
  );

  return { __html: modifiedHtml };
};

export default function BlogDetails({ id }: BlogDetailsProps) {
  // Add CSS for responsive tables to handle overflow issues
  useEffect(() => {
    // Add custom CSS to make tables responsive and style blog content
    const style = document.createElement("style");
    style.textContent = `
  .blog-content {
    color: #d1d5db; /* text-gray-300 */
    font-size: 0.75rem; /* text-xs */
    background-color: #1f2937; 
    padding: 1.5rem; /* increased padding */
    border-radius: 0.5rem; /* rounded-lg */
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); /* shadow-md */
    transition: box-shadow 0.3s ease; /* transition-shadow duration-300 */
    border-left: 4px solid #ea580c; /* border-l-4 border-orange-600 */
    max-width: 100%;
    overflow-x: hidden;
    width: 90%; /* Increased width to 90% */
    margin-left: auto;
    margin-right: auto;
  }

  

  .blog-content img {
    max-width: 100%;
    height: auto;
    border-radius: 0.5rem;
    object-fit: contain;
  }

  /* For large images - limit their maximum width */
  .blog-content img {
    max-width: 80%;
  }

  @media (max-width: 768px) {
    .blog-content img {
      max-width: 100%;
    }
  }

  .blog-content:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
  }

  /* New section container styles */
  .blog-content .section-container {
    position: relative;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    border-bottom: 1px solid #4b5563;
  }

  .blog-content .section-container:last-child {
    border-bottom: none;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  /* Content alignment and text formatting */
  .blog-content * {
    max-width: 100%;
    text-align: left;
    margin-left: 0;
    margin-right: 0;
  }

  @media (min-width: 768px) {
    .blog-content {
      font-size: 0.875rem; 
      padding: 2rem;
    }
  }

  /* Responsive table container with dynamic height based on content */
  .blog-content div.table-container {
    width: 100%;
    max-width: 100%;
    margin: 1.5rem auto;
    overflow-x: auto;
    overflow-y: auto;
    display: block;
    text-align: center;
    position: relative;
    /* Using max-height instead of fixed height */
    max-height: 80vh; /* Maximum height relative to viewport */
    min-height: 150px; /* Minimum height for very small tables */
  }

  
  .blog-content table {
    width: 100px; 
    height: auto;
    border-collapse: collapse;
    margin: 0 auto;
    font-size: 0.9rem;
    table-layout: auto; /* Auto table layout for content-based sizing */
    overflow: visible;
  }

  /* Table cells adapt to content */
  .blog-content table td,
  .blog-content table th {
    border: 1px solid #4b5563;
    padding: 0.5rem;
    word-wrap: break-word; /* Allow words to break and wrap */
    overflow-wrap: break-word;
    vertical-align: top;
    text-align: left;
        width: 100%; 

  }
  
  .blog-content table th {
    background-color: #374151;
    position: sticky;
    top: 0;
    z-index: 1;
  }
  
  /* Medium screen adaptations */
  @media (max-width: 1024px) and (min-width: 641px) {
    .blog-content table {
      font-size: 0.8rem;
    }
    
    .blog-content table td,
    .blog-content table th {
      padding: 0.4rem;
    }
  }
  
  /* Mobile screen adaptations */
  @media (max-width: 640px) {
    .blog-content div.table-container {
      max-height: 60vh; /* Smaller max height on mobile */
    }
    
    .blog-content table {
      width: 450px; /* Fixed width on mobile screens */
      font-size: 0.7rem;
    }
    
    .blog-content table td,
    .blog-content table th {
      padding: 0.25rem;
      max-width: 100px; /* Smaller cell width on mobile */
    }
  }

  /* Very small screens */
  @media (max-width: 380px) {
    .blog-content table {
      font-size: 0.65rem;
    }
    
    .blog-content table td,
    .blog-content table th {
      padding: 0.2rem;
      max-width: 100px;
    }
  }

  .blog-content p {
    margin-bottom: 1rem;
    line-height: 1.6;
    text-indent: 0; /* Ensure no indentation */
  }

  .blog-content h1, .blog-content h2, .blog-content h3, .blog-content h4 {
    font-weight: bold;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: #f9fafb;
    border-left: 4px solid #ea580c; /* Same orange border as the main container */
    padding-left: 0.75rem;
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
    padding-left: 0; /* Reset any default padding */
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

  /* Ensure consistent spacing and alignment */
  .blog-content > *:first-child {
    margin-top: 0;
  }

  .blog-content > *:last-child {
    margin-bottom: 0;
  }
  `;
    document.head.appendChild(style);

    // Optional: Add JavaScript to detect large tables and add a class
    const detectLargeTables = () => {
      const tables = document.querySelectorAll(".blog-content table");
      tables.forEach((table) => {
        // If table has more than 5 columns, consider it a large table
        if (table.querySelectorAll("th, tr:first-child td").length > 5) {
          table.classList.add("large-table");
        }
      });
    };

    // Run after DOM is fully loaded
    setTimeout(detectLargeTables, 500);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

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

  const [allBlog, setAllBlog] = useState<Blog[]>([]);

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

  const blog =
    allBlog.length > 0
      ? allBlog.find((b) => b.id == Number(id))
      : blogsdetails.find((b) => b.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white h-fit">
      <div className="px-4 md:px-8">
        <div className="relative">
          <div className="relative w-90 mx-auto aspect-[21/9] md:aspect-[16/6]">
            <Image
              src={blog.image}
              alt={blog.alt_img_text || "Blog Image"}
              fill
              className="object-cover opacity-50 rounded-lg mt-32 md:mt-32"
              priority
            />
          </div>
          <div className="container mx-auto px-4 md:px-8 absolute top-0 left-0 right-0 pt-4 md:pt-8">
            <div className="max-w-4xl mx-auto text-center"></div>
          </div>
        </div>
        <div className="container mx-auto md:px-8 py-4 md:py-8 mt-32 md:mt-32">
          <div className="w-[100%]">
            {blog?.description && (
              <div className="mb-6 md:mb-8">
                <div>
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
    </div>
  );
}
