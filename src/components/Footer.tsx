"use client";

import React from "react";

export default function Footer() {
  return (
    <div className="relative">
      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-500 to-purple-400 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          {/* Decorative lines and shapes */}
          <div className="absolute top-10 left-1/4 w-32 h-px bg-white/20 rotate-45"></div>
          <div className="absolute top-20 right-1/3 w-24 h-px bg-white/20 -rotate-45"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-px bg-white/20 rotate-12"></div>
          
          {/* Decorative circles */}
          <div className="absolute top-16 right-1/4 w-2 h-2 bg-white/30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/5 w-3 h-3 bg-white/20 rounded-full"></div>
          <div className="absolute top-32 left-1/2 w-1 h-1 bg-white/40 rounded-full"></div>
          
          {/* Main decorative star/cross in top right */}
          <div className="absolute top-8 right-16">
            <div className="relative">
              <div className="w-4 h-px bg-white/50"></div>
              <div className="w-px h-4 bg-white/50 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-white py-20 px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-6 leading-tight">
            Know More, Act Faster And<br />
            Close Smarter.
          </h2>
          <p className="mb-10 text-lg text-white/90">
            AI-powered clarity for every stage of your customer journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-all duration-200 shadow-lg">
              Get Started
            </button>
            <button className="bg-purple-800/80 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-800 transition-all duration-200 border border-purple-700/50">
              Schedule A Demo
            </button>
          </div>
        </div>

        {/* Bottom padding to accommodate overlapping footer */}
        <div className="h-20"></div>
      </section>

      {/* Footer Section with Glass Effect - Overlapping */}
      <footer className="relative -mt-32 z-20">
        <div className="mx-8 lg:mx-16">
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                  {/* Logo and tagline */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <span className="text-gray-800 text-2xl font-bold">CLARA</span>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Every Customer Insights,<br />
                      Intelligently Handled
                    </p>
                  </div>

                  {/* Navigation links */}
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-4 text-gray-800">Features</h4>
                        <ul className="space-y-3 text-sm">
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Clara feed</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Smart summary</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Pulse Score</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Touchpoint Reminder</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Clara Snapshot</a></li>
                        </ul>
                      </div>

                      {/* Company */}
                      <div>
                        <h4 className="font-semibold mb-4 text-gray-800">Company</h4>
                        <ul className="space-y-3 text-sm">
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">About us</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Careers</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Contact Us</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Feature</a></li>
                        </ul>
                      </div>

                      {/* Stay in touch */}
                      <div>
                        <h4 className="font-semibold mb-4 text-gray-800">Stay in touch</h4>
                        <ul className="space-y-3 text-sm">
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Instagram</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Facebook</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Twitter</a></li>
                          <li><a href="#" className="text-gray-600 hover:text-purple-600 transition-colors">Youtube</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom copyright section */}
                <div className="mt-12 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-gray-500 text-sm">
                    Copyright 2025. All rights reserved by Clara
                  </div>
                  <div className="flex gap-6 text-sm">
                    <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Privacy policy</a>
                    <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Terms and condition</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Extra spacing at bottom */}
        <div className="h-16"></div>
      </footer>
    </div>
  );
}
