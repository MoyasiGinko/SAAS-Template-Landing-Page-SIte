"use client";

import React from "react";

export default function ContentSectionOne() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="relative bg-gradient-to-r from-purple-100 to-purple-200 rounded-3xl overflow-hidden">
          {/* Purple geometric background shapes */}
          <div className="absolute inset-0">
            {/* Large purple circle */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full transform translate-x-32 -translate-y-32"></div>
            {/* Purple rectangles */}
            <div className="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-purple-600 to-purple-500"></div>
            <div className="absolute bottom-0 left-40 w-32 h-32 bg-purple-400 transform rotate-45"></div>
            {/* Additional geometric elements */}
            <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-300 rounded-full opacity-60"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center min-h-[400px]">
            {/* Left content */}
            <div className="md:w-1/2 p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-900">
                The AI Workforce<br />
                humans can lean<br />
                on.
              </h2>
              <p className="text-gray-700 mb-6 text-base leading-relaxed max-w-sm">
                Never quits, and always improves. Scale to meet any demand.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center text-gray-900 font-semibold hover:text-purple-700 transition-colors text-sm"
              >
                More about clara
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            
            {/* Right image section */}
            <div className="md:w-1/2 relative p-8">
              <div className="relative">
                {/* Two people image - replace with actual image matching the design */}
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Two people collaborating with laptop"
                  className="w-full h-auto rounded-2xl shadow-lg object-cover"
                  style={{ aspectRatio: '4/3' }}
                />
                {/* Overlay elements to match the design aesthetic */}
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-400 rounded-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
