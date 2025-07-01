"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block border border-purple-300 text-purple-700 rounded-full px-5 py-1 text-sm mb-4 shadow-sm">
            Instant CRM AI Tools
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4">
            Every Customer Insights, <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Intelligently Handled
            </span>
          </h1>
          <p className="text-gray-700 mb-8">
            Give your team the clarity, context, and speed they need to deliver
            extraordinary experiences — at every touchpoint
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-3 rounded-md font-semibold shadow-md hover:from-purple-700 hover:to-purple-500 transition">
            Get Started
          </button>
        </div>

        {/* UI mockup section */}
        <div className="mt-16 flex justify-center relative">
          <div className="absolute inset-0 bg-[url('/grid-dots.svg')] bg-repeat bg-center opacity-10 pointer-events-none"></div>
          <div className="relative w-full max-w-5xl h-[320px]">
            {/* Mockup cards */}
            <div className="absolute top-6 left-6 bg-white rounded-lg shadow-lg p-5 w-52">
              <div className="flex items-center text-xs text-gray-400 mb-1 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2v-5a2 2 0 00-2-2H5a2 2 0 00-2 2v5a2 2 0 002 2z"
                  />
                </svg>
                <span>Schedule</span>
              </div>
              <div className="font-semibold text-sm">Shortcut Demo</div>
              <button className="mt-2 bg-purple-600 text-white text-xs rounded-md px-3 py-1 shadow-md hover:bg-purple-700 transition">
                meet/sdk-###-###
              </button>
            </div>
            <div className="absolute top-6 right-6 bg-white rounded-lg shadow-lg p-5 w-52">
              <div className="flex items-center text-xs text-gray-400 mb-1 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-6h4m-4 4h4m-4-8h4m-4 0V4m0 4H7m10 8v-4m-4 4v-4"
                  />
                </svg>
                <span>Sales Outreach</span>
              </div>
              <div className="font-semibold text-sm">Step 2 Phone Call Attempt</div>
              <div className="mt-2 text-purple-600 text-xs rounded-md px-3 py-1 shadow-md bg-purple-100 inline-block">
                AI Assistant
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-white rounded-lg shadow-lg p-5 w-52">
              <div className="flex items-center text-xs text-gray-400 mb-1 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rounded-full"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>AI Assistant</span>
              </div>
              <div className="font-semibold text-sm">Lucas Graham</div>
              <div className="text-xs text-gray-400 mt-1">Compose Email</div>
            </div>
            <div className="absolute bottom-6 right-6 bg-white rounded-lg shadow-lg p-5 w-52">
              <div className="flex items-center text-xs text-gray-400 mb-1 space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2m-4-6h4m-4 4h4m-4-8h4m-4 0V4m0 4H7m10 8v-4m-4 4v-4"
                  />
                </svg>
                <span>Activity</span>
              </div>
              <div className="font-semibold text-sm">Andrew</div>
              <div className="text-xs text-gray-400 mt-1">Reaching out lucas</div>
              <div className="font-semibold text-sm mt-2">Billy</div>
              <div className="text-xs text-gray-400">Scheduling meeting</div>
              <div className="text-xs text-gray-400">Today, 09.20am</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
