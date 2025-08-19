import React from "react";

function ImpactGrowth() {
  return (
    <div className="bg-white min-h-screen py-16 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Impact & Growth: Our Journey So Far
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-12 max-w-4xl">
          Since our inception, Robo Bharat Technologies has made significant strides in empowering youth and fostering technological literacy across India. We are proud of the tangible impact we've achieved.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 text-center">
          {/* Students Trained */}
          <div>
            <div className="text-5xl font-bold text-gray-700 mb-2">5K+</div>
            <div className="text-xl font-semibold text-gray-600 mb-1">Students Trained</div>
            <div className="text-gray-500">Empowering the next generation of innovators.</div>
          </div>
          {/* Workshops Conducted */}
          <div>
            <div className="text-5xl font-bold text-gray-700 mb-2">50+</div>
            <div className="text-xl font-semibold text-gray-600 mb-1">Workshops Conducted</div>
            <div className="text-gray-500">Across various schools and communities.</div>
          </div>
          {/* Innovative Projects */}
          <div>
            <div className="text-5xl font-bold text-gray-700 mb-2">15+</div>
            <div className="text-xl font-semibold text-gray-600 mb-1">Innovative Projects</div>
            <div className="text-gray-500">Solving real-world problems with smart tech.</div>
          </div>
        </div>

        {/* Concluding line */}
        <div className="text-gray-500 text-center text-lg max-w-3xl mx-auto">
          These numbers reflect our growing reach and the increasing enthusiasm for robotics and AI in India.
        </div>
      </div>
    </div>
  );
}

export default ImpactGrowth;
