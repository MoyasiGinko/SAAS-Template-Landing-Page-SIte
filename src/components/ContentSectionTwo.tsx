"use client";

import React from "react";

export default function ContentSectionTwo() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center md:space-x-16">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h3 className="text-3xl font-semibold mb-4">Automated Schedule</h3>
          <p className="text-gray-700 mb-6 text-lg">
            Streamline Your Daily Planning with Smart, Automated Scheduling Tools.
          </p>
          <a href="#" className="text-black font-semibold hover:underline">
            Read more &rarr;
          </a>
        </div>
        <div className="md:w-1/2">
          <img
            src="https://blogimage.vantagecircle.com/content/images/2020/08/teamwork-and-team-building.png"
            alt="Automated Schedule"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
