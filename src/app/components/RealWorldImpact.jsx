import React from "react";
import Image from "next/image";

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
          <Image
            src="https://i.ibb.co/TMgrf93y/Screenshot-2025-08-20-at-10-05-32-PM.png"
            alt="Student with robot and laptop"
            width={800}
            height={600}
            className="rounded-lg w-full object-cover aspect-[4/3]"
            priority
          />
          <Image
            src="https://i.ibb.co/Xkvgrnfd/Screenshot-2025-08-20-at-10-16-54-PM.png"
            alt="Robotic arm working on electronics"
            width={800}
            height={600}
            className="rounded-lg w-full object-cover aspect-[4/3]"
          />
          <Image
            src="https://i.ibb.co/rXZPLDT/Screenshot-2025-08-20-at-10-25-53-PM.png"
            alt="Smart agriculture field"
            width={800}
            height={600}
            className="rounded-lg w-full object-cover aspect-[4/3]"
          />
        </div>
        <div className="w-full mb-10">
          <Image
            src="https://i.ibb.co/gFvyNQcG/Screenshot-2025-08-20-at-10-23-47-PM.png"
            alt="Students working on city-scale model"
            width={1000}
            height={400}
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
