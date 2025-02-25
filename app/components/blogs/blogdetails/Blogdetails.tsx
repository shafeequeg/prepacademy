"use client";

import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function BlogDetails() {

  
  return (
    <div className="bg-gray-900 text-white h-fit ">
      {/* Header Section */}
      <div className="">
      <div className="relative ">
        <div className="w-3/4 h-80 relative mx-auto text-center ">
          <Image
            src="/blogcommonimage.png"
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
              Strategies For CAT 2025
            </h1>
            
            <div className="text-gray-300 text-sm mb-4">
              Posted on 10 February 2025 | 2:05 PM
              <br />
              By: Ashwani Nair
            </div>
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
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Based On Past Trends</h2>
              <p className="text-gray-300 mb-4 text-sm">
                Based on past trends, the CAT 2025 exam is expected to be held on the last Sunday of November 2025. The official notification is expected to be released towards the end of July 2025.
                <strong className="text-white"> Welcome to Prep Academy </strong>
                – where dreams take flight, and ambitions get a structured hold over learning. Whether you&apos;re aiming towards IIM-A, IIM-B, IIM-C or FMS, we&apos;ve got expert mentors by your side to make your journey smooth, engaging, and a learning experience that&apos;s anything but ordinary.
              </p>
              <p className="text-gray-300 mb-4 text-sm">
                Based on past trends, the CAT 2025 exam is expected to be held on the last Sunday of November 2025. The official notification is expected to be released towards the end of July 2025.
                <strong className="text-white"> Welcome to Prep Academy </strong>
                – where dreams take flight, and ambitions soar. At Prep Academy, we don&apos;t just teach with top-notch mentors, AI-driven insights, and bleeding-edge tech; we&apos;re shifting paradigms.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4">Exams And Criteria</h2>
              <ul className="list-disc pl-6 text-gray-300 text-sm space-y-2">
                <li>The Common Admission Test is the gateway for admission to the MBA programs at prestigious IIMs.</li>
                <li>The CAT 2025 will assess all undergraduate degree holders for eligibility for CAT 2025. The minimum graduation percentage should be (50% / 45%) to be eligible to appear.</li>
                <li>To qualify for the exam, candidates must register within the given deadline and must have a minimum of 3 years of education after completing class XII.</li>
                <li>Taking coaching classes, group mock exams, and relevant study materials can help candidates prepare for the exam.</li>
              </ul>
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