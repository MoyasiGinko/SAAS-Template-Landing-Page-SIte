"use client";

import React from "react";

export default function Logos() {
  const logos = [
    { name: "CH", color: "from-purple-400 to-pink-400" },
    { name: "PLEX", color: "from-indigo-400 to-purple-400" },
    { name: "TradingView", color: "from-blue-400 to-indigo-400" },
    { name: "AV", color: "from-cyan-400 to-blue-400" },
    { name: "MOBLY", color: "from-emerald-400 to-cyan-400" },
    { name: "MOX", color: "from-violet-400 to-purple-400" },
  ];

  return (
    <section className="py-16 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-slate-400 text-sm uppercase tracking-wider font-medium mb-2">
            Trusted by industry leaders
          </p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent mx-auto"></div>
        </div>

        {/* Logos Grid */}
        <div className="relative">
          {/* Background glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-800/10 to-transparent blur-3xl"></div>

          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {logos.map((logo, index) => (
              <div
                key={logo.name}
                className="group flex items-center justify-center p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${logo.color} opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 scale-150`}
                  ></div>

                  {/* Logo container */}
                  <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-4 group-hover:border-slate-600/50 transition-all duration-300 group-hover:scale-105">
                    {/* Logo text */}
                    <div
                      className={`text-2xl font-black bg-gradient-to-r ${logo.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}
                    >
                      {logo.name}
                    </div>

                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out"></div>
                  </div>

                  {/* Floating dots */}
                  <div
                    className={`absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-r ${logo.color} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse`}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alternative: Infinite scroll version */}
        <div className="mt-16 relative">
          <div className="text-center mb-8">
            <p className="text-slate-500 text-xs uppercase tracking-wider">
              And many more...
            </p>
          </div>

          {/* Scrolling logos */}
          <div className="relative overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-900/50 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-900/50 to-transparent z-10"></div>

            <div className="flex space-x-12 animate-scroll">
              {[...logos, ...logos].map((logo, index) => (
                <div
                  key={`scroll-${index}`}
                  className="flex-shrink-0 flex items-center justify-center py-4"
                >
                  <div
                    className={`text-lg font-bold bg-gradient-to-r ${logo.color} bg-clip-text text-transparent opacity-40 hover:opacity-80 transition-opacity duration-300 whitespace-nowrap`}
                  >
                    {logo.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              500K+
            </div>
            <div className="text-slate-400 text-sm">Active Users</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              99.9%
            </div>
            <div className="text-slate-400 text-sm">Uptime SLA</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              150+
            </div>
            <div className="text-slate-400 text-sm">Countries</div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
