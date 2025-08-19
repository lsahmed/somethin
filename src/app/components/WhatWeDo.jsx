import React from "react";

function WhatWeDo() {
  return (
    <div className="min-h-screen bg-[#6C6E7B] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          What We Do: Shaping Tomorrow, Today
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-200 mb-14 max-w-4xl">
          At Robo Bharat, we bridge the gap between theoretical knowledge and practical application. Our comprehensive programs and solutions are designed to foster a deep understanding of robotics and AI.
        </p>
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="border-2 border-gray-200 rounded-lg px-8 py-7 bg-[#6c6e7b] shadow-[8px_8px_0px_#44465a]">
            <h3 className="text-2xl font-semibold text-white mb-2">Robotics Projects</h3>
            <p className="text-gray-200 text-lg">
              We design and implement smart systems and automation solutions for real-world challenges, transforming concepts into tangible impact.
            </p>
          </div>
          {/* Card 2 */}
          <div className="border-2 border-gray-200 rounded-lg px-8 py-7 bg-[#6c6e7b] shadow-[8px_8px_0px_#44465a]">
            <h3 className="text-2xl font-semibold text-white mb-2">Workshops & Training</h3>
            <p className="text-gray-200 text-lg">
              Educating students in robotics, AI, coding, and essential future skills through engaging and practical sessions.
            </p>
          </div>
          {/* Card 3 */}
          <div className="border-2 border-gray-200 rounded-lg px-8 py-7 bg-[#6c6e7b] shadow-[8px_8px_0px_#44465a]">
            <h3 className="text-2xl font-semibold text-white mb-2">Smart Tech Solutions</h3>
            <p className="text-gray-200 text-lg">
              Developing low-cost, efficient, and innovative products for everyday use, making advanced technology accessible.
            </p>
          </div>
          {/* Card 4 */}
          <div className="border-2 border-gray-200 rounded-lg px-8 py-7 bg-[#6c6e7b] shadow-[8px_8px_0px_#44465a]">
            <h3 className="text-2xl font-semibold text-white mb-2">Strategic Collaboration</h3>
            <p className="text-gray-200 text-lg">
              Partnering with schools, institutes, and innovators to widely disseminate technology education across India.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDo;
