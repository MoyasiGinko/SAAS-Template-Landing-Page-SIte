"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLocalization } from "../lib/LocalizationProvider";

export default function Header() {
  const { t, locale, setLocale } = useLocalization();
  const [activeTab, setActiveTab] = useState(t("header.navigation.home"));
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { name: t("header.navigation.home"), href: "#home" },
    { name: t("header.navigation.features"), href: "#features" },
    { name: t("header.navigation.solutions"), href: "#solutions" },
    { name: t("header.navigation.resources"), href: "#resources" },
    { name: t("header.navigation.pricing"), href: "#pricing" },
  ];

  const handleTabClick = (tabName: string, href: string) => {
    setActiveTab(tabName);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleLocale = () => {
    setLocale(locale === "en" ? "ar" : "en");
  };

  return (
    <header className="w-full bg-transparent backdrop-blur-sm border-b border-indigo-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="w-10 h-10" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 bg-gray-900/80 rounded-lg px-2 py-1 border border-indigo-900 shadow-md">
          {navigationItems.map((item) => (
            <button
              key={String(item.name)}
              onClick={() =>
                handleTabClick(String(item.name), String(item.href))
              }
              className={`px-5 py-2.5 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === item.name
                  ? "bg-gradient-to-r from-indigo-800 to-purple-800 text-white shadow border border-indigo-700"
                  : "text-indigo-200 hover:text-white hover:bg-indigo-900/60"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-3">
          {/* Language Switcher */}
          <button
            type="button"
            onClick={toggleLocale}
            className={`ml-4 relative w-14 h-8 rounded-full flex items-center transition-colors duration-300 focus:outline-none border-2 ${
              locale === "en"
                ? "bg-gray-900 border-purple-700/70"
                : "bg-gray-900 border-blue-700/70"
            }`}
            aria-label="Toggle Language"
          >
            <span
              className={`absolute top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full shadow flex items-center justify-center text-xs font-bold transition-transform duration-300 ${
                locale === "en"
                  ? "left-1 bg-indigo-950 text-purple-300"
                  : "right-1 bg-indigo-950 text-blue-300"
              }`}
              style={{
                boxShadow:
                  locale === "en"
                    ? "0 2px 8px 0 rgba(139,92,246,0.25)"
                    : "0 2px 8px 0 rgba(59,130,246,0.25)",
              }}
            >
              {locale === "en" ? "EN" : "AR"}
            </span>
          </button>

          <Link
            href="/login"
            className="hidden lg:inline-block text-indigo-200 font-medium px-5 py-2.5 rounded-md hover:bg-indigo-900/60 hover:text-white transition-all duration-200"
          >
            {t("header.actions.login")}
          </Link>
          <Link
            href="/schedule-demo"
            className="bg-gradient-to-r from-indigo-800 to-purple-800 text-white px-6 py-2.5 rounded-md font-medium shadow-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5"
          >
            {t("header.actions.scheduleDemo")}
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-indigo-900/60 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            title={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className={`w-6 h-6 text-indigo-200 transition-transform duration-200 ${
                isMobileMenuOpen ? "rotate-45" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-950 border-t border-indigo-900 shadow-lg">
          <div className="px-6 py-4 space-y-2">
            {navigationItems.map((item) => (
              <button
                key={String(item.name)}
                onClick={() => {
                  handleTabClick(String(item.name), String(item.href));
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === item.name
                    ? "bg-gradient-to-r from-indigo-800 to-purple-800 text-white border border-indigo-700"
                    : "text-indigo-200 hover:text-white hover:bg-indigo-900/60"
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-indigo-900 mt-4">
              <Link
                href="/login"
                className="block w-full text-left px-4 py-3 rounded-md text-sm font-medium text-indigo-200 hover:text-white hover:bg-indigo-900/60 transition-all duration-200"
              >
                {t("header.actions.login")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
