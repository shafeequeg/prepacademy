"use client";

import React, { useState, useEffect } from "react";
import { ChevronDown, Users, Target, Zap, Heart, Award, Globe, Mail, MapPin, Clock, ArrowRight, Sparkles, BookOpen, TrendingUp } from "lucide-react";

const CareersPage = () => {
  const [activeJob, setActiveJob] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const values = [
    { icon: Target, title: "Mission-first", desc: "Build products that truly help students succeed.", color: "bg-orange-500/10 text-orange-400" },
    { icon: TrendingUp, title: "Growth mindset", desc: "We invest in your learning with budgets and mentorship.", color: "bg-blue-500/10 text-blue-400" },
    { icon: Zap, title: "Flexibility", desc: "Hybrid-friendly work with asynchronous collaboration.", color: "bg-green-500/10 text-green-400" },
    { icon: Users, title: "Ownership", desc: "Small teams, big impact. Ship and iterate quickly.", color: "bg-purple-500/10 text-purple-400" },
    { icon: Heart, title: "Wellbeing", desc: "Time off, wellness days, and mental health support.", color: "bg-pink-500/10 text-pink-400" },
    { icon: Award, title: "Recognition", desc: "Transparent career paths and frequent recognition.", color: "bg-yellow-500/10 text-yellow-400" },
  ];

  const stats = [
    { number: "150k+", label: "Learners reached", icon: Users },
    { number: "25+", label: "Centers", icon: Globe },
    { number: "4.8", label: "Avg rating", icon: Award },
    { number: "95%", label: "Success rate", icon: Target }
  ];

  return (
    <main className="min-h-screen bg-[#1A0F0E] text-white overflow-hidden ">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-30 ">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-orange-300/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center ">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2B1615]/50 via-[#1A0F0E]/80 to-[#1A0F0E] " />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-8 mt-10">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Join our mission </span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-8">
              Shape the
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> future </span>
              of learning
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              We're building delightful learning experiences that empower students to achieve more. 
              Work with passionate people, ship impactful features, and grow your career.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <a
                href="#roles"
                className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
              >
                Explore roles
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#culture"
                className="group inline-flex items-center gap-2 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Our culture
                <Heart className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="group bg-[#2B1615]/60 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-6 text-center hover:border-orange-500/30 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500/10 rounded-full mb-4 group-hover:bg-orange-500/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-orange-400" />
                </div>
                <p className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</p>
                <p className="text-sm text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-orange-400" />
        </div>
      </section>

      {/* Culture Section */}
      <section id="culture" className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Life at PrepAcademy</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A culture of ownership, continuous learning, and kindness. We keep meetings short and outcomes strong.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="group relative bg-[#2B1615]/40 backdrop-blur-sm border border-orange-500/10 rounded-2xl p-8 hover:border-orange-500/30 transition-all duration-500 hover:scale-105"
                style={{ 
                  animationDelay: `${idx * 0.1}s`,
                  transform: `translateY(${scrollY * 0.02 * (idx + 1)}px)`
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${value.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.desc}</p>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles Section */}
      <section id="roles" className="relative py-20 bg-[#2B1615]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Don't see a perfect fit? We're always looking for talented individuals.
              <br />
              <span className="text-orange-400 font-semibold">Send your resume to careers@prepacademy.in</span>
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className={`group relative bg-[#1A0F0E]/80 backdrop-blur-sm border rounded-2xl p-8 cursor-pointer transition-all duration-300 ${
                  activeJob === idx 
                    ? 'border-orange-500 shadow-lg shadow-orange-500/25' 
                    : 'border-orange-500/20 hover:border-orange-500/40'
                }`}
                onClick={() => setActiveJob(activeJob === idx ? null : idx)}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className="inline-block bg-orange-500/10 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                      {job.team}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.role}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
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
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors duration-300">
                    Apply
                  </button>
                </div>

                {activeJob === idx && (
                  <div className="border-t border-orange-500/20 pt-6 animate-fade-in">
                    <p className="text-gray-300 mb-4 leading-relaxed">{job.description}</p>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-orange-400">Key Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {job.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="bg-[#2B1615] border border-orange-500/20 text-orange-300 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-[#2B1615] to-[#1A0F0E] border border-orange-500/20 rounded-3xl p-12 text-center overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-400/5 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-orange-400" />
                <span className="text-sm text-orange-300">Ready to join us?</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Start your journey with us</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Send your resume and tell us why you'd love to be part of PrepAcademy's mission.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@prepacademy.in?subject=Application%20-%20PrepAcademy"
                  className="group inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-500/25"
                >
                  <Mail className="w-5 h-5" />
                  Email your resume
                </a>
                <a
                  href="#roles"
                  className="group inline-flex items-center gap-2 border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  Browse roles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;