import React, { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SalesSubjects, SalesSection } from "./types";
import axiosInstance from "@/app/components/apiconfig/axios";
import { API_URLS } from "@/app/components/apiconfig/api_urls";

interface SidebarProps {
  activeMainTab: string;
  activeSubTab: string;
  activeCourse: string;
  salesSubjects: SalesSubjects[];
  salesSection: SalesSection[];
  handleSubTabClick: (tabId: string) => void;
  handleCourseClick: (courseId: string, isSection: boolean) => void;
}

interface CourseData {
  id?: number;
  subject?: number;
  subject_name: string;
  section_name: string;
}

interface CourseSectionData {
  id?: number;
  uuid?: string;
  subject_name: string;
  section_name: string;
  course: number;
  course_name: string;
  section: number;
  title: string;
  description: string;
  course_features: string;
  image: string;
  course_description: string;
  duration: string;
  amount: string;
}

const Sidebar: React.FC<SidebarProps> = React.memo(
  ({
    activeMainTab,
    activeSubTab,
    activeCourse,
    salesSubjects,
    salesSection,
    handleSubTabClick,
    handleCourseClick,
  }) => {
    const activeCategorySubjects = salesSubjects.filter(
      (subject) => subject.course?.toString() === activeMainTab?.toString()
    );

    console.log(salesSubjects);
    console.log(activeCourse);
    console.log(salesSection);
    console.log(activeMainTab);

    const [salesCourses, setSalesCourses] = useState<CourseSectionData[]>([]);
    const [salesCoursessection, setsalesCoursessection] = useState<
      CourseData[]
    >([]);

    const fetchSaleCourse = async () => {
      try {
        const response = await axiosInstance.get(
          API_URLS.SALEPAGE_COURSE.GET_SALEPAGE_COURSE
        );
        setSalesCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    const fetchSaleCoursesection = async () => {
      try {
        const response = await axiosInstance.get(
          API_URLS.SALEPAGE_COURSE_SECTION.GET_SALEPAGE_COURSE_SECTION
        );
        setsalesCoursessection(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    console.log(salesCourses);
    console.log(salesCoursessection);

    useEffect(() => {
      fetchSaleCourse();
      fetchSaleCoursesection();
    }, []);

    const handleToggleSubTab = (subjectId: string) => {
      // Toggle functionality: if clicking on already active tab, close it
      if (activeSubTab === subjectId) {
        handleSubTabClick(""); // Close by setting empty string
        handleCourseClick("", false); // Clear active course
      } else {
        handleSubTabClick(subjectId); // Open the clicked tab
      }
    };

    // Enhanced course click handler with mobile scroll
    const handleCourseClickWithScroll = (
      courseId: string,
      isSection: boolean
    ) => {
      handleCourseClick(courseId, isSection);

      // Add scroll behavior for mobile screens only
      if (window.innerWidth < 768) {
        // md breakpoint
        setTimeout(() => {
          // Try to find the course content area (adjust selector as needed)
          const courseContentArea =
            document.querySelector('[class*="md:col-span-3"]') ||
            document.querySelector('[class*="course-content"]') ||
            document.querySelector(".course-list") ||
            document.querySelector(".course-details");

          if (courseContentArea) {
            courseContentArea.scrollIntoView({
              behavior: "smooth",
              block: "start",
              inline: "nearest",
            });
          } else {
            // Fallback: scroll to a reasonable position
            window.scrollTo({
              top: window.innerHeight * 0.5, // Scroll to middle of viewport
              behavior: "smooth",
            });
          }
        }, 100); // Small delay to ensure DOM is updated
      }
    };

    // Function to get filtered sections for a subject
    const getFilteredSections = (subjectId: string) => {
      // First, find matching sections from salesCoursessection where subject matches subjectId
      const matchingSections = salesCoursessection.filter(
        (courseSection) => courseSection.subject?.toString() === subjectId
      );

      // Then filter salesSection based on the matching section IDs
      return salesSection.filter((section) => {
        return matchingSections.some(
          (courseSection) =>
            courseSection.id?.toString() === section.id?.toString()
        );
      });
    };

    // Function to get course count for a section
    const getCourseCountForSection = (sectionId: string) => {
      // Find the corresponding section in salesCoursessection
      const matchingCourseSection = salesCoursessection.find(
        (courseSection) => courseSection.id?.toString() === sectionId
      );

      if (!matchingCourseSection) return 0;

      // Count courses in salesCourses that match this section
      return salesCourses.filter(
        (course) =>
          course.section?.toString() === matchingCourseSection.id?.toString()
      ).length;
    };

    console.log(activeCategorySubjects);
    console.log(activeSubTab);

    return (
      <div className="bg-gray-800 rounded-lg shadow-md p-4 md:col-span-1 border border-orange-600">
        <h2 className="font-semibold text-orange-400 mb-4">Categories</h2>
        <div className="space-y-2">
          {activeCategorySubjects.map((subject) => {
            const subjectId = subject.id?.toString() || "";
            const isActive = activeSubTab === subjectId;
            const filteredSections = getFilteredSections(subjectId);

            console.log(subject);
            console.log(subjectId);
            console.log(isActive);
            console.log(
              "Filtered sections for subject:",
              subjectId,
              filteredSections
            );

            return (
              <div key={subject.id} className="border-b border-orange-600 pb-2">
                <div
                  className={`flex justify-between items-center py-2 px-3 rounded-md cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white"
                      : "hover:bg-gradient-to-r from-orange-700 to-orange-600 text-orange-300"
                  } transition-all duration-300`}
                  onClick={() => handleToggleSubTab(subjectId)}
                >
                  <span className="font-medium text-sm">
                    {subject.subject_name}
                  </span>
                  <span>
                    <ChevronDown
                      size={16}
                      className={`text-orange-300 transition-transform duration-300 ${
                        isActive ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </span>
                </div>
                {isActive && (
                  <div className="pl-4 mt-1 space-y-1 animate-fadeIn">
                    {filteredSections.map((section) => {
                      const sectionId = section.id?.toString() || "";
                      const sectionName = section.section_name || "";
                      const courseCount = getCourseCountForSection(sectionId);
                      console.log(courseCount);

                      return (
                        <div
                          key={`${section.id}-${section.section_name}`}
                          className={`py-1 px-3 text-sm rounded-md cursor-pointer ${
                            activeCourse === sectionId
                              ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white"
                              : "text-orange-300 hover:bg-gradient-to-r from-orange-700 to-orange-600"
                          } transition-all duration-300`}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent parent click
                            handleCourseClickWithScroll(sectionId, true);
                          }}
                        >
                          <div className="flex justify-between items-center">
                            <span>{sectionName}</span>
                            {/* <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">
                              {courseCount}
                            </span> */}
                          </div>
                        </div>
                      );
                    })}
                    {filteredSections.length === 0 && (
                      <div className="py-1 px-3 text-sm text-orange-300 opacity-60">
                        No sections available
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
