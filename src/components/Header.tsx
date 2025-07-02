"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [activeTab, setActiveTab] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Solutions", href: "#solutions" },
    { name: "Resources", href: "#resources" },
    { name: "Pricing", href: "#pricing" }
  ];

  const handleTabClick = (tabName: string, href: string) => {
    setActiveTab(tabName);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-500 rounded-md flex items-center justify-center shadow-sm">
            <span className="font-bold text-lg text-white">C</span>
          </div>
          <span className="font-bold text-2xl text-gray-900 tracking-tight">CLARA</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 bg-gray-50/80 rounded-lg px-2 py-1 border border-gray-200/60 shadow-sm">
          {navigationItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleTabClick(item.name, item.href)}
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === item.name
                  ? "bg-white text-gray-900 shadow-sm border border-gray-200/60"
                  : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          <Link 
            href="/login"
            className="hidden lg:inline-block text-gray-700 font-medium px-5 py-2.5 rounded-md hover:bg-gray-50 transition-all duration-200"
          >
            Log In
          </Link>
          <Link 
            href="/schedule-demo"
            className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2.5 rounded-md font-medium shadow-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5"
          >
            Schedule A Demo
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-50 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className={`w-6 h-6 text-gray-600 transition-transform duration-200 ${
                isMobileMenuOpen ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  handleTabClick(item.name, item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === item.name
                    ? "bg-purple-50 text-purple-700 border border-purple-200"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-gray-100 mt-4">
              <Link 
                href="/login"
                className="block w-full text-left px-4 py-3 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 transition-all duration-200"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
