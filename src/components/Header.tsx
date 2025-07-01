"use client";

import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-8 bg-white sticky top-0 z-50">
      <div className="flex items-center space-x-4">
        {/* Logo with purple background and white icon */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-400 rounded-md flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4M7 12l2 2 4-4"
              />
            </svg>
          </div>
          <span className="font-bold text-xl text-black">CLARA</span>
        </div>
      </div>

      {/* Centered navigation menu with white pill background */}
      <nav className="hidden md:flex space-x-4 bg-white rounded-full shadow-md px-6 py-2">
        <a
          href="#"
          className="text-black font-semibold px-4 py-2 rounded-full bg-purple-100 text-purple-700"
        >
          Home
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-purple-700 px-4 py-2 rounded-full transition"
        >
          Features
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-purple-700 px-4 py-2 rounded-full transition"
        >
          Solutions
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-purple-700 px-4 py-2 rounded-full transition"
        >
          Resources
        </a>
        <a
          href="#"
          className="text-gray-500 hover:text-purple-700 px-4 py-2 rounded-full transition"
        >
          Pricing
        </a>
      </nav>

      {/* Right side buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="border border-gray-300 rounded-md px-4 py-2 text-black font-semibold hover:bg-gray-100 transition">
          Log In
        </button>
        <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-2 rounded-md font-semibold shadow-md hover:from-purple-700 hover:to-purple-500 transition">
          Schedule A Demo
        </button>
      </div>
    </header>
  );
}
