"use client";

import React from "react";

// Mock localization function for demo
const mockTranslations = {
  "complianceSection.heading1": "Enterprise-grade",
  "complianceSection.heading2": "security & compliance",
  "complianceSection.getStarted": "Start Your Journey",
  "complianceSection.gdpr": "GDPR",
  "complianceSection.iso": "ISO 27001",
  "complianceSection.ccpa": "CCPA",
};

const useLocalization = () => ({
  t: (key) => mockTranslations[key] || key,
});

export default function ComplianceSection() {
  const { t } = useLocalization();

  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <div className="inline-block px-4 py-2 rounded-full bg-slate-800/40 border border-slate-700/40 mb-6">
              <span className="text-sm text-cyan-400 font-medium">
                🔐 Security First
              </span>
            </div>

            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
              {t("complianceSection.heading1")}
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                {t("complianceSection.heading2")}
              </span>
            </h2>

            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              Built with industry-leading security standards to protect your
              data and ensure regulatory compliance across all major frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative z-10">
                  {t("complianceSection.getStarted")}
                </span>
              </button>

              <button className="px-8 py-4 border-2 border-slate-600 text-slate-300 rounded-xl font-semibold hover:border-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Compliance Badges */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-end gap-6">
            {/* GDPR Badge */}
            <div className="group flex flex-col items-center space-y-3 w-28">
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm flex items-center justify-center hover:border-cyan-500/50 transition-all duration-300 group-hover:scale-110 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="relative z-10"
                >
                  <rect
                    x="8"
                    y="18"
                    width="32"
                    height="20"
                    rx="4"
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M16 18V14C16 9.58 19.58 6 24 6C28.42 6 32 9.58 32 14V18"
                    fill="none"
                    stroke="#06B6D4"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <circle cx="24" cy="28" r="3" fill="#06B6D4" />
                </svg>

                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-sm font-bold text-cyan-400 text-center group-hover:text-cyan-300 transition-colors">
                {t("complianceSection.gdpr")}
              </span>
            </div>

            {/* ISO Badge */}
            <div className="group flex flex-col items-center space-y-3 w-28">
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm flex items-center justify-center hover:border-purple-500/50 transition-all duration-300 group-hover:scale-110 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="relative z-10"
                >
                  <rect
                    x="6"
                    y="12"
                    width="36"
                    height="24"
                    rx="6"
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="2.5"
                  />
                  <circle
                    cx="24"
                    cy="24"
                    r="8"
                    fill="none"
                    stroke="#A855F7"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M24 18L26.4 22.8L32 22.8L27.8 26.4L30.2 32L24 28.8L17.8 32L20.2 26.4L16 22.8L21.6 22.8L24 18Z"
                    fill="#A855F7"
                  />
                </svg>

                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-sm font-bold text-purple-400 text-center group-hover:text-purple-300 transition-colors">
                {t("complianceSection.iso")}
              </span>
            </div>

            {/* CCPA Badge */}
            <div className="group flex flex-col items-center space-y-3 w-28">
              <div className="relative w-24 h-24 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm flex items-center justify-center hover:border-emerald-500/50 transition-all duration-300 group-hover:scale-110 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="relative z-10"
                >
                  <rect
                    x="8"
                    y="8"
                    width="32"
                    height="32"
                    rx="16"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="2.5"
                  />
                  <path
                    d="M16 24L22 30L32 18"
                    stroke="#10B981"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>

                <div className="absolute -top-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6L5 9L10 3"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <span className="text-sm font-bold text-emerald-400 text-center group-hover:text-emerald-300 transition-colors">
                {t("complianceSection.ccpa")}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Trust Indicators */}
        <div className="flex items-center justify-center gap-8 mt-12 pt-8 border-t border-slate-800/30">
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span>99.9% Uptime</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
            <span>24/7 Monitoring</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-sm">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>SOC 2 Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
}
