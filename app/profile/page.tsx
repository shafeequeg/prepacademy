"use client";
import { useEffect, useState } from "react";
import axiosInstance from "../components/apiconfig/axios";
import { API_URLS } from "../components/apiconfig/api_urls";
// import LoginModal from "../../app/components/login/Login";

interface User {
  id: string;
  uuid: string;
  full_name: string;
  email: string;
  bio?: string;
  phone_number?: string;
  location?: string;
  gender?: string;
  dob?: string;
  occupation?: string;
  exam_target?: string;
  program?: string;
  firebase_user_id?: string;
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
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editFormData, setEditFormData] = useState<User | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);

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

  const handleEditProfile = () => {
    if (currentUser) {
      setEditFormData({ ...currentUser });
      setIsEditModalOpen(true);
    }
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setEditFormData(null);
  };

  const handleInputChange = (field: string, value: string) => {
    if (!editFormData) return;

    setEditFormData({
      ...editFormData,
      [field]: value
    });
  };

  const handleUpdateProfile = async () => {
    if (!editFormData || !currentUser) return;

    setIsUpdating(true);
    try {
      // Use the UUID from the current user for the API call
      const response = await axiosInstance.patch(
        API_URLS.USERS.PATCH_USER_BY_UUID(currentUser.uuid),
        editFormData
      );
      
      // Update current user with response data
      const updatedUser = response.data;
      setCurrentUser(updatedUser);
      
      // Update users array
      setUsers(users.map(user => 
        user.id === updatedUser.id ? updatedUser : user
      ));
      
      // Update localStorage
      const localCurrentUserStr = localStorage.getItem("currentUser");
      if (localCurrentUserStr) {
        const localCurrentUser = JSON.parse(localCurrentUserStr);
        localStorage.setItem("currentUser", JSON.stringify({
          ...localCurrentUser,
          ...updatedUser
        }));
      }
      
      handleCloseEditModal();
    } catch (error) {
      console.error("Error updating profile:", error);
      // You might want to show an error message to the user here
    } finally {
      setIsUpdating(false);
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
      <div className="h-screen bg-[#2B1615] flex items-center justify-center ">
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
      <div className="max-w-4xl mx-auto px-4 py-6 ">
        {/* Main Profile Card */}
        <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 backdrop-blur-xl border border-orange-700/30 rounded-2xl overflow-hidden shadow-xl mt-6 md:mt-28">
          {/* Profile Header */}
          <div className="relative bg-gradient-to-r from-orange-600 to-orange-500 p-6">
            <div className="absolute inset-0 bg-black/10"></div>
            
            {/* Edit Button */}
            <button
              onClick={handleEditProfile}
              className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg p-2 transition-all duration-300 flex items-center gap-2"
            >
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
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
              <span className="text-white text-sm font-medium">Edit Profile</span>
            </button>

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
              <div className="text-center sm:text-left flex-1 ">
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

                  {currentUser.exam_target && (
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
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-orange-300 text-xs">Exam Target</p>
                          <p className="text-orange-100 text-sm">
                            {currentUser.exam_target}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentUser.program && (
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
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        </div>
                        <div>
                          <p className="text-orange-300 text-xs">Program</p>
                          <p className="text-orange-100 text-sm">
                            {currentUser.program}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
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
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      {isEditModalOpen && editFormData && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-gradient-to-br from-orange-900/90 to-orange-800/90 backdrop-blur-xl border border-orange-700/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-orange-100">Edit Profile</h2>
                <button
                  onClick={handleCloseEditModal}
                  className="text-orange-300 hover:text-orange-100 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Edit Form */}
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-orange-100">Personal Information</h3>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-orange-300 text-sm mb-2">Full Name</label>
                      <input
                        type="text"
                        value={editFormData.full_name}
                        onChange={(e) => handleInputChange('full_name', e.target.value)}
                        className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-orange-300 text-sm mb-2">Email</label>
                      <input
                        type="email"
                        value={editFormData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-orange-300 text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={editFormData.phone_number || ''}
                        onChange={(e) => handleInputChange('phone_number', e.target.value)}
                        className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-orange-300 text-sm mb-2">Location</label>
                      <input
                        type="text"
                        value={editFormData.location || ''}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-orange-300 text-sm mb-2">Date of Birth</label>
                      <input
                        type="date"
                        value={editFormData.dob ? new Date(editFormData.dob).toISOString().split('T')[0] : ''}
                        onChange={(e) => handleInputChange('dob', e.target.value)}
                        className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-orange-300 text-sm mb-2">Gender</label>
                      <select
                        value={editFormData.gender || ''}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-orange-300 text-sm mb-2">Occupation</label>
                    <input
                      type="text"
                      value={editFormData.occupation || ''}
                      onChange={(e) => handleInputChange('occupation', e.target.value)}
                      className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-orange-300 text-sm mb-2">Bio</label>
                    <textarea
                      value={editFormData.bio || ''}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={3}
                      className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                      placeholder="Tell us about yourself..."
                    />
                  </div>

                  <div>
                    <label className="block text-orange-300 text-sm mb-2">Exam Target</label>
                    <input
                      type="text"
                      value={editFormData.exam_target || ''}
                      onChange={(e) => handleInputChange('exam_target', e.target.value)}
                      className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g., JEE, NEET, CAT"
                    />
                  </div>

                  <div>
                    <label className="block text-orange-300 text-sm mb-2">Program</label>
                    <input
                      type="text"
                      value={editFormData.program || ''}
                      onChange={(e) => handleInputChange('program', e.target.value)}
                      className="w-full bg-orange-900/20 border border-orange-700/30 rounded-lg px-3 py-2 text-orange-100 focus:outline-none focus:border-orange-500 transition-colors"
                      placeholder="e.g., Engineering, Medical, Management"
                    />
                  </div>
                </div>

                {/* Modal Actions */}
                <div className="flex gap-3 pt-6 border-t border-orange-700/30">
                  <button
                    onClick={handleCloseEditModal}
                    className="flex-1 bg-orange-900/30 hover:bg-orange-900/50 border border-orange-700/30 text-orange-100 font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleUpdateProfile}
                    disabled={isUpdating}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isUpdating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Updating...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;