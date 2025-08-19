import React from "react";

function Contact() {
  return (
    <div className="bg-[#464852] min-h-screen py-20 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
          Connect With Robo Bharat Technologies
        </h2>
        {/* Subtitle */}
        <p className="text-lg text-gray-200 mb-14 max-w-3xl mx-auto text-center">
          Ready to learn, collaborate, or innovate with us? We are eager to connect with you and explore how we can build a smarter Bharat together.
        </p>
        {/* Contact Options */}
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-10 md:gap-0 mb-10">
          {/* Email */}
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3 text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
              <rect x="9" y="14" width="30" height="20" rx="3" stroke="currentColor"/>
              <polyline points="9,14 24,28 39,14" stroke="currentColor" fill="none"/>
            </svg>
            <div className="font-bold text-xl text-white mb-1">Email Us</div>
            <a href="mailto:robobharat.tech@gmail.com" className="text-gray-300 underline font-medium">
              robobharat.tech@gmail.com
            </a>
          </div>
          {/* Social */}
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3 text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
              <path d="M12 33c2-2 4.5-4 12-4s10 2 12 4" stroke="currentColor"/>
              <circle cx="24" cy="20" r="7" stroke="currentColor"/>
              <path d="M24 15v5l4 2" stroke="currentColor"/>
            </svg>
            <div className="font-bold text-xl text-white mb-1">Follow Our Journey</div>
            <div className="text-gray-300">Instagram / YouTube / LinkedIn</div>
          </div>
          {/* Address */}
          <div className="flex flex-col items-center">
            <svg className="w-12 h-12 mb-3 text-gray-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 48 48">
              <circle cx="24" cy="20" r="6" stroke="currentColor"/>
              <path d="M24 42c8-10 12-16 12-22a12 12 0 10-24 0c0 6 4 12 12 22z" stroke="currentColor"/>
            </svg>
            <div className="font-bold text-xl text-white mb-1">Our Base</div>
            <div className="text-gray-300">Delhi, India</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
