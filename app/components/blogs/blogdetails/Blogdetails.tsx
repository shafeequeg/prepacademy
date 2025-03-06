"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import blogContent from '@/app/components/blogs/blogdetails/blogdata.json'; // Adjust the import path as needed


interface BlogDetailsProps {
  id: string; // Use string if coming from URL params
}

export default function BlogDetails({ id }: BlogDetailsProps) {
  const blogsdetails = [
    {
      id: 1,
      title: "Best IPM BBA Coaching & Exam Preparation Institute in India",
      description: "Your Path to Success",
      image: "/blogs/blog1.png",
    },
    {
      id: 2,
      title: "CAT Exam Preparation: Ace the CAT ",
      description: "Essential Tips and Resources for Exam Preparation",
      image: "/blogs/blog2.png",
    },
    {
      id: 3,
      title: "Important Study Hacks for CAT 2025 Students",
      description: "Important Study Hacks for CAT 2025 Students",
      image: "/blogs/blog3.png",
    },
    {
      id: 4,
      title: "CAT 2025 Course",
      description: "CAT 2025 Courses: Which One is Right for You?",
      image: "/blogs/blog4.png",
    },
    {
      id: 5,
      title: "CAT 2025 Exam Preparation",
      description: "From Zero to Hero: Comprehensive CAT 2025 Exam Preparation",
      image: "/blogs/blog5.png",
    },
    {
      id: 6,
      title: "Prep Academy Blog - Strategy for CAT 2025 Mastering the CAT: ",
      description: "Mastering the CAT: A Comprehensive Strategy for CAT 2025",
      image: "/blogs/blog6.png",
    },
    {
      id: 7,
      title: "Unlock Your Potential",
      description: "The Best CAT 2025 Classes to Join",
      image: "/blogs/blog7.png",
    },
    {
      id: 8,
      title: "CAT 2025",
      description: "The Ultimate Guide to Preparing and Succeeding",
      image: "/blogs/blog8.png",
    },
    {
      id: 9,
      image: "/aboutusnews/aboutusnews1.jpeg",
      title: "Registration and examination date announced “NMMIMS NPAT 2025”",
      description: "The Narsee Monjee Institute of Management Studies (NMIMS) has announced the registration and examination dates for the NPAT 2025. The registration process commenced in mid-December 2024 and will continue until April 2025. The examination is scheduled to be held from March 1 to May 31, 2025. ",
    },
    {
      id: 10,
      title: "NTA CUET 2025: UG Registration, Exam Dates, Notification, Eligibility, Pattern (Revised), Syllabus",
      description: "The National Testing Agency (NTA) is set to commence the registration process for the Common University Entrance Test (CUET) 2025 for undergraduate (UG) programs. The registration is expected to begin in the first week of February 2025 and will conclude in the first week of April 2025. Prospective candidates can apply online through the official CUET website: cuet.nta.nic.in. ",
      image: "/aboutusnews/aboutusnews2.jpeg",
    },

    {
      id: 11,
      image: "/news3.png",
      title: "How to Crack CAT?",
      description: "Cracking the Common Admission Test (CAT) 2025 requires a strategic and disciplined approach. Here's a comprehensive guide to help you prepare effectively:",
    },
  ];

  // Find the blog with the matching ID
  const blog = blogsdetails.find((b) => b.id === Number(id));

  const content = blogContent.find((c) => c.id === Number(id));
console.log(blogContent);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="bg-gray-900 text-white h-fit mt-24 "> {/* Added margin-top here */}
      {/* Header Section */}
     
      <div className="">
        <div className="relative ">
          <div className="w-3/4 h-80 relative mx-auto text-center  ">
            <Image
              src={blog.image}
              alt="Blog Header"
              fill
              className="object-cover opacity-50 mt-5"
            />
          </div>
          
          <div className="container mx-auto px-4 md:px-8 absolute top-0 left-0 right-0 pt-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-4">
                <span className="bg-orange-600 text-white px-2 py-1 text-xs uppercase font-medium">
                  CAT2025
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-2">
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
        <div className="container mx-auto px-4 md:px-8 py-8  mt-4">
          <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
            {/* Sidebar */}
            <div className="w-full md:w-52 md:flex-shrink-0">
              <div className="border-l-2 border-orange-600 pl-4 mb-6">
                <h3 className="text-lg font-medium text-orange-600 mb-2">Online Class</h3>
                <Link href="#" className="block text-gray-300 text-base mb-2 hover:text-white font-semibold">
                  What&apos;s on 2025
                </Link>
                <Link href="#" className="block text-gray-300 text-base mb-2 hover:text-white font-semibold">
                  Special Classes
                </Link>
                <Link href="#" className="block text-gray-300 text-base mb-2 hover:text-white font-semibold">
                  Session Timings
                </Link>
              </div>
              
              <div className="mb-6">
                <p className="text-sm mb-2">Share this on</p>
                <div className="flex gap-2">
                  <Link href="#" className="bg-blue-800 p-2 rounded-full hover:bg-blue-700" aria-label="Share on Facebook">
                    <FaFacebook />
                  </Link>
                  <Link href="#" className="bg-blue-400 p-2 rounded-full hover:bg-blue-500" aria-label="Share on Twitter">
                    <FaTwitter />
                  </Link>
                  <Link href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-500" aria-label="Share on LinkedIn">
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {/* <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Based On Past Trends</h2>
                <p className="text-gray-300 mb-4 text-sm">
                  {blog.description}
                </p>
              </div> */}

              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Exams And Criteria</h2>
                <div className="space-y-2 pl-0"> {/* Removed bullets */}
                  {content?.criteria.map((item, index) => (
                    <p key={index} className="text-gray-300 text-sm">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Blogs Section */}
        <div className="bg-gray-950 py-8">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-xl font-bold mb-6">
                <span className="text-white">Other</span>
                <span className="text-orange-600">Blogs</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Blog Card 1 */}
                <div className="bg-gray-900 rounded overflow-hidden">
                  <div className="relative h-40">
                    <Image src="/blogcommonimage.png" alt="Blog Thumbnail" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2">Strategies for CAT 2025</h3>
                    <p className="text-gray-400 text-xs mb-3">Preparing for the CAT 2025 exam is a significant step to...</p>
                    <Link href="#" className="text-orange-600 text-xs hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>

                {/* Blog Card 2 */}
                <div className="bg-gray-900 rounded overflow-hidden">
                  <div className="relative h-40">
                    <Image src="/blogdetailsblog.png" alt="Blog Thumbnail" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2">Ace the CAT Essential</h3>
                    <p className="text-gray-400 text-xs mb-3">Preparing for the CAT 2025 exam is a significant step to...</p>
                    <Link href="#" className="text-orange-600 text-xs hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>

                {/* Blog Card 3 */}
                <div className="bg-gray-900 rounded overflow-hidden">
                  <div className="relative h-40">
                    <Image src="/blogcommonimage.png" alt="Blog Thumbnail" fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2">How to Crack CAT?</h3>
                    <p className="text-gray-400 text-xs mb-3">Preparing for the CAT 2025 exam is a significant step to...</p>
                    <Link href="#" className="text-orange-600 text-xs hover:underline">
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <Link href="#" className="text-gray-300 hover:text-white inline-flex items-center gap-1">
                  View More <span className="text-xs">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}