"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
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

interface StaticBlog {
  id: number;
  title: string;
  description: string;
  image: string;
  alt_img_text: string;
  category_name?: string;
}

const createMarkup = (htmlContent: string) => {
  const modifiedHtml = htmlContent
    .replace(/<img/g, '<div class="image-container"><img')
    .replace(/<\/img>/g, "</img></div>");
  return { __html: modifiedHtml };
};

// Function to convert table to mobile-friendly format - UPDATED VERSION
const createResponsiveTable = (tableHtml: string) => {
  const tableRegex = /<table[^>]*>([\s\S]*?)<\/table>/;
  const match = tableHtml.match(tableRegex);

  if (!match) return tableHtml;

  const tableContent = match[1];
  const rowRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;

  let headers: string[] = [];
  const rows: string[][] = [];
  let rowMatch;
  let isFirstRow = true;

  while ((rowMatch = rowRegex.exec(tableContent)) !== null) {
    const rowContent = rowMatch[1];

    if (isFirstRow) {
      const headerRegex = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g;
      let headerMatch;

      while ((headerMatch = headerRegex.exec(rowContent)) !== null) {
        headers.push(headerMatch[1].replace(/<[^>]*>/g, "").trim());
      }

      if (/<th[^>]*>/i.test(rowContent)) {
        isFirstRow = false;
        continue;
      }
    }

    const cellRegex = /<td[^>]*>([\s\S]*?)<\/td>/g;
    const cells: string[] = [];
    let cellMatch;

    while ((cellMatch = cellRegex.exec(rowContent)) !== null) {
      cells.push(cellMatch[1].replace(/<[^>]*>/g, "").trim());
    }

    if (cells.length > 0) {
      rows.push(cells);
    }

    isFirstRow = false;
  }

  if (headers.length === 0 && rows.length > 0) {
    headers = rows[0].map((_, index) => `Column ${index + 1}`);
  }

  let mobileTableHtml = '<div class="mobile-table-scroll-wrapper"><table>';

  if (headers.length > 0) {
    mobileTableHtml += "<thead><tr>";
    headers.forEach((header) => {
      mobileTableHtml += `<th style="background-color: transparent;">${header}</th>`;
    });
    mobileTableHtml += "</tr></thead>";
  }

  mobileTableHtml += "<tbody>";
  rows.forEach((row) => {
    mobileTableHtml += "<tr>";
    row.forEach((cell) => {
      mobileTableHtml += `<td>${cell}</td>`;
    });
    mobileTableHtml += "</tr>";
  });
  mobileTableHtml += "</tbody></table></div>";

  return `
    <div class="table-responsive-wrapper">
      <div class="desktop-table">${tableHtml.replace(
        /border=[^>]*|style=['"][^'"]*border[^'"]*['"]/gi,
        ""
      )}</div>
      <div class="mobile-table-container">
        <div class="mobile-table">${mobileTableHtml}</div>
      </div>
    </div>
  `;
};

export default function BlogDetailslatest({ id }: BlogDetailsProps) {
  const [activeTab, setActiveTab] = useState("all");
  const [allBlog, setAllBlog] = useState<Blog[]>([]);

  const blogsdetails: StaticBlog[] = [
    {
      id: 1,
      title: "Best IPM BBA Coaching & Exam Preparation Institute in India",
      description: `
        <div class="introduction">
          <h2>Introduction</h2>
          <p>Mi tincidunt elit, id quisque ligula ac diam, amet. Vel enim suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, vitae maecenas et mauris a, ac cursus mauris.</p>
          
          <p>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at molestie tristique rhoncus, donec. In turpis vel et quam pellentesque. Ipsum molestie aliquet sodales id est ac volutpat.</p>
          
          <blockquote>"In a world older and more complete than ours they move finished and complete, gifted with extensions of the senses we have lost or never attained, living by voices we shall never hear."</blockquote>
          <cite>- Olivia Rhye, Product Designer</cite>
          
          <p>Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla odio nisl vitae. In aliquet pellentesque aenean hac vestibulum turpis mi bibendum diam. Tempor integer aliquam in vitae malesuada fringilla.</p>
          
          <table>
            <tr>
              <th>Course</th>
              <th>Duration</th>
              <th>Fee</th>
              <th>Rating</th>
            </tr>
            <tr>
              <td>IPM BBA</td>
              <td>2 Years</td>
              <td>₹50,000</td>
              <td>4.8/5</td>
            </tr>
            <tr>
              <td>CAT Preparation</td>
              <td>1 Year</td>
              <td>₹35,000</td>
              <td>4.7/5</td>
            </tr>
            <tr>
              <td>GMAT Coaching</td>
              <td>6 Months</td>
              <td>₹40,000</td>
              <td>4.9/5</td>
            </tr>
          </table>
        </div>
      `,
      image: "/blogs/blog1.png",
      alt_img_text: "",
      category_name: "Education",
    },
    {
      id: 2,
      title: "CAT Exam Preparation: Ace the CAT",
      description: "Essential Tips and Resources for Exam Preparation",
      image: "/blogs/blog2.png",
      alt_img_text: "",
      category_name: "CAT Preparation",
    },
    // ... other blogs
  ];

  const fetchBlogs = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
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
      <div className="bg-gray-900 text-white h-fit mt-24">
        <div className="container mx-auto px-4 md:px-8 py-8 text-center">
          <div className="text-6xl mb-4">📝</div>
          <h2 className="text-2xl font-bold text-white mb-2">Blog Not Found</h2>
          <p className="text-gray-400">
            The blog post you&pos;re looking for doesn&pos;t exist.
          </p>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    if (!blog?.description) return null;

    let contentToRender = "";

    switch (activeTab) {
      case "all":
        contentToRender = blog.description;
        break;
      case "tables":
        const tablesContent =
          blog.description.match(/<table[^>]*>[\s\S]*?<\/table>/g) || [];
        if (tablesContent.length === 0) {
          return (
            <div className="blog-content">
              <p className="text-gray-400 text-center py-8">
                No tables found in this content.
              </p>
            </div>
          );
        }
        contentToRender = tablesContent.join("");
        break;
      case "content":
        contentToRender = blog.description.replace(
          /<table[^>]*>[\s\S]*?<\/table>/g,
          ""
        );
        break;
      default:
        return null;
    }

    // Process tables for responsiveness
    const processedContent = contentToRender.replace(
      /<table[^>]*>[\s\S]*?<\/table>/g,
      (match) => createResponsiveTable(match)
    );

    return (
      <div
        className="blog-content prose prose-invert max-w-none"
        dangerouslySetInnerHTML={createMarkup(processedContent)}
      />
    );
  };

  return (
    <div className="bg-gray-900 text-white h-fit mt-24">
      {/* Header Section */}
      <div className="">
        <div className="relative">
          <div className="w-full md:w-3/4 h-60 md:h-80 relative mx-auto text-center">
            <Image
              src={blog.image}
              alt={blog.alt_img_text || blog.title}
              fill
              className="object-cover opacity-50 mt-5"
            />
          </div>

          <div className="container mx-auto px-4 md:px-8 absolute top-0 left-0 right-0 pt-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 px-2">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-8 py-8 mt-4">
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            {/* Sidebar */}
            <div className="w-full md:w-52 md:flex-shrink-0">
              <div className="border-l-2 border-orange-600 pl-4 mb-6">
                <h3 className="text-lg font-medium text-orange-600 mb-2">
                  Content Navigation
                </h3>
                <button
                  className={`block text-base mb-2 font-semibold w-full text-left ${
                    activeTab === "all"
                      ? "text-orange-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("all")}
                >
                  Overview
                </button>
                <button
                  className={`block text-base mb-2 font-semibold w-full text-left ${
                    activeTab === "tables"
                      ? "text-orange-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("tables")}
                >
                  Visual Tables
                </button>
                <button
                  className={`block text-base mb-2 font-semibold w-full text-left ${
                    activeTab === "content"
                      ? "text-orange-600"
                      : "text-gray-300 hover:text-white"
                  }`}
                  onClick={() => setActiveTab("content")}
                >
                  Reading Material
                </button>
              </div>

              <div className="mb-6">
                <p className="text-sm mb-2">Share this on</p>
                <div className="flex gap-2">
                  <Link
                    href="https://www.facebook.com/prepacademy.in"
                    className="bg-blue-800 p-2 rounded-full hover:bg-blue-700"
                    aria-label="Share on Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </Link>
                  <Link
                    href="https://www.instagram.com/prepacademy.in/"
                    className="bg-gradient-to-r from-[#f09433]  via-[#dc2743] to-[#cc2366] p-2 rounded-full hover:opacity-90 transition-opacity"
                    aria-label="Share on Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="text-white" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/prep-academy-india/"
                    className="bg-blue-600 p-2 rounded-full hover:bg-blue-500"
                    aria-label="Share on LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* Content Section */}
              <div className="mb-8">
                <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-600">
                  {renderContent()}
                </div>
              </div>

              {/* Tables Section - Only show when activeTab is "all" */}
              {/* Tables Section - Only show when activeTab is "all" */}
              {activeTab === "all" && (
                <div className="mb-8">
                  {(() => {
                    const tables = blog.description.match(
                      /<table[^>]*>[\s\S]*?<\/table>/g
                    );
                    if (tables && tables.length > 0) {
                      return (
                        <>
                          <h2 className="text-xl font-bold mb-4 text-orange-600">
                            Data Tables
                          </h2>
                          <div className="space-y-6">
                            {tables.map((table, index) => (
                              <div
                                key={index}
                                className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-orange-600"
                                dangerouslySetInnerHTML={{
                                  __html: createResponsiveTable(table),
                                }}
                              />
                            ))}
                          </div>
                        </>
                      );
                    }
                    return null; // Don't render anything if no tables found
                  })()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .blog-content * {
          color: #ffffff !important;
        }

        .blog-content p,
        .blog-content div,
        .blog-content span,
        .blog-content li,
        .blog-content ul,
        .blog-content ol,
        .blog-content strong,
        .blog-content em,
        .blog-content b,
        .blog-content i {
          color: #ffffff !important;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          color: white !important;
          font-weight: 600;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }

        .blog-content h2 {
          font-size: 1.875rem;
          border-bottom: 2px solid #f97316;
          padding-bottom: 0.5rem;
        }

        .blog-content p {
          color: #ffffff !important;
          line-height: 1.75;
          margin-bottom: 1.5rem;
        }

        .blog-content blockquote {
          border-left: 4px solid #f97316;
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          background: #374151;
          border-radius: 0.5rem;
          font-style: italic;
          color: #ffffff !important;
          font-size: 1.125rem;
        }

        .blog-content cite {
          color: #f97316;
          font-size: 0.875rem;
          font-weight: 500;
        }

        .blog-content img {
          border-radius: 1rem;
          margin: 2rem 0;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
          max-width: 100%;
          height: auto;
        }

        /* Enhanced Desktop Table Styles - Updated to match first screenshot */
        .desktop-table table {
          border-radius: 0;
          overflow: visible;
          margin: 2rem 0;
          border: 1px solid #4a5568;

          width: 100%;
          border-collapse: collapse;
          border: none;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
        }

        .desktop-table thead {
          background: #ff6b35;
          position: relative;
        }

        .desktop-table thead::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          pointer-events: none;
        }

        .desktop-table th {
          background: transparent;
          color: #ffffff !important;
          padding: 20px 24px;
          text-align: left;
          font-weight: 700;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border: 1px solid #4a5568;
          position: relative;
          text-shadow: none;
        }

        .desktop-table tbody {
          background: transparent;
        }

        .desktop-table td {
          padding: 18px 24px;
          border: 1px solid #4a5568;
          color: #ffffff !important;
          font-weight: 400;
          font-size: 15px;
          position: relative;
          text-shadow: none;
          background: transparent;
        }

        .desktop-table tbody tr:last-child td {
          border-bottom: 1px solid #4a5568;
        }

        .desktop-table tbody tr {
          transition: all 0.3s ease;
          background: transparent;
        }

        .desktop-table tbody tr:hover {
          background: rgba(255, 107, 53, 0.1);
          transform: none;
        }

        .desktop-table tbody tr:nth-child(even) {
          background: rgba(255, 255, 255, 0.03);
        }

        .desktop-table tbody tr:nth-child(even):hover {
          background: rgba(255, 107, 53, 0.1);
        }

        /* Table Responsive Wrapper */
        .table-responsive-wrapper {
          margin: 2rem 0;
          border-radius: 8px;
          overflow: hidden;
        }

        .mobile-table-container {
          display: none;
        }

        .mobile-table-container .mobile-table {
          background: #2d3748;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          width: 100%;
        }

        .mobile-table-container .mobile-table table {
          width: 100%;
          min-width: 100%;
          border-collapse: collapse;
          font-size: 12px;
          border: 1px solid #4a5568;

          background: transparent;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            "Helvetica Neue", Arial, sans-serif;
        }

        .mobile-table-container .mobile-table thead {
          background: #ff6b35; /* Solid orange header instead of gradient */
          position: relative;
        }

        .mobile-table-container .mobile-table thead::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: transparent;
          pointer-events: none;
        }

        .mobile-table-container .mobile-table th {
          background: transparent;
          color: #ffffff !important;
          padding: 16px 12px;
          text-align: left;
          font-weight: 700;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          white-space: nowrap;
          border: 1px solid #4a5568;
          position: relative;
          text-shadow: none;
        }

        .mobile-table-container .mobile-table tbody {
          background: transparent;
        }

        .mobile-table-container .mobile-table td {
          padding: 14px 12px;
          border: 1px solid #4a5568;
          color: #ffffff !important;
          font-weight: 400;
          white-space: nowrap;
          text-shadow: none;
          background: transparent;
          font-size: 11px;
        }

        .mobile-table-container .mobile-table tbody tr:nth-child(even) {
          background: rgba(255, 255, 255, 0.03);
        }

        .mobile-table-container .mobile-table tbody tr:hover {
          background: rgba(255, 107, 53, 0.1);
        }

        .mobile-table-container .mobile-table tbody tr:nth-child(even):hover {
          background: rgba(255, 107, 53, 0.1);
        }

        /* Horizontal scroll wrapper for very small screens */
        .mobile-table-scroll-wrapper {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          border-radius: 8px;
        }

        .image-container {
          text-align: center;
          margin: 2rem 0;
        }

        .image-container img {
          max-width: 100%;
          height: auto;
        }

        /* Override any inherited text colors */
        .blog-content .introduction *,
        .blog-content .introduction p,
        .blog-content .introduction div {
          color: #ffffff !important;
        }

        /* Mobile Responsive Styles */
        @media (max-width: 768px) {
          .blog-content h2 {
            font-size: 1.5rem;
          }

          .blog-content blockquote {
            margin: 1.5rem 0;
            padding: 1rem 1.5rem;
            font-size: 1rem;
          }

          .blog-content img {
            margin: 1.5rem 0;
          }

          /* Hide desktop table and show mobile version */
          .desktop-table {
            display: none;
          }

          .mobile-table-container {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .blog-content {
            font-size: 0.9rem;
          }

          .blog-content h2 {
            font-size: 1.25rem;
          }

          .blog-content blockquote {
            padding: 0.75rem 1rem;
            font-size: 0.9rem;
          }

          .mobile-table-container .mobile-table th {
            padding: 14px 10px;
            font-size: 10px;
          }

          .mobile-table-container .mobile-table td {
            padding: 12px 10px;
            font-size: 10px;
          }
        }
      `}</style>
    </div>
  );
}
