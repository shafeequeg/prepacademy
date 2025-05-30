import React from "react";
import { ChevronDown } from "lucide-react";
import { SalesSubjects, SalesSection } from "./types";

interface SidebarProps {
  activeMainTab: string;
  activeSubTab: string;
  activeCourse: string;
  salesSubjects: SalesSubjects[];
  salesSection: SalesSection[];
  handleSubTabClick: (tabId: string) => void;
  handleCourseClick: (courseId: string, isSection: boolean) => void;
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

    const handleToggleSubTab = (subjectId: string) => {
      // Toggle functionality: if clicking on already active tab, close it
      if (activeSubTab === subjectId) {
        handleSubTabClick(""); // Close by setting empty string
        handleCourseClick("", false); // Clear active course
      } else {
        handleSubTabClick(subjectId); // Open the clicked tab
      }
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
                    {salesSection
                      .filter((section) => {
                        const sectionSubjectId = section.subject?.toString();
                        const subjectIdStr = subject.id?.toString();
                        return sectionSubjectId === subjectIdStr;
                      })
                      .map((section) => {
                        const sectionId = section.id?.toString() || "";
                        const sectionName = section.section_name || "";

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
                              handleCourseClick(sectionId, true);
                            }}
                          >
                            {sectionName}
                          </div>
                        );
                      })}
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

export default Sidebar;