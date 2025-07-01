"use client";

import React from "react";

export default function ContentSectionFive() {
  return (
    <section className="py-12 bg-gray-50 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        <div className="md:w-1/2">
          <h3 className="text-xl font-semibold mb-4 max-w-md">
            Clara meets the highest industry benchmarks—so your data grows safely with you.
          </h3>
          <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-6 py-3 rounded-md font-semibold shadow-md hover:from-purple-700 hover:to-purple-500 transition">
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 flex space-x-6 justify-center md:justify-end">
          <img
            src="/gdpr.svg"
            alt="GDPR"
            className="h-10"
          />
          <img
            src="/bsi.svg"
            alt="BSI"
            className="h-10"
          />
          <img
            src="/ccpa.svg"
            alt="CCPA"
            className="h-10"
          />
        </div>
      </div>
    </section>
  );
}
