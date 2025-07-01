"use client";

import React from "react";

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-12 px-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Headline and CTA */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-block border border-purple-200 text-purple-700 rounded-full px-4 py-1 text-xs mb-5 font-semibold bg-white shadow-sm tracking-wide">
            Instant CRM AI Tools
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-black leading-tight">
            Every Customer Insights,
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
              Intelligently Handled
            </span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Give your team the clarity, context, and speed they need to deliver
            extraordinary experiences — at every touchpoint
          </p>
          <button className="bg-gradient-to-r from-purple-600 to-purple-400 text-white px-8 py-3 rounded-full font-semibold shadow-md hover:from-purple-700 hover:to-purple-500 transition text-base">
            Get Started
          </button>
        </div>
        {/* UI Mockup Section */}
        <div className="relative w-full max-w-7xl mt-1 flex flex-col items-center">
          {/* Simple background grid dots SVG */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              {/* Grid dots background */}
              <div
              className="absolute inset-0 w-full h-full invert"
              style={{
                backgroundImage: "url('/grid-dots.svg')",
                backgroundRepeat: "repeat",
                backgroundPosition: "center",
                opacity: 1,
                zIndex: 0,
              }}
              />
              {/* Left fade */}
              <div
              className="absolute left-0 top-0 h-full w-[40%] z-10"
              style={{
                background: "linear-gradient(to right, white 5%, transparent 100%)",
                pointerEvents: "none",
              }}
              />
              {/* Right fade */}
              <div
              className="absolute right-0 top-0 h-full w-[40%] z-10"
              style={{
                background: "linear-gradient(to left, white 5%, transparent 100%)",
                pointerEvents: "none",
              }}
              />
              {/* Top fade */}
              <div
              className="absolute top-0 left-0 w-full h-[40%] z-10"
              style={{
                background: "linear-gradient(to bottom, white 5%, transparent 100%)",
                pointerEvents: "none",
              }}
              />
              {/* Bottom fade */}
              <div
              className="absolute bottom-0 left-0 w-full h-[40%] z-10"
              style={{
                background: "linear-gradient(to top, white 5%, transparent 100%)",
                pointerEvents: "none",
              }}
              />
            </div>
          <div className="relative z-10 w-full flex justify-center">
            <div className="rounded-2xl overflow-hidden bg-transparent max-w-7xl w-full aspect-[16/9] flex items-center justify-center">
              <img
          src="https://user-images.githubusercontent.com/74038190/219923809-b86dc415-a0c2-4a38-bc88-ad6cf06395a8.gif"
          alt="Product demo"
          className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
