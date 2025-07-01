"use client";

import React from "react";

export default function ContentSectionOne() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:space-x-16 px-8">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            The AI Workforce <br /> humans can lean on.
          </h2>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            Never quits, and always improves. Scale to meet any demand.
          </p>
          <a href="#" className="text-black font-semibold hover:underline">
            More about clara &rarr;
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://www.isixsigma.com/wp-content/uploads/2018/11/shutterstock_1687550977-scaled.jpg"
            alt="AI Workforce"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
