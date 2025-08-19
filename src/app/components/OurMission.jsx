import React from "react";
import Image from "next/image";

function OurMission() {
  return (
    <div className="bg-white py-16 min-h-screen flex flex-col justify-between">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Our Mission: Accessible Tech for All
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-600 mb-16 max-w-3xl">
          Our core mission is to democratize access to robotics and smart technologies across India. We believe every student, every school, and every innovator deserves the opportunity to engage with and contribute to the future of technology.
        </p>

        {/* Steps Illustration */}
        <div className="relative flex justify-center mb-14">
            <Image 
                src="https://i.ibb.co/0R5KWv8V/Screenshot-2025-08-19-at-9-55-48-PM.png"
                width="3000"
                height="3000"
            />
        </div>

        {/* Bottom note */}
        <div className="text-center pt-6 text-gray-500 text-base">
          This accessibility is key to realizing our dream: a future where Bharat leads the world in innovation, driven by its empowered youth.
        </div>
      </div>
    </div>
  );
}

export default OurMission;
