import React from "react";

function WorkshopsTraining() {
  return (
    <section className="bg-gray-100 min-h-screen py-16" id="workshop">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Empowering Through Education: Workshops & Training
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-700 mb-12 max-w-4xl">
          We believe that knowledge is the most powerful tool. Our workshops and training programs are designed to equip students with the practical skills needed to thrive in the age of AI and robotics.
        </p>

        {/* Topics Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Block 1 */}
          <div>
            <div className="flex items-center text-gray-400 font-semibold text-lg mb-1">
              01
              <span className="flex-1 border-b border-gray-400 ml-3"></span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Foundation in Coding
            </h3>
            <p className="text-gray-700 text-lg">
              Building strong programming fundamentals for all aspiring innovators.
            </p>
          </div>
          {/* Block 2 */}
          <div>
            <div className="flex items-center text-gray-400 font-semibold text-lg mb-1">
              02
              <span className="flex-1 border-b border-gray-400 ml-3"></span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Robotics Fundamentals
            </h3>
            <p className="text-gray-700 text-lg">
              Hands-on experience with robot design, assembly, and operation.
            </p>
          </div>
          {/* Block 3 */}
          <div>
            <div className="flex items-center text-gray-400 font-semibold text-lg mb-1">
              03
              <span className="flex-1 border-b border-gray-400 ml-3"></span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Applied AI Concepts
            </h3>
            <p className="text-gray-700 text-lg">
              Understanding and implementing artificial intelligence in real-world scenarios.
            </p>
          </div>
          {/* Block 4 */}
          <div>
            <div className="flex items-center text-gray-400 font-semibold text-lg mb-1">
              04
              <span className="flex-1 border-b border-gray-400 ml-3"></span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Future Skill Development
            </h3>
            <p className="text-gray-700 text-lg">
              Cultivating critical thinking, problem-solving, and collaborative skills.
            </p>
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-lg text-gray-600">
          These programs are crucial for fostering the next generation of Indian technological leaders.
        </div>
      </div>
    </section>
  );
}

export default WorkshopsTraining;
