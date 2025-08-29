"use client"

import React, { useState } from "react";
import Link from "next/link";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Track which specific dropdown is open

  // Helper function to handle navigation clicks
  const handleNavClick = (href, name, e) => {
    if (href === "/" && name !== "Home") {
      e.preventDefault();
      alert(`"${name}" page is under development. Please check back later!`);
      return;
    }
  };

  const navItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About Us",
      dropdown: [
        { name: "Who we are?", href: "/#About" },
        { name: "Mission & Vision", href: "/#ourmission  " },
        { name: "What We DO", href: "/#whatwedo" },
        { name: "Why Choose us?", href: "/#whywe" },
      ],
    },
    {
      name: "Our Work",
      dropdown: [
        { name: "Projects", href: "/" },
        { name: "Workshops Etc", href: "/#workshop" },
        { name: "Impact on World", href: "/#realworldimpact" },
      ]
    },
    {
      name: "Our Team",
      href: "/team"
    },
    {
      name: "Join Us",
      dropdown: [
        { name: "Volunteer", href: "/"},
        { name: "Collaborate", href: "/#collaborate" },
      ],
    },
    { name: "Contact Us", 
      href: "/#contact" 
    },
    // The dropdown item (no href, triggers dropdown)
  ];

  // Desktop nav (with dropdown)
  function DesktopNav() {
    return (
      <div className="hidden md:flex gap-4 items-center">
        {navItems.map((item, idx) => (
          item.dropdown ? (
            // Dropdown Button
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(idx)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="w-full px-6 py-0.5 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold bg-transparent hover:bg-gray-800 hover:text-white transition">
                {item.name}
              </button>
              {/* Dropdown menu with invisible bridge */}
              {dropdownOpen === idx && (
                <>
                  {/* Invisible bridge to prevent hover break */}
                  <div className="absolute left-0 top-full w-44 h-1 bg-transparent"></div>
                  <div className="absolute left-0 z-10 top-full mt-1 w-44 rounded-lg bg-white border border-gray-200 shadow-lg flex flex-col">
                    {item.dropdown.map((d, didx) => (
                      <Link href={d.href} key={didx} className="px-4 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-800 rounded transition" onClick={(e) => handleNavClick(d.href, d.name, e)}>
                        {d.name}
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <Link href={item.href} key={idx} onClick={(e) => handleNavClick(item.href, item.name, e)}>
              <button className="w-full px-6 py-0.5 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold bg-transparent hover:bg-gray-800 hover:text-white transition text-left">
                {item.name}
              </button>
            </Link>
          )
        ))}
      </div>
    );
  }

  // Mobile nav (dropdown inside collapse)
  function MobileNav() {
    return (
      <div className="md:hidden bg-[#f5f6fa] border-t border-gray-200 px-6 py-4 flex flex-col gap-3">
        {navItems.map((item, idx) => (
          item.dropdown ? (
            <div key={idx}>
              {/* Toggle for dropdown */}
              <button
                className="w-full px-6 py-0.5 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold bg-transparent hover:bg-gray-800 hover:text-white transition flex justify-between items-center"
                onClick={() => setDropdownOpen(dropdownOpen === idx ? null : idx)} // Toggle specific dropdown
              >
                <span>{item.name}</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform ${dropdownOpen === idx ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Show dropdown if open */}
              {dropdownOpen === idx && (
                <div className="mt-1 flex flex-col pl-4">
                  {item.dropdown.map((d, didx) => (
                    <Link href={d.href} key={didx}
                      className="py-2 px-2 text-gray-800 hover:bg-gray-100 rounded transition"
                      onClick={(e) => {
                        handleNavClick(d.href, d.name, e);
                        setOpen(false); // Close mobile navbar when clicking dropdown link
                      }}
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link href={item.href} key={idx} onClick={(e) => {
              handleNavClick(item.href, item.name, e);
              setOpen(false); // Close mobile navbar when clicking regular link
            }}>
              <button 
                className="w-full px-6 py-0.5 rounded-lg border-2 border-gray-800 text-gray-800 font-semibold bg-transparent hover:bg-gray-800 hover:text-white transition text-left"
              >
                {item.name}
              </button>
            </Link>
          )
        ))}
      </div>
    );
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#f5f6fa] border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Brand on the left */}
        <Link href="/">
          <span className="text-2xl font-bold text-gray-800 tracking-wide">
            RoboBharat
          </span>
        </Link>
        <DesktopNav />
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
      {open && <MobileNav />}
    </nav>
  );
}

export default Navbar;
