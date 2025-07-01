"use client";

import React from "react";

export default function ContentSectionThree() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center md:space-x-16">
        <div className="md:w-1/2 order-1 md:order-1">
          <img
            src="https://www.collierbroderick.ie/wp-content/uploads/2017/06/team-effectiveness.png"
            alt="Every record enriched"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 order-2 md:order-2">
          <h3 className="text-3xl font-semibold mb-4">Every record, enriched</h3>
          <p className="text-gray-700 mb-6 text-lg">
            From fundraising and location to revenue, employee count, LinkedIn profiles, and more.
          </p>
          <a href="#" className="text-black font-semibold hover:underline">
            Read more &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
