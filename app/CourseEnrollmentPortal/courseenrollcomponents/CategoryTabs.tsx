import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import { Search, X } from "lucide-react";
import { SalesCategory } from "./types";

// Define course interface for autocomplete - updated to match CourseData
interface Course {
  id?: number;
  title?: string;
  description?: string;
  amount?: string;
  duration?: string;
  course_features?: string;
  course_description?: string;
  image?: string;
  course?: number;
  section?: number;
  uuid?: string;
}

interface CategoryTabsProps {
  salesCategories: SalesCategory[];
  activeMainTab: string;
  setActiveMainTab: (tab: string) => void;
  setActiveSubTab: (tab: string) => void;
  setActiveCourse: (course: string) => void;
  onSearch?: (searchTerm: string) => void;
  // New prop for course navigation
  onCourseSelect?: (courseTitle: string) => void;
  // New prop to get all courses for autocomplete
  allCourses?: Course[];
}

const CategoryTabs: React.FC<CategoryTabsProps> = React.memo(({ 
  salesCategories, 
  activeMainTab, 
  setActiveMainTab, 
  setActiveSubTab, 
  setActiveCourse,
  onSearch,
  onCourseSelect,
  allCourses = []
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  
  const searchInputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  console.log(salesCategories);

  // Memoize filtered courses to prevent unnecessary re-renders
  const filteredCourses = useMemo(() => {
    if (!searchTerm.trim()) {
      return [];
    }
    const filtered = allCourses.filter(course =>
      course.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.course_description?.toLowerCase().includes(searchTerm.toLowerCase())
    ).slice(0, 6);
    
    console.log('Search term:', searchTerm);
    console.log('All courses count:', allCourses.length);
    console.log('Filtered courses:', filtered);
    
    return filtered;
  }, [searchTerm, allCourses]);

  // Update suggestions visibility when filtered courses change
  useEffect(() => {
    setShowSuggestions(searchTerm.trim() !== '' && filteredCourses.length > 0);
    setSelectedSuggestionIndex(-1);
  }, [filteredCourses, searchTerm]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node) &&
          searchInputRef.current && !searchInputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = useCallback(() => {
    if (onSearch) {
      onSearch(searchTerm);
    }
    setShowSuggestions(false);
  }, [onSearch, searchTerm]);

  const handleClearSearch = useCallback(() => {
    setSearchTerm("");
    setIsSearchActive(false);
    setShowSuggestions(false);
    if (onSearch) {
      onSearch("");
    }
  }, [onSearch]);

  const handleSuggestionClick = useCallback((course: Course) => {
    setSearchTerm(course.title || "");
    setShowSuggestions(false);
    if (onCourseSelect && course.title) {
      onCourseSelect(course.title);
    }
    // Also trigger the original search functionality
    if (onSearch) {
      onSearch(course.title || "");
    }
  }, [onCourseSelect, onSearch]);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      if (selectedSuggestionIndex >= 0 && filteredCourses[selectedSuggestionIndex]) {
        // Select the highlighted suggestion
        handleSuggestionClick(filteredCourses[selectedSuggestionIndex]);
      } else {
        // Perform regular search
        handleSearch();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (showSuggestions) {
        setSelectedSuggestionIndex(prev => 
          prev < filteredCourses.length - 1 ? prev + 1 : prev
        );
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (showSuggestions) {
        setSelectedSuggestionIndex(prev => prev > 0 ? prev - 1 : -1);
      }
    } else if (e.key === "Escape") {
      setShowSuggestions(false);
      setSelectedSuggestionIndex(-1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    // Reset selection when typing
    setSelectedSuggestionIndex(-1);
  };

  const handleInputFocus = useCallback(() => {
    if (searchTerm.trim() && filteredCourses.length > 0) {
      setShowSuggestions(true);
    }
  }, [searchTerm, filteredCourses.length]);

  return (
    <div className="border-b border-orange-600">
      {/* Mobile Layout - Stacked vertically */}
      <div className="block md:hidden">
        {/* Search section for mobile - at the top */}
        <div className="p-3 border-b border-orange-600/30">
          <div className="relative">
            {isSearchActive ? (
              <div className="relative">
                <div className="flex items-center bg-gray-700 rounded-lg border border-orange-600/30 relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Search courses..."
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    onFocus={handleInputFocus}
                    className="px-3 py-2 bg-transparent text-white placeholder-orange-300 text-sm focus:outline-none focus:ring-0 w-full relative z-10"
                  />
                  {searchTerm && (
                    <button
                      onClick={handleClearSearch}
                      className="p-2 text-orange-300 hover:text-white transition-colors duration-200 relative z-10 flex-shrink-0"
                    >
                      <X size={16} />
                    </button>
                  )}
                  <button
                    onClick={handleSearch}
                    className="p-2 text-orange-300 hover:text-white transition-colors duration-200 border-l border-orange-600/30 relative z-10 flex-shrink-0"
                  >
                    <Search size={16} />
                  </button>
                </div>

                {/* Mobile Autocomplete Suggestions Dropdown */}
                {showSuggestions && (
                  <div
                    ref={suggestionsRef}
                    className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-orange-600/30 rounded-lg shadow-2xl max-h-48 overflow-y-auto z-[9999] w-full"
                    style={{ 
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
                      scrollbarWidth: 'none',
                      msOverflowStyle: 'none',
                    }}
                  >
                    <style jsx>{`
                      div::-webkit-scrollbar {
                        display: none;
                      }
                    `}</style>
                    {filteredCourses.length === 0 ? (
                      <div className="px-3 py-2 text-orange-300 text-xs">
                        No courses found matching  &quot;{searchTerm}&quot;
                      </div>
                    ) : (
                      filteredCourses.map((course, index) => (
                        <div
                          key={course.id || index}
                          className={`px-3 py-2 cursor-pointer transition-all duration-200 border-b border-gray-700 last:border-b-0 first:rounded-t-lg last:rounded-b-lg ${
                            index === selectedSuggestionIndex
                              ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white"
                              : "text-orange-300 hover:bg-gradient-to-r hover:from-orange-700/50 hover:to-orange-600/50 hover:text-white"
                          }`}
                          onClick={() => handleSuggestionClick(course)}
                          onMouseEnter={() => setSelectedSuggestionIndex(index)}
                        >
                          <div className="font-medium text-xs truncate">{course.title}</div>
                          <div className="text-xs opacity-75 mt-1 truncate">
                            {course.course_description?.substring(0, 40)}...
                          </div>
                        </div>
                      ))
                    )}
                    
                    {/* Dropdown arrow indicator */}
                    <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-800 border-t border-l border-orange-600/30 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => {
                  setIsSearchActive(true);
                  setTimeout(() => {
                    if (searchInputRef.current) {
                      searchInputRef.current.focus();
                    }
                  }, 0);
                }}
                className="flex items-center justify-center gap-2 w-full px-3 py-2 text-orange-300 hover:text-white hover:bg-gradient-to-r from-orange-700 to-orange-600 rounded-lg transition-all duration-300 text-sm border border-orange-600/30"
              >
                <Search size={16} />
                <span>Search courses...</span>
              </button>
            )}
          </div>
        </div>

        {/* Category tabs for mobile - horizontal scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max px-2 py-1">
            {salesCategories.map((category) => (
              <button
                key={category.id}
                className={`px-3 py-2 text-xs font-medium whitespace-nowrap flex-shrink-0 mx-1 rounded-t-lg ${
                  activeMainTab === category.id?.toString()
                    ? "text-white border-b-2 border-orange-500 bg-gradient-to-r from-orange-600 to-orange-500"
                    : "text-orange-300 hover:text-white hover:bg-gradient-to-r from-orange-700 to-orange-600"
                } transition-all duration-300`}
                onClick={() => {
                  setActiveMainTab(category.id?.toString() || "");
                  setActiveSubTab("");
                  setActiveCourse("");
                }}
              >
                {category.category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original design preserved */}
      <div className="hidden md:flex md:items-center md:justify-between">
        {/* Left side - Category tabs */}
        <div className="flex flex-wrap">
          {salesCategories.map((category) => (
            <button
              key={category.id}
              className={`px-4 py-3 text-sm font-medium ${
                activeMainTab === category.id?.toString()
                  ? "text-white border-b-2 border-orange-500 bg-gradient-to-r from-orange-600 to-orange-500"
                  : "text-orange-300 hover:text-white hover:bg-gradient-to-r from-orange-700 to-orange-600"
              } transition-all duration-300 sm:px-6 sm:text-base`}
              onClick={() => {
                setActiveMainTab(category.id?.toString() || "");
                setActiveSubTab("");
                setActiveCourse("");
              }}
            >
              {category.category}
            </button>
          ))}
        </div>

        {/* Right side - Enhanced Search functionality for desktop */}
        <div className="flex items-center gap-2 ml-4 relative">
          {isSearchActive ? (
            <div className="relative">
              <div className="flex items-center bg-gray-700 rounded-lg border border-orange-600/30 relative">
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search courses..."
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyPress}
                  onFocus={handleInputFocus}
                  className="px-3 py-2 bg-transparent text-white placeholder-orange-300 text-sm focus:outline-none focus:ring-0 min-w-[200px] sm:min-w-[250px] relative z-10"
                />
                {searchTerm && (
                  <button
                    onClick={handleClearSearch}
                    className="p-2 text-orange-300 hover:text-white transition-colors duration-200 relative z-10"
                  >
                    <X size={16} />
                  </button>
                )}
                <button
                  onClick={handleSearch}
                  className="p-2 text-orange-300 hover:text-white transition-colors duration-200 border-l border-orange-600/30 relative z-10"
                >
                  <Search size={16} />
                </button>
              </div>

              {/* Desktop Autocomplete Suggestions Dropdown */}
              {showSuggestions && (
                <div
                  ref={suggestionsRef}
                  className="absolute top-full left-0 right-0 mt-1 bg-gray-800 border border-orange-600/30 rounded-lg shadow-2xl max-h-64 overflow-y-auto z-[9999] min-w-full"
                  style={{ 
                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                  }}
                >
                  <style jsx>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  {filteredCourses.length === 0 ? (
                    <div className="px-4 py-3 text-orange-300 text-sm">
                      No courses found matching  &quot;{searchTerm}&quot;
                    </div>
                  ) : (
                    filteredCourses.map((course, index) => (
                      <div
                        key={course.id || index}
                        className={`px-4 py-3 cursor-pointer transition-all duration-200 border-b border-gray-700 last:border-b-0 first:rounded-t-lg last:rounded-b-lg ${
                          index === selectedSuggestionIndex
                            ? "bg-gradient-to-r from-orange-600 to-orange-500 text-white transform scale-[1.02]"
                            : "text-orange-300 hover:bg-gradient-to-r hover:from-orange-700/50 hover:to-orange-600/50 hover:text-white"
                        }`}
                        onClick={() => handleSuggestionClick(course)}
                        onMouseEnter={() => setSelectedSuggestionIndex(index)}
                      >
                        <div className="font-medium text-sm truncate">{course.title}</div>
                        <div className="text-xs opacity-75 mt-1 truncate">
                          {course.course_description?.substring(0, 60)}...
                        </div>
                      </div>
                    ))
                  )}
                  
                  {/* Dropdown arrow indicator */}
                  <div className="absolute -top-2 left-4 w-4 h-4 bg-gray-800 border-t border-l border-orange-600/30 transform rotate-45"></div>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => {
                setIsSearchActive(true);
                setTimeout(() => {
                  if (searchInputRef.current) {
                    searchInputRef.current.focus();
                  }
                }, 0);
              }}
              className="flex items-center gap-2 px-3 py-2 text-orange-300 hover:text-white hover:bg-gradient-to-r from-orange-700 to-orange-600 rounded-lg transition-all duration-300 text-sm"
            >
              <Search size={16} />
              <span className="hidden sm:inline">Search</span>
            </button>
          )}
        </div>
      </div>

      <style >{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
});

CategoryTabs.displayName = 'CategoryTabs';

export default CategoryTabs;