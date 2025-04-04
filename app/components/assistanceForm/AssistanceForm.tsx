import React, { useState } from 'react'
import axiosInstance from '../apiconfig/axios';
import { API_URLS } from '../apiconfig/api_urls';
import { toast } from 'react-toastify';

type Props = {
    course: string;
}

const AssistanceForm = ({course}: Props) => {

    const [formData, setFormData] = useState({
        full_name: "",
        mobile_number: "",
        email: "",
        college_studied: "",
        program_type: "",
        location: "",
        course: "",
      });
    
      const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
      ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        try {
          const response = await axiosInstance.post(
            API_URLS.ALLCOURSE.POST_COURSE,
            {
              ...formData,
              course: course,
            }
          );
    
          if (response.status >= 200 && response.status < 300) {
            console.log("Message sent successfully!", response.data);
            toast.success("Your message has been sent successfully!");
    
            // Reset form fields
            setFormData({
              full_name: "",
              mobile_number: "",
              email: "",
              college_studied: "",
              program_type: "",
              course: "",
              location: "",
            });
          } else {
            console.error("Unexpected status code:", response.status);
            toast.error("Failed to send the message. Please try again.");
          }
        } catch (error) {
          console.error("Failed to send message:", error);
          toast.error("Failed to send the message. Please try again.");
        }
      };

  return (
    <div className="lg:w-[45%] flex flex-col">
      <div className="bg-[#0E1721] p-8 rounded-lg border border-[#1A2836] shadow-lg">
        <h3 className="text-[#FF6B3D] text-xl font-semibold mb-3">
          NEED ASSISTANCE?
        </h3>
        <p className="text-white mb-6">Get guidance and clear your doubts</p>

        {/* Form Fields */}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4 mb-6">
            <input
              type="text"
              name="full_name"
              placeholder="Enter your Full Name"
              value={formData.full_name}
              onChange={handleInputChange}
              className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
              required
            />
            <input
              type="tel"
              name="mobile_number"
              placeholder="Mobile Number"
              value={formData.mobile_number}
              onChange={handleInputChange}
              className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white "
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
              required
            />
            <input
              type="text"
              name="college_studied"
              placeholder="College or School Studied"
              value={formData.college_studied}
              onChange={handleInputChange}
              className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleInputChange}
              className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white"
              required
            />
            <div className="relative">
              <select
                name="program_type"
                value={formData.program_type}
                onChange={handleInputChange}
                className="w-full bg-[#131F2C] border border-[#1A2836] rounded-md p-3 text-white appearance-none"
                required
              >
                <option value="" disabled>
                  Preferred Online Program
                </option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select>
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none  ">
                <svg
                  width="14"
                  height="8"
                  viewBox="0 0 14 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1 1L7 7L13 1"
                    stroke="#FF6B3D"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#FF6B3D] hover:bg-[#E04D2E] text-white py-3 px-6 rounded-md w-full font-medium transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default AssistanceForm