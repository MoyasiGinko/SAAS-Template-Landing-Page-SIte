"use client";

import React from "react";
import { useLocalization } from "../lib/LocalizationProvider";

export default function Footer() {
  const { t } = useLocalization();

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-950 to-indigo-950 ">
      {/* Call to Action Section */}
      <section className="bg-transparent relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          {/* Decorative lines and shapes */}
          <div className="absolute top-10 left-1/4 w-32 h-px bg-indigo-400/20 rotate-45"></div>
          <div className="absolute top-20 right-1/3 w-24 h-px bg-indigo-400/20 -rotate-45"></div>
          <div className="absolute bottom-20 left-1/3 w-40 h-px bg-indigo-400/20 rotate-12"></div>

          {/* Decorative circles */}
          <div className="absolute top-16 right-1/4 w-2 h-2 bg-indigo-300/30 rounded-full"></div>
          <div className="absolute bottom-32 left-1/5 w-3 h-3 bg-indigo-400/20 rounded-full"></div>
          <div className="absolute top-32 left-1/2 w-1 h-1 bg-indigo-200/40 rounded-full"></div>

          {/* Main decorative star/cross in top right */}
          <div className="absolute top-8 right-16">
            <div className="relative">
              <div className="w-4 h-px bg-indigo-200/50"></div>
              <div className="w-px h-4 bg-indigo-200/50 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-gray-100 py-20 px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-normal mb-6 leading-tight text-white">
            {String(t("footer.callToAction.heading"))
              .split("\n")
              .map((line: string, idx: number) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
          </h2>
          <p className="mb-10 text-lg text-gray-300">
            {t("footer.callToAction.subheading")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-indigo-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-600 transition-all duration-200 shadow-lg">
              {t("footer.callToAction.getStarted")}
            </button>
            <button className="bg-black/70 backdrop-blur-sm text-indigo-200 px-8 py-3 rounded-lg font-medium hover:bg-indigo-900 transition-all duration-200 border border-indigo-700/50">
              {t("footer.callToAction.scheduleDemo")}
            </button>
          </div>
        </div>

        {/* Bottom padding to accommodate overlapping footer */}
        <div className="h-20"></div>
      </section>

      {/* Footer Section with Glass Effect - Overlapping */}
      <footer className="relative -mt-32 z-20">
        <div className="mx-8 lg:mx-16">
          <div className="bg-black/80 backdrop-blur-xl rounded-3xl border border-indigo-900/40 shadow-2xl overflow-hidden">
            <div className="p-8 lg:p-12">
              <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
                  {/* Logo and tagline */}
                  <div className="lg:w-1/3">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-indigo-700 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-lg">C</span>
                      </div>
                      <span className="text-gray-100 text-2xl font-bold">
                        {t("footer.logo")}
                      </span>
                    </div>
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {String(t("footer.tagline"))
                        .split("\n")
                        .map((line: string, idx: number) => (
                          <React.Fragment key={idx}>
                            {line}
                            <br />
                          </React.Fragment>
                        ))}
                    </p>
                  </div>

                  {/* Navigation links */}
                  <div className="lg:w-2/3">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {/* Features */}
                      <div>
                        <h4 className="font-semibold mb-4 text-gray-100">
                          {t("footer.features")}
                        </h4>
                        <ul className="space-y-3 text-sm">
                          {(t("footer.featuresList") as string[]).map(
                            (item: string, idx: number) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                                >
                                  {item}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Company */}
                      <div>
                        <h4 className="font-semibold mb-4 text-gray-100">
                          {t("footer.company")}
                        </h4>
                        <ul className="space-y-3 text-sm">
                          {(t("footer.companyList") as string[]).map(
                            (item: string, idx: number) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                                >
                                  {item}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Stay in touch */}
                      <div>
                        <h4 className="font-semibold mb-4 text-gray-100">
                          {t("footer.stayInTouch")}
                        </h4>
                        <ul className="space-y-3 text-sm">
                          {(t("footer.stayInTouchList") as string[]).map(
                            (item: string, idx: number) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                                >
                                  {item}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom copyright section */}
                <div className="mt-12 pt-8 border-t border-indigo-900/40 flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="text-gray-500 text-sm">
                    {t("footer.copyright")}
                  </div>
                  <div className="flex gap-6 text-sm">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-indigo-400 transition-colors"
                    >
                      {t("footer.privacyPolicy")}
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-indigo-400 transition-colors"
                    >
                      {t("footer.termsAndCondition")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Extra spacing at bottom */}
        <div className="h-16"></div>
      </footer>
    </div>
  );
}
