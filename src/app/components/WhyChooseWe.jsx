import React from "react";

function WhyChooseWe() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6 py-20">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
          Why Choose Robo Bharat?
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-14 max-w-3xl">
          Choosing Robo Bharat means investing in a future where technology is accessible, innovative, and driven by a national vision. Our commitment to practical learning and collaboration sets us apart.
        </p>

        {/* Options grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Nation-Driven Vision */}
          <div className="flex items-start">
            <span className="w-10 h-10 bg-white border-2 border-gray-300 rounded-md mr-5 flex-shrink-0 flex items-center justify-center">
              {/* Empty checkbox SVG */}
              <svg width="24" height="24" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="4" fill="#fff" stroke="#d1d5db" strokeWidth="2"/>
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-1">Nation-Driven Vision</h3>
              <p className="text-gray-600">
                We innovate with Bharat's progress at heart, focusing on solutions that benefit our nation.
              </p>
            </div>
          </div>
          {/* Collaborative Growth */}
          <div className="flex items-start">
            <span className="w-10 h-10 bg-white border-2 border-gray-300 rounded-md mr-5 flex-shrink-0 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="4" fill="#fff" stroke="#d1d5db" strokeWidth="2"/>
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-1">Collaborative Growth</h3>
              <p className="text-gray-600">
                We believe true growth stems from working together, fostering a community of shared knowledge.
              </p>
            </div>
          </div>
          {/* Creative & Affordable */}
          <div className="flex items-start">
            <span className="w-10 h-10 bg-white border-2 border-gray-300 rounded-md mr-5 flex-shrink-0 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="4" fill="#fff" stroke="#d1d5db" strokeWidth="2"/>
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-1">Creative & Affordable</h3>
              <p className="text-gray-600">
                Our solutions are simple, affordable, and highly effective, breaking down barriers to technology adoption.
              </p>
            </div>
          </div>
          {/* Student Empowerment */}
          <div className="flex items-start">
            <span className="w-10 h-10 bg-white border-2 border-gray-300 rounded-md mr-5 flex-shrink-0 flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <rect x="3" y="3" width="18" height="18" rx="4" fill="#fff" stroke="#d1d5db" strokeWidth="2"/>
              </svg>
            </span>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-1">Student Empowerment</h3>
              <p className="text-gray-600">
                Inspiring the next generation of engineers and problem-solvers to lead India's technological revolution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseWe;
