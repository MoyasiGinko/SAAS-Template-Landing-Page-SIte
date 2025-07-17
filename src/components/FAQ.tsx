"use client";

import React, { useState } from "react";
import { useLocalization } from "../lib/LocalizationProvider";

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
          <div className="md:w-1/2">
            <div className="inline-flex items-center space-x-2 mb-4">
              <div className="bg-indigo-900 text-purple-300 rounded-full px-3 py-1 text-sm font-semibold">
                {t("faq.title")}
              </div>
            </div>
            <h2 className="text-4xl font-bold mb-2 text-white">
              {t("faq.heading")}
            </h2>
            <p className="text-gray-300 mb-6">
              {t("faq.message")}{" "}
              <a
                href="#"
                className="text-purple-300 font-semibold hover:underline"
              >
                {t("faq.messageLink")}
              </a>
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="space-y-4">
              {Array.isArray(faqs) &&
                faqs.map((faq, index) => (
                  <div key={index} className="border-b border-indigo-900 pb-4">
                    <button
                      className="w-full text-left flex justify-between items-center font-semibold text-lg text-white"
                      onClick={() => toggleIndex(index)}
                    >
                      {faq.question}
                      <span className="text-2xl font-bold">
                        {openIndex === index ? "−" : "+"}
                      </span>
                    </button>
                    {openIndex === index && (
                      <p className="mt-2 text-gray-300">{faq.answer}</p>
                    )}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
