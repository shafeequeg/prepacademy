import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { CourseData } from "./types";

interface CourseDetailsProps {
  currentCourseData: CourseData;
  setActiveCourse: (course: string) => void;
  handleEnrollNow: () => void;
  addToCart: (event: React.MouseEvent<HTMLButtonElement>) => void;
  addToWishlist: (event: React.MouseEvent<HTMLButtonElement>) => void;
  parsePriceToNumber: (priceString: string | undefined) => number;
  isEnrolling: boolean;
}

const CourseDetails: React.FC<CourseDetailsProps> = React.memo(
  ({
    currentCourseData,
    setActiveCourse,
    handleEnrollNow,
    addToCart,
    addToWishlist,
    parsePriceToNumber,
    isEnrolling,
  }) => {
    const handleBackToCourses = () => {
      setActiveCourse(""); // Clear the active course to return to course list
      
      // Add scroll behavior for mobile screens only
      if (window.innerWidth < 768) { // md breakpoint
        setTimeout(() => {
          // Try to find the course list area
          const courseListArea = document.querySelector('.course-content') ||
                                document.querySelector('[class*="course-content"]') ||
                                document.querySelector('[class*="md:col-span-3"]');
          
          if (courseListArea) {
            courseListArea.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest'
            });
          } else {
            // Fallback: scroll to top of content area
            window.scrollTo({
              top: window.innerHeight * 0.3,
              behavior: 'smooth'
            });
          }
        }, 100); // Small delay to ensure DOM is updated
      }
    };

    console.log(parsePriceToNumber);
    console.log(currentCourseData);

    return (
      <div className="bg-gray-800 rounded-lg shadow-md p-6 md:col-span-3 border border-orange-600 course-details">
        <div className="mb-6">
          <button
            onClick={handleBackToCourses}
            className="text-orange-300 flex items-center text-sm hover:text-orange-200 transition-colors duration-300"
          >
            <ChevronDown className="rotate-90 mr-1" size={16} />
            Back to courses
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/5">
            <div className="relative h-64 w-full rounded-lg overflow-hidden">
              <Image
                src={currentCourseData.image || "/default-course.jpg"}
                alt={currentCourseData.title || "Course image"}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="text-2xl font-bold text-orange-400">
              {currentCourseData.title}
            </h2>
            <p className="text-orange-300 mt-2">
              {currentCourseData.description}
            </p>
            <div className="mt-4 flex items-center">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-2 py-1 rounded text-sm font-medium">
                Bestseller
              </div>
            </div>
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-orange-400">
                    ₹
                    {parseFloat(currentCourseData.amount).toLocaleString(
                      "en-IN",
                      { maximumFractionDigits: 0 }
                    )}
                  </span>
                  <span className="ml-2 text-orange-300 line-through">
                    ₹
                    {(
                      Math.floor(Number(currentCourseData.amount)) +
                      Math.floor(Math.random() * 9000 + 1000)
                    ).toLocaleString("en-US")}
                  </span>
                </div>
              </div>
              <p className="text-orange-300 text-sm mt-1">
                Duration: {currentCourseData.duration}
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleEnrollNow}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 px-6 rounded-lg font-medium flex-1 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                {isEnrolling ? (
                  <div className="flex items-center justify-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </div>
                ) : (
                  "Buy Now"
                )}
              </button>
              <button
                onClick={addToCart}
                className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Add to Cart
              </button>
              <button
                onClick={addToWishlist}
                className="border border-orange-500 text-orange-400 hover:bg-orange-800 py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105"
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Course Features
          </h3>
          <div className="text-orange-300">
            <ul className="list-disc list-inside space-y-2">
              {currentCourseData.course_features
                .split(" * ")
                .map((feature, index) => (
                  <li key={index} className="leading-relaxed">
                    {feature.trim().replace(/^\*\s*/, "")}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-orange-600 pt-6">
          <h3 className="text-xl font-semibold text-orange-400 mb-4">
            Course Description
          </h3>
          <p className="text-orange-300">
            {currentCourseData.course_description}
          </p>
        </div>
      </div>
    );
  }
);

CourseDetails.displayName = "CourseDetails";

export default CourseDetails;