import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <div className="w-full">
      <div className="bg-[#0c0f17] pt-6 pb-6 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold">
            <span className="text-[#ff6035]">About</span>{" "}
            <span className="text-white">Us</span>
          </h1>
        </div>
      </div>

      <div className="bg-[#231818] py-10 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="w-full md:w-1/2 pr-0 md:pr-8">
            <h2 className="text-3xl font-bold mb-6">
              <span className="text-[#ff6035]">Welcome To</span>{" "}
              <span className="text-white">Prepacademy</span>
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed max-w-xl">
              Welcome to Prep Academy, your trusted partner in academic
              excellence and career counseling services. Our mission is to
              empower students with the knowledge and skills necessary for
              lifelong success. As a trusted educational institution in India,
              we focus on providing personalized learning approaches tailored to
              meet the unique needs of every student.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-64 h-64">
              <Image
                src="/prepbannerlogo.png"
                alt="Prepacademy Mascot"
                width={300}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#0c0f17] py-16 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="text-[#ff6035]">Why Choose</span>{" "}
            <span className="text-white">PrepAcademy?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#1e1717] border border-[#3d2a2a] rounded p-6 hover:bg-[#231a1a] transition-colors">
              <h3 className="text-[#ff6035] font-medium text-lg mb-3">
                Student-Centric Education
              </h3>
              <p className="text-gray-300 text-sm">
                We prioritize our students&apos; growth through customized
                learning experiences.
              </p>
            </div>
            <div className="bg-[#1e1717] border border-[#3d2a2a] rounded p-6 hover:bg-[#231a1a] transition-colors">
              <h3 className="text-[#ff6035] font-medium text-lg mb-3">
                Comprehensive Career Counseling
              </h3>
              <p className="text-gray-300 text-sm">
                Our career guidance experts help students discover and achieve
                their true potential.
              </p>
            </div>

            <div className="bg-[#1e1717] border border-[#3d2a2a] rounded p-6 hover:bg-[#231a1a] transition-colors">
              <h3 className="text-[#ff6035] font-medium text-lg mb-3">
                Innovative Learning Techniques
              </h3>
              <p className="text-gray-300 text-sm">
                We use modern tools and methods to make learning engaging and
                effective.
              </p>
            </div>

            <div className="bg-[#1e1717] border border-[#3d2a2a] rounded p-6 hover:bg-[#231a1a] transition-colors">
              <h3 className="text-[#ff6035] font-medium text-lg mb-3">
                Success-Oriented Academic Support
              </h3>
              <p className="text-gray-300 text-sm">
                Our programs are designed to ensure students&apos; success in
                both academics and life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
