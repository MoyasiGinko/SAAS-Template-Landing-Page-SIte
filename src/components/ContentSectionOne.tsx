"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ChevronRight,
  ArrowUpRight,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export default function ContentSectionOne() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Mock translation function - replace with your actual translation
  const t = (key: string) => {
    const translations: { [key: string]: string } = {
      "contentSectionOne.heading1": "Revolutionize Your",
      "contentSectionOne.heading2": "Workflow Today",
      "contentSectionOne.heading3": "",
      "contentSectionOne.description":
        "Streamline operations, boost productivity, and unlock new possibilities with our intelligent platform designed for modern teams.",
      "contentSectionOne.moreAboutClara": "Learn More",
      "contentSectionOne.imageAlt": "Team collaboration workspace",
    };
    return translations[key] || key;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={containerRef}
          className="relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/50 rounded-2xl overflow-hidden"
        >
          {/* Subtle background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%),
                               radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
              }}
            />
          </div>

          {/* Animated accent elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-2xl animate-pulse delay-1000" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 p-8 lg:p-12">
            {/* Left Content */}
            <div
              className={`space-y-6 flex flex-col justify-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              {/* Small badge */}
              <div className="inline-flex items-center w-fit space-x-2 bg-slate-800/50 border border-slate-700/50 rounded-full px-3 py-1.5">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-slate-300 text-xs font-medium uppercase tracking-wide">
                  New Features Available
                </span>
              </div>

              {/* Main heading */}
              <div className="space-y-2">
                <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {t("contentSectionOne.heading1")}
                  <br />
                  <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {t("contentSectionOne.heading2")}
                  </span>
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-400 text-lg leading-relaxed">
                {t("contentSectionOne.description")}
              </p>

              {/* Feature highlights */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-purple-400" />
                  </div>
                  <span className="text-sm">Lightning-fast performance</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <Target className="w-3 h-3 text-cyan-400" />
                  </div>
                  <span className="text-sm">
                    Precision-built for your needs
                  </span>
                </div>
                <div className="flex items-center space-x-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                    <Sparkles className="w-3 h-3 text-green-400" />
                  </div>
                  <span className="text-sm">Intelligent automation</span>
                </div>
              </div>

              {/* CTA */}
              <div className="pt-4">
                <button className="group inline-flex items-center space-x-2 bg-white text-slate-900 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-slate-100 hover:shadow-lg hover:shadow-white/10">
                  <span>{t("contentSectionOne.moreAboutClara")}</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Visual Content */}
            <div
              className={`relative transition-all duration-700 delay-200 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              <div className="relative h-full min-h-[400px] bg-slate-800/30 rounded-xl border border-slate-700/30 overflow-hidden">
                {/* Mock interface */}
                <div className="p-6 space-y-6">
                  {/* Header bar */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <div className="text-xs text-slate-500">workspace.app</div>
                  </div>

                  {/* Content area */}
                  <div className="space-y-4">
                    {/* Navigation */}
                    <div className="flex space-x-2">
                      {["Dashboard", "Analytics", "Settings"].map((tab, i) => (
                        <div
                          key={tab}
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                            i === 0
                              ? "bg-purple-500/20 text-purple-300 border border-purple-500/30"
                              : "text-slate-500 hover:text-slate-400"
                          }`}
                        >
                          {tab}
                        </div>
                      ))}
                    </div>

                    {/* Cards */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-slate-400">Revenue</div>
                          <ArrowUpRight className="w-4 h-4 text-green-400" />
                        </div>
                        <div className="text-xl font-bold text-white">
                          $24.5K
                        </div>
                        <div className="text-xs text-green-400">+12.5%</div>
                      </div>

                      <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/30">
                        <div className="flex items-center justify-between mb-2">
                          <div className="text-sm text-slate-400">Users</div>
                          <ArrowUpRight className="w-4 h-4 text-cyan-400" />
                        </div>
                        <div className="text-xl font-bold text-white">
                          1,247
                        </div>
                        <div className="text-xs text-cyan-400">+8.2%</div>
                      </div>
                    </div>

                    {/* Chart area */}
                    <div className="bg-slate-900/30 rounded-lg p-4 h-32">
                      <div className="flex items-end justify-between h-full space-x-1">
                        {[...Array(12)].map((_, i) => (
                          <div
                            key={i}
                            className="bg-gradient-to-t from-purple-500/50 to-purple-400/50 rounded-sm flex-1"
                            style={{
                              height: `${30 + Math.random() * 60}%`,
                              animation: `slideUp 1s ease-out ${i * 0.1}s both`,
                            }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Activity list */}
                    <div className="space-y-2">
                      {[
                        {
                          user: "Sarah Chen",
                          action: "completed task",
                          time: "2m ago",
                        },
                        {
                          user: "Alex Rivera",
                          action: "updated project",
                          time: "5m ago",
                        },
                        {
                          user: "Maya Patel",
                          action: "left comment",
                          time: "8m ago",
                        },
                      ].map((activity, i) => (
                        <div
                          key={i}
                          className="flex items-center space-x-3 text-xs opacity-80"
                          style={{
                            animation: `fadeInUp 0.6s ease-out ${
                              0.8 + i * 0.2
                            }s both`,
                          }}
                        >
                          <div className="w-6 h-6 bg-gradient-to-br from-purple-500/30 to-cyan-500/30 rounded-full" />
                          <div className="flex-1">
                            <span className="text-slate-300">
                              {activity.user}
                            </span>
                            <span className="text-slate-500 ml-1">
                              {activity.action}
                            </span>
                          </div>
                          <span className="text-slate-500">
                            {activity.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            height: 0%;
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 0.8;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
