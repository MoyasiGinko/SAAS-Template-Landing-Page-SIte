"use client";

import React from "react";
import { useLocalization } from "../lib/LocalizationProvider";

export default function ComplianceSection() {
  const { t } = useLocalization();
  return (
    <section className="py-16 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl lg:text-3xl font-normal text-gray-100 mb-6 leading-relaxed">
              {t("complianceSection.heading1")}
              <br />
              {t("complianceSection.heading2")}
            </h2>
            <button className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5">
              {t("complianceSection.getStarted")}
            </button>
          </div>

          {/* Right Content - Compliance Badges */}
          <div className="lg:w-1/2 flex items-center justify-center lg:justify-end gap-8">
            {/* GDPR Badge */}
            <div className="flex flex-col items-center space-y-1 w-24">
              <div className="w-20 h-20 bg-gray-900 rounded-full border border-indigo-900 shadow-sm flex items-center justify-center mb-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="mb-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="20"
                    cy="20"
                    r="18"
                    stroke="#3B82F6"
                    strokeWidth="3"
                    fill="#EFF6FF"
                  />
                  <rect
                    x="13"
                    y="17"
                    width="14"
                    height="10"
                    rx="3"
                    fill="#3B82F6"
                  />
                  <circle cx="20" cy="22" r="2" fill="#fff" />
                </svg>
              </div>
              <span className="text-xs font-bold text-indigo-400 text-center">
                {t("complianceSection.gdpr")}
              </span>
            </div>

            {/* BSI Badge */}
            <div className="flex flex-col items-center space-y-1 w-24">
              <div className="w-20 h-20 bg-gray-900 rounded-full border border-indigo-900 shadow-sm flex items-center justify-center mb-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-1"
                >
                  <rect
                    x="5"
                    y="8"
                    width="30"
                    height="24"
                    rx="6"
                    fill="#E5E7EB"
                    stroke="#6B7280"
                    strokeWidth="2"
                  />
                  <circle cx="20" cy="20" r="7" fill="#6B7280" />
                </svg>
              </div>
              <span className="text-xs text-gray-300 text-center">
                {t("complianceSection.iso")}
              </span>
            </div>

            {/* CCPA Badge */}
            <div className="flex flex-col items-center space-y-1 w-24">
              <div className="w-20 h-20 bg-gray-900 rounded-full border border-indigo-900 shadow-sm flex items-center justify-center mb-2">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  className="mb-1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="20" cy="20" r="18" fill="#22C55E" />
                  <polyline
                    points="13,21 18,26 27,15"
                    stroke="#fff"
                    strokeWidth="3"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs font-bold text-gray-200 text-center">
                {t("complianceSection.ccpa")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
