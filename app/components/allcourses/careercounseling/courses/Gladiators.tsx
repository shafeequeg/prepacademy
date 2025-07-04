// app/components/ExamPrepHomepage.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
// import { ArrowRight } from "lucide-react";
import axiosInstance from "@/app/components/apiconfig/axios";
import { API_URLS } from "@/app/components/apiconfig/api_urls";
import { courses } from "@/app/careercounseling/Data";

interface Blog {
  id: number;
  title: string;
  category: number;
  category_name: string;
  description: string;
  image: string;
  alt_img_text: string;
}

// interface Gladiator {
//   name: string;
//   title: string;
//   image: string;
// }

interface ExamPrepHomepageProps {
  slug: string;
}

const ExamPrepHomepage: React.FC<ExamPrepHomepageProps> = ({ slug }) => {
  // Static gladiators data (since not available in content.ts for career counseling)
  const gladiators = [
    {
      name: "Hanna Susan Koshy",
      title: "Founder, Symbiosis (Economics, MBA)",
      image: "/gladiators/HannaSusanKoshy.png",
    },
    {
      name: "Dr. Nithya S Cherian",
      title: "Co-Founder",
      image: "/gladiators/DrNithyaSCherian.png",
    },
    {
      name: "Dr. Aleena Arun",
      title: "Co-Founder",
      image: "/gladiators/aleenaarun.png",
    },
    {
      name: "Annie Eapen",
      title: "Co-Founder",
      image: "/gladiators/AnnieEapen.png",
    },
    {
      name: "Praveen J Nair",
      title: "Mentor, QA Expert",
      image: "/gladiators/PraveenJNair.png",
    },
    {
      name: "Sreejith A",
      title: "Mentor, VARC Expert",
      image: "/gladiators/sreejith.png",
    },
    {
      name: "Varghese Joseph",
      title: "Mentor, QA Expert",
      image: "/gladiators/Varghese.png",
    },
    {
      name: "Dr. Swati A. Mishra",
      title: "Mentor, MIT/University of Cambridge",
      image: "/gladiators/DrSwatiAMishra.png",
    },
  ];

  // Find the course based on the slug
  const course = courses.find((c) => c.slug.toLowerCase() === slug.toLowerCase());

  const carouselRef = useRef<HTMLDivElement>(null);
  const [allBlog, setAllBlog] = useState<Blog[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(API_URLS.BLOG.GET_BLOG);
      setAllBlog(response.data.slice(0, 4));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const stripHtmlAndTruncate = (html: string | null | undefined, maxLength: number = 120): string => {
    if (!html) return "No description available";
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const text = tempDiv.textContent || tempDiv.innerText || "";
    const cleanedText = text.trim();
    return cleanedText.length > maxLength ? `${cleanedText.substring(0, maxLength)}...` : cleanedText;
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: -slideWidth,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollBy({
        left: slideWidth,
        behavior: "smooth",
      });
    }
  };

  const totalSlides = Math.ceil(gladiators.length / (isMobile ? 2 : 4));

  if (loading) {
    return (
      <section className="py-16 text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-center md:text-left">
              <span className="font-dmserif italic"> Know More With</span>{" "}
              <span className="text-[#F55D3E] font-bold not-italic">Blogs</span>
            </h2>
          </div>
          <div className="text-center text-gray-300">Loading blogs...</div>
        </div>
      </section>
    );
  }

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <header className="bg-gradient-to-r from-gray-900 to-gray-800">
        <section className="w-full bg-gradient-to-b from-[#1a0e0e] to-[#241010] py-20 px-8 relative">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left mt-8 px-8">
            <div className="flex items-center">
              <h2 className="font-serif italic text-[#FF6B45] text-2xl md:text-3xl md:mr-3">
                Meet Your Career <br />
                <span className="text-3xl md:text-5xl font-bold text-white">Gladiators</span>
              </h2>
            </div>
            <h4 className="text-gray-300 text-sm md:text-lg max-w-md leading-tight whitespace-pre-line relative px-6">
              <span className="text-2xl md:text-5xl text-gray-400 absolute -left-2 top-0">“</span>
              <span>
                Behind every student&apos;s success are passionate, <br />
                experienced educators who guide you to achieve your career goals.
              </span>
              <span className="text-2xl md:text-5xl text-gray-400 absolute -right-1 bottom-0">”</span>
            </h4>
          </div>
          <div className="max-w-7xl mx-auto mt-20 overflow-hidden relative px-4 sm:px-12">
            <button
              onClick={scrollLeft}
              className="absolute left-0 sm:left-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
              aria-label="Scroll left"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div
              ref={carouselRef}
              className="flex transition-transform duration-300 ease-in-out overflow-x-hidden"
              style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              {Array.from({ length: totalSlides }).map((_, groupIndex) => (
                <div
                  key={groupIndex}
                  className="min-w-full flex justify-center px-4 flex-wrap sm:flex-nowrap gap-4"
                  style={{ scrollSnapAlign: "start" }}
                >
                  {gladiators
                    .slice(groupIndex * (isMobile ? 2 : 4), groupIndex * (isMobile ? 2 : 4) + (isMobile ? 2 : 4))
                    .map((gladiator, index) => (
                      <div
                        key={index}
                        className="w-[calc(50%-8px)] sm:w-[calc(25%-16px)] min-w-[160px] flex-shrink-0"
                      >
                        <div className="flex flex-col items-center p-4 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg w-full h-full">
                          <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 relative overflow-hidden rounded-full mb-4 mx-auto">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Image
                                src={gladiator.image}
                                alt={gladiator.name}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                                style={{ width: "100%", height: "100%", objectPosition: "center" }}
                              />
                            </div>
                          </div>
                          <h4 className="font-semibold text-sm md:text-base text-white text-center">{gladiator.name}</h4>
                          <p className="text-[#FF6B45] text-xs md:text-sm text-center">{gladiator.title}</p>
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
            <button
              onClick={scrollRight}
              className="absolute right-0 sm:right-4 top-[40%] -translate-y-1/2 z-10 bg-[#FF6B45] text-white rounded-full p-2 shadow-lg hover:bg-[#E55A35] transition"
              aria-label="Scroll right"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${activeIndex === index ? "bg-[#FF6B45]" : "bg-gray-500"}`}
                onClick={() => {
                  setActiveIndex(index);
                  if (carouselRef.current) {
                    const slideWidth = carouselRef.current.offsetWidth;
                    carouselRef.current.scrollTo({
                      left: index * slideWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </section>
      </header>

      <div className="w-full bg-[#1a0e0e] py-6">
        <div className="max-w-screen-2xl mx-auto px-4 flex flex-row flex-wrap justify-center items-center text-white text-sm md:text-base lg:text-lg">
          <div className="flex flex-row items-center justify-center flex-wrap gap-x-6 gap-y-2">
            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">Top-Ranked Faculty</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">Master Trainers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">Gurus</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">One-On-One Mentorship</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">Zero Sugarcoating</span>
            </div>
            <div className="flex items-center space-x-2">
              <span
                className="w-5 h-5 md:w-6 md:h-6 bg-contain bg-no-repeat bg-center"
                style={{ backgroundImage: "url(/lightning.svg)" }}
              ></span>
              <span className="whitespace-nowrap font-medium">Brutal Honesty & Proven Strategies</span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="bg-black text-white">
        <div className="bg-[#FF6347] relative overflow-hidden">
          <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row-reverse items-center justify-center gap-6 md:gap-12">
            <div className="flex-shrink-0 flex justify-center">
              <Image
                src="/allcoursecollegemaster.png"
                alt="Mascot"
                width={144}
                height={144}
                className="md:w-48 md:h-52 relative top-8 object-cover"
              />
            </div>
            <div className="z-10 w-full max-w-lg text-center md:text-left">
              <h2 className="text-white text-4xl md:text-5xl font-bold mb-1">Be The Master</h2>
              <h2 className="text-white text-4xl mb-4 font-bold md:mb-2">
                #CareerBootcamp2025
              </h2>
              <button className="bg-white text-[#FF6347] px-6 py-2 rounded font-medium hover:bg-gray-100 transition-colors flex items-center mx-auto md:mx-0">
                GET EARLY ACCESS <ArrowRight size={16} className="ml-2" />
              </button>
            </div>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-4 left-8 w-12 h-12 border-2 border-white rounded-md"></div>
              <div className="absolute bottom-4 left-1/4 w-8 h-8 border-2 border-white"></div>
              <div className="absolute top-1/2 left-1/3 w-16 h-1 bg-white"></div>
              <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-4xl font-semibold text-center mb-6 ml-2">
          <span className="text-[#FF6347] font-serif italic">Latest</span>{" "}
          <span className="text-white font-normal text-4xl">Notifications</span>
        </h2>
        <div className="bg-[#231515] rounded-lg p-8">
          {course.notifications.map((notification, index) => (
            <div key={index} className="mb-4 pb-4">
              <div className="text-white bg-[#FF6347] text-sm inline-block px-2 py-1 rounded mb-3">
                {notification.category}
              </div>
              <p className="text-gray-300 text-base md:text-lg flex">
                <span className="text-[#FF6347] mr-2">•</span>
                {notification.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="p-6 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-center md:text-left">
              <span className="font-dmserif italic">Know More With</span>{" "}
              <span className="text-[#F55D3E] font-bold not-italic">Blogs</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mb-10">
            {allBlog.map((blog) => (
              <div
                key={blog.id}
                className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative w-full aspect-video">
                  <Image
                    src={blog.image || "/default-blog.jpg"}
                    alt={blog.alt_img_text || blog.title}
                    fill
                    className="absolute inset-0 w-full h-full object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{blog.title}</h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                    {stripHtmlAndTruncate(blog.description)}
                  </p>
                  <a
                    href={`/blogdetails/${blog.id}`}
                    className="inline-flex items-center text-[#F55D3E] hover:text-[#FF7D5E] font-medium"
                  >
                    Read Full
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
          {allBlog.length > 0 && (
            <div className="text-center">
              <a
                href="/blogs"
                className="inline-flex items-center text-white hover:text-gray-200 font-medium"
              >
                View More
                <svg
                  className="w-5 h-5 ml-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ExamPrepHomepage;