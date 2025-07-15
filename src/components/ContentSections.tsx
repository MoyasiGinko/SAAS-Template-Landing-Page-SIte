"use client";

import React from "react";
import Image from "next/image";
import { useLocalization } from "../lib/LocalizationProvider";

const contentCards = [
  {
    id: 1,
    titleKey: "contentSections.card1.title",
    descriptionKey: "contentSections.card1.description",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
    layout: "left",
  },
  {
    id: 2,
    titleKey: "contentSections.card2.title",
    descriptionKey: "contentSections.card2.description",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
    layout: "right",
  },
  {
    id: 3,
    titleKey: "contentSections.card3.title",
    descriptionKey: "contentSections.card3.description",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
    layout: "left",
  },
];

export default function ContentSections() {
  const { t } = useLocalization();
  return (
    <section className="py-20 bg-gradient-to-b from-black via-gray-950 to-indigo-950">
      <div className="max-w-7xl mx-auto px-8">
        <div className="space-y-16">
          {contentCards.map((card) => (
            <div
              key={card.id}
              className="bg-gray-900 rounded-2xl border border-indigo-900 shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`flex flex-col ${
                  card.layout === "right"
                    ? "lg:flex-row-reverse"
                    : "lg:flex-row"
                } items-center`}
              >
                {/* Text Content */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <h3 className="text-3xl lg:text-4xl font-semibold mb-6 text-gray-100">
                    {t(card.titleKey)}
                  </h3>
                  <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                    {t(card.descriptionKey)}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-300 font-semibold hover:text-purple-400 transition-colors duration-200 group"
                  >
                    {t("contentSections.readMore")}
                    <span className="ml-2 group-hover:translate-x-1 transition-transform duration-200">
                      &rarr;
                    </span>
                  </a>
                </div>

                {/* Image Content */}
                <div className="lg:w-1/2 p-8 lg:p-12">
                  <div className="relative">
                    <Image
                      src={card.image}
                      alt={String(t(card.titleKey))}
                      width={400}
                      height={320}
                      className="w-full h-64 lg:h-80 object-cover rounded-xl shadow-xl border-2 border-indigo-900"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 to-transparent rounded-xl"></div>
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
