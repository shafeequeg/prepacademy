"use client";

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Navigation,
  Search,
  Star,
  Clock,
  Users,
} from "lucide-react";

type Location = {
  id: number;
  name: string;
  address: string;
  phone: string;
  mapUrl: string;
  city: string;
  state: string;
};

export default function FindCenterPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    null
  );

  const locations: Location[] = [
    {
      id: 1,
      name: "Jhansi Center",
      address:
        "Ground Floor, Green Park Colony, Adjacent to GST Office, Jhansi - 284002",
      phone: "9235792300",
      city: "Jhansi",
      state: "Uttar Pradesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7205.592079671734!2d78.56561989063484!3d25.445081560208322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3977770076d81037%3A0x9fcc350aef759710!2sGST%2C%20department%2C%20Jhansi!5e0!3m2!1sen!2sin!4v1740824979135!5m2!1sen!2sin",
    },
    {
      id: 2,
      name: "Kanpur Mall Road",
      address: "2nd floor, Regal Building 129 Mall Road - Kanpur, 208 004",
      phone: "82994 70392",
      city: "Kanpur",
      state: "Uttar Pradesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3571.8304541982297!2d80.35731527487079!3d26.461193576919218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4709d7e02711%3A0xc19db3c0f1893401!2sIPM%20Careers%20%7C%20BEST%20IPMAT%20COACHING%20IN%20KANPUR%7C%20AIR%202%2C4%2C6%2C8%20IN%20IPMAT%202021!5e0!3m2!1sen!2sin!4v1740825402062!5m2!1sen!2sin",
    },
    {
      id: 3,
      name: "Gomti Nagar Lucknow",
      address:
        "B4, 225, Vishal Khand, Gomti Nagar, Lucknow, Uttar Pradesh - 226010",
      phone: "84237 33923",
      city: "Lucknow",
      state: "Uttar Pradesh",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28476.04737357729!2d80.9812751992023!3d26.855662807561128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGomti%20Nagar%20%7C%20Lucknow%20Branch%20B4%2C%20225%2C%20Vishal%20Khand%2C%20Gomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh%20-%20226010!5e0!3m2!1sen!2sin!4v1740825138956!5m2!1sen!2sin",
    },
    {
      id: 4,
      name: "Thiruvalla Kerala",
      address:
        "3rd floor Alamparabil Building, TK Road, Thiruvalla, Kerala 689101",
      phone: "9446056789",
      city: "Thiruvalla",
      state: "Kerala",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15745.891686137547!2d76.56364743377378!3d9.379822803411672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06257ceb61ebf7%3A0xd527a0512c4a2401!2sPrep%20Academy%20-%20CLAT%2C%20CUET%2C%20IPM%2C%20SLAT%2C%20AILET%2C%20SAT%2C%20CAT%2C%20CMAT%2C%20MAT%2C%20GMAT%2CGRE%2C%20CRT%20Coaching!5e0!3m2!1sen!2sin!4v1740825588734!5m2!1sen!2sin",
    },
    {
      id: 5,
      name: "Palarivattam Kochi",
      address:
        "Prep Academy, Pukalakkat Complex, Mahakavi Vailoppilli Road, Opp Pandal cake Shop, Palarivattam, Kochi - 682025",
      phone: "9446056789",
      city: "Kochi",
      state: "Kerala",
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31433.7274007533!2d76.26947127431639!3d9.999015000000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d000540f32b%3A0xe06e1340e2956cb!2sPandhal%20cake%20shop%20Palarivattom!5e0!3m2!1sen!2sin!4v1747908324505!5m2!1sen!2sin",
    },
  ];

  const filteredLocations = locations.filter(
    (location) =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      location.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLocationClick = (location: Location) => {
    setSelectedLocation(location);
  };

  const handleGetDirections = (mapUrl: string) => {
    window.open(mapUrl, "_blank");
  };

  const handleCall = (phone: string) => {
    window.open(`tel:+91${phone}`, "_self");
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#2B1615] via-black to-black opacity-80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-[#F55D3E] font-serif italic">Find</span>{" "}
              <span className="text-white">Your Nearest</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mt-4 mb-8">
              <span className="text-[#ED1C24]">Prep</span>
              <span className="text-[#15938F]">Academy</span>{" "}
              <span className="text-white">Center</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Discover our premium learning centers across India and embark on
              your journey to academic excellence
            </p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-6 w-6 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by city, state, or center name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-[#2B1615] border-2 border-gray-700 rounded-2xl py-5 pl-12 pr-6 text-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F55D3E] focus:ring-2 focus:ring-[#F55D3E]/20 transition-all duration-300 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-[#1a1a1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Centers List */}
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  <span className="text-[#F55D3E]">Our Centers</span>
                </h3>
                <div className="flex items-center space-x-2 bg-[#2B1615] px-4 py-2 rounded-full">
                  <MapPin className="h-4 w-4 text-[#F55D3E]" />
                  <span className="text-gray-300 text-sm font-medium">
                    {filteredLocations.length} locations
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                {filteredLocations.map((location) => (
                  <div
                    key={location.id}
                    onClick={() => handleLocationClick(location)}
                    className={`group relative bg-[#2B1615] border-2 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-[#F55D3E]/10 hover:-translate-y-1 ${
                      selectedLocation?.id === location.id
                        ? "border-[#F55D3E] bg-gradient-to-br from-[#2B1615] to-[#3A1E1D] shadow-xl shadow-[#F55D3E]/20"
                        : "border-gray-700 hover:border-[#F55D3E]/60"
                    }`}
                  >
                    {/* Location Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={`p-2 rounded-xl transition-colors ${
                            selectedLocation?.id === location.id
                              ? "bg-[#F55D3E]/20 text-[#F55D3E]"
                              : "bg-gray-800 text-gray-400 group-hover:bg-[#F55D3E]/20 group-hover:text-[#F55D3E]"
                          }`}
                        >
                          <MapPin className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1">
                            {location.name}
                          </h4>
                          <div className="flex items-center space-x-2 text-sm text-gray-400">
                            <span className="bg-[#15938F]/20 text-[#15938F] px-2 py-1 rounded-full font-medium">
                              {location.city}
                            </span>
                            <span className="text-gray-500">•</span>
                            <span>{location.state}</span>
                          </div>
                        </div>
                      </div>

                      {selectedLocation?.id === location.id && (
                        <div className="flex items-center space-x-1 bg-[#F55D3E]/20 px-3 py-1 rounded-full">
                          <Star className="h-4 w-4 text-[#F55D3E] fill-current" />
                          <span className="text-[#F55D3E] text-sm font-medium">
                            Selected
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Address */}
                    <div className="mb-6">
                      <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                        {location.address}
                      </p>
                    </div>

                    {/* Contact & Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-[#F55D3E]" />
                        <span className="text-white font-medium">
                          +91 {location.phone}
                        </span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleCall(location.phone);
                          }}
                          className="flex items-center space-x-2 bg-[#15938F] hover:bg-[#15938F]/80 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                        >
                          <Phone className="h-4 w-4" />
                          <span className="hidden sm:inline">Call</span>
                        </button>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleGetDirections(location.mapUrl);
                          }}
                          className="flex items-center space-x-2 bg-[#F55D3E] hover:bg-[#F55D3E]/80 text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 hover:scale-105"
                        >
                          <Navigation className="h-4 w-4" />
                          <span className="hidden sm:inline">Directions</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredLocations.length === 0 && (
                <div className="text-center py-16">
                  <div className="bg-[#2B1615] rounded-2xl p-12 border-2 border-gray-700">
                    <MapPin className="h-16 w-16 text-gray-600 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-400 mb-3">
                      No centers found
                    </h3>
                    <p className="text-gray-500 text-lg">
                      Try searching with different keywords or browse all
                      locations
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Map Section - Made sticky with better positioning */}
            <div className="xl:sticky xl:top-4 xl:self-start">
              <div className="bg-[#2B1615] border-2 border-gray-700 rounded-2xl overflow-hidden shadow-2xl">
                <div className="p-6 border-b border-gray-700 bg-gradient-to-r from-[#2B1615] to-[#3A1E1D]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-[#F55D3E] mb-1">
                        {selectedLocation
                          ? selectedLocation.name
                          : "Interactive Map"}
                      </h3>
                      {selectedLocation ? (
                        <p className="text-gray-300 text-sm">
                          {selectedLocation.city}, {selectedLocation.state}
                        </p>
                      ) : (
                        <p className="text-gray-400 text-sm">
                          Select a center to view location
                        </p>
                      )}
                    </div>
                    {selectedLocation && (
                      <div className="flex items-center space-x-1 bg-[#F55D3E]/20 px-3 py-1 rounded-full">
                        <div className="w-2 h-2 bg-[#F55D3E] rounded-full animate-pulse"></div>
                        <span className="text-[#F55D3E] text-xs font-medium">
                          Live
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="h-80 lg:h-96 xl:h-[450px]">
                  {selectedLocation ? (
                    <iframe
                      src={selectedLocation.mapUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full bg-gradient-to-br from-[#1F1F21] to-[#2B1615]">
                      <div className="text-center p-8">
                        <div className="relative mb-6">
                          <MapPin className="h-20 w-20 text-gray-600 mx-auto" />
                          <div className="absolute -top-2 -right-2">
                            <div className="w-6 h-6 bg-[#F55D3E] rounded-full flex items-center justify-center">
                              <span className="text-white text-xs font-bold">
                                {locations.length}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h4 className="text-xl font-bold text-gray-300 mb-2">
                          Explore Our Centers
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                          Click on any center from the list to view its exact
                          location on the map
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
