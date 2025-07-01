"use client";

import React, { useState } from "react";

const faqs = [
  {
    question: "How is Clara different from other CRMs",
    answer:
      "Clara doesn’t just store data—it understands it. From summarizing customer interactions to suggesting next steps, Clara is like a co-pilot that helps you move faster with more confidence.",
  },
  {
    question: "Can Clara help my team save time?",
    answer:
      "Yes, Clara automates routine tasks and provides AI-powered insights to help your team focus on what matters most.",
  },
  {
    question: "Is Clara hard to set up?",
    answer:
      "No, Clara is designed for easy integration and quick setup with your existing tools and workflows.",
  },
  {
    question: "What tools does Clara integrate with?",
    answer:
      "Clara integrates with a wide range of tools including CRM systems, email platforms, and scheduling software.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white">
    <div className="py-20 bg-white px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:space-x-16">
        <div className="md:w-1/2">
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="bg-purple-100 text-purple-700 rounded-full px-3 py-1 text-sm font-semibold">
              FAQ
            </div>
          </div>
          <h2 className="text-4xl font-bold mb-2 text-black">Everything You’re Wondering, Answered.</h2>
          <p className="text-gray-800 mb-6">
            Couldn’t Find Something?{" "}
            <a href="#" className="text-purple-700 font-semibold hover:underline">
              Message Us
            </a>
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-300 pb-4">
                <button
                  className="w-full text-left flex justify-between items-center font-semibold text-lg text-black"
                  onClick={() => toggleIndex(index)}
                >
                  {faq.question}
                  <span className="text-2xl font-bold">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-800">{faq.answer}</p>
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
