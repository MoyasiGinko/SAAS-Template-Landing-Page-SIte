"use client";

import React from "react";

const contentCards = [
  {
    id: 1,
    title: "Automated Schedule",
    description: "Streamline Your Daily Planning with Smart, Automated Scheduling Tools.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    layout: "left"
  },
  {
    id: 2,
    title: "Every record, enriched",
    description: "From fundraising and location to revenue, employee count, LinkedIn profiles, and more.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    layout: "right"
  },
  {
    id: 3,
    title: "Powered by Data Connected",
    description: "See all the relevant data about your customer as you interact with them.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    layout: "left"
  }
];

export default function ContentSections() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-16">
          {contentCards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              <div className={`flex flex-col ${card.layout === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center`}>
                {/* Text Content */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <h3 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-900">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 mb-8 text-lg leading-relaxed">
                    {card.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-black font-semibold hover:text-purple-600 transition-colors duration-200 group"
                  >
                    Read more 
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      &rarr;
                    </span>
                  </a>
                </div>
                
                {/* Image Content */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="relative">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-xl"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
