import React from "react";

function About() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
          About Robo Bharat Technologies
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl">
          We are a youth-led initiative, passionate about leveraging technology to solve real-world challenges.
          Our approach combines creative thinking with practical engineering, focusing on solutions that truly
          make a difference in people's lives.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Item 1 */}
          <div className="flex items-start">
            <div className="bg-white border border-gray-300 rounded-lg p-3 mr-4 flex-shrink-0">
              {/* Lightbulb SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a7 7 0 017 7c0 2.268-1.241 4.238-3.072 5.292a2 2 0 00-.928 1.708V18a2 2 0 01-2 2h0a2 2 0 01-2-2v-.999a2 2 0 00-.928-1.708A6.997 6.997 0 015 9a7 7 0 017-7z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21h6" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-1">Innovation First</h3>
              <p className="text-gray-600">
                Turning groundbreaking ideas into impactful projects.
              </p>
            </div>
          </div>
          {/* Item 2 */}
          <div className="flex items-start">
            <div className="bg-white border border-gray-300 rounded-lg p-3 mr-4 flex-shrink-0">
              {/* Emoji-like robot face SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <rect x="4" y="8" width="16" height="10" rx="4" strokeWidth={2} stroke="currentColor" fill="none"/>
                <circle cx="8.5" cy="13" r="1" fill="currentColor"/>
                <circle cx="15.5" cy="13" r="1" fill="currentColor"/>
                <path strokeLinecap="round" strokeWidth={2} stroke="currentColor" d="M10 16c.667.667 2.333.667 3 0"/>
                <rect x="9" y="4" width="6" height="4" rx="1" strokeWidth={2} stroke="currentColor" fill="none"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-1">Learning by Doing</h3>
              <p className="text-gray-600">
                Providing immersive, hands-on robotics and coding experiences.
              </p>
            </div>
          </div>
          {/* Item 3 */}
          <div className="flex items-start">
            <div className="bg-white border border-gray-300 rounded-lg p-3 mr-4 flex-shrink-0">
              {/* Rupee SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <text x="6" y="20" fontSize="18" fontFamily="Arial" fill="currentColor">
                  ₹
                </text>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-1">Nation Building</h3>
              <p className="text-gray-600">
                Empowering students to shape India's technological future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
