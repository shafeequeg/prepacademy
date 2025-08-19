"use client";

import React, { useState } from "react";
import { ArrowRight, Mail, MapPin, Clock, Sparkles } from "lucide-react";
import Link from "next/link";

const CareersPage = () => {
  const [activeJob, setActiveJob] = useState<number | null>(null);

  const jobs = [
    {
      role: "Frontend Engineer",
      type: "Full-time",
      location: "Hybrid, Kochi",
      description: "Build beautiful, responsive interfaces that make learning delightful for thousands of students.",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      team: "Engineering"
    },
    {
      role: "Curriculum Designer - CAT",
      type: "Full-time",
      location: "Hybrid, Kochi",
      description: "Design comprehensive learning paths that help students master CAT concepts effectively.",
      skills: ["Curriculum Design", "CAT Expertise", "Learning Psychology", "Content Strategy"],
      team: "Education"
    },
    {
      role: "Center Manager",
      type: "Full-time",
      location: "Multiple locations",
      description: "Lead our physical centers, ensuring exceptional student experience and operational excellence.",
      skills: ["Operations", "Team Leadership", "Student Relations", "Process Management"],
      team: "Operations"
    },
    {
      role: "Marketing Specialist",
      type: "Full-time",
      location: "Remote (India)",
      description: "Drive growth through creative campaigns that connect with students and showcase our impact.",
      skills: ["Digital Marketing", "Content Creation", "Analytics", "Campaign Management"],
      team: "Marketing"
    }
  ];

  const handleJobCardClick = (idx: number, e: React.MouseEvent) => {
    // Don't expand/collapse if clicking on the apply button
    const target = e.target as HTMLElement;
    if (target.closest('a[href="/becomeanemployee"]')) {
      return;
    }
    setActiveJob(activeJob === idx ? null : idx);
  };

  return (
    <main className="min-h-screen bg-[#1A0F0E] text-white">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-8 py-20">

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8 mt-10">
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Join our mission</span>
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            Shape the
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> future </span>
            of learning
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
            Work with passionate people, ship impactful features, and grow your career while building delightful learning experiences.
          </p>

          <a
            href="#roles"
            className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
          >
            Explore openings
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

        </div>        
      </section>
    


      {/* Open Roles Section */}
      <section id="roles" className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-gray-300">
              Don&apos;t see a perfect fit? <span className="text-orange-400 font-semibold">careers@prepacademy.in</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className={`group relative bg-[#2B1615]/60 backdrop-blur-sm border rounded-2xl p-6 cursor-pointer transition-all duration-300 ${activeJob === idx
                  ? 'border-orange-500 shadow-lg shadow-orange-500/25'
                  : 'border-orange-500/20 hover:border-orange-500/40'
                  }`}
                onClick={(e) => handleJobCardClick(idx, e)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {job.team}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.role}</h3>
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm text-gray-400">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/becomeanemployee"
                    className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 shrink-0 inline-block text-center relative z-10"
                  >
                    Apply
                  </Link>
                </div>

                {activeJob === idx && (
                  <div className="border-t border-orange-500/20 pt-4 animate-fade-in">
                    <p className="text-gray-300 mb-4 text-sm leading-relaxed">{job.description}</p>
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-orange-400">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="bg-[#1A0F0E] border border-orange-500/20 text-orange-300 px-2 py-1 rounded-full text-xs"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#2B1615] to-[#1A0F0E] border border-orange-500/20 rounded-2xl p-8 text-center overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl" />

            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Ready to join us?</h2>
              <p className="text-gray-300 mb-6 max-w-lg mx-auto">
                Send your resume and tell us why you&apos;d love to be part of PrepAcademy&apos;s mission.
              </p>

              <div className="group inline-flex items-center  gap-2 bg-orange-500/10 border border-orange-500/20 px-6 py-3 rounded-full font-semibold text-orange-300">
                <Mail className="w-4 h-4" />
                career@prepacademy.in
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>


    </main>
  );
};

export default CareersPage;