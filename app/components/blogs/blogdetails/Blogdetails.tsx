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
  category_name?: string;
  description: string;
  image: string;
  alt_img_text: string;
}

// Static blog interface to match the Blog interface
interface StaticBlog {
  id: number;
  title: string;
  description: string;
  image: string;
  alt_img_text: string;
  category_name?: string; // Add this optional property
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

// Helper function to extract only tables from HTML content
const extractTables = (htmlContent: string) => {
  const tableRegex = /<table[^>]*>[\s\S]*?<\/table>/g;
  const tables = htmlContent.match(tableRegex) || [];
  return tables
    .map((table) => `<div class="table-container">${table}</div>`)
    .join("");
};

// Helper function to remove tables from HTML content
const removeTablesFromContent = (htmlContent: string) => {
  return htmlContent.replace(/<table[^>]*>[\s\S]*?<\/table>/g, "");
};

export default function BlogDetails({ id }: BlogDetailsProps) {
  const [activeTab, setActiveTab] = useState("all");

  // Enhanced CSS for modern blog design
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      /* Sidebar container for tabs */
      .sidebar-container {
        background-color: #1f2937;
        border-radius: 0.5rem;
        padding: 1rem;
        width: 35%;
        height: fit-content;
        position: sticky;
        top: 1rem;
      }

      .tab-button {
        padding: 0.75rem 1rem;
        border: none;
        background: transparent;
        color: #9ca3af;
        cursor: pointer;
        border-radius: 0.375rem;
        transition: all 0.2s ease;
        font-size: 0.875rem;
        font-weight: 500;
        white-space: nowrap;
        width: 100%;
        text-align: left;
        margin-bottom: 0.5rem;
      }

      .tab-button.active {
        background-color: #374151;
        color: #f9fafb;
      }

      .tab-button:hover:not(.active) {
        color: #d1d5db;
        background-color: #2d3748;
      }

      /* Main blog content container with dark theme */
      .blog-content {
        color: #d1d5db;
        font-size: 1rem;
        line-height: 1.75;
        background-color: #1f2937;
        padding: 3rem;
        border-radius: 1rem;
        box-shadow: 
          0 20px 25px -5px rgba(0, 0, 0, 0.3), 
          0 10px 10px -5px rgba(0, 0, 0, 0.2);
        max-width: 100%;
        position: relative;
        overflow: hidden;
        border-left: 4px solid #ea580c;
      }

      /* Gradient overlay for visual depth */
      .blog-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #ea580c, #ef4444, #8b5cf6, #06b6d4);
        border-radius: 1rem 1rem 0 0;
      }

      /* Typography improvements with dark theme */
      .blog-content h1 {
        font-size: 2.5rem;
        font-weight: 800;
        color: #f9fafb;
        margin: 2rem 0 1.5rem 0;
        line-height: 1.2;
        position: relative;
        padding-left: 1.5rem;
        border-left: 6px solid #ea580c;
      }

      .blog-content h2 {
        font-size: 2rem;
        font-weight: 700;
        color: #f3f4f6;
        margin: 2rem 0 1rem 0;
        line-height: 1.3;
        position: relative;
        padding-left: 1.25rem;
        border-left: 4px solid #ea580c;
      }

      .blog-content h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #e5e7eb;
        margin: 1.5rem 0 1rem 0;
        line-height: 1.4;
        position: relative;
        padding-left: 1rem;
        border-left: 3px solid #ea580c;
      }

      .blog-content h4 {
        font-size: 1.25rem;
        font-weight: 600;
        color: #d1d5db;
        margin: 1.5rem 0 0.75rem 0;
        line-height: 1.4;
        position: relative;
        padding-left: 0.75rem;
        border-left: 2px solid #ea580c;
      }

      /* Paragraph styling with dark theme */
      .blog-content p {
        margin-bottom: 1.5rem;
        line-height: 1.8;
        color: #d1d5db;
        font-size: 1.1rem;
        text-align: justify;
      }

      /* Image improvements */
      .blog-content img {
        max-width: 100%;
        height: auto;
        border-radius: 0.75rem;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
        margin: 2rem auto;
        display: block;
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .blog-content img:hover {
        transform: scale(1.02);
        box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.15);
      }

      /* Enhanced responsive table styling with static background colors */
      .blog-content .table-container {
        width: 100%;
        margin: 2rem 0;
        overflow-x: auto;
        border-radius: 0.75rem;
        background: transparent;
      }

      .blog-content table {
        width: 100%;
        border-collapse: collapse;
        background: transparent;
        font-size: 1rem;
        margin: 0;
        border-radius: 0.75rem;
        overflow: hidden;
      }

      .blog-content table th {
        background: #eae2b7; /* Static background for table headers */
        color: #fff; /* Pure white for better visibility */
        font-weight: 600;
        padding: 1rem 1.25rem;
        text-align: left;
        font-size: 0.95rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border: none;
      }

      .blog-content table td {
        padding: 1rem 1.25rem;
        color: #fff; /* Pure white for better visibility */
        background: #fcbf49; /* Static background for table cells */
        vertical-align: top;
        word-wrap: break-word;
        overflow-wrap: break-word;
        hyphens: auto;
        border: 1px solid #4b5563;
      }

      .blog-content table tr:nth-child(even) td {
        background: #fcbf49; /* Static background for table cells */
      }

      .blog-content table tr:hover td {
        background: #e5a83c; /* Slightly darker shade of #fcbf49 on hover */
        transition: background-color 0.2s ease;
      }

      /* List styling with dark theme */
      .blog-content ul, .blog-content ol {
        margin: 1.5rem 0;
        padding-left: 2rem;
      }

      .blog-content ul li {
        list-style-type: none;
        position: relative;
        margin-bottom: 0.75rem;
        padding-left: 1.5rem;
        color: #d1d5db;
      }

      .blog-content ul li::before {
        content: '→';
        position: absolute;
        left: 0;
        color: #ea580c;
        font-weight: bold;
        font-size: 1.2rem;
      }

      .blog-content ol li {
        margin-bottom: 0.75rem;
        color: #d1d5db;
      }

      /* Links with dark theme */
      .blog-content a {
        color: #60a5fa;
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: all 0.3s ease;
        font-weight: 500;
      }

      .blog-content a:hover {
        color: #93c5fd;
        border-bottom-color: #60a5fa;
      }

      /* Section containers with dark theme */
      .blog-content .section-container {
        position: relative;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid #4b5563;
      }

      .blog-content .section-container:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
      }

      /* Blockquotes with dark theme */
      .blog-content blockquote {
        border-left: 4px solid #ea580c;
        background: #374151;
        padding: 1.5rem 2rem;
        margin: 2rem 0;
        border-radius: 0 0.5rem 0.5rem 0;
        font-style: italic;
        color: #fbbf24;
      }

      /* Code blocks with dark theme */
      .blog-content pre {
        background: #111827;
        color: #e5e7eb;
        padding: 1.5rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin: 1.5rem 0;
        font-size: 0.9rem;
        border: 1px solid #374151;
      }

      .blog-content code {
        background: #374151;
        color: #e5e7eb;
        padding: 0.25rem 0.5rem;
        border-radius: 0.25rem;
        font-size: 0.9em;
      }

      /* Container for sidebar and content */
      .main-container {
        display: flex;
        flex-direction: row;
        width: 90%; /* 100% - 10% padding (5% on each side) */
        margin: 0 auto;
        gap: 2rem;
      }

      .content-section {
        width: 65%;
        max-height: calc(100vh - 2rem);
        overflow-y: auto;
        scrollbar-width: thin;
        scrollbar-color: #ea580c #1f2937;
      }

      .content-section::-webkit-scrollbar {
        width: 8px;
      }

      .content-section::-webkit-scrollbar-track {
        background: #1f2937;
      }

      .content-section::-webkit-scrollbar-thumb {
        background: #ea580c;
        border-radius: 4px;
      }

      .content-section::-webkit-scrollbar-thumb:hover {
        background: #fb923c;
      }

      /* Responsive design */
      @media (max-width: 1200px) {
        .blog-content table {
          font-size: 0.95rem;
        }
        
        .blog-content table th,
        .blog-content table td {
          padding: 0.9rem 1.1rem;
        }
      }

      @media (max-width: 1024px) {
        .blog-content {
          padding: 2rem;
          margin: 1rem 0;
        }
        
        .blog-content h1 {
          font-size: 2rem;
        }
        
        .blog-content h2 {
          font-size: 1.75rem;
        }
        
        .blog-content table {
          font-size: 0.9rem;
        }
        
        .blog-content table th,
        .blog-content table td {
          padding: 0.8rem 1rem;
        }
      }

      @media (max-width: 768px) {
        .blog-content {
          padding: 1.5rem;
          margin: 0.5rem 0;
          border-radius: 0.75rem;
        }
        
        .blog-content h1 {
          font-size: 1.75rem;
        }
        
        .blog-content h2 {
          font-size: 1.5rem;
        }
        
        .blog-content h3 {
          font-size: 1.25rem;
        }
        
        .blog-content p {
          font-size: 1rem;
        }
        
        .blog-content table {
          font-size: 0.85rem;
        }
        
        .blog-content table th,
        .blog-content table td {
          padding: 0.7rem 0.8rem;
        }

        .main-container {
          flex-direction: column;
          width: 100%;
          gap: 1rem;
        }

        .sidebar-container {
          width: 100%;
          margin: 0;
          position: static;
        }

        .content-section {
          width: 100%;
          max-height: none;
          overflow-y: visible;
        }
      }

      @media (max-width: 640px) {
        .blog-content {
          padding: 1rem;
          margin: 0.25rem 0;
        }
        
        .blog-content table {
          font-size: 0.8rem;
        }
        
        .blog-content table th,
        .blog-content table td {
          padding: 0.6rem 0.7rem;
        }
      }

      @media (max-width: 480px) {
        .blog-content h1 {
          font-size: 1.5rem;
        }
        
        .blog-content table {
          font-size: 0.75rem;
        }
        
        .blog-content table th,
        .blog-content table td {
          padding: 0.5rem 0.6rem;
        }

        .tab-button {
          padding: 0.5rem 0.75rem;
          font-size: 0.75rem;
        }
      }

      /* Ensure content alignment */
      .blog-content * {
        max-width: 100%;
      }

      .blog-content > *:first-child {
        margin-top: 0;
      }

      .blog-content > *:last-child {
        margin-bottom: 0;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const blogsdetails: StaticBlog[] = [
    {
      id: 1,
      title: "Best IPM BBA Coaching & Exam Preparation Institute in India",
      description: "Your Path to Success",
      image: "/blogs/blog1.png",
      alt_img_text: "",
      category_name: "Education",
    },
    {
      id: 2,
      title: "CAT Exam Preparation: Ace the CAT ",
      description: "Essential Tips and Resources for Exam Preparation",
      image: "/blogs/blog2.png",
      alt_img_text: "",
      category_name: "CAT Preparation",
    },
    {
      id: 3,
      title: "Important Study Hacks for CAT 2025 Students",
      description: "Important Study Hacks for CAT 2025 Students",
      image: "/blogs/blog3.png",
      alt_img_text: "",
      category_name: "Study Tips",
    },
    {
      id: 4,
      title: "CAT 2025 Course",
      description: "CAT 2025 Courses: Which One is Right for You?",
      image: "/blogs/blog4.png",
      alt_img_text: "",
      category_name: "Courses",
    },
    {
      id: 5,
      title: "CAT 2025 Exam Preparation",
      description: "From Zero to Hero: Comprehensive CAT 2025 Exam Preparation",
      image: "/blogs/blog5.png",
      alt_img_text: "",
      category_name: "Exam Prep",
    },
    {
      id: 6,
      title: "Prep Academy Blog - Strategy for CAT 2025 Mastering the CAT: ",
      description: "Mastering the CAT: A Comprehensive Strategy for CAT 2025",
      image: "/blogs/blog6.png",
      alt_img_text: "",
      category_name: "Strategy",
    },
    {
      id: 7,
      title: "Unlock Your Potential",
      description: "The Best CAT 2025 Classes to Join",
      image: "/blogs/blog7.png",
      alt_img_text: "",
      category_name: "Classes",
    },
    {
      id: 8,
      title: "CAT 2025",
      description: "The Ultimate Guide to Preparing and Succeeding",
      image: "/blogs/blog8.png",
      alt_img_text: "",
      category_name: "Guide",
    },
    {
      id: 9,
      image: "/aboutusnews/aboutusnews1.jpeg",
      title: "Registration and examination date announced 'NMMIMS NPAT 2025'",
      description:
        "The Narsee Monjee Institute of Management Studies (NMIMS) has announced the registration and examination dates for the NPAT 2025. The registration process commenced in mid-December 2024 and will continue until April 2025. The examination is scheduled to be held from March 1 to May 31, 2025. ",
      alt_img_text: "",
      category_name: "News",
    },
    {
      id: 10,
      title:
        "NTA CUET 2025: UG Registration, Exam Dates, Notification, Eligibility, Pattern (Revised), Syllabus",
      description:
        "The National Testing Agency (NTA) is set to commence the registration process for the Common University Entrance Test (CUET) 2025 for undergraduate (UG) programs. The registration is expected to begin in the first week of February 2025 and will conclude in the first week of April 2025. Prospective candidates can apply online through the official CUET website: cuet.nta.nic.in. ",
      image: "/aboutusnews/aboutusnews2.jpeg",
      alt_img_text: "",
      category_name: "Registration",
    },
    {
      id: 11,
      image: "/news3.png",
      title: "How to Crack CAT?",
      description:
        "Cracking the Common Admission Test (CAT) 2025 requires a strategic and disciplined approach. Here's a comprehensive guide to help you prepare effectively:",
      alt_img_text: "",
      category_name: "Tips",
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
    return (
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-gray-100 mb-2">
            Blog Not Found
          </h2>
          <p className="text-gray-400">
            The blog post you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  // Function to render content based on active tab
  const renderContent = () => {
    if (!blog?.description) return null;

    switch (activeTab) {
      case "all":
        return (
          <div
            className="blog-content"
            dangerouslySetInnerHTML={createMarkup(blog.description)}
          />
        );
      case "tables":
        const tablesContent = extractTables(blog.description);
        return tablesContent ? (
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: tablesContent }}
          />
        ) : (
          <div className="blog-content">
            <p className="text-gray-400 text-center py-8">
              No tables found in this content.
            </p>
          </div>
        );
      case "content":
        const contentWithoutTables = removeTablesFromContent(blog.description);
        return (
          <div
            className="blog-content"
            dangerouslySetInnerHTML={createMarkup(contentWithoutTables)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      {/* Hero Section with dark theme */}
      <div className="relative overflow-hidden bg-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-black opacity-90"></div>
        <div className="relative z-10 px-4 md:px-8 py-20 md:py-32">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="text-white space-y-6">
                <div className="inline-block px-4 py-2 bg-orange-600/20 rounded-full text-sm font-medium backdrop-blur-sm border border-orange-600/30">
                  {blog.category_name || "Featured Article"}
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-100">
                  {blog.title}
                </h1>
                <div className="flex items-center space-x-4 text-gray-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Published Recently</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
                    <span>Educational Content</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                  <Image
                    src={blog.image}
                    alt={blog.alt_img_text || blog.title}
                    fill
                    className="object-cover opacity-90"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-orange-600 to-red-600 rounded-full opacity-20"></div>
                <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gray-600/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Main content with sidebar */}
      <div className="container mx-auto px-4 md:px-8 py-12 bg-gray-900">
        <div className="main-container">
          {/* Sidebar */}
          <div className="sidebar-container">
            <button
              className={`tab-button ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </button>
            <button
              className={`tab-button ${activeTab === "tables" ? "active" : ""}`}
              onClick={() => setActiveTab("tables")}
            >
              Tables
            </button>
            <button
              className={`tab-button ${
                activeTab === "content" ? "active" : ""
              }`}
              onClick={() => setActiveTab("content")}
            >
              Content
            </button>
          </div>

          {/* Content */}
          <div className="content-section">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
}