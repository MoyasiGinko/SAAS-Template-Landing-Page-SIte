"use client";

import React, { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    company: "PLEX",
    website: "plex.co",
    title: "Insight on autopilot.",
    description: "Sales and CS now act with clarity—no more digging through activity logs.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop&crop=center",
    isActive: true
  },
  {
    id: 2,
    company: "FARFETCH",
    website: "farfetch.io",
    title: "Context without Chaos.",
    description: "Why farfetch dropped spreadsheets for Clara's unified customer feed.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&crop=center",
    isActive: false
  },
  {
    id: 3,
    company: "max",
    website: "max.ai",
    title: "One-click smarter.",
    description: "We scaled without increasing team size using Clara's predictive nudges.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&crop=center",
    isActive: false
  },  {
    id: 4,
    company: "FARFETCH",
    website: "farfetch.io",
    title: "Context without Chaos.",
    description: "Why farfetch dropped spreadsheets for Clara's unified customer feed.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=250&fit=crop&crop=center",
    isActive: false
  },
  {
    id: 5,
    company: "max",
    website: "max.ai",
    title: "One-click smarter.",
    description: "We scaled without increasing team size using Clara's predictive nudges.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=400&h=250&fit=crop&crop=center",
    isActive: false
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Get number of visible cards based on screen size
  const getVisibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg: 3 cards
      if (window.innerWidth >= 768) return 2;  // md: 2 cards
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

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium flex items-center">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2"></div>
              Testimonials
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <h2 className="text-4xl lg:text-5xl font-normal text-gray-900 mb-4 leading-tight">
                Honest review from best users
              </h2>
              <p className="text-gray-600 text-lg">
                Our users are our best ambassadors, discover why we're the top choice
              </p>
            </div>
            
            {/* Navigation Buttons */}
            <div className="flex space-x-2 mt-6 lg:mt-0">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
                transform: `translateX(-${(currentIndex * 100) / visibleCards}%)`,
                width: `${(testimonials.length * 100) / visibleCards}%`
              }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className="px-3"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                    {/* Team Image */}
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={testimonial.image}
                        alt={`${testimonial.company} team`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 mb-1">
                          {testimonial.company}
                        </h3>
                        <p className="text-sm text-gray-500">{testimonial.website}</p>
                      </div>
                      
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">
                        {testimonial.title}
                      </h4>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {testimonial.description}
                      </p>
                      
                      <a
                        href="#"
                        className="inline-flex items-center text-gray-900 font-medium hover:text-purple-600 transition-colors duration-200 group"
                      >
                        Read case study
                        <svg 
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {/* <button
            onClick={prevTestimonial}
            disabled={currentIndex === 0}
            className={`absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
              currentIndex === 0 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50 hover:shadow-md'
            }`}
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-all duration-200 shadow-sm ${
              currentIndex >= maxIndex 
                ? 'opacity-50 cursor-not-allowed' 
                : 'hover:bg-gray-50 hover:shadow-md'
            }`}
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {Array.from({ length: maxIndex + 1 }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-purple-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
