"use client";

import React from "react";

export default function ComplianceSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-normal text-gray-900 mb-6 leading-relaxed">
              Clara meets the highest industry benchmarks—<br />
              so your data grows safely with you.
            </h2>
            <button className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5">
              Get Started
            </button>
          </div>
          
          {/* Right Content - Compliance Badges */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-end space-x-8">
            {/* GDPR Badge */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center mb-2">
                <div className="text-center">
                  <div className="flex justify-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-blue-500 text-xs">★</span>
                    ))}
                  </div>
                  <span className="text-xs font-bold text-blue-600">GDPR</span>
                </div>
              </div>
            </div>
            
            {/* BSI Badge */}
            <div className="flex flex-col items-center">
              <div className="w-24 h-20 bg-white rounded-lg border border-gray-200 shadow-sm flex items-center justify-center mb-2 px-3">
                <div className="text-center">
                  <div className="w-8 h-8 bg-gray-200 rounded-full mb-1 mx-auto flex items-center justify-center">
                    <span className="text-xs font-bold text-gray-600">BSI</span>
                  </div>
                  <span className="text-xs text-gray-600">ISO 27001</span>
                  <br />
                  <span className="text-xs text-gray-600">CERTIFIED</span>
                </div>
              </div>
            </div>
            
            {/* CCPA Badge */}
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center mb-2">
                <div className="text-center">
                  <div className="w-6 h-6 bg-green-500 rounded-full mb-1 mx-auto flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-xs font-bold text-gray-700">CCPA</span>
                  <br />
                  <span className="text-xs text-gray-500">compliance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
