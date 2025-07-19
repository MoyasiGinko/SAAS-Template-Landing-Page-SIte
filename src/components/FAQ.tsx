"use client";

import React, { useState } from "react";
import { ChevronDown, MessageCircleQuestion, ExternalLink } from "lucide-react";

// Mock localization function for demo
const mockTranslations = {
  "faq.title": "FAQ",
  "faq.heading": "Frequently Asked Questions",
  "faq.message": "Can't find what you're looking for?",
  "faq.messageLink": "Contact our support team",
  "faq.questions": [
    {
      question: "How secure is your platform?",
      answer:
        "We employ enterprise-grade security measures including end-to-end encryption, regular security audits, and compliance with major frameworks like GDPR, CCPA, and ISO 27001.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "Our platform integrates with over 100+ popular tools including Slack, Microsoft Teams, Google Workspace, Salesforce, and many more. We also provide robust APIs for custom integrations.",
    },
    {
      question: "How does your pricing work?",
      answer:
        "We offer flexible pricing tiers based on your team size and feature requirements. All plans include core features with premium tiers offering advanced analytics, priority support, and enhanced security features.",
    },
    {
      question: "Do you offer customer support?",
      answer:
        "Yes! We provide 24/7 customer support via chat, email, and phone. Premium customers also get dedicated account managers and priority response times.",
    },
    {
      question: "Can I migrate my existing data?",
      answer:
        "Absolutely. We provide comprehensive migration tools and dedicated migration specialists to help you seamlessly transfer your data from other platforms with zero downtime.",
    },
  ],
};

const useLocalization = () => ({
  t: (key) => mockTranslations[key] || key,
});

export default function FAQ() {
  const { t } = useLocalization();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = t("faq.questions") as unknown as {
    question: string;
    answer: string;
  }[];

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-transparent">
      <div className="py-20 bg-transparent px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-16">
          {/* Left Content */}
          <div className="md:w-1/2 mb-12 md:mb-0">
            <div className="inline-flex items-center space-x-2 mb-6">
              <div className="flex items-center gap-2 bg-slate-800/50 border border-slate-700/50 text-cyan-400 rounded-full px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <MessageCircleQuestion className="w-4 h-4" />
                {t("faq.title")}
              </div>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white leading-tight">
              {t("faq.heading")}
            </h2>

            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
              {t("faq.message")}{" "}
              <a
                href="#"
                className="inline-flex items-center gap-1 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group"
              >
                {t("faq.messageLink")}
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </p>

            {/* Additional Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-sm">
                  Average response time: 2 minutes
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 rounded-xl bg-slate-800/30 border border-slate-700/30">
                <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                <span className="text-slate-300 text-sm">
                  24/7 support available
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - FAQ Items */}
          <div className="md:w-1/2">
            <div className="space-y-4">
              {Array.isArray(faqs) &&
                faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="group rounded-xl bg-slate-800/20 border border-slate-700/40 backdrop-blur-sm hover:border-slate-600/60 transition-all duration-300 overflow-hidden"
                  >
                    <button
                      className="w-full text-left flex justify-between items-center p-6 font-semibold text-lg text-white hover:bg-slate-800/30 transition-all duration-200"
                      onClick={() => toggleIndex(index)}
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-400 transition-all duration-300 flex-shrink-0 ${
                          openIndex === index
                            ? "rotate-180 text-cyan-400"
                            : "group-hover:text-slate-300"
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        openIndex === index
                          ? "max-h-96 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="px-6 pb-6">
                        <div className="w-full h-px bg-gradient-to-r from-slate-700/50 via-slate-600/50 to-slate-700/50 mb-4"></div>
                        <p className="text-slate-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-slate-800/40 to-slate-800/20 border border-slate-700/40 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <MessageCircleQuestion className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Still have questions?
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    Our team is here to help you get started and make the most
                    of our platform.
                  </p>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-sm font-medium rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 shadow-lg shadow-cyan-500/20">
                    Get in Touch
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
