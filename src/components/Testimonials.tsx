"use client";

import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    company: "PLEX",
    image: "https://via.placeholder.com/80",
    title: "Insight on autopilot",
    description:
      "Sales and CS now act with clarity—no more digging through activity logs.",
  },
  {
    id: 2,
    name: "Jane Smith",
    company: "FARFETCH",
    image: "https://via.placeholder.com/80",
    title: "Context without Chaos",
    description:
      "Why farfetch dropped spreadsheets for Clara’s unified customer feed.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "MOX",
    image: "https://via.placeholder.com/80",
    title: "One-click smarter",
    description:
      "We scaled without a team size using Clara’s predictive nudges.",
  },
  {
    id: 4,
    name: "User Four",
    company: "Company 4",
    image: "https://via.placeholder.com/80",
    title: "Testimonial Title 4",
    description: "Testimonial description 4.",
  },
  {
    id: 5,
    name: "User Five",
    company: "Company 5",
    image: "https://via.placeholder.com/80",
    title: "Testimonial Title 5",
    description: "Testimonial description 5.",
  },
  {
    id: 6,
    name: "User Six",
    company: "Company 6",
    image: "https://via.placeholder.com/80",
    title: "Testimonial Title 6",
    description: "Testimonial description 6.",
  },
  {
    id: 7,
    name: "User Seven",
    company: "Company 7",
    image: "https://via.placeholder.com/80",
    title: "Testimonial Title 7",
    description: "Testimonial description 7.",
  },
  {
    id: 8,
    name: "User Eight",
    company: "Company 8",
    image: "https://via.placeholder.com/80",
    title: "Testimonial Title 8",
    description: "Testimonial description 8.",
  },
  {
    id: 9,
    name: "User Nine",
    company: "Company 9",
    image: "https://via.placeholder.com/80",
    title: "Testimonial Title 9",
    description: "Testimonial description 9.",
  },
  {
    id: 10,
    name: "User Ten",
    company: "Company 10",
    image: "https://via.placeholder.com/80",
    title: "Testimonial Title 10",
    description: "Testimonial description 10.",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-white">
    <div className="py-20 bg-white px-8 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-8 text-center text-black">Honest review from best users</h2>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        Our users are our best ambassadors, discover why we're the top choice
      </p>
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="min-w-full px-4">
              <div className="bg-gray-100 rounded-lg shadow p-6 mx-auto max-w-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-black">{testimonial.company}</div>
                    <div className="text-sm text-gray-700">{testimonial.title}</div>
                  </div>
                </div>
                <p className="text-gray-700">{testimonial.description}</p>
                <a href="#" className="text-purple-700 font-semibold hover:underline mt-4 inline-block">
                  Read case study &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
        {/* Navigation buttons */}
        <button
          onClick={prevTestimonial}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-purple-700 text-white rounded-full p-2 shadow hover:bg-purple-800 transition"
          aria-label="Previous testimonial"
        >
          {"<"}
        </button>
        <button
          onClick={nextTestimonial}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-purple-700 text-white rounded-full p-2 shadow hover:bg-purple-800 transition"
          aria-label="Next testimonial"
        >
          {">"}
        </button>
      </div>
    </div>
    </section>
  );
}
