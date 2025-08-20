import Image from "next/image";
import Navbar from "./subComponents/Navbar";

export default function Hero() {
  return (
  <>
    <Navbar />
    <div className="bg-white">
      <div className="flex flex-col lg:flex-row min-h-screen">

        <div className="flex flex-col justify-center px-8 lg:px-24 py-16 flex-1">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Pioneering India's Future <br/>
              Through Robotics & AI
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            Welcome to Robo Bharat Technologies - your gateway to innovation. We're on a mission to make cutting-edge robotics and AI accessible across India, empowering students and communities to build a smarter, stronger Bharat.
          </p>
          <div className="flex space-x-4">
            <button className="bg-gray-800 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-900 transition">
              Get Started
            </button>
            <button className="border-2 border-gray-800 text-gray-800 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 bg-gray-200 flex items-center justify-center relative hidden lg:flex">
          <div className="z-10 flex flex-col items-center"></div>

            <div className="relative mb-8">
            <div>
                <Image 
                  src="https://i.ibb.co/S7N49khH/Screenshot-2025-08-19-at-9-10-31-PM.png"
                  width={3200}
                  height={256}
                  alt='Image'
                />
            </div>

          </div>
        </div>
      </div>
    </div>
  </>
  );
}
