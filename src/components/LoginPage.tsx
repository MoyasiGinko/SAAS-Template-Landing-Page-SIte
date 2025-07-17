"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useLocalization } from "../lib/LocalizationProvider";

export default function LoginPage() {
  const { t } = useLocalization();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Login attempt:", formData);
    alert("Login functionality would be implemented here!");
  };

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-900 to-indigo-700 rounded-md flex items-center justify-center shadow-lg">
              <span className="font-bold text-xl text-white">C</span>
            </div>
            <span className="font-bold text-3xl text-indigo-100 tracking-tight">
              {t("login.logo")}
            </span>
          </Link>
        </div>

        {/* Login Form */}
        <div className="bg-black/80 backdrop-blur-xl rounded-2xl border border-indigo-900 shadow-2xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-indigo-100 mb-2">
              {t("login.welcomeBack")}
            </h1>
            <p className="text-indigo-300">{t("login.signInToAccount")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-indigo-200 mb-2"
              >
                {t("login.emailLabel")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-indigo-800 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-black/60 text-indigo-100 placeholder-indigo-400"
                placeholder={String(t("login.emailPlaceholder"))}
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-indigo-200 mb-2"
              >
                {t("login.passwordLabel")}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-indigo-800 rounded-md focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 bg-black/60 text-indigo-100 placeholder-indigo-400"
                placeholder={String(t("login.passwordPlaceholder"))}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-indigo-500 focus:ring-indigo-400 border-indigo-800 rounded bg-black"
                />
                <label
                  htmlFor="rememberMe"
                  className="ml-2 block text-sm text-indigo-200"
                >
                  {t("login.rememberMe")}
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                {t("login.forgotPassword")}
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-700 to-indigo-500 text-white py-3 px-4 rounded-md font-medium shadow-lg hover:from-indigo-800 hover:to-indigo-700 transition-all duration-200 hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {t("login.signIn")}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 flex items-center">
            <div className="flex-1 border-t border-indigo-900"></div>
            <span className="px-4 text-sm text-indigo-400">
              {t("login.orContinueWith")}
            </span>
            <div className="flex-1 border-t border-indigo-900"></div>
          </div>

          {/* Social Login */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-3 border border-indigo-800 rounded-md shadow-sm text-sm font-medium text-indigo-200 bg-black/60 hover:bg-indigo-900 transition-all duration-200">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              {t("login.google")}
            </button>
            <button className="flex items-center justify-center px-4 py-3 border border-indigo-800 rounded-md shadow-sm text-sm font-medium text-indigo-200 bg-black/60 hover:bg-indigo-900 transition-all duration-200">
              <svg
                className="w-5 h-5 mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.083.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
              </svg>
              {t("login.github")}
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-8 text-center">
            <p className="text-sm text-indigo-300">
              {t("login.noAccount")}{" "}
              <a
                href="#"
                className="text-indigo-400 hover:text-indigo-200 font-medium transition-colors"
              >
                {t("login.signUpForFree")}
              </a>
            </p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-indigo-400 hover:text-indigo-200 transition-colors inline-flex items-center"
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
            {t("login.backToHome")}
          </Link>
        </div>
      </div>
    </div>
  );
}
