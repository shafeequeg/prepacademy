import React from 'react';

// Custom SVG components
const StarIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="16" 
    height="16" 
    viewBox="0 0 24 24" 
    fill="currentColor"
    className="text-yellow-400"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const SendIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className="text-white"
  >
    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
  </svg>
);

const TestimonialsAndCTA = () => {
  const testimonials = [
    {
      name: "Rohit, NDA Topper",
      text: "The study strategy helped me speak areas that were previously I never thought I needed to top my exam. I'm ready to answer any",
      rating: 5
    },
    {
      name: "Aisha, CLAT Achiever",
      text: "My whole test prep uplifted. Revolutionary way to prepare, guide, and acquire mastery",
      rating: 5
    },
    {
      name: "Rohit, NDA Topper",
      text: "The strategy helped me speak areas that I previously never thought I needed to top my exam. I'm ready to answer any",
      rating: 5
    }
  ];

  return (
    <div className="bg-[#0F0F0F] min-h-screen p-8">
      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto mb-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-[#FF5733]">Real Talks</span>{" "}
          <span className="text-white">From Our</span>{" "}
          <span className="text-white block mt-2">Students</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-[#1A1A1A] rounded-lg p-6 border border-gray-800"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gray-600 rounded-full" />
                <span className="text-white font-medium">{testimonial.name}</span>
              </div>
              
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-full mx-auto p-4">
      <div className="bg-[#2A1810] rounded-xl p-4 lg:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section */}
        <div className="w-full md:w-[75%] rounded-xl p-4" 
          style={{ background: 'linear-gradient(to bottom, rgba(205, 93, 62, 0.5), rgba(143, 54, 36, 0.5))' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Text Content */}
            <div className="w-full p-4 lg:p-14">
              <h2 className="text-2xl lg:text-3xl font-bold">
                <span className="text-[#FF5733]">Serious About Your Exam?</span>
                <span className="text-white block mt-2">Let's Make It Happen</span>
              </h2>

              <button className="bg-[#FF5733] text-white px-4 lg:px-6 py-2 lg:py-3 rounded-lg flex items-center gap-2 hover:bg-[#E64A2E] transition-colors mt-4">
                Click to start your journey
                <span className="text-lg">→</span>
              </button>
            </div>
            
            {/* Image Container */}
            <div className="w-32 md:w-40 lg:w-56 aspect-square flex-shrink-0">
              <img 
                src="/aboutusexamregister.png" 
                alt="Mascot" 
                className="w-full h-full object-contain"
              />
            </div>

          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[25%] p-2 lg:p-5">
          <div 
            className="p-4 lg:p-8 rounded-lg text-center shadow-lg min-h-[200px] lg:min-h-[300px] flex flex-col justify-center"
            style={{ background: 'linear-gradient(to bottom, rgba(205, 93, 62, 0.5), rgba(143, 54, 36, 0.5))' }}
          >
            <div className="mx-auto mb-3 w-6 lg:w-8 h-6 lg:h-8">
              <SendIcon />
            </div>
            <span className="text-white text-sm block font-semibold">
              Join the Revolution
            </span>
            <button className="mt-3 text-xs bg-[#F55D3E] text-white px-4 lg:px-5 py-2 rounded hover:bg-[#5A473D] transition">
              Join Telegram Group
            </button>
          </div>
        </div>

      </div>
    </div>





    </div>
  );
};

export default TestimonialsAndCTA;