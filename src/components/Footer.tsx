"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  Star,
  Zap,
  Mail,
  Phone,
  MapPin,
  Twitter,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";

// Mock localization data
const mockTranslations: { [key: string]: string | string[] } = {
  "footer.callToAction.heading": "Ready to transform\nyour business?",
  "footer.callToAction.subheading":
    "Join thousands of companies already using our platform to streamline their operations and boost productivity.",
  "footer.callToAction.getStarted": "Get Started Free",
  "footer.callToAction.scheduleDemo": "Schedule Demo",
  "footer.logo": "ConvertKit",
  "footer.tagline":
    "Empowering creators and businesses\nwith cutting-edge tools and solutions\nfor the digital age.",
  "footer.features": "Features",
  "footer.featuresList": [
    "Analytics Dashboard",
    "Team Collaboration",
    "API Integration",
    "Custom Workflows",
    "Advanced Security",
  ],
  "footer.company": "Company",
  "footer.companyList": [
    "About Us",
    "Careers",
    "Press Kit",
    "Partner Program",
    "Enterprise",
  ],
  "footer.stayInTouch": "Stay in Touch",
  "footer.stayInTouchList": [
    "help@convertkit.com",
    "+1 (555) 123-4567",
    "San Francisco, CA",
    "Newsletter",
    "Community",
  ],
  "footer.copyright": "© 2024 ConvertKit. All rights reserved.",
  "footer.privacyPolicy": "Privacy Policy",
  "footer.termsAndCondition": "Terms & Conditions",
};

const useLocalization = () => ({
  t: <T extends string | string[]>(key: string) => {
    const value = mockTranslations[key];
    return value as T;
  },
});

export default function Footer() {
  const { t } = useLocalization();

  return (
    <div className="relative bg-transparent">
      {/* Call to Action Section */}
      <section className="bg-transparent relative overflow-hidden py-32">
        {/* Enhanced Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          {/* Animated gradient orbs */}
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-br from-violet-600/10 to-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-br from-fuchsia-600/10 to-pink-600/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-indigo-600/10 to-blue-600/10 rounded-full blur-3xl animate-pulse animation-delay-4000"></div>
        </div>

        {/* Floating geometric elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-1/4 transform rotate-45">
            <div className="w-8 h-8 border border-violet-400/20 rounded-lg animate-bounce animation-delay-1000"></div>
          </div>
          <div className="absolute top-32 right-1/3 transform -rotate-12">
            <div className="w-6 h-6 bg-gradient-to-br from-fuchsia-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
          </div>
          <div className="absolute bottom-32 left-1/3 transform rotate-12">
            <Sparkles
              className="w-8 h-8 text-violet-400/30 animate-spin"
              style={{ animationDuration: "8s" }}
            />
          </div>
          <div className="absolute top-24 right-1/4">
            <Star className="w-6 h-6 text-indigo-400/30 animate-pulse" />
          </div>
        </div>

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          {/* Enhanced heading */}
          <div className="mb-8">
            <div className="inline-flex items-center gap-2 bg-violet-600/10 border border-violet-400/20 text-violet-400 rounded-full px-6 py-3 backdrop-blur-sm mb-8">
              <Zap className="w-5 h-5" />
              <span className="font-semibold tracking-wide">
                Get Started Today
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
              <span className="text-transparent bg-gradient-to-r from-white via-violet-200 to-fuchsia-200 bg-clip-text">
                {String(t("footer.callToAction.heading"))
                  .split("\n")
                  .map((line: string, idx: number) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx === 0 && <br />}
                    </React.Fragment>
                  ))}
              </span>
            </h2>
          </div>

          <p className="mb-12 text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            {t("footer.callToAction.subheading")}
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl blur-lg opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <button className="relative bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white px-10 py-5 rounded-2xl font-bold text-lg border border-violet-400/30 hover:from-violet-500 hover:to-fuchsia-500 transform hover:scale-105 transition-all duration-300 shadow-2xl">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5" />
                  {t("footer.callToAction.getStarted")}
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            </div>

            <button className="bg-gray-800/50 backdrop-blur-sm text-gray-200 px-10 py-5 rounded-2xl font-bold text-lg border border-gray-600/40 hover:bg-gray-700/60 hover:text-white hover:border-gray-500/60 transition-all duration-300">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                {t("footer.callToAction.scheduleDemo")}
              </div>
            </button>
          </div>
        </div>

        {/* Bottom padding for footer overlap */}
        <div className="h-32"></div>
      </section>

      {/* Enhanced Footer Section */}
      <footer className="relative -mt-40 z-20">
        <div className="mx-4 lg:mx-8">
          {/* Main footer card */}
          <div className="relative">
            {/* Glowing border effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600/20 via-purple-600/20 to-fuchsia-600/20 rounded-3xl blur-xl"></div>
            <div className="absolute inset-[1px] bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-slate-900/95 rounded-3xl backdrop-blur-xl border border-gray-700/40"></div>

            <div className="relative p-8 lg:p-16">
              <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
                  {/* Enhanced Logo and tagline */}
                  <div className="lg:w-2/5">
                    <div className="flex items-center mb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-2xl blur-md opacity-50"></div>
                        <div className="relative w-14 h-14 bg-gradient-to-br from-violet-600 to-fuchsia-600 rounded-2xl flex items-center justify-center shadow-2xl border border-violet-400/30 mr-4">
                          <span className="text-white font-black text-2xl">
                            C
                          </span>
                        </div>
                      </div>
                      <span className="text-white text-3xl font-black">
                        {t("footer.logo")}
                      </span>
                    </div>
                    <p className="text-gray-300 text-lg leading-relaxed mb-8">
                      {String(t("footer.tagline"))
                        .split("\n")
                        .map((line: string, idx: number) => (
                          <React.Fragment key={idx}>
                            {line}
                            {idx < 2 && <br />}
                          </React.Fragment>
                        ))}
                    </p>

                    {/* Social media icons */}
                    <div className="flex gap-4">
                      {[
                        { icon: Twitter, color: "hover:text-blue-400" },
                        { icon: Github, color: "hover:text-gray-300" },
                        { icon: Linkedin, color: "hover:text-blue-500" },
                        { icon: Instagram, color: "hover:text-pink-400" },
                      ].map(({ icon: Icon, color }, idx) => (
                        <a
                          key={idx}
                          href="#"
                          className={`w-12 h-12 bg-slate-800/50 border border-gray-700/40 rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 hover:bg-gray-700/60 hover:border-gray-600/60 hover:scale-110`}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Navigation links */}
                  <div className="lg:w-3/5">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                      {/* Features */}
                      <div>
                        <h4 className="font-bold mb-6 text-white text-lg flex items-center gap-2">
                          <Zap className="w-5 h-5 text-violet-400" />
                          {t("footer.features")}
                        </h4>
                        <ul className="space-y-4">
                          {(t("footer.featuresList") as string[]).map(
                            (item: string, idx: number) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className="text-gray-400 hover:text-violet-400 transition-colors duration-200 flex items-center gap-2 group"
                                >
                                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-violet-400 transition-colors"></div>
                                  {item}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Company */}
                      <div>
                        <h4 className="font-bold mb-6 text-white text-lg flex items-center gap-2">
                          <Star className="w-5 h-5 text-fuchsia-400" />
                          {t("footer.company")}
                        </h4>
                        <ul className="space-y-4">
                          {(t("footer.companyList") as string[]).map(
                            (item: string, idx: number) => (
                              <li key={idx}>
                                <a
                                  href="#"
                                  className="text-gray-400 hover:text-fuchsia-400 transition-colors duration-200 flex items-center gap-2 group"
                                >
                                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-fuchsia-400 transition-colors"></div>
                                  {item}
                                </a>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      {/* Stay in touch */}
                      <div>
                        <h4 className="font-bold mb-6 text-white text-lg flex items-center gap-2">
                          <Mail className="w-5 h-5 text-purple-400" />
                          {t("footer.stayInTouch")}
                        </h4>
                        <ul className="space-y-4">
                          {(t("footer.stayInTouchList") as string[]).map(
                            (item: string, idx: number) => {
                              const getIcon = () => {
                                if (item.includes("@"))
                                  return <Mail className="w-4 h-4" />;
                                if (item.includes("+"))
                                  return <Phone className="w-4 h-4" />;
                                if (
                                  item.includes("CA") ||
                                  item.includes("Francisco")
                                )
                                  return <MapPin className="w-4 h-4" />;
                                return (
                                  <div className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-purple-400 transition-colors"></div>
                                );
                              };

                              return (
                                <li key={idx}>
                                  <a
                                    href="#"
                                    className="text-gray-400 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                                  >
                                    <div className="text-gray-500 group-hover:text-purple-400 transition-colors">
                                      {getIcon()}
                                    </div>
                                    {item}
                                  </a>
                                </li>
                              );
                            }
                          )}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Bottom copyright section */}
                <div className="mt-16 pt-8 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
                  <div className="text-gray-500 font-medium">
                    {t("footer.copyright")}
                  </div>
                  <div className="flex gap-8">
                    <a
                      href="#"
                      className="text-gray-500 hover:text-violet-400 transition-colors duration-200 font-medium"
                    >
                      {t("footer.privacyPolicy")}
                    </a>
                    <a
                      href="#"
                      className="text-gray-500 hover:text-violet-400 transition-colors duration-200 font-medium"
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
        <div className="h-20"></div>
      </footer>
    </div>
  );
}
