"use client";

import React from "react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded-md flex items-center justify-center">
            {/* Replace with actual logo SVG if available */}
            <span className="font-bold text-lg text-white">CL</span>
          </div>
          <span className="font-bold text-xl text-black tracking-tight">CLARA</span>
        </div>
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-2 bg-gray-50 rounded-full px-4 py-1 border border-gray-200 shadow-sm">
          <a href="#" className="text-black font-semibold px-4 py-2 rounded-full bg-purple-100 text-purple-700">Home</a>
          <a href="#" className="text-gray-600 hover:text-purple-700 px-4 py-2 rounded-full transition">Features</a>
          <a href="#" className="text-gray-600 hover:text-purple-700 px-4 py-2 rounded-full transition">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-purple-700 px-4 py-2 rounded-full transition">Resources</a>
          <a href="#" className="text-gray-600 hover:text-purple-700 px-4 py-2 rounded-full transition">Pricing</a>
        </nav>
        {/* Actions */}
        <div className="flex items-center space-x-2">
          <button className="hidden md:inline-block text-gray-700 font-semibold px-4 py-2 rounded-full hover:bg-gray-100 transition">Login</button>
          <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:from-purple-700 hover:to-purple-500 transition text-sm">Schedule a Demo</button>
        </div>
      </div>
    </header>
  );
}
