"use client"

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    {
        name: "Join Us",
        href: "/forms",
    },
    {
        name: "Our Team",
        href: "/team",
    },
    {
        name: "Our Work",
        href: "/",
    },
    {
        name: "Become a Volunteer",
        href: "/forms",
    },
  ]

  return (
    <nav className="w-full bg-[#f5f6fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Brand on the left */}
        <span className="text-2xl font-bold text-gray-800 tracking-wide">
          RoboBharat
        </span>
        {/* Desktop navigation */}
        <div className="hidden md:flex gap-4">
            {navItems.map((item, idx) => {
            return <button key={idx} className="w-full px-6 py-0.5 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold bg-transparent hover:bg-gray-800 hover:text-white transition text-left">
                    <Link href={item.href}>
                        {item.name}
                    </Link>
                </button>
            })}
                
        </div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-label="Open Menu"
            className="focus:outline-none"
          >
            <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {open ? (
                // Close (X)
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Hamburger
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#f5f6fa] border-t border-gray-200 px-6 py-4 flex flex-col gap-3">
            {navItems.map((item, idx) => {
            return <button key={idx} className="w-full px-6 py-1 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold bg-transparent hover:bg-gray-800 hover:text-white transition text-left">
                    <Link href={item.href}>
                        {item.name}
                    </Link>
                </button>
            })}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
