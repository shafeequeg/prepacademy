import React from "react";
import Image from "next/image";

const DrivesUsSection = () => {
  const features = [
    {
      title: "Smarter Learning With AI",
      icon: "/secretsauce1.png",
      // description: "Your study plan adapts to your needs and pace"
    },
    {
      title: "Gamified Test Prep",
      icon: "/sauce2.png",
      // description: "Challenges, leaderboards & rewards to keep you hooked"
    },
    {
      title: "Mentors Who've Walked the Path",
      icon: "/secret3.png",
      // description: "Learn from top scorers and experienced guides"
    },
    {
      title: "Live Rapid Fire Stories",
      icon: "/secretsauce4.avif",
      // description: "Connect, ask, stay sharp; succeed at every challenge"
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen p-8">
      {/* What Drives Us Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">
              <span className="text-orange-500 font-dmserif italic">What</span>{" "}
              <span className="text-white">Drives Us</span>
            </h2>

            <p className="text-gray-300 text-lg">
              We believe every student is unique so why settle for generic study
              plans? Our mission is simple:
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-500"></div>
                <span className="text-gray-300">
                  Empower Students With Expert Guidance & Smart Strategies
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-500"></div>
                <span className="text-gray-300">
                  Revolutionize Learning With AI Support And Interactive Content
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-500"></div>
                <span className="text-gray-300">
                  Turn Struggles Into Strengths With Coaching And Resources
                </span>
              </li>
            </ul>
          </div>

          <div className="relative w-full aspect-[4/3] min-h-[200px] md:min-h-[320px]">
            <Image
              src="/driveus.jpeg"
              alt="Students studying together"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
      {/* Our Secret Sauce Section */}
      <section className="w-full bg-gradient-to-b from-[#1a0e0e] to-[#241010] py-20 px-8">
        <div className="w-full">
          {/* Section Title */}
          <h2 className="text-4xl font-bold mb-16 text-center">
            <span className="text-[#FF5733] font-dmserif italic">
              Our Secret
            </span>{" "}
            <span className="text-white">Sauce</span>
          </h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg bg-gradient-to-b from-[#1a0e0e] to-[#241010] shadow-lg border-l-4 border-[#F55D3E] flex flex-col items-center text-center"
              >
                {/* Icon */}
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={64} // 16 * 4
                  height={64} // 16 * 4
                  className="w-16 h-16 mb-4 rounded-full object-cover"
                />

                {/* Title */}
                <h3 className="text-[#FF5733] font-bold text-lg leading-tight">
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DrivesUsSection;
