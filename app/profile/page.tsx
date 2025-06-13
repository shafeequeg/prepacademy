"use client";
import { useEffect, useState } from "react";
import axiosInstance from "../components/apiconfig/axios";
import { API_URLS } from "../components/apiconfig/api_urls";
// import LoginModal from "../../app/components/login/Login";


interface User {
  id: string;
  full_name: string;
  email: string;
  bio?: string;
  phone_number?: string;
  location?: string;
  gender?: string;
  dob?: string;
  occupation?: string;
  social_media?: {
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

// SVG Icons for Male and Female profiles
const MaleIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle */}
    <circle cx="100" cy="100" r="100" fill="#E5E7EB" />

    {/* Head */}
    <circle cx="100" cy="70" r="35" fill="#9CA3AF" />

    {/* Body */}
    <ellipse cx="100" cy="160" rx="60" ry="50" fill="#9CA3AF" />

    {/* Shirt/Clothing details */}
    <path
      d="M60 140 C60 135, 70 130, 100 130 C130 130, 140 135, 140 140 L140 180 C140 185, 135 190, 130 190 L70 190 C65 190, 60 185, 60 180 Z"
      fill="#6B7280"
    />

    {/* Hair (short) */}
    <path
      d="M70 50 C70 35, 85 25, 100 25 C115 25, 130 35, 130 50 C125 45, 115 40, 100 40 C85 40, 75 45, 70 50 Z"
      fill="#4B5563"
    />
  </svg>
);

const FemaleIcon = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle */}
    <circle cx="100" cy="100" r="100" fill="#FEE2E2" />

    {/* Head */}
    <circle cx="100" cy="70" r="35" fill="#FBBF24" />

    {/* Body */}
    <ellipse cx="100" cy="160" rx="60" ry="50" fill="#FBBF24" />

    {/* Dress/Clothing details */}
    <path
      d="M55 135 C55 130, 65 125, 100 125 C135 125, 145 130, 145 135 L150 185 C150 190, 145 195, 140 195 L60 195 C55 195, 50 190, 50 185 Z"
      fill="#EC4899"
    />

    {/* Hair (longer) */}
    <path
      d="M65 45 C65 30, 80 20, 100 20 C120 20, 135 30, 135 45 C135 55, 130 65, 125 70 C120 65, 110 60, 100 60 C90 60, 80 65, 75 70 C70 65, 65 55, 65 45 Z"
      fill="#92400E"
    />

    {/* Hair sides */}
    <ellipse cx="75" cy="60" rx="8" ry="15" fill="#92400E" />
    <ellipse cx="125" cy="60" rx="8" ry="15" fill="#92400E" />
  </svg>
);

const ProfilePage = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);


  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get(API_URLS.USERS.GET_USERS);
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  
  useEffect(() => {
    if (users.length > 0) {
      try {
        const localCurrentUserStr = localStorage.getItem("currentUser");
        if (localCurrentUserStr) {
          const localCurrentUser = JSON.parse(localCurrentUserStr);
          const foundUser = users.find((u) => u.id === localCurrentUser.id);
          if (foundUser) {
            setCurrentUser(foundUser);
          }
        }
      } catch {
        setCurrentUser(null);
      }
    }
  }, [users]);

  if (loading) {
    return (
      <div className="h-screen bg-[#2B1615] flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
        </div>
        <div className="ml-4">
          <h2 className="text-xl font-bold text-orange-100">PrepAcademy</h2>
          <p className="text-orange-300 text-xs">Loading your profile...</p>
        </div>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="h-screen bg-[#2B1615] flex items-center justify-center px-4">
        <div className="bg-gradient-to-br from-orange-900/20 to-orange-800/20 backdrop-blur-xl border border-orange-700/30 rounded-2xl p-6 max-w-sm w-full text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-orange-100 mb-2">
            Welcome to PrepAcademy
          </h1>
          <p className="text-orange-300 mb-6 text-sm">
            Please sign in to access your learning profile.
          </p>
          <button
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-4 rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
            onClick={() => (window.location.href = "/")}
          >
            Sign In
          </button>
        </div>
      </div>
    );
  }

  const formattedDOB = currentUser.dob
    ? new Date(currentUser.dob).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Not specified";

  // Use SVG components instead of external images
  const ProfileIcon =
    currentUser.gender?.toLowerCase() === "female" ? FemaleIcon : MaleIcon;

  return (
    <div className="h-screen bg-[#2B1615] overflow-y-auto">
      <div className="max-w-4xl mx-auto px-4 py-6 mt-9">
        {/* Header */}
        {/* <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-orange-100">PrepAcademy</h1>
          <p className="text-orange-300 text-sm">Your Learning Profile</p>
        </div> */}

        {/* Main Profile Card */}
        <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-xl border border-orange-700/30 rounded-2xl overflow-hidden shadow-xl">
          {/* Profile Header */}
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 p-6">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative flex flex-col sm:flex-row items-center gap-4">
              {/* Profile Image */}
              <div className="relative">
                <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-white/30 shadow-xl overflow-hidden bg-white">
                  <ProfileIcon />
                </div>
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-2 border-white/30 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>

              {/* User Info */}
              <div className="text-center sm:text-left flex-1">
                <h2 className="text-2xl font-bold text-white mb-1">
                  {currentUser.full_name}
                </h2>
                {currentUser.occupation && (
                  <p className="text-lg text-orange-100 mb-2">
                    {currentUser.occupation}
                  </p>
                )}
                <div className="flex flex-wrap justify-center sm:justify-start gap-3 text-orange-100 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span>{currentUser.email}</span>
                  </div>
                  {currentUser.location && (
                    <div className="flex items-center gap-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{currentUser.location}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="p-6">
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-orange-100 flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  Personal Info
                </h3>

                <div className="space-y-3">
                  <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-orange-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-orange-300 text-xs">Date of Birth</p>
                        <p className="text-orange-100 text-sm">
                          {formattedDOB}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-orange-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-orange-300 text-xs">Gender</p>
                        <p className="text-orange-100 text-sm">
                          {currentUser.gender || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-orange-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-orange-300 text-xs">Occupation</p>
                        <p className="text-orange-100 text-sm">
                          {currentUser.occupation || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-orange-100 flex items-center gap-2">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  Contact Details
                </h3>

                <div className="space-y-3">
                  <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-orange-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-orange-300 text-xs">Email Address</p>
                        <p className="text-orange-100 text-sm break-all">
                          {currentUser.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-orange-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-orange-300 text-xs">Phone Number</p>
                        <p className="text-orange-100 text-sm">
                          {currentUser.phone_number || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-900/20 rounded-lg p-3 border border-orange-700/30">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-orange-500/20 rounded flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-orange-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-orange-300 text-xs">Location</p>
                        <p className="text-orange-100 text-sm">
                          {currentUser.location || "Not specified"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio Section */}
            {currentUser.bio && (
              <div className="mt-6 pt-6 border-t border-orange-700/30">
                <h3 className="text-xl font-bold text-orange-100 flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h7"
                      />
                    </svg>
                  </div>
                  About Me
                </h3>
                <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-700/30">
                  <p className="text-orange-100 text-sm">{currentUser.bio}</p>
                </div>
              </div>
            )}
            {/* Social Media Links */}
            {(currentUser.social_media?.twitter ||
              currentUser.social_media?.linkedin ||
              currentUser.social_media?.instagram) && (
              <div className="mt-6 pt-6 border-t border-orange-700/30">
                <h3 className="text-xl font-bold text-orange-100 flex items-center gap-2 mb-4">
                  <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                      />
                    </svg>
                  </div>
                  Social Media
                </h3>
                <div className="flex flex-wrap gap-3">
                  {currentUser.social_media?.twitter && (
                    <a
                      href={currentUser.social_media.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-500/20 hover:bg-blue-500/30 border border-blue-500/30 rounded-lg p-3 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                      <span className="text-blue-100 text-sm">Twitter</span>
                    </a>
                  )}
                  {currentUser.social_media?.linkedin && (
                    <a
                      href={currentUser.social_media.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-600/30 rounded-lg p-3 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-blue-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                      <span className="text-blue-100 text-sm">LinkedIn</span>
                    </a>
                  )}
                  {currentUser.social_media?.instagram && (
                    <a
                      href={currentUser.social_media.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-pink-500/20 hover:bg-pink-500/30 border border-pink-500/30 rounded-lg p-3 transition-all duration-300"
                    >
                      <svg
                        className="w-5 h-5 text-pink-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-pink-100 text-sm">Instagram</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
