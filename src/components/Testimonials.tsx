"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useLocalization } from "../lib/LocalizationProvider";

export default function Testimonials() {
  const { t } = useLocalization();
  const testimonials = t("testimonials.items") as unknown as Array<{
    id: number;
    company: string;
    website: string;
    title: string;
    description: string;
    image: string;
    isActive?: boolean;
  }>;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Get number of visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // lg: 3 cards
      if (window.innerWidth >= 768) return 2; // md: 2 cards
      return 1; // sm: 1 card
    }
    return 3;
  };

  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  // Update visible cards on window resize
  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
      setCurrentIndex(0); // Reset to first slide on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const maxIndex = Math.max(0, testimonials.length - visibleCards);
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCards]);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  return (
    <section className="py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-indigo-900 text-indigo-200 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <div className="w-2 h-2 bg-indigo-400 rounded-full mr-2"></div>
              {t("testimonials.badge")}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 leading-tight">
                {t("testimonials.heading")}
              </h2>
              <p className="text-gray-300 text-lg">
                {t("testimonials.subheading")}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex space-x-2 mt-6 lg:mt-0">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-gray-900 hover:bg-indigo-900 rounded-full flex items-center justify-center transition-colors duration-200 border border-indigo-800"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-5 h-5 text-indigo-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-indigo-900 hover:bg-indigo-800 rounded-full flex items-center justify-center transition-colors duration-200 border border-indigo-800"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-5 h-5 text-indigo-100"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (currentIndex * 100) / visibleCards
                }%)`,
                width: `${(testimonials.length * 100) / visibleCards}%`,
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="px-3"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-black/80 rounded-2xl overflow-hidden border border-indigo-900 hover:shadow-xl transition-shadow duration-300 h-full">
                    {/* Team Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <Image
                        src={testimonial.image}
                        alt={String(testimonial.company)}
                        width={300}
                        height={225}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-indigo-100 mb-1">
                          {testimonial.company}
                        </h3>
                        <p className="text-sm text-indigo-300">
                          {testimonial.website}
                        </p>
                      </div>

                      <h4 className="text-lg font-semibold text-indigo-200 mb-3">
                        {testimonial.title}
                      </h4>

                      <p className="text-indigo-300 mb-6 leading-relaxed">
                        {testimonial.description}
                      </p>

                      <a
                        href="#"
                        className="inline-flex items-center text-indigo-200 font-medium hover:text-indigo-400 transition-colors duration-200 group"
                      >
                        {t("testimonials.readCaseStudy")}
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* ...existing code... */}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? "bg-indigo-400"
                  : "bg-indigo-900 hover:bg-indigo-700"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
