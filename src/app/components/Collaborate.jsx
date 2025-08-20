import React from "react";
import Image from "next/image";

function CollaborateWithUs() {
  return (
    <div className="bg-[#6C6E7B] min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Collaborate With Us
        </h2>
        {/* Description */}
        <p className="text-lg text-gray-100 mb-10 max-w-4xl">
          Partnerships are at the heart of our mission. We actively seek collaborations with educational institutions, technology companies, and individual innovators who share our vision.
        </p>
        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <Image
              src="https://i.ibb.co/m5bNkdjc/Screenshot-2025-08-20-at-10-11-23-PM.png"
              alt="Students working on robotics at a table"
              width={1000}
              height={600}
              className="rounded-lg w-full object-cover md:h-full aspect-[5/3]"
              priority
            />
          </div>
          {/* Collaboration Cards */}
          <div className="flex flex-col gap-6 justify-center">
            {/* Card 1 */}
            <div className="flex items-stretch">
              <div className="bg-gray-200 text-[#6C6E7B] font-bold text-xl flex items-center justify-center px-5 rounded-l-lg border-t border-b border-l border-gray-300">
                1
              </div>
              <div className="flex-1 bg-[#75798c] border border-gray-300 border-l-0 rounded-r-lg p-5">
                <div className="text-white font-semibold text-lg mb-1">Schools & Colleges</div>
                <div className="text-gray-100">Integrate robotics and AI into your curriculum.</div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex items-stretch">
              <div className="bg-gray-200 text-[#6C6E7B] font-bold text-xl flex items-center justify-center px-5 rounded-l-lg border-t border-b border-l border-gray-300">
                2
              </div>
              <div className="flex-1 bg-[#75798c] border border-gray-300 border-l-0 rounded-r-lg p-5">
                <div className="text-white font-semibold text-lg mb-1">Tech Innovators</div>
                <div className="text-gray-100">Join forces on groundbreaking projects.</div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex items-stretch">
              <div className="bg-gray-200 text-[#6C6E7B] font-bold text-xl flex items-center justify-center px-5 rounded-l-lg border-t border-b border-l border-gray-300">
                3
              </div>
              <div className="flex-1 bg-[#75798c] border border-gray-300 border-l-0 rounded-r-lg p-5">
                <div className="text-white font-semibold text-lg mb-1">Community Organizations</div>
                <div className="text-gray-100">Bring technology education to underserved areas.</div>
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Note */}
        <div className="text-gray-100 text-base mt-10">
          Together, we can accelerate India's journey towards a technologically advanced future.
        </div>
      </div>
    </div>
  );
}

export default CollaborateWithUs;
