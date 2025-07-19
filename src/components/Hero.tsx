"use client";

import React from "react";
import Image from "next/image";
import { useLocalization } from "../lib/LocalizationProvider";

export default function Hero() {
  const { t } = useLocalization();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-transparent overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-transparent">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-indigo-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
              <span className="text-slate-300 text-sm font-medium">
                {t("hero.badge")}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                {(() => {
                  const headline = t("hero.headline");
                  let lines: string[] = [];
                  if (typeof headline === "string") {
                    lines = headline.split("\n");
                  } else if (Array.isArray(headline)) {
                    lines = headline;
                  }
                  return lines.map((line: string, idx: number) => (
                    <div key={idx} className="relative">
                      <span className="relative z-10">{line}</span>
                      {idx === 0 && (
                        <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl rounded-lg"></div>
                      )}
                    </div>
                  ));
                })()}
              </h1>

              {/* Animated underline */}
              <div className="w-24 h-1 bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 rounded-full"></div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-400 leading-relaxed max-w-lg">
              {t("hero.description")}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25">
                <span className="relative z-10">{t("hero.getStarted")}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="px-8 py-4 border border-slate-700 rounded-2xl font-semibold text-slate-300 hover:border-slate-600 hover:text-white transition-all duration-300 backdrop-blur-sm bg-slate-800/20">
                Learn More
              </button>
            </div>

            {/* Stats or Features */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">10K+</div>
                <div className="text-sm text-slate-400">Users</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                <div className="text-sm text-slate-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">24/7</div>
                <div className="text-sm text-slate-400">Support</div>
              </div>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative lg:order-last">
            {/* Decorative elements */}
            <div className="absolute -inset-4">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl"></div>
              <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-gradient-to-tl from-indigo-500/10 to-transparent rounded-3xl"></div>
            </div>

            {/* Main visual container */}
            <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-3xl p-8 shadow-2xl">
              {/* Floating cards/elements */}
              <div className="relative space-y-6">
                {/* Top card */}
                <div className="bg-gradient-to-r from-purple-500/10 to-indigo-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 transform rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-xl flex items-center justify-center">
                      <div className="w-5 h-5 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <div className="w-20 h-3 bg-slate-600 rounded-full mb-2"></div>
                      <div className="w-16 h-2 bg-slate-700 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="w-full h-2 bg-slate-700 rounded-full"></div>
                    <div className="w-4/5 h-2 bg-slate-700 rounded-full"></div>
                    <div className="w-3/5 h-2 bg-slate-700 rounded-full"></div>
                  </div>
                </div>

                {/* Center main image */}
                <div className="relative bg-slate-900/50 backdrop-blur-sm border border-slate-600/30 rounded-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="aspect-[16/10] flex items-center justify-center p-4">
                    <Image
                      src="https://i.pinimg.com/originals/bb/37/5c/bb375cdd655184ca2715ac5059e73651.gif"
                      alt={String(t("hero.imageAlt"))}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover rounded-xl"
                      unoptimized
                    />
                  </div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Bottom card */}
                <div className="bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 backdrop-blur-sm border border-indigo-500/20 rounded-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-cyan-400 rounded-full"></div>
                      <div>
                        <div className="w-16 h-2 bg-slate-600 rounded-full mb-1"></div>
                        <div className="w-12 h-1.5 bg-slate-700 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 bg-slate-700/30 rounded-lg"></div>
                    <div className="h-16 bg-slate-700/30 rounded-lg"></div>
                    <div className="h-16 bg-slate-700/30 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-400 rounded-full animate-bounce"></div>
              <div
                className="absolute top-1/2 -left-2 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"
                style={{ animationDelay: "1s" }}
              ></div>
              <div
                className="absolute -bottom-2 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
    </section>
  );
}
