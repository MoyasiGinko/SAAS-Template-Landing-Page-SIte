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
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Get number of visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1280) return 3; // xl: 3 cards
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
      setCurrentIndex(0);
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
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCards, testimonials.length]);

  const maxIndex = Math.max(0, testimonials.length - visibleCards);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
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
    <section className="py-24 bg-transparent relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 mb-8">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <span className="text-slate-300 font-medium">
              {t("testimonials.badge")}
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <span className="relative">
              {t("testimonials.heading")}
              <div className="absolute -inset-x-4 -inset-y-2 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 blur-2xl rounded-lg -z-10"></div>
            </span>
          </h2>

          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {t("testimonials.subheading")}
          </p>

          {/* Decorative Line */}
          <div className="flex items-center justify-center mt-8">
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            <div className="w-2 h-2 bg-purple-400 rounded-full mx-4"></div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden rounded-3xl">
            <div
              ref={carouselRef}
              className="flex transition-transform duration-700 ease-out"
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
                  className="px-4"
                  style={{ width: `${100 / testimonials.length}%` }}
                  onMouseEnter={() => setHoveredCard(testimonial.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    className={`group relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/30 rounded-3xl overflow-hidden transition-all duration-500 h-full ${
                      hoveredCard === testimonial.id
                        ? "transform shadow-2xl shadow-purple-500/10"
                        : ""
                    }`}
                  >
                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                    {/* Image Section */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10"></div>
                      <Image
                        src={testimonial.image}
                        alt={String(testimonial.company)}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Floating Badge */}
                      <div className="absolute top-6 left-6 z-20">
                        <div className="bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 rounded-2xl px-4 py-2">
                          <div className="text-sm font-bold text-white">
                            {testimonial.company}
                          </div>
                          <div className="text-xs text-slate-400">
                            {testimonial.website}
                          </div>
                        </div>
                      </div>

                      {/* Quote Icon */}
                      <div className="absolute bottom-6 right-6 z-20">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="p-8 relative z-10">
                      <div className="space-y-6">
                        <h4 className="text-xl font-bold text-white leading-tight">
                          {testimonial.title}
                        </h4>

                        <p className="text-slate-300 leading-relaxed text-lg">
                          {testimonial.description}
                        </p>

                        {/* Rating Stars */}
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <button className="group/btn flex items-center space-x-2 text-slate-400 hover:text-white transition-all duration-300">
                          <span className="font-medium">
                            {t("testimonials.readCaseStudy")}
                          </span>
                          <div className="w-6 h-6 rounded-full bg-slate-700 group-hover/btn:bg-purple-500 transition-all duration-300 flex items-center justify-center">
                            <svg
                              className="w-3 h-3 transform group-hover/btn:translate-x-0.5 transition-transform duration-300"
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
                          </div>
                        </button>
                      </div>
                    </div>

                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000 ease-out"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none z-20">
            <button
              onClick={prevTestimonial}
              className="pointer-events-auto w-14 h-14 bg-slate-800/80 backdrop-blur-sm border border-slate-600/30 hover:bg-slate-700/80 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-6 h-6 text-white"
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
              className="pointer-events-auto w-14 h-14 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-purple-500/25"
              aria-label="Next testimonial"
            >
              <svg
                className="w-6 h-6 text-white"
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
    </section>
  );
}
