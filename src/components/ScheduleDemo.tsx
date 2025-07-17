"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLocalization } from "../lib/LocalizationProvider";

export default function ScheduleDemoPage() {
  const { t } = useLocalization();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    jobTitle: "",
    phone: "",
    companySize: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle demo scheduling logic here
    console.log("Demo scheduled:", formData);
    alert(
      "Thank you! We&apos;ll contact you soon to confirm your demo appointment."
    );
  };

  return (
    <div className="min-h-screen bg-transparent">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="inline-flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-purple-500 rounded-md flex items-center justify-center shadow-sm">
              <span className="font-bold text-lg text-white">C</span>
            </div>
            <span className="font-bold text-2xl text-gray-900 tracking-tight">
              {t("scheduleDemo.logo")}
            </span>
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {t("scheduleDemo.title")}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {t("scheduleDemo.subtitle")}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("scheduleDemo.sessionTitle")}
                  </h3>
                  <p className="text-gray-600">
                    {t("scheduleDemo.sessionDesc")}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("scheduleDemo.dataTitle")}
                  </h3>
                  <p className="text-gray-600">{t("scheduleDemo.dataDesc")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("scheduleDemo.qaTitle")}
                  </h3>
                  <p className="text-gray-600">{t("scheduleDemo.qaDesc")}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t("scheduleDemo.integrationTitle")}
                  </h3>
                  <p className="text-gray-600">
                    {t("scheduleDemo.integrationDesc")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white/70 backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("scheduleDemo.firstNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder={String(t("scheduleDemo.firstNamePlaceholder"))}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("scheduleDemo.lastNameLabel")}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder={String(t("scheduleDemo.lastNamePlaceholder"))}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("scheduleDemo.emailLabel")}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder={String(t("scheduleDemo.emailPlaceholder"))}
                />
              </div>

              {/* Company */}
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("scheduleDemo.companyLabel")}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder={String(t("scheduleDemo.companyPlaceholder"))}
                />
              </div>

              {/* Job Title & Company Size */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("scheduleDemo.jobTitleLabel")}
                  </label>
                  <input
                    type="text"
                    id="jobTitle"
                    name="jobTitle"
                    value={formData.jobTitle}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder={String(t("scheduleDemo.jobTitlePlaceholder"))}
                  />
                </div>
                <div>
                  <label
                    htmlFor="companySize"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("scheduleDemo.companySizeLabel")}
                  </label>
                  <select
                    id="companySize"
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">
                      {t("scheduleDemo.companySizePlaceholder")}
                    </option>
                    <option value="1-10">
                      {t("scheduleDemo.companySize1")}
                    </option>
                    <option value="11-50">
                      {t("scheduleDemo.companySize2")}
                    </option>
                    <option value="51-200">
                      {t("scheduleDemo.companySize3")}
                    </option>
                    <option value="201-1000">
                      {t("scheduleDemo.companySize4")}
                    </option>
                    <option value="1000+">
                      {t("scheduleDemo.companySize5")}
                    </option>
                  </select>
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("scheduleDemo.phoneLabel")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  placeholder={String(t("scheduleDemo.phonePlaceholder"))}
                />
              </div>

              {/* Preferred Date & Time */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="preferredDate"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("scheduleDemo.preferredDateLabel")}
                  </label>
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  />
                </div>
                <div>
                  <label
                    htmlFor="preferredTime"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    {t("scheduleDemo.preferredTimeLabel")}
                  </label>
                  <select
                    id="preferredTime"
                    name="preferredTime"
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                  >
                    <option value="">
                      {t("scheduleDemo.preferredTimePlaceholder")}
                    </option>
                    <option value="9:00 AM">{t("scheduleDemo.time1")}</option>
                    <option value="10:00 AM">{t("scheduleDemo.time2")}</option>
                    <option value="11:00 AM">{t("scheduleDemo.time3")}</option>
                    <option value="2:00 PM">{t("scheduleDemo.time4")}</option>
                    <option value="3:00 PM">{t("scheduleDemo.time5")}</option>
                    <option value="4:00 PM">{t("scheduleDemo.time6")}</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  {t("scheduleDemo.messageLabel")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder={String(t("scheduleDemo.messagePlaceholder"))}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-purple-500 text-white py-3 px-4 rounded-md font-medium shadow-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5"
              >
                {t("scheduleDemo.submit")}
              </button>

              <p className="text-xs text-gray-500 text-center">
                {t("scheduleDemo.terms1")}{" "}
                <a href="#" className="text-purple-600 hover:text-purple-500">
                  {t("scheduleDemo.privacyPolicy")}
                </a>{" "}
                {t("scheduleDemo.terms2")}{" "}
                <a href="#" className="text-purple-600 hover:text-purple-500">
                  {t("scheduleDemo.termsOfService")}
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-purple-600 transition-colors inline-flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            {t("scheduleDemo.backToHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
