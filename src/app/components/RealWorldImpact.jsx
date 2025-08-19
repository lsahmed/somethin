import React from "react";

function RealWorldImpact() {
  return (
    <div className="bg-[#555963] min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Real-World Impact: Projects in Action
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-200 mb-10 max-w-4xl">
          Our projects are not just theoretical exercises; they are practical solutions addressing genuine needs. From smart agriculture systems to assistive robotics, we're building innovations that truly matter.
        </p>

        {/* Project imgs grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <img
            src="https://i.ibb.co/BVdXPDhr/Screenshot-2025-08-19-at-10-01-41-PM.png"
            alt="Student with robot and laptop"
            className="rounded-lg w-full object-cover aspect-[4/3]"
          />
          <img
            src="https://i.ibb.co/0RNtBzpb/Screenshot-2025-08-19-at-10-03-34-PM.png"
            alt="Robotic arm working on electronics"
            className="rounded-lg w-full object-cover aspect-[4/3]"
          />
          <img
            src="https://i.ibb.co/0RmSzwht/Screenshot-2025-08-19-at-10-04-17-PM.png"
            alt="Smart agriculture field"
            className="rounded-lg w-full object-cover aspect-[4/3]"
          />
        </div>
        <div className="w-full mb-10">
          <img
            src="https://i.ibb.co/6R5dtf7f/joj.png"
            alt="Students working on city-scale model"
            className="rounded-lg w-full object-cover aspect-[5/2]"
          />
        </div>

        {/* Bottom note */}
        <p className="text-gray-200 text-base mt-4">
          Each project is a testament to our commitment to "Learning by Doing" and "Innovation First," directly contributing to a smarter Bharat.
        </p>
      </div>
    </div>
  );
}

export default RealWorldImpact;
