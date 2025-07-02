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
            <div className="lg:w-1/2 flex items-center justify-center lg:justify-end gap-8">
              {/* GDPR Badge */}
              <div className="flex flex-col items-center space-y-1 w-24">
                <div className="w-20 h-20 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" stroke="#3B82F6" strokeWidth="3" fill="#EFF6FF" />
                    <rect x="13" y="17" width="14" height="10" rx="3" fill="#3B82F6" />
                    <circle cx="20" cy="22" r="2" fill="#fff" />
                  </svg>
                </div>
                <span className="text-xs font-bold text-blue-600 text-center">GDPR</span>
              </div>
              
              {/* BSI Badge */}
              <div className="flex flex-col items-center space-y-1 w-24">
                <div className="w-20 h-20 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-1">
                    <rect x="5" y="8" width="30" height="24" rx="6" fill="#E5E7EB" stroke="#6B7280" strokeWidth="2"/>
                    <circle cx="20" cy="20" r="7" fill="#6B7280" />
                    <text x="20" y="24" textAnchor="middle" fontSize="10" fill="#fff" fontWeight="bold">BSI</text>
                  </svg>
                </div>
                <span className="text-xs text-gray-600 text-center">ISO 27001</span>
              </div>
              
              {/* CCPA Badge */}
              <div className="flex flex-col items-center space-y-1 w-24">
                <div className="w-20 h-20 bg-white rounded-full border border-gray-200 shadow-sm flex items-center justify-center mb-2">
                  <svg width="40" height="40" viewBox="0 0 40 40" className="mb-1" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20" cy="20" r="18" fill="#22C55E" />
                    <polyline points="13,21 18,26 27,15" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs font-bold text-gray-700 text-center">CCPA</span>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
